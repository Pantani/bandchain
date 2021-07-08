package consuming

import (
	"github.com/bandprotocol/bandchain-packet/obi"
	"github.com/bandprotocol/bandchain-packet/packet"
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	channeltypes "github.com/cosmos/cosmos-sdk/x/ibc/core/04-channel/types"
	"github.com/tendermint/bandchain/x/consuming/types"
)

func (am AppModule) handleOracleAcknowledgement(ctx sdk.Context, ack channeltypes.Acknowledgement) (sdk.Context, types.RequestID) {
	var requestID types.RequestID
	switch resp := ack.Response.(type) {
	case *channeltypes.Acknowledgement_Result:
		var oracleAck packet.OracleRequestPacketAcknowledgement
		err := types.ModuleCdc.UnmarshalJSON(resp.Result, &oracleAck)
		if err == nil {
			requestID = types.RequestID(oracleAck.RequestID)
			am.keeper.SetLastOracleID(ctx, requestID)
			ctx.EventManager().EmitEvent(
				sdk.NewEvent(
					types.EventTypeOraclePacket,
					sdk.NewAttribute(types.AttributeKeyAckSuccess, string(resp.Result)),
				),
			)
		}
	}
	return ctx, requestID
}

func (am AppModule) handleOraclePacket(ctx sdk.Context, modulePacket channeltypes.Packet) (channeltypes.Acknowledgement, types.OracleResult, error) {
	var ack channeltypes.Acknowledgement
	var result types.OracleResult
	var modulePacketData packet.OracleResponsePacketData
	if err := types.ModuleCdc.UnmarshalJSON(modulePacket.GetData(), &modulePacketData); err != nil {
		ack = channeltypes.NewErrorAcknowledgement(err.Error())
		return ack, result, nil
	}

	if err := obi.Decode(modulePacketData.Result, &result); err != nil {
		ack = channeltypes.NewErrorAcknowledgement(err.Error())
		return ack, result, sdkerrors.Wrapf(sdkerrors.ErrUnknownRequest, "cannot decode oracle result: %s", err.Error())
	}
	ack = channeltypes.NewResultAcknowledgement(
		types.ModuleCdc.MustMarshalJSON(
			packet.NewOracleRequestPacketAcknowledgement(modulePacketData.RequestID),
		),
	)
	am.keeper.SetResult(ctx, types.RequestID(modulePacketData.RequestID), result)
	return ack, result, nil
}