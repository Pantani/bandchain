/* eslint-disable */
import { Reader, util, configure, Writer } from 'protobufjs/minimal';
import * as Long from 'long';
import { CallData } from '../consuming/oracle';
import { Coin } from '../cosmos/base/v1beta1/coin';
export const protobufPackage = 'tendermint.bandchain.consuming';
const baseMsgSendSellOrder = { sender: '', port: '', channelID: '', timeoutTimestamp: 0, amountDenom: '', amount: 0, priceDenom: '', price: 0 };
export const MsgSendSellOrder = {
    encode(message, writer = Writer.create()) {
        if (message.sender !== '') {
            writer.uint32(10).string(message.sender);
        }
        if (message.port !== '') {
            writer.uint32(18).string(message.port);
        }
        if (message.channelID !== '') {
            writer.uint32(26).string(message.channelID);
        }
        if (message.timeoutTimestamp !== 0) {
            writer.uint32(32).uint64(message.timeoutTimestamp);
        }
        if (message.amountDenom !== '') {
            writer.uint32(42).string(message.amountDenom);
        }
        if (message.amount !== 0) {
            writer.uint32(48).int32(message.amount);
        }
        if (message.priceDenom !== '') {
            writer.uint32(58).string(message.priceDenom);
        }
        if (message.price !== 0) {
            writer.uint32(64).int32(message.price);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgSendSellOrder };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.sender = reader.string();
                    break;
                case 2:
                    message.port = reader.string();
                    break;
                case 3:
                    message.channelID = reader.string();
                    break;
                case 4:
                    message.timeoutTimestamp = longToNumber(reader.uint64());
                    break;
                case 5:
                    message.amountDenom = reader.string();
                    break;
                case 6:
                    message.amount = reader.int32();
                    break;
                case 7:
                    message.priceDenom = reader.string();
                    break;
                case 8:
                    message.price = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseMsgSendSellOrder };
        if (object.sender !== undefined && object.sender !== null) {
            message.sender = String(object.sender);
        }
        else {
            message.sender = '';
        }
        if (object.port !== undefined && object.port !== null) {
            message.port = String(object.port);
        }
        else {
            message.port = '';
        }
        if (object.channelID !== undefined && object.channelID !== null) {
            message.channelID = String(object.channelID);
        }
        else {
            message.channelID = '';
        }
        if (object.timeoutTimestamp !== undefined && object.timeoutTimestamp !== null) {
            message.timeoutTimestamp = Number(object.timeoutTimestamp);
        }
        else {
            message.timeoutTimestamp = 0;
        }
        if (object.amountDenom !== undefined && object.amountDenom !== null) {
            message.amountDenom = String(object.amountDenom);
        }
        else {
            message.amountDenom = '';
        }
        if (object.amount !== undefined && object.amount !== null) {
            message.amount = Number(object.amount);
        }
        else {
            message.amount = 0;
        }
        if (object.priceDenom !== undefined && object.priceDenom !== null) {
            message.priceDenom = String(object.priceDenom);
        }
        else {
            message.priceDenom = '';
        }
        if (object.price !== undefined && object.price !== null) {
            message.price = Number(object.price);
        }
        else {
            message.price = 0;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.sender !== undefined && (obj.sender = message.sender);
        message.port !== undefined && (obj.port = message.port);
        message.channelID !== undefined && (obj.channelID = message.channelID);
        message.timeoutTimestamp !== undefined && (obj.timeoutTimestamp = message.timeoutTimestamp);
        message.amountDenom !== undefined && (obj.amountDenom = message.amountDenom);
        message.amount !== undefined && (obj.amount = message.amount);
        message.priceDenom !== undefined && (obj.priceDenom = message.priceDenom);
        message.price !== undefined && (obj.price = message.price);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgSendSellOrder };
        if (object.sender !== undefined && object.sender !== null) {
            message.sender = object.sender;
        }
        else {
            message.sender = '';
        }
        if (object.port !== undefined && object.port !== null) {
            message.port = object.port;
        }
        else {
            message.port = '';
        }
        if (object.channelID !== undefined && object.channelID !== null) {
            message.channelID = object.channelID;
        }
        else {
            message.channelID = '';
        }
        if (object.timeoutTimestamp !== undefined && object.timeoutTimestamp !== null) {
            message.timeoutTimestamp = object.timeoutTimestamp;
        }
        else {
            message.timeoutTimestamp = 0;
        }
        if (object.amountDenom !== undefined && object.amountDenom !== null) {
            message.amountDenom = object.amountDenom;
        }
        else {
            message.amountDenom = '';
        }
        if (object.amount !== undefined && object.amount !== null) {
            message.amount = object.amount;
        }
        else {
            message.amount = 0;
        }
        if (object.priceDenom !== undefined && object.priceDenom !== null) {
            message.priceDenom = object.priceDenom;
        }
        else {
            message.priceDenom = '';
        }
        if (object.price !== undefined && object.price !== null) {
            message.price = object.price;
        }
        else {
            message.price = 0;
        }
        return message;
    }
};
const baseMsgSendSellOrderResponse = {};
export const MsgSendSellOrderResponse = {
    encode(_, writer = Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgSendSellOrderResponse };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(_) {
        const message = { ...baseMsgSendSellOrderResponse };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = { ...baseMsgSendSellOrderResponse };
        return message;
    }
};
const baseMsgSendCreatePair = { sender: '', port: '', channelID: '', timeoutTimestamp: 0, sourceDenom: '', targetDenom: '' };
export const MsgSendCreatePair = {
    encode(message, writer = Writer.create()) {
        if (message.sender !== '') {
            writer.uint32(10).string(message.sender);
        }
        if (message.port !== '') {
            writer.uint32(18).string(message.port);
        }
        if (message.channelID !== '') {
            writer.uint32(26).string(message.channelID);
        }
        if (message.timeoutTimestamp !== 0) {
            writer.uint32(32).uint64(message.timeoutTimestamp);
        }
        if (message.sourceDenom !== '') {
            writer.uint32(42).string(message.sourceDenom);
        }
        if (message.targetDenom !== '') {
            writer.uint32(50).string(message.targetDenom);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgSendCreatePair };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.sender = reader.string();
                    break;
                case 2:
                    message.port = reader.string();
                    break;
                case 3:
                    message.channelID = reader.string();
                    break;
                case 4:
                    message.timeoutTimestamp = longToNumber(reader.uint64());
                    break;
                case 5:
                    message.sourceDenom = reader.string();
                    break;
                case 6:
                    message.targetDenom = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseMsgSendCreatePair };
        if (object.sender !== undefined && object.sender !== null) {
            message.sender = String(object.sender);
        }
        else {
            message.sender = '';
        }
        if (object.port !== undefined && object.port !== null) {
            message.port = String(object.port);
        }
        else {
            message.port = '';
        }
        if (object.channelID !== undefined && object.channelID !== null) {
            message.channelID = String(object.channelID);
        }
        else {
            message.channelID = '';
        }
        if (object.timeoutTimestamp !== undefined && object.timeoutTimestamp !== null) {
            message.timeoutTimestamp = Number(object.timeoutTimestamp);
        }
        else {
            message.timeoutTimestamp = 0;
        }
        if (object.sourceDenom !== undefined && object.sourceDenom !== null) {
            message.sourceDenom = String(object.sourceDenom);
        }
        else {
            message.sourceDenom = '';
        }
        if (object.targetDenom !== undefined && object.targetDenom !== null) {
            message.targetDenom = String(object.targetDenom);
        }
        else {
            message.targetDenom = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.sender !== undefined && (obj.sender = message.sender);
        message.port !== undefined && (obj.port = message.port);
        message.channelID !== undefined && (obj.channelID = message.channelID);
        message.timeoutTimestamp !== undefined && (obj.timeoutTimestamp = message.timeoutTimestamp);
        message.sourceDenom !== undefined && (obj.sourceDenom = message.sourceDenom);
        message.targetDenom !== undefined && (obj.targetDenom = message.targetDenom);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgSendCreatePair };
        if (object.sender !== undefined && object.sender !== null) {
            message.sender = object.sender;
        }
        else {
            message.sender = '';
        }
        if (object.port !== undefined && object.port !== null) {
            message.port = object.port;
        }
        else {
            message.port = '';
        }
        if (object.channelID !== undefined && object.channelID !== null) {
            message.channelID = object.channelID;
        }
        else {
            message.channelID = '';
        }
        if (object.timeoutTimestamp !== undefined && object.timeoutTimestamp !== null) {
            message.timeoutTimestamp = object.timeoutTimestamp;
        }
        else {
            message.timeoutTimestamp = 0;
        }
        if (object.sourceDenom !== undefined && object.sourceDenom !== null) {
            message.sourceDenom = object.sourceDenom;
        }
        else {
            message.sourceDenom = '';
        }
        if (object.targetDenom !== undefined && object.targetDenom !== null) {
            message.targetDenom = object.targetDenom;
        }
        else {
            message.targetDenom = '';
        }
        return message;
    }
};
const baseMsgSendCreatePairResponse = {};
export const MsgSendCreatePairResponse = {
    encode(_, writer = Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgSendCreatePairResponse };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(_) {
        const message = { ...baseMsgSendCreatePairResponse };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = { ...baseMsgSendCreatePairResponse };
        return message;
    }
};
const baseMsgOracleData = { creator: '', oracleScriptId: 0, sourceChannel: '', askCount: 0, minCount: 0, requestKey: '', prepareGas: 0, executeGas: 0 };
export const MsgOracleData = {
    encode(message, writer = Writer.create()) {
        if (message.creator !== '') {
            writer.uint32(10).string(message.creator);
        }
        if (message.oracleScriptId !== 0) {
            writer.uint32(16).int64(message.oracleScriptId);
        }
        if (message.sourceChannel !== '') {
            writer.uint32(26).string(message.sourceChannel);
        }
        if (message.calldata !== undefined) {
            CallData.encode(message.calldata, writer.uint32(34).fork()).ldelim();
        }
        if (message.askCount !== 0) {
            writer.uint32(40).uint64(message.askCount);
        }
        if (message.minCount !== 0) {
            writer.uint32(48).uint64(message.minCount);
        }
        for (const v of message.feeLimit) {
            Coin.encode(v, writer.uint32(58).fork()).ldelim();
        }
        if (message.requestKey !== '') {
            writer.uint32(66).string(message.requestKey);
        }
        if (message.prepareGas !== 0) {
            writer.uint32(72).uint64(message.prepareGas);
        }
        if (message.executeGas !== 0) {
            writer.uint32(80).uint64(message.executeGas);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgOracleData };
        message.feeLimit = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.oracleScriptId = longToNumber(reader.int64());
                    break;
                case 3:
                    message.sourceChannel = reader.string();
                    break;
                case 4:
                    message.calldata = CallData.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.askCount = longToNumber(reader.uint64());
                    break;
                case 6:
                    message.minCount = longToNumber(reader.uint64());
                    break;
                case 7:
                    message.feeLimit.push(Coin.decode(reader, reader.uint32()));
                    break;
                case 8:
                    message.requestKey = reader.string();
                    break;
                case 9:
                    message.prepareGas = longToNumber(reader.uint64());
                    break;
                case 10:
                    message.executeGas = longToNumber(reader.uint64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseMsgOracleData };
        message.feeLimit = [];
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator);
        }
        else {
            message.creator = '';
        }
        if (object.oracleScriptId !== undefined && object.oracleScriptId !== null) {
            message.oracleScriptId = Number(object.oracleScriptId);
        }
        else {
            message.oracleScriptId = 0;
        }
        if (object.sourceChannel !== undefined && object.sourceChannel !== null) {
            message.sourceChannel = String(object.sourceChannel);
        }
        else {
            message.sourceChannel = '';
        }
        if (object.calldata !== undefined && object.calldata !== null) {
            message.calldata = CallData.fromJSON(object.calldata);
        }
        else {
            message.calldata = undefined;
        }
        if (object.askCount !== undefined && object.askCount !== null) {
            message.askCount = Number(object.askCount);
        }
        else {
            message.askCount = 0;
        }
        if (object.minCount !== undefined && object.minCount !== null) {
            message.minCount = Number(object.minCount);
        }
        else {
            message.minCount = 0;
        }
        if (object.feeLimit !== undefined && object.feeLimit !== null) {
            for (const e of object.feeLimit) {
                message.feeLimit.push(Coin.fromJSON(e));
            }
        }
        if (object.requestKey !== undefined && object.requestKey !== null) {
            message.requestKey = String(object.requestKey);
        }
        else {
            message.requestKey = '';
        }
        if (object.prepareGas !== undefined && object.prepareGas !== null) {
            message.prepareGas = Number(object.prepareGas);
        }
        else {
            message.prepareGas = 0;
        }
        if (object.executeGas !== undefined && object.executeGas !== null) {
            message.executeGas = Number(object.executeGas);
        }
        else {
            message.executeGas = 0;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.oracleScriptId !== undefined && (obj.oracleScriptId = message.oracleScriptId);
        message.sourceChannel !== undefined && (obj.sourceChannel = message.sourceChannel);
        message.calldata !== undefined && (obj.calldata = message.calldata ? CallData.toJSON(message.calldata) : undefined);
        message.askCount !== undefined && (obj.askCount = message.askCount);
        message.minCount !== undefined && (obj.minCount = message.minCount);
        if (message.feeLimit) {
            obj.feeLimit = message.feeLimit.map((e) => (e ? Coin.toJSON(e) : undefined));
        }
        else {
            obj.feeLimit = [];
        }
        message.requestKey !== undefined && (obj.requestKey = message.requestKey);
        message.prepareGas !== undefined && (obj.prepareGas = message.prepareGas);
        message.executeGas !== undefined && (obj.executeGas = message.executeGas);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgOracleData };
        message.feeLimit = [];
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        else {
            message.creator = '';
        }
        if (object.oracleScriptId !== undefined && object.oracleScriptId !== null) {
            message.oracleScriptId = object.oracleScriptId;
        }
        else {
            message.oracleScriptId = 0;
        }
        if (object.sourceChannel !== undefined && object.sourceChannel !== null) {
            message.sourceChannel = object.sourceChannel;
        }
        else {
            message.sourceChannel = '';
        }
        if (object.calldata !== undefined && object.calldata !== null) {
            message.calldata = CallData.fromPartial(object.calldata);
        }
        else {
            message.calldata = undefined;
        }
        if (object.askCount !== undefined && object.askCount !== null) {
            message.askCount = object.askCount;
        }
        else {
            message.askCount = 0;
        }
        if (object.minCount !== undefined && object.minCount !== null) {
            message.minCount = object.minCount;
        }
        else {
            message.minCount = 0;
        }
        if (object.feeLimit !== undefined && object.feeLimit !== null) {
            for (const e of object.feeLimit) {
                message.feeLimit.push(Coin.fromPartial(e));
            }
        }
        if (object.requestKey !== undefined && object.requestKey !== null) {
            message.requestKey = object.requestKey;
        }
        else {
            message.requestKey = '';
        }
        if (object.prepareGas !== undefined && object.prepareGas !== null) {
            message.prepareGas = object.prepareGas;
        }
        else {
            message.prepareGas = 0;
        }
        if (object.executeGas !== undefined && object.executeGas !== null) {
            message.executeGas = object.executeGas;
        }
        else {
            message.executeGas = 0;
        }
        return message;
    }
};
const baseMsgOracleDataResponse = {};
export const MsgOracleDataResponse = {
    encode(_, writer = Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgOracleDataResponse };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(_) {
        const message = { ...baseMsgOracleDataResponse };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = { ...baseMsgOracleDataResponse };
        return message;
    }
};
export class MsgClientImpl {
    constructor(rpc) {
        this.rpc = rpc;
    }
    SendSellOrder(request) {
        const data = MsgSendSellOrder.encode(request).finish();
        const promise = this.rpc.request('tendermint.bandchain.consuming.Msg', 'SendSellOrder', data);
        return promise.then((data) => MsgSendSellOrderResponse.decode(new Reader(data)));
    }
    SendCreatePair(request) {
        const data = MsgSendCreatePair.encode(request).finish();
        const promise = this.rpc.request('tendermint.bandchain.consuming.Msg', 'SendCreatePair', data);
        return promise.then((data) => MsgSendCreatePairResponse.decode(new Reader(data)));
    }
    OracleData(request) {
        const data = MsgOracleData.encode(request).finish();
        const promise = this.rpc.request('tendermint.bandchain.consuming.Msg', 'OracleData', data);
        return promise.then((data) => MsgOracleDataResponse.decode(new Reader(data)));
    }
}
var globalThis = (() => {
    if (typeof globalThis !== 'undefined')
        return globalThis;
    if (typeof self !== 'undefined')
        return self;
    if (typeof window !== 'undefined')
        return window;
    if (typeof global !== 'undefined')
        return global;
    throw 'Unable to locate global object';
})();
function longToNumber(long) {
    if (long.gt(Number.MAX_SAFE_INTEGER)) {
        throw new globalThis.Error('Value is larger than Number.MAX_SAFE_INTEGER');
    }
    return long.toNumber();
}
if (util.Long !== Long) {
    util.Long = Long;
    configure();
}
