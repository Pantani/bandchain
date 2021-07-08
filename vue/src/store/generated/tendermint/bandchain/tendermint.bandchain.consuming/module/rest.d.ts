export interface ConsumingBuyOrderBook {
    creator?: string;
    index?: string;
    amountDenom?: string;
    priceDenom?: string;
}
export interface ConsumingCallData {
    symbols?: string[];
    /** @format uint64 */
    multiplier?: string;
}
export declare type ConsumingMsgOracleDataResponse = object;
export declare type ConsumingMsgSendCreatePairResponse = object;
export declare type ConsumingMsgSendSellOrderResponse = object;
export interface ConsumingOracleResult {
    rates?: string[];
}
export interface ConsumingQueryAllBuyOrderBookResponse {
    BuyOrderBook?: ConsumingBuyOrderBook[];
    /**
     * PageResponse is to be embedded in gRPC response messages where the
     * corresponding request message has used PageRequest.
     *
     *  message SomeResponse {
     *          repeated Bar results = 1;
     *          PageResponse page = 2;
     *  }
     */
    pagination?: V1Beta1PageResponse;
}
export interface ConsumingQueryAllSellOrderBookResponse {
    SellOrderBook?: ConsumingSellOrderBook[];
    /**
     * PageResponse is to be embedded in gRPC response messages where the
     * corresponding request message has used PageRequest.
     *
     *  message SomeResponse {
     *          repeated Bar results = 1;
     *          PageResponse page = 2;
     *  }
     */
    pagination?: V1Beta1PageResponse;
}
export interface ConsumingQueryGetBuyOrderBookResponse {
    BuyOrderBook?: ConsumingBuyOrderBook;
}
export interface ConsumingQueryGetSellOrderBookResponse {
    SellOrderBook?: ConsumingSellOrderBook;
}
export interface ConsumingQueryLastOracleIdResponse {
    /** @format int64 */
    requestId?: string;
}
export interface ConsumingQueryOracleResponse {
    /** pagination defines an optional pagination for the request. */
    result?: ConsumingOracleResult;
}
export interface ConsumingSellOrderBook {
    creator?: string;
    index?: string;
    amountDenom?: string;
    priceDenom?: string;
}
export interface ProtobufAny {
    typeUrl?: string;
    /** @format byte */
    value?: string;
}
export interface RpcStatus {
    /** @format int32 */
    code?: number;
    message?: string;
    details?: ProtobufAny[];
}
/**
* Coin defines a token with a denomination and an amount.

NOTE: The amount field is an Int which implements the custom method
signatures required by gogoproto.
*/
export interface V1Beta1Coin {
    denom?: string;
    amount?: string;
}
/**
* message SomeRequest {
         Foo some_parameter = 1;
         PageRequest pagination = 2;
 }
*/
export interface V1Beta1PageRequest {
    /**
     * key is a value returned in PageResponse.next_key to begin
     * querying the next page most efficiently. Only one of offset or key
     * should be set.
     * @format byte
     */
    key?: string;
    /**
     * offset is a numeric offset that can be used when key is unavailable.
     * It is less efficient than using key. Only one of offset or key should
     * be set.
     * @format uint64
     */
    offset?: string;
    /**
     * limit is the total number of results to be returned in the result page.
     * If left empty it will default to a value to be set by each app.
     * @format uint64
     */
    limit?: string;
    /**
     * count_total is set to true  to indicate that the result set should include
     * a count of the total number of items available for pagination in UIs.
     * count_total is only respected when offset is used. It is ignored when key
     * is set.
     */
    countTotal?: boolean;
}
/**
* PageResponse is to be embedded in gRPC response messages where the
corresponding request message has used PageRequest.

 message SomeResponse {
         repeated Bar results = 1;
         PageResponse page = 2;
 }
*/
export interface V1Beta1PageResponse {
    /** @format byte */
    nextKey?: string;
    /** @format uint64 */
    total?: string;
}
export declare type QueryParamsType = Record<string | number, any>;
export declare type ResponseFormat = keyof Omit<Body, "body" | "bodyUsed">;
export interface FullRequestParams extends Omit<RequestInit, "body"> {
    /** set parameter to `true` for call `securityWorker` for this request */
    secure?: boolean;
    /** request path */
    path: string;
    /** content type of request body */
    type?: ContentType;
    /** query params */
    query?: QueryParamsType;
    /** format of response (i.e. response.json() -> format: "json") */
    format?: keyof Omit<Body, "body" | "bodyUsed">;
    /** request body */
    body?: unknown;
    /** base url */
    baseUrl?: string;
    /** request cancellation token */
    cancelToken?: CancelToken;
}
export declare type RequestParams = Omit<FullRequestParams, "body" | "method" | "query" | "path">;
export interface ApiConfig<SecurityDataType = unknown> {
    baseUrl?: string;
    baseApiParams?: Omit<RequestParams, "baseUrl" | "cancelToken" | "signal">;
    securityWorker?: (securityData: SecurityDataType) => RequestParams | void;
}
export interface HttpResponse<D extends unknown, E extends unknown = unknown> extends Response {
    data: D;
    error: E;
}
declare type CancelToken = Symbol | string | number;
export declare enum ContentType {
    Json = "application/json",
    FormData = "multipart/form-data",
    UrlEncoded = "application/x-www-form-urlencoded"
}
export declare class HttpClient<SecurityDataType = unknown> {
    baseUrl: string;
    private securityData;
    private securityWorker;
    private abortControllers;
    private baseApiParams;
    constructor(apiConfig?: ApiConfig<SecurityDataType>);
    setSecurityData: (data: SecurityDataType) => void;
    private addQueryParam;
    protected toQueryString(rawQuery?: QueryParamsType): string;
    protected addQueryParams(rawQuery?: QueryParamsType): string;
    private contentFormatters;
    private mergeRequestParams;
    private createAbortSignal;
    abortRequest: (cancelToken: CancelToken) => void;
    request: <T = any, E = any>({ body, secure, path, type, query, format, baseUrl, cancelToken, ...params }: FullRequestParams) => Promise<HttpResponse<T, E>>;
}
/**
 * @title consuming/buy_order_book.proto
 * @version version not set
 */
export declare class Api<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {
    /**
     * No description
     *
     * @tags Query
     * @name QueryBuyOrderBookAll
     * @summary Queries a list of buyOrderBook items.
     * @request GET:/tendermint/bandchain/consuming/buyOrderBook
     */
    queryBuyOrderBookAll: (query?: {
        "pagination.key"?: string;
        "pagination.offset"?: string;
        "pagination.limit"?: string;
        "pagination.countTotal"?: boolean;
    }, params?: RequestParams) => Promise<HttpResponse<ConsumingQueryAllBuyOrderBookResponse, RpcStatus>>;
    /**
     * No description
     *
     * @tags Query
     * @name QueryBuyOrderBook
     * @summary Queries a buyOrderBook by index.
     * @request GET:/tendermint/bandchain/consuming/buyOrderBook/{index}
     */
    queryBuyOrderBook: (index: string, params?: RequestParams) => Promise<HttpResponse<ConsumingQueryGetBuyOrderBookResponse, RpcStatus>>;
    /**
     * No description
     *
     * @tags Query
     * @name QuerySellOrderBookAll
     * @summary Queries a list of sellOrderBook items.
     * @request GET:/tendermint/bandchain/consuming/sellOrderBook
     */
    querySellOrderBookAll: (query?: {
        "pagination.key"?: string;
        "pagination.offset"?: string;
        "pagination.limit"?: string;
        "pagination.countTotal"?: boolean;
    }, params?: RequestParams) => Promise<HttpResponse<ConsumingQueryAllSellOrderBookResponse, RpcStatus>>;
    /**
     * No description
     *
     * @tags Query
     * @name QuerySellOrderBook
     * @summary Queries a sellOrderBook by index.
     * @request GET:/tendermint/bandchain/consuming/sellOrderBook/{index}
     */
    querySellOrderBook: (index: string, params?: RequestParams) => Promise<HttpResponse<ConsumingQueryGetSellOrderBookResponse, RpcStatus>>;
    /**
     * No description
     *
     * @tags Query
     * @name QueryLastOracleId
     * @summary LastOracleId
     * @request GET:/tendermint/consuming/last_request_id
     */
    queryLastOracleId: (params?: RequestParams) => Promise<HttpResponse<ConsumingQueryLastOracleIdResponse, RpcStatus>>;
    /**
     * No description
     *
     * @tags Query
     * @name QueryOracleResult
     * @summary Request defines a rpc handler method for MsgOracleData.
     * @request GET:/tendermint/consuming/result/{requestId}
     */
    queryOracleResult: (requestId: string, params?: RequestParams) => Promise<HttpResponse<ConsumingQueryOracleResponse, RpcStatus>>;
}
export {};