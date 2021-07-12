package consuming

import (
	"github.com/bandprotocol/bandchain-packet/obi"
	"github.com/bandprotocol/bandchain-packet/packet"
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	channeltypes "github.com/cosmos/cosmos-sdk/x/ibc/core/04-channel/types"
	"github.com/tendermint/bandchain/x/consuming/types"
)

func (am AppModule) handleOraclePacket(
	ctx sdk.Context,
	modulePacket channeltypes.Packet,
) (channeltypes.Acknowledgement, error) {
	var ack channeltypes.Acknowledgement
	var modulePacketData packet.OracleResponsePacketData
	if err := types.ModuleCdc.UnmarshalJSON(modulePacket.GetData(), &modulePacketData); err != nil {
		return ack, nil
	}

	// this line is used by starport scaffolding # oracle/module/recv
	var goldPriceResult types.GoldPriceResult
	if err := obi.Decode(modulePacketData.Result, &goldPriceResult); err == nil {
		am.keeper.SetGoldPriceResult(ctx, types.OracleRequestID(modulePacketData.RequestID), goldPriceResult)
		ack = channeltypes.NewResultAcknowledgement(
			types.ModuleCdc.MustMarshalJSON(
				packet.NewOracleRequestPacketAcknowledgement(modulePacketData.RequestID),
			),
		)

		// TODO: GoldPrice oracle data reception logic
	}

	var coinRatesResult types.CoinRatesResult
	if err := obi.Decode(modulePacketData.Result, &coinRatesResult); err == nil {
		am.keeper.SetCoinRatesResult(ctx, types.OracleRequestID(modulePacketData.RequestID), coinRatesResult)
		ack = channeltypes.NewResultAcknowledgement(
			types.ModuleCdc.MustMarshalJSON(
				packet.NewOracleRequestPacketAcknowledgement(modulePacketData.RequestID),
			),
		)

		// TODO: CoinRates oracle data reception logic
	}

	var err error
	if (ack == channeltypes.Acknowledgement{}) {
		err = sdkerrors.Wrapf(sdkerrors.ErrUnknownRequest,
			"cannot decode oracle result: %v", modulePacketData.Result)
		ack = channeltypes.NewErrorAcknowledgement(err.Error())
	}
	return ack, err
}

func (am AppModule) handleOracleAcknowledgement(
	ctx sdk.Context,
	ack channeltypes.Acknowledgement,
	modulePacket channeltypes.Packet,
) *sdk.Result {
	switch resp := ack.Response.(type) {
	case *channeltypes.Acknowledgement_Result:
		var oracleAck packet.OracleRequestPacketAcknowledgement
		err := types.ModuleCdc.UnmarshalJSON(resp.Result, &oracleAck)
		if err != nil {
			return nil
		}

		var data packet.OracleRequestPacketData
		if err = types.ModuleCdc.UnmarshalJSON(modulePacket.GetData(), &data); err != nil {
			return nil
		}
		requestID := types.OracleRequestID(oracleAck.RequestID)

		// this line is used by starport scaffolding # oracle/module/ack
		var goldPriceData types.GoldPriceCallData
		if err = obi.Decode(data.GetCalldata(), &goldPriceData); err == nil {
			am.keeper.SetLastGoldPriceID(ctx, requestID)
			return &sdk.Result{}
		}

		var coinRatesData types.CoinRatesCallData
		if err = obi.Decode(data.GetCalldata(), &coinRatesData); err == nil {
			am.keeper.SetLastCoinRatesID(ctx, requestID)
			return &sdk.Result{}
		}

	}
	return nil
}
