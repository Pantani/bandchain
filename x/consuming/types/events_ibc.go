package types

// IBC events
const (
	EventTypeTimeout = "timeout"
	// this line is used by starport scaffolding # ibc/packet/event
	EventTypeSellOrderPacket = "sellOrder_packet"

	EventTypeCreatePairPacket = "createPair_packet"

	EventTypeOraclePacket = "oracle_packet"

	AttributeKeyAckSuccess = "success"
	AttributeKeyAck        = "acknowledgement"
	AttributeKeyAckError   = "error"
)
