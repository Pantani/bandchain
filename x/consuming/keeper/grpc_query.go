package keeper

import (
	"github.com/tendermint/bandchain/x/consuming/types"
)

var _ types.QueryServer = Keeper{}
