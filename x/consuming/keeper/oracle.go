package keeper

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	gogotypes "github.com/gogo/protobuf/types"
	"github.com/tendermint/bandchain/x/consuming/types"
)

func (k Keeper) SetResult(ctx sdk.Context, requestID types.RequestID, result types.OracleResult) {
	store := ctx.KVStore(k.storeKey)
	store.Set(types.ResultStoreKey(requestID), k.cdc.MustMarshalBinaryBare(&result))
}

func (k Keeper) GetResult(ctx sdk.Context, id types.RequestID) (types.OracleResult, error) {
	bz := ctx.KVStore(k.storeKey).Get(types.ResultStoreKey(id))
	if bz == nil {
		return types.OracleResult{}, sdkerrors.Wrapf(types.ErrSample,
			"GetResult: Result for request ID %d is not available.", id,
		)
	}
	var result types.OracleResult
	k.cdc.MustUnmarshalBinaryBare(bz, &result)
	return result, nil
}

func (k Keeper) GetLastOracleID(ctx sdk.Context) int64 {
	bz := ctx.KVStore(k.storeKey).Get(types.LastOracleIDKey)
	intV := gogotypes.Int64Value{}
	k.cdc.MustUnmarshalBinaryLengthPrefixed(bz, &intV)
	return intV.GetValue()
}

func (k Keeper) SetLastOracleID(ctx sdk.Context, id types.RequestID) {
	store := ctx.KVStore(k.storeKey)
	store.Set(types.LastOracleIDKey, k.cdc.MustMarshalBinaryLengthPrefixed(&gogotypes.Int64Value{Value: int64(id)}))
}
