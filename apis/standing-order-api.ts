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
import { ACCOUNTIDStandingorderBody } from '../models';
import { ErrorUserNotLoggedIn } from '../models';
import { InlineResponse20121 } from '../models';
import { VIEWIDStandingorderBody } from '../models';
/**
 * StandingOrderApi - axios parameter creator
 * @export
 */
export const StandingOrderApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * <p>Create standing order for an account.</p><p>when -&gt; frequency = {‘YEARLY’,’MONTHLY, ‘WEEKLY’, ‘BI-WEEKLY’, DAILY’}<br />when -&gt; detail = { ‘FIRST_MONDAY’, ‘FIRST_DAY’, ‘LAST_DAY’}}</p><p>User Authentication is Required. The User must be logged in. The Application must also be authenticated.</p><p><strong>URL Parameters:</strong></p><p><a href=\"/glossary#Account.account_id\">ACCOUNT_ID</a>: 8ca8a7e4-6d02-40e3-a129-0b2bf89de9f0</p><p><a href=\"/glossary#Bank.bank_id\">BANK_ID</a>: gh.29.uk</p><p><a href=\"/glossary#this_view_id\">VIEW_ID</a>: owner</p><p><strong>JSON request body fields:</strong></p><p><a href=\"/glossary#\"><strong>amount</strong></a>: 10.12</p><p><a href=\"/glossary#\"><strong>counterparty_id</strong></a>: 9fg8a7e4-6d02-40e3-a129-0b2bf89de8uh</p><p><a href=\"/glossary#\"><strong>currency</strong></a>: EUR</p><p><a href=\"/glossary#\"><strong>customer_id</strong></a>: 7uy8a7e4-6d02-40e3-a129-0b2bf89de8uh</p><p><a href=\"/glossary#\"><strong>date_starts</strong></a>: 2020-01-27</p><p><a href=\"/glossary#detail\"><strong>detail</strong></a>:</p><p><a href=\"/glossary#frequency\"><strong>frequency</strong></a>: DAILY</p><p><a href=\"/glossary#\"><strong>user_id</strong></a>: 9ca9a7e4-6d02-40e3-a129-0b2bf89de9b1</p><p><a href=\"/glossary#when\"><strong>when</strong></a>: 2020-01-27</p><p><a href=\"/glossary#\">date_expires</a>: 2021-01-27</p><p><a href=\"/glossary#\">date_signed</a>: 2020-01-27</p><p><strong>JSON response body fields:</strong></p><p><a href=\"/glossary#\"><strong>account_id</strong></a>: 8ca8a7e4-6d02-40e3-a129-0b2bf89de9f0</p><p><a href=\"/glossary#active\"><strong>active</strong></a>: false</p><p><a href=\"/glossary#\"><strong>amount</strong></a>: 10.12</p><p><a href=\"/glossary#\"><strong>bank_id</strong></a>: gh.29.uk</p><p><a href=\"/glossary#\"><strong>counterparty_id</strong></a>: 9fg8a7e4-6d02-40e3-a129-0b2bf89de8uh</p><p><a href=\"/glossary#\"><strong>currency</strong></a>: EUR</p><p><a href=\"/glossary#\"><strong>customer_id</strong></a>: 7uy8a7e4-6d02-40e3-a129-0b2bf89de8uh</p><p><a href=\"/glossary#\"><strong>date_cancelled</strong></a>: 2020-01-27</p><p><a href=\"/glossary#\"><strong>date_expires</strong></a>: 2021-01-27</p><p><a href=\"/glossary#\"><strong>date_signed</strong></a>: 2020-01-27</p><p><a href=\"/glossary#\"><strong>date_starts</strong></a>: 2020-01-27</p><p><a href=\"/glossary#detail\"><strong>detail</strong></a>:</p><p><a href=\"/glossary#frequency\"><strong>frequency</strong></a>: DAILY</p><p><a href=\"/glossary#standing_order_id\"><strong>standing_order_id</strong></a>:</p><p><a href=\"/glossary#\"><strong>user_id</strong></a>: 9ca9a7e4-6d02-40e3-a129-0b2bf89de9b1</p><p><a href=\"/glossary#when\"><strong>when</strong></a>: 2020-01-27</p>
         * @summary Create Standing Order
         * @param {VIEWIDStandingorderBody} body JObject object that needs to be added.
         * @param {string} VIEW_ID The view id
         * @param {string} ACCOUNT_ID The account id
         * @param {string} BANK_ID The bank id
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        oBPv400CreateStandingOrder: async (body: VIEWIDStandingorderBody, VIEW_ID: string, ACCOUNT_ID: string, BANK_ID: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'body' is not null or undefined
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling oBPv400CreateStandingOrder.');
            }
            // verify required parameter 'VIEW_ID' is not null or undefined
            if (VIEW_ID === null || VIEW_ID === undefined) {
                throw new RequiredError('VIEW_ID','Required parameter VIEW_ID was null or undefined when calling oBPv400CreateStandingOrder.');
            }
            // verify required parameter 'ACCOUNT_ID' is not null or undefined
            if (ACCOUNT_ID === null || ACCOUNT_ID === undefined) {
                throw new RequiredError('ACCOUNT_ID','Required parameter ACCOUNT_ID was null or undefined when calling oBPv400CreateStandingOrder.');
            }
            // verify required parameter 'BANK_ID' is not null or undefined
            if (BANK_ID === null || BANK_ID === undefined) {
                throw new RequiredError('BANK_ID','Required parameter BANK_ID was null or undefined when calling oBPv400CreateStandingOrder.');
            }
            const localVarPath = `/obp/v4.0.0/banks/{BANK_ID}/accounts/{ACCOUNT_ID}/{VIEW_ID}/standing-order`
                .replace(`{${"VIEW_ID"}}`, encodeURIComponent(String(VIEW_ID)))
                .replace(`{${"ACCOUNT_ID"}}`, encodeURIComponent(String(ACCOUNT_ID)))
                .replace(`{${"BANK_ID"}}`, encodeURIComponent(String(BANK_ID)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions :AxiosRequestConfig = { method: 'POST', ...baseOptions, ...options};
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
        /**
         * <p>Create standing order for an account.</p><p>when -&gt; frequency = {‘YEARLY’,’MONTHLY, ‘WEEKLY’, ‘BI-WEEKLY’, DAILY’}<br />when -&gt; detail = { ‘FIRST_MONDAY’, ‘FIRST_DAY’, ‘LAST_DAY’}}</p><p>User Authentication is Required. The User must be logged in. The Application must also be authenticated.</p><p><strong>URL Parameters:</strong></p><p><a href=\"/glossary#Account.account_id\">ACCOUNT_ID</a>: 8ca8a7e4-6d02-40e3-a129-0b2bf89de9f0</p><p><a href=\"/glossary#Bank.bank_id\">BANK_ID</a>: gh.29.uk</p><p><strong>JSON request body fields:</strong></p><p><a href=\"/glossary#\"><strong>amount</strong></a>: 10.12</p><p><a href=\"/glossary#\"><strong>counterparty_id</strong></a>: 9fg8a7e4-6d02-40e3-a129-0b2bf89de8uh</p><p><a href=\"/glossary#\"><strong>currency</strong></a>: EUR</p><p><a href=\"/glossary#\"><strong>customer_id</strong></a>: 7uy8a7e4-6d02-40e3-a129-0b2bf89de8uh</p><p><a href=\"/glossary#\"><strong>date_starts</strong></a>: 2020-01-27</p><p><a href=\"/glossary#detail\"><strong>detail</strong></a>:</p><p><a href=\"/glossary#frequency\"><strong>frequency</strong></a>: DAILY</p><p><a href=\"/glossary#\"><strong>user_id</strong></a>: 9ca9a7e4-6d02-40e3-a129-0b2bf89de9b1</p><p><a href=\"/glossary#when\"><strong>when</strong></a>: 2020-01-27</p><p><a href=\"/glossary#\">date_expires</a>: 2021-01-27</p><p><a href=\"/glossary#\">date_signed</a>: 2020-01-27</p><p><strong>JSON response body fields:</strong></p><p><a href=\"/glossary#\"><strong>account_id</strong></a>: 8ca8a7e4-6d02-40e3-a129-0b2bf89de9f0</p><p><a href=\"/glossary#active\"><strong>active</strong></a>: false</p><p><a href=\"/glossary#\"><strong>amount</strong></a>: 10.12</p><p><a href=\"/glossary#\"><strong>bank_id</strong></a>: gh.29.uk</p><p><a href=\"/glossary#\"><strong>counterparty_id</strong></a>: 9fg8a7e4-6d02-40e3-a129-0b2bf89de8uh</p><p><a href=\"/glossary#\"><strong>currency</strong></a>: EUR</p><p><a href=\"/glossary#\"><strong>customer_id</strong></a>: 7uy8a7e4-6d02-40e3-a129-0b2bf89de8uh</p><p><a href=\"/glossary#\"><strong>date_cancelled</strong></a>: 2020-01-27</p><p><a href=\"/glossary#\"><strong>date_expires</strong></a>: 2021-01-27</p><p><a href=\"/glossary#\"><strong>date_signed</strong></a>: 2020-01-27</p><p><a href=\"/glossary#\"><strong>date_starts</strong></a>: 2020-01-27</p><p><a href=\"/glossary#detail\"><strong>detail</strong></a>:</p><p><a href=\"/glossary#frequency\"><strong>frequency</strong></a>: DAILY</p><p><a href=\"/glossary#standing_order_id\"><strong>standing_order_id</strong></a>:</p><p><a href=\"/glossary#\"><strong>user_id</strong></a>: 9ca9a7e4-6d02-40e3-a129-0b2bf89de9b1</p><p><a href=\"/glossary#when\"><strong>when</strong></a>: 2020-01-27</p>
         * @summary Create Standing Order (management)
         * @param {ACCOUNTIDStandingorderBody} body JObject object that needs to be added.
         * @param {string} ACCOUNT_ID The account id
         * @param {string} BANK_ID The bank id
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        oBPv400CreateStandingOrderManagement: async (body: ACCOUNTIDStandingorderBody, ACCOUNT_ID: string, BANK_ID: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'body' is not null or undefined
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling oBPv400CreateStandingOrderManagement.');
            }
            // verify required parameter 'ACCOUNT_ID' is not null or undefined
            if (ACCOUNT_ID === null || ACCOUNT_ID === undefined) {
                throw new RequiredError('ACCOUNT_ID','Required parameter ACCOUNT_ID was null or undefined when calling oBPv400CreateStandingOrderManagement.');
            }
            // verify required parameter 'BANK_ID' is not null or undefined
            if (BANK_ID === null || BANK_ID === undefined) {
                throw new RequiredError('BANK_ID','Required parameter BANK_ID was null or undefined when calling oBPv400CreateStandingOrderManagement.');
            }
            const localVarPath = `/obp/v4.0.0/management/banks/{BANK_ID}/accounts/{ACCOUNT_ID}/standing-order`
                .replace(`{${"ACCOUNT_ID"}}`, encodeURIComponent(String(ACCOUNT_ID)))
                .replace(`{${"BANK_ID"}}`, encodeURIComponent(String(BANK_ID)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions :AxiosRequestConfig = { method: 'POST', ...baseOptions, ...options};
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
 * StandingOrderApi - functional programming interface
 * @export
 */
export const StandingOrderApiFp = function(configuration?: Configuration) {
    return {
        /**
         * <p>Create standing order for an account.</p><p>when -&gt; frequency = {‘YEARLY’,’MONTHLY, ‘WEEKLY’, ‘BI-WEEKLY’, DAILY’}<br />when -&gt; detail = { ‘FIRST_MONDAY’, ‘FIRST_DAY’, ‘LAST_DAY’}}</p><p>User Authentication is Required. The User must be logged in. The Application must also be authenticated.</p><p><strong>URL Parameters:</strong></p><p><a href=\"/glossary#Account.account_id\">ACCOUNT_ID</a>: 8ca8a7e4-6d02-40e3-a129-0b2bf89de9f0</p><p><a href=\"/glossary#Bank.bank_id\">BANK_ID</a>: gh.29.uk</p><p><a href=\"/glossary#this_view_id\">VIEW_ID</a>: owner</p><p><strong>JSON request body fields:</strong></p><p><a href=\"/glossary#\"><strong>amount</strong></a>: 10.12</p><p><a href=\"/glossary#\"><strong>counterparty_id</strong></a>: 9fg8a7e4-6d02-40e3-a129-0b2bf89de8uh</p><p><a href=\"/glossary#\"><strong>currency</strong></a>: EUR</p><p><a href=\"/glossary#\"><strong>customer_id</strong></a>: 7uy8a7e4-6d02-40e3-a129-0b2bf89de8uh</p><p><a href=\"/glossary#\"><strong>date_starts</strong></a>: 2020-01-27</p><p><a href=\"/glossary#detail\"><strong>detail</strong></a>:</p><p><a href=\"/glossary#frequency\"><strong>frequency</strong></a>: DAILY</p><p><a href=\"/glossary#\"><strong>user_id</strong></a>: 9ca9a7e4-6d02-40e3-a129-0b2bf89de9b1</p><p><a href=\"/glossary#when\"><strong>when</strong></a>: 2020-01-27</p><p><a href=\"/glossary#\">date_expires</a>: 2021-01-27</p><p><a href=\"/glossary#\">date_signed</a>: 2020-01-27</p><p><strong>JSON response body fields:</strong></p><p><a href=\"/glossary#\"><strong>account_id</strong></a>: 8ca8a7e4-6d02-40e3-a129-0b2bf89de9f0</p><p><a href=\"/glossary#active\"><strong>active</strong></a>: false</p><p><a href=\"/glossary#\"><strong>amount</strong></a>: 10.12</p><p><a href=\"/glossary#\"><strong>bank_id</strong></a>: gh.29.uk</p><p><a href=\"/glossary#\"><strong>counterparty_id</strong></a>: 9fg8a7e4-6d02-40e3-a129-0b2bf89de8uh</p><p><a href=\"/glossary#\"><strong>currency</strong></a>: EUR</p><p><a href=\"/glossary#\"><strong>customer_id</strong></a>: 7uy8a7e4-6d02-40e3-a129-0b2bf89de8uh</p><p><a href=\"/glossary#\"><strong>date_cancelled</strong></a>: 2020-01-27</p><p><a href=\"/glossary#\"><strong>date_expires</strong></a>: 2021-01-27</p><p><a href=\"/glossary#\"><strong>date_signed</strong></a>: 2020-01-27</p><p><a href=\"/glossary#\"><strong>date_starts</strong></a>: 2020-01-27</p><p><a href=\"/glossary#detail\"><strong>detail</strong></a>:</p><p><a href=\"/glossary#frequency\"><strong>frequency</strong></a>: DAILY</p><p><a href=\"/glossary#standing_order_id\"><strong>standing_order_id</strong></a>:</p><p><a href=\"/glossary#\"><strong>user_id</strong></a>: 9ca9a7e4-6d02-40e3-a129-0b2bf89de9b1</p><p><a href=\"/glossary#when\"><strong>when</strong></a>: 2020-01-27</p>
         * @summary Create Standing Order
         * @param {VIEWIDStandingorderBody} body JObject object that needs to be added.
         * @param {string} VIEW_ID The view id
         * @param {string} ACCOUNT_ID The account id
         * @param {string} BANK_ID The bank id
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async oBPv400CreateStandingOrder(body: VIEWIDStandingorderBody, VIEW_ID: string, ACCOUNT_ID: string, BANK_ID: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<InlineResponse20121>>> {
            const localVarAxiosArgs = await StandingOrderApiAxiosParamCreator(configuration).oBPv400CreateStandingOrder(body, VIEW_ID, ACCOUNT_ID, BANK_ID, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * <p>Create standing order for an account.</p><p>when -&gt; frequency = {‘YEARLY’,’MONTHLY, ‘WEEKLY’, ‘BI-WEEKLY’, DAILY’}<br />when -&gt; detail = { ‘FIRST_MONDAY’, ‘FIRST_DAY’, ‘LAST_DAY’}}</p><p>User Authentication is Required. The User must be logged in. The Application must also be authenticated.</p><p><strong>URL Parameters:</strong></p><p><a href=\"/glossary#Account.account_id\">ACCOUNT_ID</a>: 8ca8a7e4-6d02-40e3-a129-0b2bf89de9f0</p><p><a href=\"/glossary#Bank.bank_id\">BANK_ID</a>: gh.29.uk</p><p><strong>JSON request body fields:</strong></p><p><a href=\"/glossary#\"><strong>amount</strong></a>: 10.12</p><p><a href=\"/glossary#\"><strong>counterparty_id</strong></a>: 9fg8a7e4-6d02-40e3-a129-0b2bf89de8uh</p><p><a href=\"/glossary#\"><strong>currency</strong></a>: EUR</p><p><a href=\"/glossary#\"><strong>customer_id</strong></a>: 7uy8a7e4-6d02-40e3-a129-0b2bf89de8uh</p><p><a href=\"/glossary#\"><strong>date_starts</strong></a>: 2020-01-27</p><p><a href=\"/glossary#detail\"><strong>detail</strong></a>:</p><p><a href=\"/glossary#frequency\"><strong>frequency</strong></a>: DAILY</p><p><a href=\"/glossary#\"><strong>user_id</strong></a>: 9ca9a7e4-6d02-40e3-a129-0b2bf89de9b1</p><p><a href=\"/glossary#when\"><strong>when</strong></a>: 2020-01-27</p><p><a href=\"/glossary#\">date_expires</a>: 2021-01-27</p><p><a href=\"/glossary#\">date_signed</a>: 2020-01-27</p><p><strong>JSON response body fields:</strong></p><p><a href=\"/glossary#\"><strong>account_id</strong></a>: 8ca8a7e4-6d02-40e3-a129-0b2bf89de9f0</p><p><a href=\"/glossary#active\"><strong>active</strong></a>: false</p><p><a href=\"/glossary#\"><strong>amount</strong></a>: 10.12</p><p><a href=\"/glossary#\"><strong>bank_id</strong></a>: gh.29.uk</p><p><a href=\"/glossary#\"><strong>counterparty_id</strong></a>: 9fg8a7e4-6d02-40e3-a129-0b2bf89de8uh</p><p><a href=\"/glossary#\"><strong>currency</strong></a>: EUR</p><p><a href=\"/glossary#\"><strong>customer_id</strong></a>: 7uy8a7e4-6d02-40e3-a129-0b2bf89de8uh</p><p><a href=\"/glossary#\"><strong>date_cancelled</strong></a>: 2020-01-27</p><p><a href=\"/glossary#\"><strong>date_expires</strong></a>: 2021-01-27</p><p><a href=\"/glossary#\"><strong>date_signed</strong></a>: 2020-01-27</p><p><a href=\"/glossary#\"><strong>date_starts</strong></a>: 2020-01-27</p><p><a href=\"/glossary#detail\"><strong>detail</strong></a>:</p><p><a href=\"/glossary#frequency\"><strong>frequency</strong></a>: DAILY</p><p><a href=\"/glossary#standing_order_id\"><strong>standing_order_id</strong></a>:</p><p><a href=\"/glossary#\"><strong>user_id</strong></a>: 9ca9a7e4-6d02-40e3-a129-0b2bf89de9b1</p><p><a href=\"/glossary#when\"><strong>when</strong></a>: 2020-01-27</p>
         * @summary Create Standing Order (management)
         * @param {ACCOUNTIDStandingorderBody} body JObject object that needs to be added.
         * @param {string} ACCOUNT_ID The account id
         * @param {string} BANK_ID The bank id
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async oBPv400CreateStandingOrderManagement(body: ACCOUNTIDStandingorderBody, ACCOUNT_ID: string, BANK_ID: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<InlineResponse20121>>> {
            const localVarAxiosArgs = await StandingOrderApiAxiosParamCreator(configuration).oBPv400CreateStandingOrderManagement(body, ACCOUNT_ID, BANK_ID, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * StandingOrderApi - factory interface
 * @export
 */
export const StandingOrderApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * <p>Create standing order for an account.</p><p>when -&gt; frequency = {‘YEARLY’,’MONTHLY, ‘WEEKLY’, ‘BI-WEEKLY’, DAILY’}<br />when -&gt; detail = { ‘FIRST_MONDAY’, ‘FIRST_DAY’, ‘LAST_DAY’}}</p><p>User Authentication is Required. The User must be logged in. The Application must also be authenticated.</p><p><strong>URL Parameters:</strong></p><p><a href=\"/glossary#Account.account_id\">ACCOUNT_ID</a>: 8ca8a7e4-6d02-40e3-a129-0b2bf89de9f0</p><p><a href=\"/glossary#Bank.bank_id\">BANK_ID</a>: gh.29.uk</p><p><a href=\"/glossary#this_view_id\">VIEW_ID</a>: owner</p><p><strong>JSON request body fields:</strong></p><p><a href=\"/glossary#\"><strong>amount</strong></a>: 10.12</p><p><a href=\"/glossary#\"><strong>counterparty_id</strong></a>: 9fg8a7e4-6d02-40e3-a129-0b2bf89de8uh</p><p><a href=\"/glossary#\"><strong>currency</strong></a>: EUR</p><p><a href=\"/glossary#\"><strong>customer_id</strong></a>: 7uy8a7e4-6d02-40e3-a129-0b2bf89de8uh</p><p><a href=\"/glossary#\"><strong>date_starts</strong></a>: 2020-01-27</p><p><a href=\"/glossary#detail\"><strong>detail</strong></a>:</p><p><a href=\"/glossary#frequency\"><strong>frequency</strong></a>: DAILY</p><p><a href=\"/glossary#\"><strong>user_id</strong></a>: 9ca9a7e4-6d02-40e3-a129-0b2bf89de9b1</p><p><a href=\"/glossary#when\"><strong>when</strong></a>: 2020-01-27</p><p><a href=\"/glossary#\">date_expires</a>: 2021-01-27</p><p><a href=\"/glossary#\">date_signed</a>: 2020-01-27</p><p><strong>JSON response body fields:</strong></p><p><a href=\"/glossary#\"><strong>account_id</strong></a>: 8ca8a7e4-6d02-40e3-a129-0b2bf89de9f0</p><p><a href=\"/glossary#active\"><strong>active</strong></a>: false</p><p><a href=\"/glossary#\"><strong>amount</strong></a>: 10.12</p><p><a href=\"/glossary#\"><strong>bank_id</strong></a>: gh.29.uk</p><p><a href=\"/glossary#\"><strong>counterparty_id</strong></a>: 9fg8a7e4-6d02-40e3-a129-0b2bf89de8uh</p><p><a href=\"/glossary#\"><strong>currency</strong></a>: EUR</p><p><a href=\"/glossary#\"><strong>customer_id</strong></a>: 7uy8a7e4-6d02-40e3-a129-0b2bf89de8uh</p><p><a href=\"/glossary#\"><strong>date_cancelled</strong></a>: 2020-01-27</p><p><a href=\"/glossary#\"><strong>date_expires</strong></a>: 2021-01-27</p><p><a href=\"/glossary#\"><strong>date_signed</strong></a>: 2020-01-27</p><p><a href=\"/glossary#\"><strong>date_starts</strong></a>: 2020-01-27</p><p><a href=\"/glossary#detail\"><strong>detail</strong></a>:</p><p><a href=\"/glossary#frequency\"><strong>frequency</strong></a>: DAILY</p><p><a href=\"/glossary#standing_order_id\"><strong>standing_order_id</strong></a>:</p><p><a href=\"/glossary#\"><strong>user_id</strong></a>: 9ca9a7e4-6d02-40e3-a129-0b2bf89de9b1</p><p><a href=\"/glossary#when\"><strong>when</strong></a>: 2020-01-27</p>
         * @summary Create Standing Order
         * @param {VIEWIDStandingorderBody} body JObject object that needs to be added.
         * @param {string} VIEW_ID The view id
         * @param {string} ACCOUNT_ID The account id
         * @param {string} BANK_ID The bank id
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async oBPv400CreateStandingOrder(body: VIEWIDStandingorderBody, VIEW_ID: string, ACCOUNT_ID: string, BANK_ID: string, options?: AxiosRequestConfig): Promise<AxiosResponse<InlineResponse20121>> {
            return StandingOrderApiFp(configuration).oBPv400CreateStandingOrder(body, VIEW_ID, ACCOUNT_ID, BANK_ID, options).then((request) => request(axios, basePath));
        },
        /**
         * <p>Create standing order for an account.</p><p>when -&gt; frequency = {‘YEARLY’,’MONTHLY, ‘WEEKLY’, ‘BI-WEEKLY’, DAILY’}<br />when -&gt; detail = { ‘FIRST_MONDAY’, ‘FIRST_DAY’, ‘LAST_DAY’}}</p><p>User Authentication is Required. The User must be logged in. The Application must also be authenticated.</p><p><strong>URL Parameters:</strong></p><p><a href=\"/glossary#Account.account_id\">ACCOUNT_ID</a>: 8ca8a7e4-6d02-40e3-a129-0b2bf89de9f0</p><p><a href=\"/glossary#Bank.bank_id\">BANK_ID</a>: gh.29.uk</p><p><strong>JSON request body fields:</strong></p><p><a href=\"/glossary#\"><strong>amount</strong></a>: 10.12</p><p><a href=\"/glossary#\"><strong>counterparty_id</strong></a>: 9fg8a7e4-6d02-40e3-a129-0b2bf89de8uh</p><p><a href=\"/glossary#\"><strong>currency</strong></a>: EUR</p><p><a href=\"/glossary#\"><strong>customer_id</strong></a>: 7uy8a7e4-6d02-40e3-a129-0b2bf89de8uh</p><p><a href=\"/glossary#\"><strong>date_starts</strong></a>: 2020-01-27</p><p><a href=\"/glossary#detail\"><strong>detail</strong></a>:</p><p><a href=\"/glossary#frequency\"><strong>frequency</strong></a>: DAILY</p><p><a href=\"/glossary#\"><strong>user_id</strong></a>: 9ca9a7e4-6d02-40e3-a129-0b2bf89de9b1</p><p><a href=\"/glossary#when\"><strong>when</strong></a>: 2020-01-27</p><p><a href=\"/glossary#\">date_expires</a>: 2021-01-27</p><p><a href=\"/glossary#\">date_signed</a>: 2020-01-27</p><p><strong>JSON response body fields:</strong></p><p><a href=\"/glossary#\"><strong>account_id</strong></a>: 8ca8a7e4-6d02-40e3-a129-0b2bf89de9f0</p><p><a href=\"/glossary#active\"><strong>active</strong></a>: false</p><p><a href=\"/glossary#\"><strong>amount</strong></a>: 10.12</p><p><a href=\"/glossary#\"><strong>bank_id</strong></a>: gh.29.uk</p><p><a href=\"/glossary#\"><strong>counterparty_id</strong></a>: 9fg8a7e4-6d02-40e3-a129-0b2bf89de8uh</p><p><a href=\"/glossary#\"><strong>currency</strong></a>: EUR</p><p><a href=\"/glossary#\"><strong>customer_id</strong></a>: 7uy8a7e4-6d02-40e3-a129-0b2bf89de8uh</p><p><a href=\"/glossary#\"><strong>date_cancelled</strong></a>: 2020-01-27</p><p><a href=\"/glossary#\"><strong>date_expires</strong></a>: 2021-01-27</p><p><a href=\"/glossary#\"><strong>date_signed</strong></a>: 2020-01-27</p><p><a href=\"/glossary#\"><strong>date_starts</strong></a>: 2020-01-27</p><p><a href=\"/glossary#detail\"><strong>detail</strong></a>:</p><p><a href=\"/glossary#frequency\"><strong>frequency</strong></a>: DAILY</p><p><a href=\"/glossary#standing_order_id\"><strong>standing_order_id</strong></a>:</p><p><a href=\"/glossary#\"><strong>user_id</strong></a>: 9ca9a7e4-6d02-40e3-a129-0b2bf89de9b1</p><p><a href=\"/glossary#when\"><strong>when</strong></a>: 2020-01-27</p>
         * @summary Create Standing Order (management)
         * @param {ACCOUNTIDStandingorderBody} body JObject object that needs to be added.
         * @param {string} ACCOUNT_ID The account id
         * @param {string} BANK_ID The bank id
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async oBPv400CreateStandingOrderManagement(body: ACCOUNTIDStandingorderBody, ACCOUNT_ID: string, BANK_ID: string, options?: AxiosRequestConfig): Promise<AxiosResponse<InlineResponse20121>> {
            return StandingOrderApiFp(configuration).oBPv400CreateStandingOrderManagement(body, ACCOUNT_ID, BANK_ID, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * StandingOrderApi - object-oriented interface
 * @export
 * @class StandingOrderApi
 * @extends {BaseAPI}
 */
export class StandingOrderApi extends BaseAPI {
    /**
     * <p>Create standing order for an account.</p><p>when -&gt; frequency = {‘YEARLY’,’MONTHLY, ‘WEEKLY’, ‘BI-WEEKLY’, DAILY’}<br />when -&gt; detail = { ‘FIRST_MONDAY’, ‘FIRST_DAY’, ‘LAST_DAY’}}</p><p>User Authentication is Required. The User must be logged in. The Application must also be authenticated.</p><p><strong>URL Parameters:</strong></p><p><a href=\"/glossary#Account.account_id\">ACCOUNT_ID</a>: 8ca8a7e4-6d02-40e3-a129-0b2bf89de9f0</p><p><a href=\"/glossary#Bank.bank_id\">BANK_ID</a>: gh.29.uk</p><p><a href=\"/glossary#this_view_id\">VIEW_ID</a>: owner</p><p><strong>JSON request body fields:</strong></p><p><a href=\"/glossary#\"><strong>amount</strong></a>: 10.12</p><p><a href=\"/glossary#\"><strong>counterparty_id</strong></a>: 9fg8a7e4-6d02-40e3-a129-0b2bf89de8uh</p><p><a href=\"/glossary#\"><strong>currency</strong></a>: EUR</p><p><a href=\"/glossary#\"><strong>customer_id</strong></a>: 7uy8a7e4-6d02-40e3-a129-0b2bf89de8uh</p><p><a href=\"/glossary#\"><strong>date_starts</strong></a>: 2020-01-27</p><p><a href=\"/glossary#detail\"><strong>detail</strong></a>:</p><p><a href=\"/glossary#frequency\"><strong>frequency</strong></a>: DAILY</p><p><a href=\"/glossary#\"><strong>user_id</strong></a>: 9ca9a7e4-6d02-40e3-a129-0b2bf89de9b1</p><p><a href=\"/glossary#when\"><strong>when</strong></a>: 2020-01-27</p><p><a href=\"/glossary#\">date_expires</a>: 2021-01-27</p><p><a href=\"/glossary#\">date_signed</a>: 2020-01-27</p><p><strong>JSON response body fields:</strong></p><p><a href=\"/glossary#\"><strong>account_id</strong></a>: 8ca8a7e4-6d02-40e3-a129-0b2bf89de9f0</p><p><a href=\"/glossary#active\"><strong>active</strong></a>: false</p><p><a href=\"/glossary#\"><strong>amount</strong></a>: 10.12</p><p><a href=\"/glossary#\"><strong>bank_id</strong></a>: gh.29.uk</p><p><a href=\"/glossary#\"><strong>counterparty_id</strong></a>: 9fg8a7e4-6d02-40e3-a129-0b2bf89de8uh</p><p><a href=\"/glossary#\"><strong>currency</strong></a>: EUR</p><p><a href=\"/glossary#\"><strong>customer_id</strong></a>: 7uy8a7e4-6d02-40e3-a129-0b2bf89de8uh</p><p><a href=\"/glossary#\"><strong>date_cancelled</strong></a>: 2020-01-27</p><p><a href=\"/glossary#\"><strong>date_expires</strong></a>: 2021-01-27</p><p><a href=\"/glossary#\"><strong>date_signed</strong></a>: 2020-01-27</p><p><a href=\"/glossary#\"><strong>date_starts</strong></a>: 2020-01-27</p><p><a href=\"/glossary#detail\"><strong>detail</strong></a>:</p><p><a href=\"/glossary#frequency\"><strong>frequency</strong></a>: DAILY</p><p><a href=\"/glossary#standing_order_id\"><strong>standing_order_id</strong></a>:</p><p><a href=\"/glossary#\"><strong>user_id</strong></a>: 9ca9a7e4-6d02-40e3-a129-0b2bf89de9b1</p><p><a href=\"/glossary#when\"><strong>when</strong></a>: 2020-01-27</p>
     * @summary Create Standing Order
     * @param {VIEWIDStandingorderBody} body JObject object that needs to be added.
     * @param {string} VIEW_ID The view id
     * @param {string} ACCOUNT_ID The account id
     * @param {string} BANK_ID The bank id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof StandingOrderApi
     */
    public async oBPv400CreateStandingOrder(body: VIEWIDStandingorderBody, VIEW_ID: string, ACCOUNT_ID: string, BANK_ID: string, options?: AxiosRequestConfig) : Promise<AxiosResponse<InlineResponse20121>> {
        return StandingOrderApiFp(this.configuration).oBPv400CreateStandingOrder(body, VIEW_ID, ACCOUNT_ID, BANK_ID, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * <p>Create standing order for an account.</p><p>when -&gt; frequency = {‘YEARLY’,’MONTHLY, ‘WEEKLY’, ‘BI-WEEKLY’, DAILY’}<br />when -&gt; detail = { ‘FIRST_MONDAY’, ‘FIRST_DAY’, ‘LAST_DAY’}}</p><p>User Authentication is Required. The User must be logged in. The Application must also be authenticated.</p><p><strong>URL Parameters:</strong></p><p><a href=\"/glossary#Account.account_id\">ACCOUNT_ID</a>: 8ca8a7e4-6d02-40e3-a129-0b2bf89de9f0</p><p><a href=\"/glossary#Bank.bank_id\">BANK_ID</a>: gh.29.uk</p><p><strong>JSON request body fields:</strong></p><p><a href=\"/glossary#\"><strong>amount</strong></a>: 10.12</p><p><a href=\"/glossary#\"><strong>counterparty_id</strong></a>: 9fg8a7e4-6d02-40e3-a129-0b2bf89de8uh</p><p><a href=\"/glossary#\"><strong>currency</strong></a>: EUR</p><p><a href=\"/glossary#\"><strong>customer_id</strong></a>: 7uy8a7e4-6d02-40e3-a129-0b2bf89de8uh</p><p><a href=\"/glossary#\"><strong>date_starts</strong></a>: 2020-01-27</p><p><a href=\"/glossary#detail\"><strong>detail</strong></a>:</p><p><a href=\"/glossary#frequency\"><strong>frequency</strong></a>: DAILY</p><p><a href=\"/glossary#\"><strong>user_id</strong></a>: 9ca9a7e4-6d02-40e3-a129-0b2bf89de9b1</p><p><a href=\"/glossary#when\"><strong>when</strong></a>: 2020-01-27</p><p><a href=\"/glossary#\">date_expires</a>: 2021-01-27</p><p><a href=\"/glossary#\">date_signed</a>: 2020-01-27</p><p><strong>JSON response body fields:</strong></p><p><a href=\"/glossary#\"><strong>account_id</strong></a>: 8ca8a7e4-6d02-40e3-a129-0b2bf89de9f0</p><p><a href=\"/glossary#active\"><strong>active</strong></a>: false</p><p><a href=\"/glossary#\"><strong>amount</strong></a>: 10.12</p><p><a href=\"/glossary#\"><strong>bank_id</strong></a>: gh.29.uk</p><p><a href=\"/glossary#\"><strong>counterparty_id</strong></a>: 9fg8a7e4-6d02-40e3-a129-0b2bf89de8uh</p><p><a href=\"/glossary#\"><strong>currency</strong></a>: EUR</p><p><a href=\"/glossary#\"><strong>customer_id</strong></a>: 7uy8a7e4-6d02-40e3-a129-0b2bf89de8uh</p><p><a href=\"/glossary#\"><strong>date_cancelled</strong></a>: 2020-01-27</p><p><a href=\"/glossary#\"><strong>date_expires</strong></a>: 2021-01-27</p><p><a href=\"/glossary#\"><strong>date_signed</strong></a>: 2020-01-27</p><p><a href=\"/glossary#\"><strong>date_starts</strong></a>: 2020-01-27</p><p><a href=\"/glossary#detail\"><strong>detail</strong></a>:</p><p><a href=\"/glossary#frequency\"><strong>frequency</strong></a>: DAILY</p><p><a href=\"/glossary#standing_order_id\"><strong>standing_order_id</strong></a>:</p><p><a href=\"/glossary#\"><strong>user_id</strong></a>: 9ca9a7e4-6d02-40e3-a129-0b2bf89de9b1</p><p><a href=\"/glossary#when\"><strong>when</strong></a>: 2020-01-27</p>
     * @summary Create Standing Order (management)
     * @param {ACCOUNTIDStandingorderBody} body JObject object that needs to be added.
     * @param {string} ACCOUNT_ID The account id
     * @param {string} BANK_ID The bank id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof StandingOrderApi
     */
    public async oBPv400CreateStandingOrderManagement(body: ACCOUNTIDStandingorderBody, ACCOUNT_ID: string, BANK_ID: string, options?: AxiosRequestConfig) : Promise<AxiosResponse<InlineResponse20121>> {
        return StandingOrderApiFp(this.configuration).oBPv400CreateStandingOrderManagement(body, ACCOUNT_ID, BANK_ID, options).then((request) => request(this.axios, this.basePath));
    }
}
