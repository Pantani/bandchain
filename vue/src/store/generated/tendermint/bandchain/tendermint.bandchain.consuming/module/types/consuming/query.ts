/* eslint-disable */
import { Reader, util, configure, Writer } from 'protobufjs/minimal'
import * as Long from 'long'
import { BuyOrderBook } from '../consuming/buy_order_book'
import { PageRequest, PageResponse } from '../cosmos/base/query/v1beta1/pagination'
import { SellOrderBook } from '../consuming/sell_order_book'
import { OracleResult } from '../consuming/oracle'

export const protobufPackage = 'tendermint.bandchain.consuming'

/** this line is used by starport scaffolding # 3 */
export interface QueryGetBuyOrderBookRequest {
  index: string
}

export interface QueryGetBuyOrderBookResponse {
  BuyOrderBook: BuyOrderBook | undefined
}

export interface QueryAllBuyOrderBookRequest {
  pagination: PageRequest | undefined
}

export interface QueryAllBuyOrderBookResponse {
  BuyOrderBook: BuyOrderBook[]
  pagination: PageResponse | undefined
}

export interface QueryGetSellOrderBookRequest {
  index: string
}

export interface QueryGetSellOrderBookResponse {
  SellOrderBook: SellOrderBook | undefined
}

export interface QueryAllSellOrderBookRequest {
  pagination: PageRequest | undefined
}

export interface QueryAllSellOrderBookResponse {
  SellOrderBook: SellOrderBook[]
  pagination: PageResponse | undefined
}

/** QueryOracleRequest is the request type for the Query/Result RPC method */
export interface QueryOracleRequest {
  requestId: number
}

/** QueryOracleResponse is the response type for the Query/Result RPC method */
export interface QueryOracleResponse {
  /** pagination defines an optional pagination for the request. */
  result: OracleResult | undefined
}

/** QueryLastOracleIdRequest */
export interface QueryLastOracleIdRequest {}

/** QueryLastOracleIdResponse */
export interface QueryLastOracleIdResponse {
  requestId: number
}

const baseQueryGetBuyOrderBookRequest: object = { index: '' }

export const QueryGetBuyOrderBookRequest = {
  encode(message: QueryGetBuyOrderBookRequest, writer: Writer = Writer.create()): Writer {
    if (message.index !== '') {
      writer.uint32(10).string(message.index)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetBuyOrderBookRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryGetBuyOrderBookRequest } as QueryGetBuyOrderBookRequest
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.index = reader.string()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryGetBuyOrderBookRequest {
    const message = { ...baseQueryGetBuyOrderBookRequest } as QueryGetBuyOrderBookRequest
    if (object.index !== undefined && object.index !== null) {
      message.index = String(object.index)
    } else {
      message.index = ''
    }
    return message
  },

  toJSON(message: QueryGetBuyOrderBookRequest): unknown {
    const obj: any = {}
    message.index !== undefined && (obj.index = message.index)
    return obj
  },

  fromPartial(object: DeepPartial<QueryGetBuyOrderBookRequest>): QueryGetBuyOrderBookRequest {
    const message = { ...baseQueryGetBuyOrderBookRequest } as QueryGetBuyOrderBookRequest
    if (object.index !== undefined && object.index !== null) {
      message.index = object.index
    } else {
      message.index = ''
    }
    return message
  }
}

const baseQueryGetBuyOrderBookResponse: object = {}

export const QueryGetBuyOrderBookResponse = {
  encode(message: QueryGetBuyOrderBookResponse, writer: Writer = Writer.create()): Writer {
    if (message.BuyOrderBook !== undefined) {
      BuyOrderBook.encode(message.BuyOrderBook, writer.uint32(10).fork()).ldelim()
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetBuyOrderBookResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryGetBuyOrderBookResponse } as QueryGetBuyOrderBookResponse
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.BuyOrderBook = BuyOrderBook.decode(reader, reader.uint32())
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryGetBuyOrderBookResponse {
    const message = { ...baseQueryGetBuyOrderBookResponse } as QueryGetBuyOrderBookResponse
    if (object.BuyOrderBook !== undefined && object.BuyOrderBook !== null) {
      message.BuyOrderBook = BuyOrderBook.fromJSON(object.BuyOrderBook)
    } else {
      message.BuyOrderBook = undefined
    }
    return message
  },

  toJSON(message: QueryGetBuyOrderBookResponse): unknown {
    const obj: any = {}
    message.BuyOrderBook !== undefined && (obj.BuyOrderBook = message.BuyOrderBook ? BuyOrderBook.toJSON(message.BuyOrderBook) : undefined)
    return obj
  },

  fromPartial(object: DeepPartial<QueryGetBuyOrderBookResponse>): QueryGetBuyOrderBookResponse {
    const message = { ...baseQueryGetBuyOrderBookResponse } as QueryGetBuyOrderBookResponse
    if (object.BuyOrderBook !== undefined && object.BuyOrderBook !== null) {
      message.BuyOrderBook = BuyOrderBook.fromPartial(object.BuyOrderBook)
    } else {
      message.BuyOrderBook = undefined
    }
    return message
  }
}

const baseQueryAllBuyOrderBookRequest: object = {}

export const QueryAllBuyOrderBookRequest = {
  encode(message: QueryAllBuyOrderBookRequest, writer: Writer = Writer.create()): Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim()
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllBuyOrderBookRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryAllBuyOrderBookRequest } as QueryAllBuyOrderBookRequest
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32())
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryAllBuyOrderBookRequest {
    const message = { ...baseQueryAllBuyOrderBookRequest } as QueryAllBuyOrderBookRequest
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination)
    } else {
      message.pagination = undefined
    }
    return message
  },

  toJSON(message: QueryAllBuyOrderBookRequest): unknown {
    const obj: any = {}
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined)
    return obj
  },

  fromPartial(object: DeepPartial<QueryAllBuyOrderBookRequest>): QueryAllBuyOrderBookRequest {
    const message = { ...baseQueryAllBuyOrderBookRequest } as QueryAllBuyOrderBookRequest
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination)
    } else {
      message.pagination = undefined
    }
    return message
  }
}

const baseQueryAllBuyOrderBookResponse: object = {}

export const QueryAllBuyOrderBookResponse = {
  encode(message: QueryAllBuyOrderBookResponse, writer: Writer = Writer.create()): Writer {
    for (const v of message.BuyOrderBook) {
      BuyOrderBook.encode(v!, writer.uint32(10).fork()).ldelim()
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim()
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllBuyOrderBookResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryAllBuyOrderBookResponse } as QueryAllBuyOrderBookResponse
    message.BuyOrderBook = []
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.BuyOrderBook.push(BuyOrderBook.decode(reader, reader.uint32()))
          break
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32())
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryAllBuyOrderBookResponse {
    const message = { ...baseQueryAllBuyOrderBookResponse } as QueryAllBuyOrderBookResponse
    message.BuyOrderBook = []
    if (object.BuyOrderBook !== undefined && object.BuyOrderBook !== null) {
      for (const e of object.BuyOrderBook) {
        message.BuyOrderBook.push(BuyOrderBook.fromJSON(e))
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination)
    } else {
      message.pagination = undefined
    }
    return message
  },

  toJSON(message: QueryAllBuyOrderBookResponse): unknown {
    const obj: any = {}
    if (message.BuyOrderBook) {
      obj.BuyOrderBook = message.BuyOrderBook.map((e) => (e ? BuyOrderBook.toJSON(e) : undefined))
    } else {
      obj.BuyOrderBook = []
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined)
    return obj
  },

  fromPartial(object: DeepPartial<QueryAllBuyOrderBookResponse>): QueryAllBuyOrderBookResponse {
    const message = { ...baseQueryAllBuyOrderBookResponse } as QueryAllBuyOrderBookResponse
    message.BuyOrderBook = []
    if (object.BuyOrderBook !== undefined && object.BuyOrderBook !== null) {
      for (const e of object.BuyOrderBook) {
        message.BuyOrderBook.push(BuyOrderBook.fromPartial(e))
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination)
    } else {
      message.pagination = undefined
    }
    return message
  }
}

const baseQueryGetSellOrderBookRequest: object = { index: '' }

export const QueryGetSellOrderBookRequest = {
  encode(message: QueryGetSellOrderBookRequest, writer: Writer = Writer.create()): Writer {
    if (message.index !== '') {
      writer.uint32(10).string(message.index)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetSellOrderBookRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryGetSellOrderBookRequest } as QueryGetSellOrderBookRequest
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.index = reader.string()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryGetSellOrderBookRequest {
    const message = { ...baseQueryGetSellOrderBookRequest } as QueryGetSellOrderBookRequest
    if (object.index !== undefined && object.index !== null) {
      message.index = String(object.index)
    } else {
      message.index = ''
    }
    return message
  },

  toJSON(message: QueryGetSellOrderBookRequest): unknown {
    const obj: any = {}
    message.index !== undefined && (obj.index = message.index)
    return obj
  },

  fromPartial(object: DeepPartial<QueryGetSellOrderBookRequest>): QueryGetSellOrderBookRequest {
    const message = { ...baseQueryGetSellOrderBookRequest } as QueryGetSellOrderBookRequest
    if (object.index !== undefined && object.index !== null) {
      message.index = object.index
    } else {
      message.index = ''
    }
    return message
  }
}

const baseQueryGetSellOrderBookResponse: object = {}

export const QueryGetSellOrderBookResponse = {
  encode(message: QueryGetSellOrderBookResponse, writer: Writer = Writer.create()): Writer {
    if (message.SellOrderBook !== undefined) {
      SellOrderBook.encode(message.SellOrderBook, writer.uint32(10).fork()).ldelim()
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetSellOrderBookResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryGetSellOrderBookResponse } as QueryGetSellOrderBookResponse
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.SellOrderBook = SellOrderBook.decode(reader, reader.uint32())
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryGetSellOrderBookResponse {
    const message = { ...baseQueryGetSellOrderBookResponse } as QueryGetSellOrderBookResponse
    if (object.SellOrderBook !== undefined && object.SellOrderBook !== null) {
      message.SellOrderBook = SellOrderBook.fromJSON(object.SellOrderBook)
    } else {
      message.SellOrderBook = undefined
    }
    return message
  },

  toJSON(message: QueryGetSellOrderBookResponse): unknown {
    const obj: any = {}
    message.SellOrderBook !== undefined && (obj.SellOrderBook = message.SellOrderBook ? SellOrderBook.toJSON(message.SellOrderBook) : undefined)
    return obj
  },

  fromPartial(object: DeepPartial<QueryGetSellOrderBookResponse>): QueryGetSellOrderBookResponse {
    const message = { ...baseQueryGetSellOrderBookResponse } as QueryGetSellOrderBookResponse
    if (object.SellOrderBook !== undefined && object.SellOrderBook !== null) {
      message.SellOrderBook = SellOrderBook.fromPartial(object.SellOrderBook)
    } else {
      message.SellOrderBook = undefined
    }
    return message
  }
}

const baseQueryAllSellOrderBookRequest: object = {}

export const QueryAllSellOrderBookRequest = {
  encode(message: QueryAllSellOrderBookRequest, writer: Writer = Writer.create()): Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim()
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllSellOrderBookRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryAllSellOrderBookRequest } as QueryAllSellOrderBookRequest
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32())
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryAllSellOrderBookRequest {
    const message = { ...baseQueryAllSellOrderBookRequest } as QueryAllSellOrderBookRequest
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination)
    } else {
      message.pagination = undefined
    }
    return message
  },

  toJSON(message: QueryAllSellOrderBookRequest): unknown {
    const obj: any = {}
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined)
    return obj
  },

  fromPartial(object: DeepPartial<QueryAllSellOrderBookRequest>): QueryAllSellOrderBookRequest {
    const message = { ...baseQueryAllSellOrderBookRequest } as QueryAllSellOrderBookRequest
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination)
    } else {
      message.pagination = undefined
    }
    return message
  }
}

const baseQueryAllSellOrderBookResponse: object = {}

export const QueryAllSellOrderBookResponse = {
  encode(message: QueryAllSellOrderBookResponse, writer: Writer = Writer.create()): Writer {
    for (const v of message.SellOrderBook) {
      SellOrderBook.encode(v!, writer.uint32(10).fork()).ldelim()
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim()
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllSellOrderBookResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryAllSellOrderBookResponse } as QueryAllSellOrderBookResponse
    message.SellOrderBook = []
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.SellOrderBook.push(SellOrderBook.decode(reader, reader.uint32()))
          break
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32())
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryAllSellOrderBookResponse {
    const message = { ...baseQueryAllSellOrderBookResponse } as QueryAllSellOrderBookResponse
    message.SellOrderBook = []
    if (object.SellOrderBook !== undefined && object.SellOrderBook !== null) {
      for (const e of object.SellOrderBook) {
        message.SellOrderBook.push(SellOrderBook.fromJSON(e))
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination)
    } else {
      message.pagination = undefined
    }
    return message
  },

  toJSON(message: QueryAllSellOrderBookResponse): unknown {
    const obj: any = {}
    if (message.SellOrderBook) {
      obj.SellOrderBook = message.SellOrderBook.map((e) => (e ? SellOrderBook.toJSON(e) : undefined))
    } else {
      obj.SellOrderBook = []
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined)
    return obj
  },

  fromPartial(object: DeepPartial<QueryAllSellOrderBookResponse>): QueryAllSellOrderBookResponse {
    const message = { ...baseQueryAllSellOrderBookResponse } as QueryAllSellOrderBookResponse
    message.SellOrderBook = []
    if (object.SellOrderBook !== undefined && object.SellOrderBook !== null) {
      for (const e of object.SellOrderBook) {
        message.SellOrderBook.push(SellOrderBook.fromPartial(e))
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination)
    } else {
      message.pagination = undefined
    }
    return message
  }
}

const baseQueryOracleRequest: object = { requestId: 0 }

export const QueryOracleRequest = {
  encode(message: QueryOracleRequest, writer: Writer = Writer.create()): Writer {
    if (message.requestId !== 0) {
      writer.uint32(8).int64(message.requestId)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryOracleRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryOracleRequest } as QueryOracleRequest
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.requestId = longToNumber(reader.int64() as Long)
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryOracleRequest {
    const message = { ...baseQueryOracleRequest } as QueryOracleRequest
    if (object.requestId !== undefined && object.requestId !== null) {
      message.requestId = Number(object.requestId)
    } else {
      message.requestId = 0
    }
    return message
  },

  toJSON(message: QueryOracleRequest): unknown {
    const obj: any = {}
    message.requestId !== undefined && (obj.requestId = message.requestId)
    return obj
  },

  fromPartial(object: DeepPartial<QueryOracleRequest>): QueryOracleRequest {
    const message = { ...baseQueryOracleRequest } as QueryOracleRequest
    if (object.requestId !== undefined && object.requestId !== null) {
      message.requestId = object.requestId
    } else {
      message.requestId = 0
    }
    return message
  }
}

const baseQueryOracleResponse: object = {}

export const QueryOracleResponse = {
  encode(message: QueryOracleResponse, writer: Writer = Writer.create()): Writer {
    if (message.result !== undefined) {
      OracleResult.encode(message.result, writer.uint32(10).fork()).ldelim()
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryOracleResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryOracleResponse } as QueryOracleResponse
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.result = OracleResult.decode(reader, reader.uint32())
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryOracleResponse {
    const message = { ...baseQueryOracleResponse } as QueryOracleResponse
    if (object.result !== undefined && object.result !== null) {
      message.result = OracleResult.fromJSON(object.result)
    } else {
      message.result = undefined
    }
    return message
  },

  toJSON(message: QueryOracleResponse): unknown {
    const obj: any = {}
    message.result !== undefined && (obj.result = message.result ? OracleResult.toJSON(message.result) : undefined)
    return obj
  },

  fromPartial(object: DeepPartial<QueryOracleResponse>): QueryOracleResponse {
    const message = { ...baseQueryOracleResponse } as QueryOracleResponse
    if (object.result !== undefined && object.result !== null) {
      message.result = OracleResult.fromPartial(object.result)
    } else {
      message.result = undefined
    }
    return message
  }
}

const baseQueryLastOracleIdRequest: object = {}

export const QueryLastOracleIdRequest = {
  encode(_: QueryLastOracleIdRequest, writer: Writer = Writer.create()): Writer {
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryLastOracleIdRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryLastOracleIdRequest } as QueryLastOracleIdRequest
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(_: any): QueryLastOracleIdRequest {
    const message = { ...baseQueryLastOracleIdRequest } as QueryLastOracleIdRequest
    return message
  },

  toJSON(_: QueryLastOracleIdRequest): unknown {
    const obj: any = {}
    return obj
  },

  fromPartial(_: DeepPartial<QueryLastOracleIdRequest>): QueryLastOracleIdRequest {
    const message = { ...baseQueryLastOracleIdRequest } as QueryLastOracleIdRequest
    return message
  }
}

const baseQueryLastOracleIdResponse: object = { requestId: 0 }

export const QueryLastOracleIdResponse = {
  encode(message: QueryLastOracleIdResponse, writer: Writer = Writer.create()): Writer {
    if (message.requestId !== 0) {
      writer.uint32(8).int64(message.requestId)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryLastOracleIdResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryLastOracleIdResponse } as QueryLastOracleIdResponse
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.requestId = longToNumber(reader.int64() as Long)
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryLastOracleIdResponse {
    const message = { ...baseQueryLastOracleIdResponse } as QueryLastOracleIdResponse
    if (object.requestId !== undefined && object.requestId !== null) {
      message.requestId = Number(object.requestId)
    } else {
      message.requestId = 0
    }
    return message
  },

  toJSON(message: QueryLastOracleIdResponse): unknown {
    const obj: any = {}
    message.requestId !== undefined && (obj.requestId = message.requestId)
    return obj
  },

  fromPartial(object: DeepPartial<QueryLastOracleIdResponse>): QueryLastOracleIdResponse {
    const message = { ...baseQueryLastOracleIdResponse } as QueryLastOracleIdResponse
    if (object.requestId !== undefined && object.requestId !== null) {
      message.requestId = object.requestId
    } else {
      message.requestId = 0
    }
    return message
  }
}

/** Query defines the gRPC querier service. */
export interface Query {
  /** Queries a buyOrderBook by index. */
  BuyOrderBook(request: QueryGetBuyOrderBookRequest): Promise<QueryGetBuyOrderBookResponse>
  /** Queries a list of buyOrderBook items. */
  BuyOrderBookAll(request: QueryAllBuyOrderBookRequest): Promise<QueryAllBuyOrderBookResponse>
  /** Queries a sellOrderBook by index. */
  SellOrderBook(request: QueryGetSellOrderBookRequest): Promise<QueryGetSellOrderBookResponse>
  /** Queries a list of sellOrderBook items. */
  SellOrderBookAll(request: QueryAllSellOrderBookRequest): Promise<QueryAllSellOrderBookResponse>
  /** Request defines a rpc handler method for MsgOracleData. */
  OracleResult(request: QueryOracleRequest): Promise<QueryOracleResponse>
  /** LastOracleId */
  LastOracleId(request: QueryLastOracleIdRequest): Promise<QueryLastOracleIdResponse>
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc
  constructor(rpc: Rpc) {
    this.rpc = rpc
  }
  BuyOrderBook(request: QueryGetBuyOrderBookRequest): Promise<QueryGetBuyOrderBookResponse> {
    const data = QueryGetBuyOrderBookRequest.encode(request).finish()
    const promise = this.rpc.request('tendermint.bandchain.consuming.Query', 'BuyOrderBook', data)
    return promise.then((data) => QueryGetBuyOrderBookResponse.decode(new Reader(data)))
  }

  BuyOrderBookAll(request: QueryAllBuyOrderBookRequest): Promise<QueryAllBuyOrderBookResponse> {
    const data = QueryAllBuyOrderBookRequest.encode(request).finish()
    const promise = this.rpc.request('tendermint.bandchain.consuming.Query', 'BuyOrderBookAll', data)
    return promise.then((data) => QueryAllBuyOrderBookResponse.decode(new Reader(data)))
  }

  SellOrderBook(request: QueryGetSellOrderBookRequest): Promise<QueryGetSellOrderBookResponse> {
    const data = QueryGetSellOrderBookRequest.encode(request).finish()
    const promise = this.rpc.request('tendermint.bandchain.consuming.Query', 'SellOrderBook', data)
    return promise.then((data) => QueryGetSellOrderBookResponse.decode(new Reader(data)))
  }

  SellOrderBookAll(request: QueryAllSellOrderBookRequest): Promise<QueryAllSellOrderBookResponse> {
    const data = QueryAllSellOrderBookRequest.encode(request).finish()
    const promise = this.rpc.request('tendermint.bandchain.consuming.Query', 'SellOrderBookAll', data)
    return promise.then((data) => QueryAllSellOrderBookResponse.decode(new Reader(data)))
  }

  OracleResult(request: QueryOracleRequest): Promise<QueryOracleResponse> {
    const data = QueryOracleRequest.encode(request).finish()
    const promise = this.rpc.request('tendermint.bandchain.consuming.Query', 'OracleResult', data)
    return promise.then((data) => QueryOracleResponse.decode(new Reader(data)))
  }

  LastOracleId(request: QueryLastOracleIdRequest): Promise<QueryLastOracleIdResponse> {
    const data = QueryLastOracleIdRequest.encode(request).finish()
    const promise = this.rpc.request('tendermint.bandchain.consuming.Query', 'LastOracleId', data)
    return promise.then((data) => QueryLastOracleIdResponse.decode(new Reader(data)))
  }
}

interface Rpc {
  request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>
}

declare var self: any | undefined
declare var window: any | undefined
var globalThis: any = (() => {
  if (typeof globalThis !== 'undefined') return globalThis
  if (typeof self !== 'undefined') return self
  if (typeof window !== 'undefined') return window
  if (typeof global !== 'undefined') return global
  throw 'Unable to locate global object'
})()

type Builtin = Date | Function | Uint8Array | string | number | undefined
export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>

function longToNumber(long: Long): number {
  if (long.gt(Number.MAX_SAFE_INTEGER)) {
    throw new globalThis.Error('Value is larger than Number.MAX_SAFE_INTEGER')
  }
  return long.toNumber()
}

if (util.Long !== Long) {
  util.Long = Long as any
  configure()
}
