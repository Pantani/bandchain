import { Writer, Reader } from 'protobufjs/minimal';
export declare const protobufPackage = "tendermint.bandchain.consuming";
export interface ConsumingPacketData {
    noData: NoData | undefined;
    /** this line is used by starport scaffolding # ibc/packet/proto/field */
    sellOrderPacket: SellOrderPacketData | undefined;
    /** this line is used by starport scaffolding # ibc/packet/proto/field/number */
    createPairPacket: CreatePairPacketData | undefined;
}
export interface NoData {
}
/**
 * this line is used by starport scaffolding # ibc/packet/proto/message
 * SellOrderPacketData defines a struct for the packet payload
 */
export interface SellOrderPacketData {
    amountDenom: string;
    amount: number;
    priceDenom: string;
    price: number;
}
/** SellOrderPacketAck defines a struct for the packet acknowledgment */
export interface SellOrderPacketAck {
    remainingAmount: number;
    gain: number;
}
/** CreatePairPacketData defines a struct for the packet payload */
export interface CreatePairPacketData {
    sourceDenom: string;
    targetDenom: string;
}
/** CreatePairPacketAck defines a struct for the packet acknowledgment */
export interface CreatePairPacketAck {
}
export declare const ConsumingPacketData: {
    encode(message: ConsumingPacketData, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): ConsumingPacketData;
    fromJSON(object: any): ConsumingPacketData;
    toJSON(message: ConsumingPacketData): unknown;
    fromPartial(object: DeepPartial<ConsumingPacketData>): ConsumingPacketData;
};
export declare const NoData: {
    encode(_: NoData, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): NoData;
    fromJSON(_: any): NoData;
    toJSON(_: NoData): unknown;
    fromPartial(_: DeepPartial<NoData>): NoData;
};
export declare const SellOrderPacketData: {
    encode(message: SellOrderPacketData, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): SellOrderPacketData;
    fromJSON(object: any): SellOrderPacketData;
    toJSON(message: SellOrderPacketData): unknown;
    fromPartial(object: DeepPartial<SellOrderPacketData>): SellOrderPacketData;
};
export declare const SellOrderPacketAck: {
    encode(message: SellOrderPacketAck, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): SellOrderPacketAck;
    fromJSON(object: any): SellOrderPacketAck;
    toJSON(message: SellOrderPacketAck): unknown;
    fromPartial(object: DeepPartial<SellOrderPacketAck>): SellOrderPacketAck;
};
export declare const CreatePairPacketData: {
    encode(message: CreatePairPacketData, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): CreatePairPacketData;
    fromJSON(object: any): CreatePairPacketData;
    toJSON(message: CreatePairPacketData): unknown;
    fromPartial(object: DeepPartial<CreatePairPacketData>): CreatePairPacketData;
};
export declare const CreatePairPacketAck: {
    encode(_: CreatePairPacketAck, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): CreatePairPacketAck;
    fromJSON(_: any): CreatePairPacketAck;
    toJSON(_: CreatePairPacketAck): unknown;
    fromPartial(_: DeepPartial<CreatePairPacketAck>): CreatePairPacketAck;
};
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};