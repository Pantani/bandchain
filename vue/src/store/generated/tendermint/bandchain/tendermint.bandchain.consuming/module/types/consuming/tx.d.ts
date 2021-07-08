import { Reader, Writer } from 'protobufjs/minimal';
import { CallData } from '../consuming/oracle';
import { Coin } from '../cosmos/base/v1beta1/coin';
export declare const protobufPackage = "tendermint.bandchain.consuming";
/** this line is used by starport scaffolding # proto/tx/message */
export interface MsgSendSellOrder {
    sender: string;
    port: string;
    channelID: string;
    timeoutTimestamp: number;
    amountDenom: string;
    amount: number;
    priceDenom: string;
    price: number;
}
export interface MsgSendSellOrderResponse {
}
export interface MsgSendCreatePair {
    sender: string;
    port: string;
    channelID: string;
    timeoutTimestamp: number;
    sourceDenom: string;
    targetDenom: string;
}
export interface MsgSendCreatePairResponse {
}
export interface MsgOracleData {
    creator: string;
    oracleScriptId: number;
    sourceChannel: string;
    calldata: CallData | undefined;
    askCount: number;
    minCount: number;
    feeLimit: Coin[];
    requestKey: string;
    prepareGas: number;
    executeGas: number;
}
export interface MsgOracleDataResponse {
}
export declare const MsgSendSellOrder: {
    encode(message: MsgSendSellOrder, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgSendSellOrder;
    fromJSON(object: any): MsgSendSellOrder;
    toJSON(message: MsgSendSellOrder): unknown;
    fromPartial(object: DeepPartial<MsgSendSellOrder>): MsgSendSellOrder;
};
export declare const MsgSendSellOrderResponse: {
    encode(_: MsgSendSellOrderResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgSendSellOrderResponse;
    fromJSON(_: any): MsgSendSellOrderResponse;
    toJSON(_: MsgSendSellOrderResponse): unknown;
    fromPartial(_: DeepPartial<MsgSendSellOrderResponse>): MsgSendSellOrderResponse;
};
export declare const MsgSendCreatePair: {
    encode(message: MsgSendCreatePair, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgSendCreatePair;
    fromJSON(object: any): MsgSendCreatePair;
    toJSON(message: MsgSendCreatePair): unknown;
    fromPartial(object: DeepPartial<MsgSendCreatePair>): MsgSendCreatePair;
};
export declare const MsgSendCreatePairResponse: {
    encode(_: MsgSendCreatePairResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgSendCreatePairResponse;
    fromJSON(_: any): MsgSendCreatePairResponse;
    toJSON(_: MsgSendCreatePairResponse): unknown;
    fromPartial(_: DeepPartial<MsgSendCreatePairResponse>): MsgSendCreatePairResponse;
};
export declare const MsgOracleData: {
    encode(message: MsgOracleData, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgOracleData;
    fromJSON(object: any): MsgOracleData;
    toJSON(message: MsgOracleData): unknown;
    fromPartial(object: DeepPartial<MsgOracleData>): MsgOracleData;
};
export declare const MsgOracleDataResponse: {
    encode(_: MsgOracleDataResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgOracleDataResponse;
    fromJSON(_: any): MsgOracleDataResponse;
    toJSON(_: MsgOracleDataResponse): unknown;
    fromPartial(_: DeepPartial<MsgOracleDataResponse>): MsgOracleDataResponse;
};
/** Msg defines the Msg service. */
export interface Msg {
    /** this line is used by starport scaffolding # proto/tx/rpc */
    SendSellOrder(request: MsgSendSellOrder): Promise<MsgSendSellOrderResponse>;
    SendCreatePair(request: MsgSendCreatePair): Promise<MsgSendCreatePairResponse>;
    OracleData(request: MsgOracleData): Promise<MsgOracleDataResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    SendSellOrder(request: MsgSendSellOrder): Promise<MsgSendSellOrderResponse>;
    SendCreatePair(request: MsgSendCreatePair): Promise<MsgSendCreatePairResponse>;
    OracleData(request: MsgOracleData): Promise<MsgOracleDataResponse>;
}
interface Rpc {
    request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
