package keeper

import (
	"context"
	"time"

	"github.com/bandprotocol/bandchain-packet/obi"
	"github.com/bandprotocol/bandchain-packet/packet"
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	clienttypes "github.com/cosmos/cosmos-sdk/x/ibc/core/02-client/types"
	channeltypes "github.com/cosmos/cosmos-sdk/x/ibc/core/04-channel/types"
	host "github.com/cosmos/cosmos-sdk/x/ibc/core/24-host"
	"github.com/tendermint/bandchain/x/consuming/types"
)

// GoldPriceData creates the GoldPrice packet
// data with obi encoded and send it to the channel
func (k msgServer) GoldPriceData(goCtx context.Context, msg *types.MsgGoldPriceData) (*types.MsgGoldPriceDataResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	sourcePort := types.PortID
	sourceChannelEnd, found := k.channelKeeper.GetChannel(ctx, sourcePort, msg.SourceChannel)
	if !found {
		return nil, sdkerrors.Wrapf(
			sdkerrors.ErrUnknownRequest,
			"unknown channel %s port %s",
			msg.SourceChannel,
			sourcePort,
		)
	}
	destinationPort := sourceChannelEnd.GetCounterparty().GetPortID()
	destinationChannel := sourceChannelEnd.GetCounterparty().GetChannelID()

	// get the next sequence
	sequence, found := k.channelKeeper.GetNextSequenceSend(ctx, sourcePort, msg.SourceChannel)
	if !found {
		return nil, sdkerrors.Wrapf(
			channeltypes.ErrSequenceSendNotFound,
			"source port: %s, source channel: %s", sourcePort, msg.SourceChannel)
	}

	channelCap, ok := k.scopedKeeper.GetCapability(ctx, host.ChannelCapabilityPath(sourcePort, msg.SourceChannel))
	if !ok {
		return nil, sdkerrors.Wrap(channeltypes.ErrChannelCapabilityNotFound,
			"module does not own channel capability")
	}

	encodedCalldata := obi.MustEncode(*msg.Calldata)
	packetData := packet.NewOracleRequestPacketData(
		types.ModuleName,
		msg.OracleScriptID,
		encodedCalldata,
		msg.AskCount,
		msg.MinCount,
		msg.FeeLimit,
		msg.RequestKey,
		msg.PrepareGas,
		msg.ExecuteGas,
	)

	err := k.channelKeeper.SendPacket(ctx, channelCap, channeltypes.NewPacket(
		packetData.GetBytes(),
		sequence,
		sourcePort,
		msg.SourceChannel,
		destinationPort,
		destinationChannel,
		clienttypes.NewHeight(0, 0),
		uint64(ctx.BlockTime().UnixNano()+int64(10*time.Minute)), // Arbitrary timestamp timeout for now
	))
	if err != nil {
		return nil, err
	}

	return &types.MsgGoldPriceDataResponse{}, nil
}
