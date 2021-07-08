import { Writer, Reader } from 'protobufjs/minimal';
export declare const protobufPackage = "tendermint.bandchain.consuming";
export interface CallData {
    symbols: string[];
    multiplier: number;
}
export interface OracleResult {
    rates: number[];
}
export declare const CallData: {
    encode(message: CallData, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): CallData;
    fromJSON(object: any): CallData;
    toJSON(message: CallData): unknown;
    fromPartial(object: DeepPartial<CallData>): CallData;
};
export declare const OracleResult: {
    encode(message: OracleResult, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): OracleResult;
    fromJSON(object: any): OracleResult;
    toJSON(message: OracleResult): unknown;
    fromPartial(object: DeepPartial<OracleResult>): OracleResult;
};
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
