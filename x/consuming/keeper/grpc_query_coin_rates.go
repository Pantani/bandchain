package keeper

import (
	"context"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/tendermint/bandchain/x/consuming/types"
)

// CoinRatesResult returns the CoinRates result by RequestId
func (k Keeper) CoinRatesResult(c context.Context, req *types.QueryCoinRatesRequest) (*types.QueryCoinRatesResponse, error) {
	ctx := sdk.UnwrapSDKContext(c)
	result, err := k.GetCoinRatesResult(ctx, types.OracleRequestID(req.RequestId))
	if err != nil {
		return nil, err
	}
	return &types.QueryCoinRatesResponse{Result: &result}, nil
}

// LastCoinRatesId returns the last CoinRates request Id
func (k Keeper) LastCoinRatesId(c context.Context, req *types.QueryLastCoinRatesIdRequest) (*types.QueryLastCoinRatesIdResponse, error) {
	ctx := sdk.UnwrapSDKContext(c)
	id := k.GetLastCoinRatesID(ctx)
	return &types.QueryLastCoinRatesIdResponse{RequestId: id}, nil
}
