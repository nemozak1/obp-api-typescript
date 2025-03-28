/* tslint:disable */
/* eslint-disable */
/**
 * Open Bank Project API
 * An Open Source API for Banks. (c) TESOBE GmbH. 2011 - 2025. Licensed under the AGPL and commercial licences.
 *
 * OpenAPI spec version: v5.1.0
 * Contact: contact@tesobe.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

import globalAxios, { AxiosResponse, AxiosInstance, AxiosRequestConfig } from 'axios';
import { Configuration } from '../configuration';
// Some imports not used depending on template conditions
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from '../base';
import { CallLimitPostJsonV400 } from '../models';
import { ErrorUnknownError } from '../models';
import { ErrorUserNotLoggedIn } from '../models';
import { RateLimitingInfoV310 } from '../models';
/**
 * RateLimitsApi - axios parameter creator
 * @export
 */
export const RateLimitsApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * <p>Get information about the Rate Limiting setup on this OBP Instance such as:</p><p>Is rate limiting enabled and active?<br />What backend is used to keep track of the API calls (e.g. REDIS).</p><p>Note: Rate limiting can be set at the Consumer level and also for anonymous calls.</p><p>See the consumer rate limits / call limits endpoints.</p><p>User Authentication is Required. The User must be logged in. The Application must also be authenticated.</p><p><strong>JSON response body fields:</strong></p><p><a href=\"/glossary#enabled\"><strong>enabled</strong></a>: false</p><p><a href=\"/glossary#is_active\"><strong>is_active</strong></a>: false</p><p><a href=\"/glossary#service_available\"><strong>service_available</strong></a>:</p><p><a href=\"/glossary#technology\"><strong>technology</strong></a>: technology1</p>
         * @summary Get Rate Limiting Info
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        oBPv310GetRateLimitingInfo: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/obp/v3.1.0/rate-limiting`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions :AxiosRequestConfig = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication directLogin required
            if (configuration && configuration.apiKey) {
                const localVarApiKeyValue = typeof configuration.apiKey === 'function'
                    ? await configuration.apiKey("Authorization")
                    : await configuration.apiKey;
                localVarHeaderParameter["Authorization"] = localVarApiKeyValue;
            }

            // authentication gatewayLogin required
            if (configuration && configuration.apiKey) {
                const localVarApiKeyValue = typeof configuration.apiKey === 'function'
                    ? await configuration.apiKey("Authorization")
                    : await configuration.apiKey;
                localVarHeaderParameter["Authorization"] = localVarApiKeyValue;
            }

            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.params) {
                query.set(key, options.params[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * <p>Set the API rate limits / call limits for a Consumer:</p><p>Rate limiting can be set:</p><p>Per Second<br />Per Minute<br />Per Hour<br />Per Week<br />Per Month</p><p>User Authentication is Required. The User must be logged in. The Application must also be authenticated.</p><p><strong>URL Parameters:</strong></p><p><a href=\"/glossary#\">CONSUMER_ID</a>: 7uy8a7e4-6d02-40e3-a129-0b2bf89de8uh</p><p><strong>JSON response body fields:</strong></p><p><a href=\"/glossary#from_date\"><strong>from_date</strong></a>: 1100-01-01T01:01:01.000Z</p><p><a href=\"/glossary#per_day_call_limit\"><strong>per_day_call_limit</strong></a>:</p><p><a href=\"/glossary#per_hour_call_limit\"><strong>per_hour_call_limit</strong></a>:</p><p><a href=\"/glossary#per_minute_call_limit\"><strong>per_minute_call_limit</strong></a>:</p><p><a href=\"/glossary#per_month_call_limit\"><strong>per_month_call_limit</strong></a>:</p><p><a href=\"/glossary#per_second_call_limit\"><strong>per_second_call_limit</strong></a>: 10</p><p><a href=\"/glossary#per_week_call_limit\"><strong>per_week_call_limit</strong></a>:</p><p><a href=\"/glossary#to_date\"><strong>to_date</strong></a>: 1100-01-01T01:01:01.000Z</p><p><a href=\"/glossary#\">api_name</a>: api_name</p><p><a href=\"/glossary#api_version\">api_version</a>:</p><p><a href=\"/glossary#\">bank_id</a>: gh.29.uk</p>
         * @summary Set Rate Limits / Call Limits per Consumer
         * @param {CallLimitPostJsonV400} body CallLimitPostJsonV400 object that needs to be added.
         * @param {string} CONSUMER_ID new consumer id
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        oBPv400CallsLimit: async (body: CallLimitPostJsonV400, CONSUMER_ID: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'body' is not null or undefined
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling oBPv400CallsLimit.');
            }
            // verify required parameter 'CONSUMER_ID' is not null or undefined
            if (CONSUMER_ID === null || CONSUMER_ID === undefined) {
                throw new RequiredError('CONSUMER_ID','Required parameter CONSUMER_ID was null or undefined when calling oBPv400CallsLimit.');
            }
            const localVarPath = `/obp/v4.0.0/management/consumers/{CONSUMER_ID}/consumer/call-limits`
                .replace(`{${"CONSUMER_ID"}}`, encodeURIComponent(String(CONSUMER_ID)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions :AxiosRequestConfig = { method: 'PUT', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication directLogin required
            if (configuration && configuration.apiKey) {
                const localVarApiKeyValue = typeof configuration.apiKey === 'function'
                    ? await configuration.apiKey("Authorization")
                    : await configuration.apiKey;
                localVarHeaderParameter["Authorization"] = localVarApiKeyValue;
            }

            // authentication gatewayLogin required
            if (configuration && configuration.apiKey) {
                const localVarApiKeyValue = typeof configuration.apiKey === 'function'
                    ? await configuration.apiKey("Authorization")
                    : await configuration.apiKey;
                localVarHeaderParameter["Authorization"] = localVarApiKeyValue;
            }

            localVarHeaderParameter['Content-Type'] = '*/*';

            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.params) {
                query.set(key, options.params[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            const needsSerialization = (typeof body !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
            localVarRequestOptions.data =  needsSerialization ? JSON.stringify(body !== undefined ? body : {}) : (body || "");

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * RateLimitsApi - functional programming interface
 * @export
 */
export const RateLimitsApiFp = function(configuration?: Configuration) {
    return {
        /**
         * <p>Get information about the Rate Limiting setup on this OBP Instance such as:</p><p>Is rate limiting enabled and active?<br />What backend is used to keep track of the API calls (e.g. REDIS).</p><p>Note: Rate limiting can be set at the Consumer level and also for anonymous calls.</p><p>See the consumer rate limits / call limits endpoints.</p><p>User Authentication is Required. The User must be logged in. The Application must also be authenticated.</p><p><strong>JSON response body fields:</strong></p><p><a href=\"/glossary#enabled\"><strong>enabled</strong></a>: false</p><p><a href=\"/glossary#is_active\"><strong>is_active</strong></a>: false</p><p><a href=\"/glossary#service_available\"><strong>service_available</strong></a>:</p><p><a href=\"/glossary#technology\"><strong>technology</strong></a>: technology1</p>
         * @summary Get Rate Limiting Info
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async oBPv310GetRateLimitingInfo(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<RateLimitingInfoV310>>> {
            const localVarAxiosArgs = await RateLimitsApiAxiosParamCreator(configuration).oBPv310GetRateLimitingInfo(options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * <p>Set the API rate limits / call limits for a Consumer:</p><p>Rate limiting can be set:</p><p>Per Second<br />Per Minute<br />Per Hour<br />Per Week<br />Per Month</p><p>User Authentication is Required. The User must be logged in. The Application must also be authenticated.</p><p><strong>URL Parameters:</strong></p><p><a href=\"/glossary#\">CONSUMER_ID</a>: 7uy8a7e4-6d02-40e3-a129-0b2bf89de8uh</p><p><strong>JSON response body fields:</strong></p><p><a href=\"/glossary#from_date\"><strong>from_date</strong></a>: 1100-01-01T01:01:01.000Z</p><p><a href=\"/glossary#per_day_call_limit\"><strong>per_day_call_limit</strong></a>:</p><p><a href=\"/glossary#per_hour_call_limit\"><strong>per_hour_call_limit</strong></a>:</p><p><a href=\"/glossary#per_minute_call_limit\"><strong>per_minute_call_limit</strong></a>:</p><p><a href=\"/glossary#per_month_call_limit\"><strong>per_month_call_limit</strong></a>:</p><p><a href=\"/glossary#per_second_call_limit\"><strong>per_second_call_limit</strong></a>: 10</p><p><a href=\"/glossary#per_week_call_limit\"><strong>per_week_call_limit</strong></a>:</p><p><a href=\"/glossary#to_date\"><strong>to_date</strong></a>: 1100-01-01T01:01:01.000Z</p><p><a href=\"/glossary#\">api_name</a>: api_name</p><p><a href=\"/glossary#api_version\">api_version</a>:</p><p><a href=\"/glossary#\">bank_id</a>: gh.29.uk</p>
         * @summary Set Rate Limits / Call Limits per Consumer
         * @param {CallLimitPostJsonV400} body CallLimitPostJsonV400 object that needs to be added.
         * @param {string} CONSUMER_ID new consumer id
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async oBPv400CallsLimit(body: CallLimitPostJsonV400, CONSUMER_ID: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<CallLimitPostJsonV400>>> {
            const localVarAxiosArgs = await RateLimitsApiAxiosParamCreator(configuration).oBPv400CallsLimit(body, CONSUMER_ID, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * RateLimitsApi - factory interface
 * @export
 */
export const RateLimitsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * <p>Get information about the Rate Limiting setup on this OBP Instance such as:</p><p>Is rate limiting enabled and active?<br />What backend is used to keep track of the API calls (e.g. REDIS).</p><p>Note: Rate limiting can be set at the Consumer level and also for anonymous calls.</p><p>See the consumer rate limits / call limits endpoints.</p><p>User Authentication is Required. The User must be logged in. The Application must also be authenticated.</p><p><strong>JSON response body fields:</strong></p><p><a href=\"/glossary#enabled\"><strong>enabled</strong></a>: false</p><p><a href=\"/glossary#is_active\"><strong>is_active</strong></a>: false</p><p><a href=\"/glossary#service_available\"><strong>service_available</strong></a>:</p><p><a href=\"/glossary#technology\"><strong>technology</strong></a>: technology1</p>
         * @summary Get Rate Limiting Info
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async oBPv310GetRateLimitingInfo(options?: AxiosRequestConfig): Promise<AxiosResponse<RateLimitingInfoV310>> {
            return RateLimitsApiFp(configuration).oBPv310GetRateLimitingInfo(options).then((request) => request(axios, basePath));
        },
        /**
         * <p>Set the API rate limits / call limits for a Consumer:</p><p>Rate limiting can be set:</p><p>Per Second<br />Per Minute<br />Per Hour<br />Per Week<br />Per Month</p><p>User Authentication is Required. The User must be logged in. The Application must also be authenticated.</p><p><strong>URL Parameters:</strong></p><p><a href=\"/glossary#\">CONSUMER_ID</a>: 7uy8a7e4-6d02-40e3-a129-0b2bf89de8uh</p><p><strong>JSON response body fields:</strong></p><p><a href=\"/glossary#from_date\"><strong>from_date</strong></a>: 1100-01-01T01:01:01.000Z</p><p><a href=\"/glossary#per_day_call_limit\"><strong>per_day_call_limit</strong></a>:</p><p><a href=\"/glossary#per_hour_call_limit\"><strong>per_hour_call_limit</strong></a>:</p><p><a href=\"/glossary#per_minute_call_limit\"><strong>per_minute_call_limit</strong></a>:</p><p><a href=\"/glossary#per_month_call_limit\"><strong>per_month_call_limit</strong></a>:</p><p><a href=\"/glossary#per_second_call_limit\"><strong>per_second_call_limit</strong></a>: 10</p><p><a href=\"/glossary#per_week_call_limit\"><strong>per_week_call_limit</strong></a>:</p><p><a href=\"/glossary#to_date\"><strong>to_date</strong></a>: 1100-01-01T01:01:01.000Z</p><p><a href=\"/glossary#\">api_name</a>: api_name</p><p><a href=\"/glossary#api_version\">api_version</a>:</p><p><a href=\"/glossary#\">bank_id</a>: gh.29.uk</p>
         * @summary Set Rate Limits / Call Limits per Consumer
         * @param {CallLimitPostJsonV400} body CallLimitPostJsonV400 object that needs to be added.
         * @param {string} CONSUMER_ID new consumer id
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async oBPv400CallsLimit(body: CallLimitPostJsonV400, CONSUMER_ID: string, options?: AxiosRequestConfig): Promise<AxiosResponse<CallLimitPostJsonV400>> {
            return RateLimitsApiFp(configuration).oBPv400CallsLimit(body, CONSUMER_ID, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * RateLimitsApi - object-oriented interface
 * @export
 * @class RateLimitsApi
 * @extends {BaseAPI}
 */
export class RateLimitsApi extends BaseAPI {
    /**
     * <p>Get information about the Rate Limiting setup on this OBP Instance such as:</p><p>Is rate limiting enabled and active?<br />What backend is used to keep track of the API calls (e.g. REDIS).</p><p>Note: Rate limiting can be set at the Consumer level and also for anonymous calls.</p><p>See the consumer rate limits / call limits endpoints.</p><p>User Authentication is Required. The User must be logged in. The Application must also be authenticated.</p><p><strong>JSON response body fields:</strong></p><p><a href=\"/glossary#enabled\"><strong>enabled</strong></a>: false</p><p><a href=\"/glossary#is_active\"><strong>is_active</strong></a>: false</p><p><a href=\"/glossary#service_available\"><strong>service_available</strong></a>:</p><p><a href=\"/glossary#technology\"><strong>technology</strong></a>: technology1</p>
     * @summary Get Rate Limiting Info
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RateLimitsApi
     */
    public async oBPv310GetRateLimitingInfo(options?: AxiosRequestConfig) : Promise<AxiosResponse<RateLimitingInfoV310>> {
        return RateLimitsApiFp(this.configuration).oBPv310GetRateLimitingInfo(options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * <p>Set the API rate limits / call limits for a Consumer:</p><p>Rate limiting can be set:</p><p>Per Second<br />Per Minute<br />Per Hour<br />Per Week<br />Per Month</p><p>User Authentication is Required. The User must be logged in. The Application must also be authenticated.</p><p><strong>URL Parameters:</strong></p><p><a href=\"/glossary#\">CONSUMER_ID</a>: 7uy8a7e4-6d02-40e3-a129-0b2bf89de8uh</p><p><strong>JSON response body fields:</strong></p><p><a href=\"/glossary#from_date\"><strong>from_date</strong></a>: 1100-01-01T01:01:01.000Z</p><p><a href=\"/glossary#per_day_call_limit\"><strong>per_day_call_limit</strong></a>:</p><p><a href=\"/glossary#per_hour_call_limit\"><strong>per_hour_call_limit</strong></a>:</p><p><a href=\"/glossary#per_minute_call_limit\"><strong>per_minute_call_limit</strong></a>:</p><p><a href=\"/glossary#per_month_call_limit\"><strong>per_month_call_limit</strong></a>:</p><p><a href=\"/glossary#per_second_call_limit\"><strong>per_second_call_limit</strong></a>: 10</p><p><a href=\"/glossary#per_week_call_limit\"><strong>per_week_call_limit</strong></a>:</p><p><a href=\"/glossary#to_date\"><strong>to_date</strong></a>: 1100-01-01T01:01:01.000Z</p><p><a href=\"/glossary#\">api_name</a>: api_name</p><p><a href=\"/glossary#api_version\">api_version</a>:</p><p><a href=\"/glossary#\">bank_id</a>: gh.29.uk</p>
     * @summary Set Rate Limits / Call Limits per Consumer
     * @param {CallLimitPostJsonV400} body CallLimitPostJsonV400 object that needs to be added.
     * @param {string} CONSUMER_ID new consumer id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RateLimitsApi
     */
    public async oBPv400CallsLimit(body: CallLimitPostJsonV400, CONSUMER_ID: string, options?: AxiosRequestConfig) : Promise<AxiosResponse<CallLimitPostJsonV400>> {
        return RateLimitsApiFp(this.configuration).oBPv400CallsLimit(body, CONSUMER_ID, options).then((request) => request(this.axios, this.basePath));
    }
}
