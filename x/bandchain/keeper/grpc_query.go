package keeper

import (
	"github.com/tendermint/bandchain/x/bandchain/types"
)

var _ types.QueryServer = Keeper{}
