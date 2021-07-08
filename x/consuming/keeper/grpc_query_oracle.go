package keeper

import (
	"context"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/tendermint/bandchain/x/consuming/types"
)

func (k Keeper) OracleResult(c context.Context, req *types.QueryOracleRequest) (*types.QueryOracleResponse, error) {
	ctx := sdk.UnwrapSDKContext(c)
	result, err := k.GetResult(ctx, types.RequestID(req.RequestId))
	if err != nil {
		return nil, err
	}
	return &types.QueryOracleResponse{Result: &result}, nil
}

func (k Keeper) LastOracleId(c context.Context, req *types.QueryLastOracleIdRequest) (*types.QueryLastOracleIdResponse, error) {
	ctx := sdk.UnwrapSDKContext(c)
	id := k.GetLastOracleID(ctx)
	return &types.QueryLastOracleIdResponse{RequestId: id}, nil
}