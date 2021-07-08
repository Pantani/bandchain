/* eslint-disable */
import { Reader, util, configure, Writer } from 'protobufjs/minimal'
import * as Long from 'long'
import { CallData } from '../consuming/oracle'
import { Coin } from '../cosmos/base/v1beta1/coin'

export const protobufPackage = 'tendermint.bandchain.consuming'

/** this line is used by starport scaffolding # proto/tx/message */
export interface MsgSendSellOrder {
  sender: string
  port: string
  channelID: string
  timeoutTimestamp: number
  amountDenom: string
  amount: number
  priceDenom: string
  price: number
}

export interface MsgSendSellOrderResponse {}

export interface MsgSendCreatePair {
  sender: string
  port: string
  channelID: string
  timeoutTimestamp: number
  sourceDenom: string
  targetDenom: string
}

export interface MsgSendCreatePairResponse {}

export interface MsgOracleData {
  creator: string
  oracleScriptId: number
  sourceChannel: string
  calldata: CallData | undefined
  askCount: number
  minCount: number
  feeLimit: Coin[]
  requestKey: string
  prepareGas: number
  executeGas: number
}

export interface MsgOracleDataResponse {}

const baseMsgSendSellOrder: object = { sender: '', port: '', channelID: '', timeoutTimestamp: 0, amountDenom: '', amount: 0, priceDenom: '', price: 0 }

export const MsgSendSellOrder = {
  encode(message: MsgSendSellOrder, writer: Writer = Writer.create()): Writer {
    if (message.sender !== '') {
      writer.uint32(10).string(message.sender)
    }
    if (message.port !== '') {
      writer.uint32(18).string(message.port)
    }
    if (message.channelID !== '') {
      writer.uint32(26).string(message.channelID)
    }
    if (message.timeoutTimestamp !== 0) {
      writer.uint32(32).uint64(message.timeoutTimestamp)
    }
    if (message.amountDenom !== '') {
      writer.uint32(42).string(message.amountDenom)
    }
    if (message.amount !== 0) {
      writer.uint32(48).int32(message.amount)
    }
    if (message.priceDenom !== '') {
      writer.uint32(58).string(message.priceDenom)
    }
    if (message.price !== 0) {
      writer.uint32(64).int32(message.price)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgSendSellOrder {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgSendSellOrder } as MsgSendSellOrder
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string()
          break
        case 2:
          message.port = reader.string()
          break
        case 3:
          message.channelID = reader.string()
          break
        case 4:
          message.timeoutTimestamp = longToNumber(reader.uint64() as Long)
          break
        case 5:
          message.amountDenom = reader.string()
          break
        case 6:
          message.amount = reader.int32()
          break
        case 7:
          message.priceDenom = reader.string()
          break
        case 8:
          message.price = reader.int32()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): MsgSendSellOrder {
    const message = { ...baseMsgSendSellOrder } as MsgSendSellOrder
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = String(object.sender)
    } else {
      message.sender = ''
    }
    if (object.port !== undefined && object.port !== null) {
      message.port = String(object.port)
    } else {
      message.port = ''
    }
    if (object.channelID !== undefined && object.channelID !== null) {
      message.channelID = String(object.channelID)
    } else {
      message.channelID = ''
    }
    if (object.timeoutTimestamp !== undefined && object.timeoutTimestamp !== null) {
      message.timeoutTimestamp = Number(object.timeoutTimestamp)
    } else {
      message.timeoutTimestamp = 0
    }
    if (object.amountDenom !== undefined && object.amountDenom !== null) {
      message.amountDenom = String(object.amountDenom)
    } else {
      message.amountDenom = ''
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = Number(object.amount)
    } else {
      message.amount = 0
    }
    if (object.priceDenom !== undefined && object.priceDenom !== null) {
      message.priceDenom = String(object.priceDenom)
    } else {
      message.priceDenom = ''
    }
    if (object.price !== undefined && object.price !== null) {
      message.price = Number(object.price)
    } else {
      message.price = 0
    }
    return message
  },

  toJSON(message: MsgSendSellOrder): unknown {
    const obj: any = {}
    message.sender !== undefined && (obj.sender = message.sender)
    message.port !== undefined && (obj.port = message.port)
    message.channelID !== undefined && (obj.channelID = message.channelID)
    message.timeoutTimestamp !== undefined && (obj.timeoutTimestamp = message.timeoutTimestamp)
    message.amountDenom !== undefined && (obj.amountDenom = message.amountDenom)
    message.amount !== undefined && (obj.amount = message.amount)
    message.priceDenom !== undefined && (obj.priceDenom = message.priceDenom)
    message.price !== undefined && (obj.price = message.price)
    return obj
  },

  fromPartial(object: DeepPartial<MsgSendSellOrder>): MsgSendSellOrder {
    const message = { ...baseMsgSendSellOrder } as MsgSendSellOrder
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = object.sender
    } else {
      message.sender = ''
    }
    if (object.port !== undefined && object.port !== null) {
      message.port = object.port
    } else {
      message.port = ''
    }
    if (object.channelID !== undefined && object.channelID !== null) {
      message.channelID = object.channelID
    } else {
      message.channelID = ''
    }
    if (object.timeoutTimestamp !== undefined && object.timeoutTimestamp !== null) {
      message.timeoutTimestamp = object.timeoutTimestamp
    } else {
      message.timeoutTimestamp = 0
    }
    if (object.amountDenom !== undefined && object.amountDenom !== null) {
      message.amountDenom = object.amountDenom
    } else {
      message.amountDenom = ''
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = object.amount
    } else {
      message.amount = 0
    }
    if (object.priceDenom !== undefined && object.priceDenom !== null) {
      message.priceDenom = object.priceDenom
    } else {
      message.priceDenom = ''
    }
    if (object.price !== undefined && object.price !== null) {
      message.price = object.price
    } else {
      message.price = 0
    }
    return message
  }
}

const baseMsgSendSellOrderResponse: object = {}

export const MsgSendSellOrderResponse = {
  encode(_: MsgSendSellOrderResponse, writer: Writer = Writer.create()): Writer {
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgSendSellOrderResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgSendSellOrderResponse } as MsgSendSellOrderResponse
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

  fromJSON(_: any): MsgSendSellOrderResponse {
    const message = { ...baseMsgSendSellOrderResponse } as MsgSendSellOrderResponse
    return message
  },

  toJSON(_: MsgSendSellOrderResponse): unknown {
    const obj: any = {}
    return obj
  },

  fromPartial(_: DeepPartial<MsgSendSellOrderResponse>): MsgSendSellOrderResponse {
    const message = { ...baseMsgSendSellOrderResponse } as MsgSendSellOrderResponse
    return message
  }
}

const baseMsgSendCreatePair: object = { sender: '', port: '', channelID: '', timeoutTimestamp: 0, sourceDenom: '', targetDenom: '' }

export const MsgSendCreatePair = {
  encode(message: MsgSendCreatePair, writer: Writer = Writer.create()): Writer {
    if (message.sender !== '') {
      writer.uint32(10).string(message.sender)
    }
    if (message.port !== '') {
      writer.uint32(18).string(message.port)
    }
    if (message.channelID !== '') {
      writer.uint32(26).string(message.channelID)
    }
    if (message.timeoutTimestamp !== 0) {
      writer.uint32(32).uint64(message.timeoutTimestamp)
    }
    if (message.sourceDenom !== '') {
      writer.uint32(42).string(message.sourceDenom)
    }
    if (message.targetDenom !== '') {
      writer.uint32(50).string(message.targetDenom)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgSendCreatePair {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgSendCreatePair } as MsgSendCreatePair
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string()
          break
        case 2:
          message.port = reader.string()
          break
        case 3:
          message.channelID = reader.string()
          break
        case 4:
          message.timeoutTimestamp = longToNumber(reader.uint64() as Long)
          break
        case 5:
          message.sourceDenom = reader.string()
          break
        case 6:
          message.targetDenom = reader.string()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): MsgSendCreatePair {
    const message = { ...baseMsgSendCreatePair } as MsgSendCreatePair
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = String(object.sender)
    } else {
      message.sender = ''
    }
    if (object.port !== undefined && object.port !== null) {
      message.port = String(object.port)
    } else {
      message.port = ''
    }
    if (object.channelID !== undefined && object.channelID !== null) {
      message.channelID = String(object.channelID)
    } else {
      message.channelID = ''
    }
    if (object.timeoutTimestamp !== undefined && object.timeoutTimestamp !== null) {
      message.timeoutTimestamp = Number(object.timeoutTimestamp)
    } else {
      message.timeoutTimestamp = 0
    }
    if (object.sourceDenom !== undefined && object.sourceDenom !== null) {
      message.sourceDenom = String(object.sourceDenom)
    } else {
      message.sourceDenom = ''
    }
    if (object.targetDenom !== undefined && object.targetDenom !== null) {
      message.targetDenom = String(object.targetDenom)
    } else {
      message.targetDenom = ''
    }
    return message
  },

  toJSON(message: MsgSendCreatePair): unknown {
    const obj: any = {}
    message.sender !== undefined && (obj.sender = message.sender)
    message.port !== undefined && (obj.port = message.port)
    message.channelID !== undefined && (obj.channelID = message.channelID)
    message.timeoutTimestamp !== undefined && (obj.timeoutTimestamp = message.timeoutTimestamp)
    message.sourceDenom !== undefined && (obj.sourceDenom = message.sourceDenom)
    message.targetDenom !== undefined && (obj.targetDenom = message.targetDenom)
    return obj
  },

  fromPartial(object: DeepPartial<MsgSendCreatePair>): MsgSendCreatePair {
    const message = { ...baseMsgSendCreatePair } as MsgSendCreatePair
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = object.sender
    } else {
      message.sender = ''
    }
    if (object.port !== undefined && object.port !== null) {
      message.port = object.port
    } else {
      message.port = ''
    }
    if (object.channelID !== undefined && object.channelID !== null) {
      message.channelID = object.channelID
    } else {
      message.channelID = ''
    }
    if (object.timeoutTimestamp !== undefined && object.timeoutTimestamp !== null) {
      message.timeoutTimestamp = object.timeoutTimestamp
    } else {
      message.timeoutTimestamp = 0
    }
    if (object.sourceDenom !== undefined && object.sourceDenom !== null) {
      message.sourceDenom = object.sourceDenom
    } else {
      message.sourceDenom = ''
    }
    if (object.targetDenom !== undefined && object.targetDenom !== null) {
      message.targetDenom = object.targetDenom
    } else {
      message.targetDenom = ''
    }
    return message
  }
}

const baseMsgSendCreatePairResponse: object = {}

export const MsgSendCreatePairResponse = {
  encode(_: MsgSendCreatePairResponse, writer: Writer = Writer.create()): Writer {
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgSendCreatePairResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgSendCreatePairResponse } as MsgSendCreatePairResponse
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

  fromJSON(_: any): MsgSendCreatePairResponse {
    const message = { ...baseMsgSendCreatePairResponse } as MsgSendCreatePairResponse
    return message
  },

  toJSON(_: MsgSendCreatePairResponse): unknown {
    const obj: any = {}
    return obj
  },

  fromPartial(_: DeepPartial<MsgSendCreatePairResponse>): MsgSendCreatePairResponse {
    const message = { ...baseMsgSendCreatePairResponse } as MsgSendCreatePairResponse
    return message
  }
}

const baseMsgOracleData: object = { creator: '', oracleScriptId: 0, sourceChannel: '', askCount: 0, minCount: 0, requestKey: '', prepareGas: 0, executeGas: 0 }

export const MsgOracleData = {
  encode(message: MsgOracleData, writer: Writer = Writer.create()): Writer {
    if (message.creator !== '') {
      writer.uint32(10).string(message.creator)
    }
    if (message.oracleScriptId !== 0) {
      writer.uint32(16).int64(message.oracleScriptId)
    }
    if (message.sourceChannel !== '') {
      writer.uint32(26).string(message.sourceChannel)
    }
    if (message.calldata !== undefined) {
      CallData.encode(message.calldata, writer.uint32(34).fork()).ldelim()
    }
    if (message.askCount !== 0) {
      writer.uint32(40).uint64(message.askCount)
    }
    if (message.minCount !== 0) {
      writer.uint32(48).uint64(message.minCount)
    }
    for (const v of message.feeLimit) {
      Coin.encode(v!, writer.uint32(58).fork()).ldelim()
    }
    if (message.requestKey !== '') {
      writer.uint32(66).string(message.requestKey)
    }
    if (message.prepareGas !== 0) {
      writer.uint32(72).uint64(message.prepareGas)
    }
    if (message.executeGas !== 0) {
      writer.uint32(80).uint64(message.executeGas)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgOracleData {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgOracleData } as MsgOracleData
    message.feeLimit = []
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string()
          break
        case 2:
          message.oracleScriptId = longToNumber(reader.int64() as Long)
          break
        case 3:
          message.sourceChannel = reader.string()
          break
        case 4:
          message.calldata = CallData.decode(reader, reader.uint32())
          break
        case 5:
          message.askCount = longToNumber(reader.uint64() as Long)
          break
        case 6:
          message.minCount = longToNumber(reader.uint64() as Long)
          break
        case 7:
          message.feeLimit.push(Coin.decode(reader, reader.uint32()))
          break
        case 8:
          message.requestKey = reader.string()
          break
        case 9:
          message.prepareGas = longToNumber(reader.uint64() as Long)
          break
        case 10:
          message.executeGas = longToNumber(reader.uint64() as Long)
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): MsgOracleData {
    const message = { ...baseMsgOracleData } as MsgOracleData
    message.feeLimit = []
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator)
    } else {
      message.creator = ''
    }
    if (object.oracleScriptId !== undefined && object.oracleScriptId !== null) {
      message.oracleScriptId = Number(object.oracleScriptId)
    } else {
      message.oracleScriptId = 0
    }
    if (object.sourceChannel !== undefined && object.sourceChannel !== null) {
      message.sourceChannel = String(object.sourceChannel)
    } else {
      message.sourceChannel = ''
    }
    if (object.calldata !== undefined && object.calldata !== null) {
      message.calldata = CallData.fromJSON(object.calldata)
    } else {
      message.calldata = undefined
    }
    if (object.askCount !== undefined && object.askCount !== null) {
      message.askCount = Number(object.askCount)
    } else {
      message.askCount = 0
    }
    if (object.minCount !== undefined && object.minCount !== null) {
      message.minCount = Number(object.minCount)
    } else {
      message.minCount = 0
    }
    if (object.feeLimit !== undefined && object.feeLimit !== null) {
      for (const e of object.feeLimit) {
        message.feeLimit.push(Coin.fromJSON(e))
      }
    }
    if (object.requestKey !== undefined && object.requestKey !== null) {
      message.requestKey = String(object.requestKey)
    } else {
      message.requestKey = ''
    }
    if (object.prepareGas !== undefined && object.prepareGas !== null) {
      message.prepareGas = Number(object.prepareGas)
    } else {
      message.prepareGas = 0
    }
    if (object.executeGas !== undefined && object.executeGas !== null) {
      message.executeGas = Number(object.executeGas)
    } else {
      message.executeGas = 0
    }
    return message
  },

  toJSON(message: MsgOracleData): unknown {
    const obj: any = {}
    message.creator !== undefined && (obj.creator = message.creator)
    message.oracleScriptId !== undefined && (obj.oracleScriptId = message.oracleScriptId)
    message.sourceChannel !== undefined && (obj.sourceChannel = message.sourceChannel)
    message.calldata !== undefined && (obj.calldata = message.calldata ? CallData.toJSON(message.calldata) : undefined)
    message.askCount !== undefined && (obj.askCount = message.askCount)
    message.minCount !== undefined && (obj.minCount = message.minCount)
    if (message.feeLimit) {
      obj.feeLimit = message.feeLimit.map((e) => (e ? Coin.toJSON(e) : undefined))
    } else {
      obj.feeLimit = []
    }
    message.requestKey !== undefined && (obj.requestKey = message.requestKey)
    message.prepareGas !== undefined && (obj.prepareGas = message.prepareGas)
    message.executeGas !== undefined && (obj.executeGas = message.executeGas)
    return obj
  },

  fromPartial(object: DeepPartial<MsgOracleData>): MsgOracleData {
    const message = { ...baseMsgOracleData } as MsgOracleData
    message.feeLimit = []
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator
    } else {
      message.creator = ''
    }
    if (object.oracleScriptId !== undefined && object.oracleScriptId !== null) {
      message.oracleScriptId = object.oracleScriptId
    } else {
      message.oracleScriptId = 0
    }
    if (object.sourceChannel !== undefined && object.sourceChannel !== null) {
      message.sourceChannel = object.sourceChannel
    } else {
      message.sourceChannel = ''
    }
    if (object.calldata !== undefined && object.calldata !== null) {
      message.calldata = CallData.fromPartial(object.calldata)
    } else {
      message.calldata = undefined
    }
    if (object.askCount !== undefined && object.askCount !== null) {
      message.askCount = object.askCount
    } else {
      message.askCount = 0
    }
    if (object.minCount !== undefined && object.minCount !== null) {
      message.minCount = object.minCount
    } else {
      message.minCount = 0
    }
    if (object.feeLimit !== undefined && object.feeLimit !== null) {
      for (const e of object.feeLimit) {
        message.feeLimit.push(Coin.fromPartial(e))
      }
    }
    if (object.requestKey !== undefined && object.requestKey !== null) {
      message.requestKey = object.requestKey
    } else {
      message.requestKey = ''
    }
    if (object.prepareGas !== undefined && object.prepareGas !== null) {
      message.prepareGas = object.prepareGas
    } else {
      message.prepareGas = 0
    }
    if (object.executeGas !== undefined && object.executeGas !== null) {
      message.executeGas = object.executeGas
    } else {
      message.executeGas = 0
    }
    return message
  }
}

const baseMsgOracleDataResponse: object = {}

export const MsgOracleDataResponse = {
  encode(_: MsgOracleDataResponse, writer: Writer = Writer.create()): Writer {
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgOracleDataResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgOracleDataResponse } as MsgOracleDataResponse
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

  fromJSON(_: any): MsgOracleDataResponse {
    const message = { ...baseMsgOracleDataResponse } as MsgOracleDataResponse
    return message
  },

  toJSON(_: MsgOracleDataResponse): unknown {
    const obj: any = {}
    return obj
  },

  fromPartial(_: DeepPartial<MsgOracleDataResponse>): MsgOracleDataResponse {
    const message = { ...baseMsgOracleDataResponse } as MsgOracleDataResponse
    return message
  }
}

/** Msg defines the Msg service. */
export interface Msg {
  /** this line is used by starport scaffolding # proto/tx/rpc */
  SendSellOrder(request: MsgSendSellOrder): Promise<MsgSendSellOrderResponse>
  SendCreatePair(request: MsgSendCreatePair): Promise<MsgSendCreatePairResponse>
  OracleData(request: MsgOracleData): Promise<MsgOracleDataResponse>
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc
  constructor(rpc: Rpc) {
    this.rpc = rpc
  }
  SendSellOrder(request: MsgSendSellOrder): Promise<MsgSendSellOrderResponse> {
    const data = MsgSendSellOrder.encode(request).finish()
    const promise = this.rpc.request('tendermint.bandchain.consuming.Msg', 'SendSellOrder', data)
    return promise.then((data) => MsgSendSellOrderResponse.decode(new Reader(data)))
  }

  SendCreatePair(request: MsgSendCreatePair): Promise<MsgSendCreatePairResponse> {
    const data = MsgSendCreatePair.encode(request).finish()
    const promise = this.rpc.request('tendermint.bandchain.consuming.Msg', 'SendCreatePair', data)
    return promise.then((data) => MsgSendCreatePairResponse.decode(new Reader(data)))
  }

  OracleData(request: MsgOracleData): Promise<MsgOracleDataResponse> {
    const data = MsgOracleData.encode(request).finish()
    const promise = this.rpc.request('tendermint.bandchain.consuming.Msg', 'OracleData', data)
    return promise.then((data) => MsgOracleDataResponse.decode(new Reader(data)))
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