/* eslint-disable */
import { Reader, util, configure, Writer } from 'protobufjs/minimal';
import * as Long from 'long';
import { BuyOrderBook } from '../consuming/buy_order_book';
import { PageRequest, PageResponse } from '../cosmos/base/query/v1beta1/pagination';
import { SellOrderBook } from '../consuming/sell_order_book';
import { OracleResult } from '../consuming/oracle';
export const protobufPackage = 'tendermint.bandchain.consuming';
const baseQueryGetBuyOrderBookRequest = { index: '' };
export const QueryGetBuyOrderBookRequest = {
    encode(message, writer = Writer.create()) {
        if (message.index !== '') {
            writer.uint32(10).string(message.index);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryGetBuyOrderBookRequest };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.index = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseQueryGetBuyOrderBookRequest };
        if (object.index !== undefined && object.index !== null) {
            message.index = String(object.index);
        }
        else {
            message.index = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.index !== undefined && (obj.index = message.index);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryGetBuyOrderBookRequest };
        if (object.index !== undefined && object.index !== null) {
            message.index = object.index;
        }
        else {
            message.index = '';
        }
        return message;
    }
};
const baseQueryGetBuyOrderBookResponse = {};
export const QueryGetBuyOrderBookResponse = {
    encode(message, writer = Writer.create()) {
        if (message.BuyOrderBook !== undefined) {
            BuyOrderBook.encode(message.BuyOrderBook, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryGetBuyOrderBookResponse };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.BuyOrderBook = BuyOrderBook.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseQueryGetBuyOrderBookResponse };
        if (object.BuyOrderBook !== undefined && object.BuyOrderBook !== null) {
            message.BuyOrderBook = BuyOrderBook.fromJSON(object.BuyOrderBook);
        }
        else {
            message.BuyOrderBook = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.BuyOrderBook !== undefined && (obj.BuyOrderBook = message.BuyOrderBook ? BuyOrderBook.toJSON(message.BuyOrderBook) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryGetBuyOrderBookResponse };
        if (object.BuyOrderBook !== undefined && object.BuyOrderBook !== null) {
            message.BuyOrderBook = BuyOrderBook.fromPartial(object.BuyOrderBook);
        }
        else {
            message.BuyOrderBook = undefined;
        }
        return message;
    }
};
const baseQueryAllBuyOrderBookRequest = {};
export const QueryAllBuyOrderBookRequest = {
    encode(message, writer = Writer.create()) {
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryAllBuyOrderBookRequest };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pagination = PageRequest.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseQueryAllBuyOrderBookRequest };
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromJSON(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryAllBuyOrderBookRequest };
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromPartial(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    }
};
const baseQueryAllBuyOrderBookResponse = {};
export const QueryAllBuyOrderBookResponse = {
    encode(message, writer = Writer.create()) {
        for (const v of message.BuyOrderBook) {
            BuyOrderBook.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryAllBuyOrderBookResponse };
        message.BuyOrderBook = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.BuyOrderBook.push(BuyOrderBook.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.pagination = PageResponse.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseQueryAllBuyOrderBookResponse };
        message.BuyOrderBook = [];
        if (object.BuyOrderBook !== undefined && object.BuyOrderBook !== null) {
            for (const e of object.BuyOrderBook) {
                message.BuyOrderBook.push(BuyOrderBook.fromJSON(e));
            }
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageResponse.fromJSON(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.BuyOrderBook) {
            obj.BuyOrderBook = message.BuyOrderBook.map((e) => (e ? BuyOrderBook.toJSON(e) : undefined));
        }
        else {
            obj.BuyOrderBook = [];
        }
        message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryAllBuyOrderBookResponse };
        message.BuyOrderBook = [];
        if (object.BuyOrderBook !== undefined && object.BuyOrderBook !== null) {
            for (const e of object.BuyOrderBook) {
                message.BuyOrderBook.push(BuyOrderBook.fromPartial(e));
            }
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageResponse.fromPartial(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    }
};
const baseQueryGetSellOrderBookRequest = { index: '' };
export const QueryGetSellOrderBookRequest = {
    encode(message, writer = Writer.create()) {
        if (message.index !== '') {
            writer.uint32(10).string(message.index);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryGetSellOrderBookRequest };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.index = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseQueryGetSellOrderBookRequest };
        if (object.index !== undefined && object.index !== null) {
            message.index = String(object.index);
        }
        else {
            message.index = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.index !== undefined && (obj.index = message.index);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryGetSellOrderBookRequest };
        if (object.index !== undefined && object.index !== null) {
            message.index = object.index;
        }
        else {
            message.index = '';
        }
        return message;
    }
};
const baseQueryGetSellOrderBookResponse = {};
export const QueryGetSellOrderBookResponse = {
    encode(message, writer = Writer.create()) {
        if (message.SellOrderBook !== undefined) {
            SellOrderBook.encode(message.SellOrderBook, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryGetSellOrderBookResponse };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.SellOrderBook = SellOrderBook.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseQueryGetSellOrderBookResponse };
        if (object.SellOrderBook !== undefined && object.SellOrderBook !== null) {
            message.SellOrderBook = SellOrderBook.fromJSON(object.SellOrderBook);
        }
        else {
            message.SellOrderBook = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.SellOrderBook !== undefined && (obj.SellOrderBook = message.SellOrderBook ? SellOrderBook.toJSON(message.SellOrderBook) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryGetSellOrderBookResponse };
        if (object.SellOrderBook !== undefined && object.SellOrderBook !== null) {
            message.SellOrderBook = SellOrderBook.fromPartial(object.SellOrderBook);
        }
        else {
            message.SellOrderBook = undefined;
        }
        return message;
    }
};
const baseQueryAllSellOrderBookRequest = {};
export const QueryAllSellOrderBookRequest = {
    encode(message, writer = Writer.create()) {
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryAllSellOrderBookRequest };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pagination = PageRequest.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseQueryAllSellOrderBookRequest };
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromJSON(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryAllSellOrderBookRequest };
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromPartial(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    }
};
const baseQueryAllSellOrderBookResponse = {};
export const QueryAllSellOrderBookResponse = {
    encode(message, writer = Writer.create()) {
        for (const v of message.SellOrderBook) {
            SellOrderBook.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryAllSellOrderBookResponse };
        message.SellOrderBook = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.SellOrderBook.push(SellOrderBook.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.pagination = PageResponse.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseQueryAllSellOrderBookResponse };
        message.SellOrderBook = [];
        if (object.SellOrderBook !== undefined && object.SellOrderBook !== null) {
            for (const e of object.SellOrderBook) {
                message.SellOrderBook.push(SellOrderBook.fromJSON(e));
            }
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageResponse.fromJSON(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.SellOrderBook) {
            obj.SellOrderBook = message.SellOrderBook.map((e) => (e ? SellOrderBook.toJSON(e) : undefined));
        }
        else {
            obj.SellOrderBook = [];
        }
        message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryAllSellOrderBookResponse };
        message.SellOrderBook = [];
        if (object.SellOrderBook !== undefined && object.SellOrderBook !== null) {
            for (const e of object.SellOrderBook) {
                message.SellOrderBook.push(SellOrderBook.fromPartial(e));
            }
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageResponse.fromPartial(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    }
};
const baseQueryOracleRequest = { requestId: 0 };
export const QueryOracleRequest = {
    encode(message, writer = Writer.create()) {
        if (message.requestId !== 0) {
            writer.uint32(8).int64(message.requestId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryOracleRequest };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.requestId = longToNumber(reader.int64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseQueryOracleRequest };
        if (object.requestId !== undefined && object.requestId !== null) {
            message.requestId = Number(object.requestId);
        }
        else {
            message.requestId = 0;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.requestId !== undefined && (obj.requestId = message.requestId);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryOracleRequest };
        if (object.requestId !== undefined && object.requestId !== null) {
            message.requestId = object.requestId;
        }
        else {
            message.requestId = 0;
        }
        return message;
    }
};
const baseQueryOracleResponse = {};
export const QueryOracleResponse = {
    encode(message, writer = Writer.create()) {
        if (message.result !== undefined) {
            OracleResult.encode(message.result, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryOracleResponse };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.result = OracleResult.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseQueryOracleResponse };
        if (object.result !== undefined && object.result !== null) {
            message.result = OracleResult.fromJSON(object.result);
        }
        else {
            message.result = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.result !== undefined && (obj.result = message.result ? OracleResult.toJSON(message.result) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryOracleResponse };
        if (object.result !== undefined && object.result !== null) {
            message.result = OracleResult.fromPartial(object.result);
        }
        else {
            message.result = undefined;
        }
        return message;
    }
};
const baseQueryLastOracleIdRequest = {};
export const QueryLastOracleIdRequest = {
    encode(_, writer = Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryLastOracleIdRequest };
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
        const message = { ...baseQueryLastOracleIdRequest };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = { ...baseQueryLastOracleIdRequest };
        return message;
    }
};
const baseQueryLastOracleIdResponse = { requestId: 0 };
export const QueryLastOracleIdResponse = {
    encode(message, writer = Writer.create()) {
        if (message.requestId !== 0) {
            writer.uint32(8).int64(message.requestId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryLastOracleIdResponse };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.requestId = longToNumber(reader.int64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseQueryLastOracleIdResponse };
        if (object.requestId !== undefined && object.requestId !== null) {
            message.requestId = Number(object.requestId);
        }
        else {
            message.requestId = 0;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.requestId !== undefined && (obj.requestId = message.requestId);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryLastOracleIdResponse };
        if (object.requestId !== undefined && object.requestId !== null) {
            message.requestId = object.requestId;
        }
        else {
            message.requestId = 0;
        }
        return message;
    }
};
export class QueryClientImpl {
    constructor(rpc) {
        this.rpc = rpc;
    }
    BuyOrderBook(request) {
        const data = QueryGetBuyOrderBookRequest.encode(request).finish();
        const promise = this.rpc.request('tendermint.bandchain.consuming.Query', 'BuyOrderBook', data);
        return promise.then((data) => QueryGetBuyOrderBookResponse.decode(new Reader(data)));
    }
    BuyOrderBookAll(request) {
        const data = QueryAllBuyOrderBookRequest.encode(request).finish();
        const promise = this.rpc.request('tendermint.bandchain.consuming.Query', 'BuyOrderBookAll', data);
        return promise.then((data) => QueryAllBuyOrderBookResponse.decode(new Reader(data)));
    }
    SellOrderBook(request) {
        const data = QueryGetSellOrderBookRequest.encode(request).finish();
        const promise = this.rpc.request('tendermint.bandchain.consuming.Query', 'SellOrderBook', data);
        return promise.then((data) => QueryGetSellOrderBookResponse.decode(new Reader(data)));
    }
    SellOrderBookAll(request) {
        const data = QueryAllSellOrderBookRequest.encode(request).finish();
        const promise = this.rpc.request('tendermint.bandchain.consuming.Query', 'SellOrderBookAll', data);
        return promise.then((data) => QueryAllSellOrderBookResponse.decode(new Reader(data)));
    }
    OracleResult(request) {
        const data = QueryOracleRequest.encode(request).finish();
        const promise = this.rpc.request('tendermint.bandchain.consuming.Query', 'OracleResult', data);
        return promise.then((data) => QueryOracleResponse.decode(new Reader(data)));
    }
    LastOracleId(request) {
        const data = QueryLastOracleIdRequest.encode(request).finish();
        const promise = this.rpc.request('tendermint.bandchain.consuming.Query', 'LastOracleId', data);
        return promise.then((data) => QueryLastOracleIdResponse.decode(new Reader(data)));
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
