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
import { CurrenciesJsonV510 } from '../models';
import { ErrorInvalidISOCurrencyCode } from '../models';
import { ErrorUserNotLoggedIn } from '../models';
import { FXRateJsonV220 } from '../models';
/**
 * FXApi - axios parameter creator
 * @export
 */
export const FXApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * <p>Create or Update Fx for the Bank.</p><p>Example:</p><p>“from_currency_code”:“EUR”,<br />“to_currency_code”:“USD”,<br />“conversion_value”: 1.136305,<br />“inverse_conversion_value”: 1 / 1.136305 = 0.8800454103431737,</p><p>Thus 1 Euro = 1.136305 US Dollar<br />and<br />1 US Dollar = 0.8800 Euro</p><p>User Authentication is Required. The User must be logged in. The Application must also be authenticated.</p><p><strong>URL Parameters:</strong></p><p><a href=\"/glossary#Bank.bank_id\">BANK_ID</a>: gh.29.uk</p><p><strong>JSON response body fields:</strong></p><p><a href=\"/glossary#\"><strong>bank_id</strong></a>: gh.29.uk</p><p><a href=\"/glossary#conversion_value\"><strong>conversion_value</strong></a>: 100</p><p><a href=\"/glossary#effective_date\"><strong>effective_date</strong></a>: 2020-01-27</p><p><a href=\"/glossary#from_currency_code\"><strong>from_currency_code</strong></a>:</p><p><a href=\"/glossary#inverse_conversion_value\"><strong>inverse_conversion_value</strong></a>: 50</p><p><a href=\"/glossary#to_currency_code\"><strong>to_currency_code</strong></a>: EUR</p>
         * @summary Create Fx
         * @param {FXRateJsonV220} body FXRateJsonV220 object that needs to be added.
         * @param {string} BANK_ID The bank id
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        oBPv220CreateFx: async (body: FXRateJsonV220, BANK_ID: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'body' is not null or undefined
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling oBPv220CreateFx.');
            }
            // verify required parameter 'BANK_ID' is not null or undefined
            if (BANK_ID === null || BANK_ID === undefined) {
                throw new RequiredError('BANK_ID','Required parameter BANK_ID was null or undefined when calling oBPv220CreateFx.');
            }
            const localVarPath = `/obp/v3.0.0/banks/{BANK_ID}/fx`
                .replace(`{${"BANK_ID"}}`, encodeURIComponent(String(BANK_ID)));
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
        /**
         * <p>Get the latest FX rate specified by BANK_ID, FROM_CURRENCY_CODE and TO_CURRENCY_CODE</p><p>OBP may try different sources of FX rate information depending on the Connector in operation.</p><p>For example we want to convert EUR =&gt; USD:</p><p>OBP will:<br />1st try - Connector (database, core banking system or external FX service)<br />2nd try part 1 - fallbackexchangerates/eur.json<br />2nd try part 2 - fallbackexchangerates/usd.json (the inverse rate is used)<br />3rd try - Hardcoded map of FX rates.</p><p><img src=\"https://user-images.githubusercontent.com/485218/60005085-1eded600-966e-11e9-96fb-798b102d9ad0.png\" alt=\"FX Flow\" /></p><p>User Authentication is Required. The User must be logged in. The Application must also be authenticated.</p><p><strong>URL Parameters:</strong></p><p><a href=\"/glossary#Bank.bank_id\">BANK_ID</a>: gh.29.uk</p><p><a href=\"/glossary#from_currency_code\">FROM_CURRENCY_CODE</a>:</p><p><a href=\"/glossary#to_currency_code\">TO_CURRENCY_CODE</a>: EUR</p><p><strong>JSON response body fields:</strong></p><p><a href=\"/glossary#\"><strong>bank_id</strong></a>: gh.29.uk</p><p><a href=\"/glossary#conversion_value\"><strong>conversion_value</strong></a>: 100</p><p><a href=\"/glossary#effective_date\"><strong>effective_date</strong></a>: 2020-01-27</p><p><a href=\"/glossary#from_currency_code\"><strong>from_currency_code</strong></a>:</p><p><a href=\"/glossary#inverse_conversion_value\"><strong>inverse_conversion_value</strong></a>: 50</p><p><a href=\"/glossary#to_currency_code\"><strong>to_currency_code</strong></a>: EUR</p>
         * @summary Get Current FxRate
         * @param {string} TO_CURRENCY_CODE The to currency code
         * @param {string} FROM_CURRENCY_CODE The from currency code
         * @param {string} BANK_ID The bank id
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        oBPv220GetCurrentFxRate: async (TO_CURRENCY_CODE: string, FROM_CURRENCY_CODE: string, BANK_ID: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'TO_CURRENCY_CODE' is not null or undefined
            if (TO_CURRENCY_CODE === null || TO_CURRENCY_CODE === undefined) {
                throw new RequiredError('TO_CURRENCY_CODE','Required parameter TO_CURRENCY_CODE was null or undefined when calling oBPv220GetCurrentFxRate.');
            }
            // verify required parameter 'FROM_CURRENCY_CODE' is not null or undefined
            if (FROM_CURRENCY_CODE === null || FROM_CURRENCY_CODE === undefined) {
                throw new RequiredError('FROM_CURRENCY_CODE','Required parameter FROM_CURRENCY_CODE was null or undefined when calling oBPv220GetCurrentFxRate.');
            }
            // verify required parameter 'BANK_ID' is not null or undefined
            if (BANK_ID === null || BANK_ID === undefined) {
                throw new RequiredError('BANK_ID','Required parameter BANK_ID was null or undefined when calling oBPv220GetCurrentFxRate.');
            }
            const localVarPath = `/obp/v2.2.0/banks/{BANK_ID}/fx/{FROM_CURRENCY_CODE}/{TO_CURRENCY_CODE}`
                .replace(`{${"TO_CURRENCY_CODE"}}`, encodeURIComponent(String(TO_CURRENCY_CODE)))
                .replace(`{${"FROM_CURRENCY_CODE"}}`, encodeURIComponent(String(FROM_CURRENCY_CODE)))
                .replace(`{${"BANK_ID"}}`, encodeURIComponent(String(BANK_ID)));
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
         * <p>Get Currencies specified by BANK_ID</p><p>User Authentication is Required. The User must be logged in. The Application must also be authenticated.</p><p><strong>URL Parameters:</strong></p><p><a href=\"/glossary#Bank.bank_id\">BANK_ID</a>: gh.29.uk</p><p><strong>JSON response body fields:</strong></p><p><a href=\"/glossary#\"><strong>alphanumeric_code</strong></a>: alphanumeric_code</p><p><a href=\"/glossary#\"><strong>currencies</strong></a>: currencies</p>
         * @summary Get Currencies at a Bank
         * @param {string} BANK_ID The bank id
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        oBPv510GetCurrenciesAtBank: async (BANK_ID: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'BANK_ID' is not null or undefined
            if (BANK_ID === null || BANK_ID === undefined) {
                throw new RequiredError('BANK_ID','Required parameter BANK_ID was null or undefined when calling oBPv510GetCurrenciesAtBank.');
            }
            const localVarPath = `/obp/v5.1.0/banks/{BANK_ID}/currencies`
                .replace(`{${"BANK_ID"}}`, encodeURIComponent(String(BANK_ID)));
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
    }
};

/**
 * FXApi - functional programming interface
 * @export
 */
export const FXApiFp = function(configuration?: Configuration) {
    return {
        /**
         * <p>Create or Update Fx for the Bank.</p><p>Example:</p><p>“from_currency_code”:“EUR”,<br />“to_currency_code”:“USD”,<br />“conversion_value”: 1.136305,<br />“inverse_conversion_value”: 1 / 1.136305 = 0.8800454103431737,</p><p>Thus 1 Euro = 1.136305 US Dollar<br />and<br />1 US Dollar = 0.8800 Euro</p><p>User Authentication is Required. The User must be logged in. The Application must also be authenticated.</p><p><strong>URL Parameters:</strong></p><p><a href=\"/glossary#Bank.bank_id\">BANK_ID</a>: gh.29.uk</p><p><strong>JSON response body fields:</strong></p><p><a href=\"/glossary#\"><strong>bank_id</strong></a>: gh.29.uk</p><p><a href=\"/glossary#conversion_value\"><strong>conversion_value</strong></a>: 100</p><p><a href=\"/glossary#effective_date\"><strong>effective_date</strong></a>: 2020-01-27</p><p><a href=\"/glossary#from_currency_code\"><strong>from_currency_code</strong></a>:</p><p><a href=\"/glossary#inverse_conversion_value\"><strong>inverse_conversion_value</strong></a>: 50</p><p><a href=\"/glossary#to_currency_code\"><strong>to_currency_code</strong></a>: EUR</p>
         * @summary Create Fx
         * @param {FXRateJsonV220} body FXRateJsonV220 object that needs to be added.
         * @param {string} BANK_ID The bank id
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async oBPv220CreateFx(body: FXRateJsonV220, BANK_ID: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<FXRateJsonV220>>> {
            const localVarAxiosArgs = await FXApiAxiosParamCreator(configuration).oBPv220CreateFx(body, BANK_ID, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * <p>Get the latest FX rate specified by BANK_ID, FROM_CURRENCY_CODE and TO_CURRENCY_CODE</p><p>OBP may try different sources of FX rate information depending on the Connector in operation.</p><p>For example we want to convert EUR =&gt; USD:</p><p>OBP will:<br />1st try - Connector (database, core banking system or external FX service)<br />2nd try part 1 - fallbackexchangerates/eur.json<br />2nd try part 2 - fallbackexchangerates/usd.json (the inverse rate is used)<br />3rd try - Hardcoded map of FX rates.</p><p><img src=\"https://user-images.githubusercontent.com/485218/60005085-1eded600-966e-11e9-96fb-798b102d9ad0.png\" alt=\"FX Flow\" /></p><p>User Authentication is Required. The User must be logged in. The Application must also be authenticated.</p><p><strong>URL Parameters:</strong></p><p><a href=\"/glossary#Bank.bank_id\">BANK_ID</a>: gh.29.uk</p><p><a href=\"/glossary#from_currency_code\">FROM_CURRENCY_CODE</a>:</p><p><a href=\"/glossary#to_currency_code\">TO_CURRENCY_CODE</a>: EUR</p><p><strong>JSON response body fields:</strong></p><p><a href=\"/glossary#\"><strong>bank_id</strong></a>: gh.29.uk</p><p><a href=\"/glossary#conversion_value\"><strong>conversion_value</strong></a>: 100</p><p><a href=\"/glossary#effective_date\"><strong>effective_date</strong></a>: 2020-01-27</p><p><a href=\"/glossary#from_currency_code\"><strong>from_currency_code</strong></a>:</p><p><a href=\"/glossary#inverse_conversion_value\"><strong>inverse_conversion_value</strong></a>: 50</p><p><a href=\"/glossary#to_currency_code\"><strong>to_currency_code</strong></a>: EUR</p>
         * @summary Get Current FxRate
         * @param {string} TO_CURRENCY_CODE The to currency code
         * @param {string} FROM_CURRENCY_CODE The from currency code
         * @param {string} BANK_ID The bank id
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async oBPv220GetCurrentFxRate(TO_CURRENCY_CODE: string, FROM_CURRENCY_CODE: string, BANK_ID: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<FXRateJsonV220>>> {
            const localVarAxiosArgs = await FXApiAxiosParamCreator(configuration).oBPv220GetCurrentFxRate(TO_CURRENCY_CODE, FROM_CURRENCY_CODE, BANK_ID, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * <p>Get Currencies specified by BANK_ID</p><p>User Authentication is Required. The User must be logged in. The Application must also be authenticated.</p><p><strong>URL Parameters:</strong></p><p><a href=\"/glossary#Bank.bank_id\">BANK_ID</a>: gh.29.uk</p><p><strong>JSON response body fields:</strong></p><p><a href=\"/glossary#\"><strong>alphanumeric_code</strong></a>: alphanumeric_code</p><p><a href=\"/glossary#\"><strong>currencies</strong></a>: currencies</p>
         * @summary Get Currencies at a Bank
         * @param {string} BANK_ID The bank id
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async oBPv510GetCurrenciesAtBank(BANK_ID: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<CurrenciesJsonV510>>> {
            const localVarAxiosArgs = await FXApiAxiosParamCreator(configuration).oBPv510GetCurrenciesAtBank(BANK_ID, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * FXApi - factory interface
 * @export
 */
export const FXApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * <p>Create or Update Fx for the Bank.</p><p>Example:</p><p>“from_currency_code”:“EUR”,<br />“to_currency_code”:“USD”,<br />“conversion_value”: 1.136305,<br />“inverse_conversion_value”: 1 / 1.136305 = 0.8800454103431737,</p><p>Thus 1 Euro = 1.136305 US Dollar<br />and<br />1 US Dollar = 0.8800 Euro</p><p>User Authentication is Required. The User must be logged in. The Application must also be authenticated.</p><p><strong>URL Parameters:</strong></p><p><a href=\"/glossary#Bank.bank_id\">BANK_ID</a>: gh.29.uk</p><p><strong>JSON response body fields:</strong></p><p><a href=\"/glossary#\"><strong>bank_id</strong></a>: gh.29.uk</p><p><a href=\"/glossary#conversion_value\"><strong>conversion_value</strong></a>: 100</p><p><a href=\"/glossary#effective_date\"><strong>effective_date</strong></a>: 2020-01-27</p><p><a href=\"/glossary#from_currency_code\"><strong>from_currency_code</strong></a>:</p><p><a href=\"/glossary#inverse_conversion_value\"><strong>inverse_conversion_value</strong></a>: 50</p><p><a href=\"/glossary#to_currency_code\"><strong>to_currency_code</strong></a>: EUR</p>
         * @summary Create Fx
         * @param {FXRateJsonV220} body FXRateJsonV220 object that needs to be added.
         * @param {string} BANK_ID The bank id
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async oBPv220CreateFx(body: FXRateJsonV220, BANK_ID: string, options?: AxiosRequestConfig): Promise<AxiosResponse<FXRateJsonV220>> {
            return FXApiFp(configuration).oBPv220CreateFx(body, BANK_ID, options).then((request) => request(axios, basePath));
        },
        /**
         * <p>Get the latest FX rate specified by BANK_ID, FROM_CURRENCY_CODE and TO_CURRENCY_CODE</p><p>OBP may try different sources of FX rate information depending on the Connector in operation.</p><p>For example we want to convert EUR =&gt; USD:</p><p>OBP will:<br />1st try - Connector (database, core banking system or external FX service)<br />2nd try part 1 - fallbackexchangerates/eur.json<br />2nd try part 2 - fallbackexchangerates/usd.json (the inverse rate is used)<br />3rd try - Hardcoded map of FX rates.</p><p><img src=\"https://user-images.githubusercontent.com/485218/60005085-1eded600-966e-11e9-96fb-798b102d9ad0.png\" alt=\"FX Flow\" /></p><p>User Authentication is Required. The User must be logged in. The Application must also be authenticated.</p><p><strong>URL Parameters:</strong></p><p><a href=\"/glossary#Bank.bank_id\">BANK_ID</a>: gh.29.uk</p><p><a href=\"/glossary#from_currency_code\">FROM_CURRENCY_CODE</a>:</p><p><a href=\"/glossary#to_currency_code\">TO_CURRENCY_CODE</a>: EUR</p><p><strong>JSON response body fields:</strong></p><p><a href=\"/glossary#\"><strong>bank_id</strong></a>: gh.29.uk</p><p><a href=\"/glossary#conversion_value\"><strong>conversion_value</strong></a>: 100</p><p><a href=\"/glossary#effective_date\"><strong>effective_date</strong></a>: 2020-01-27</p><p><a href=\"/glossary#from_currency_code\"><strong>from_currency_code</strong></a>:</p><p><a href=\"/glossary#inverse_conversion_value\"><strong>inverse_conversion_value</strong></a>: 50</p><p><a href=\"/glossary#to_currency_code\"><strong>to_currency_code</strong></a>: EUR</p>
         * @summary Get Current FxRate
         * @param {string} TO_CURRENCY_CODE The to currency code
         * @param {string} FROM_CURRENCY_CODE The from currency code
         * @param {string} BANK_ID The bank id
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async oBPv220GetCurrentFxRate(TO_CURRENCY_CODE: string, FROM_CURRENCY_CODE: string, BANK_ID: string, options?: AxiosRequestConfig): Promise<AxiosResponse<FXRateJsonV220>> {
            return FXApiFp(configuration).oBPv220GetCurrentFxRate(TO_CURRENCY_CODE, FROM_CURRENCY_CODE, BANK_ID, options).then((request) => request(axios, basePath));
        },
        /**
         * <p>Get Currencies specified by BANK_ID</p><p>User Authentication is Required. The User must be logged in. The Application must also be authenticated.</p><p><strong>URL Parameters:</strong></p><p><a href=\"/glossary#Bank.bank_id\">BANK_ID</a>: gh.29.uk</p><p><strong>JSON response body fields:</strong></p><p><a href=\"/glossary#\"><strong>alphanumeric_code</strong></a>: alphanumeric_code</p><p><a href=\"/glossary#\"><strong>currencies</strong></a>: currencies</p>
         * @summary Get Currencies at a Bank
         * @param {string} BANK_ID The bank id
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async oBPv510GetCurrenciesAtBank(BANK_ID: string, options?: AxiosRequestConfig): Promise<AxiosResponse<CurrenciesJsonV510>> {
            return FXApiFp(configuration).oBPv510GetCurrenciesAtBank(BANK_ID, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * FXApi - object-oriented interface
 * @export
 * @class FXApi
 * @extends {BaseAPI}
 */
export class FXApi extends BaseAPI {
    /**
     * <p>Create or Update Fx for the Bank.</p><p>Example:</p><p>“from_currency_code”:“EUR”,<br />“to_currency_code”:“USD”,<br />“conversion_value”: 1.136305,<br />“inverse_conversion_value”: 1 / 1.136305 = 0.8800454103431737,</p><p>Thus 1 Euro = 1.136305 US Dollar<br />and<br />1 US Dollar = 0.8800 Euro</p><p>User Authentication is Required. The User must be logged in. The Application must also be authenticated.</p><p><strong>URL Parameters:</strong></p><p><a href=\"/glossary#Bank.bank_id\">BANK_ID</a>: gh.29.uk</p><p><strong>JSON response body fields:</strong></p><p><a href=\"/glossary#\"><strong>bank_id</strong></a>: gh.29.uk</p><p><a href=\"/glossary#conversion_value\"><strong>conversion_value</strong></a>: 100</p><p><a href=\"/glossary#effective_date\"><strong>effective_date</strong></a>: 2020-01-27</p><p><a href=\"/glossary#from_currency_code\"><strong>from_currency_code</strong></a>:</p><p><a href=\"/glossary#inverse_conversion_value\"><strong>inverse_conversion_value</strong></a>: 50</p><p><a href=\"/glossary#to_currency_code\"><strong>to_currency_code</strong></a>: EUR</p>
     * @summary Create Fx
     * @param {FXRateJsonV220} body FXRateJsonV220 object that needs to be added.
     * @param {string} BANK_ID The bank id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FXApi
     */
    public async oBPv220CreateFx(body: FXRateJsonV220, BANK_ID: string, options?: AxiosRequestConfig) : Promise<AxiosResponse<FXRateJsonV220>> {
        return FXApiFp(this.configuration).oBPv220CreateFx(body, BANK_ID, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * <p>Get the latest FX rate specified by BANK_ID, FROM_CURRENCY_CODE and TO_CURRENCY_CODE</p><p>OBP may try different sources of FX rate information depending on the Connector in operation.</p><p>For example we want to convert EUR =&gt; USD:</p><p>OBP will:<br />1st try - Connector (database, core banking system or external FX service)<br />2nd try part 1 - fallbackexchangerates/eur.json<br />2nd try part 2 - fallbackexchangerates/usd.json (the inverse rate is used)<br />3rd try - Hardcoded map of FX rates.</p><p><img src=\"https://user-images.githubusercontent.com/485218/60005085-1eded600-966e-11e9-96fb-798b102d9ad0.png\" alt=\"FX Flow\" /></p><p>User Authentication is Required. The User must be logged in. The Application must also be authenticated.</p><p><strong>URL Parameters:</strong></p><p><a href=\"/glossary#Bank.bank_id\">BANK_ID</a>: gh.29.uk</p><p><a href=\"/glossary#from_currency_code\">FROM_CURRENCY_CODE</a>:</p><p><a href=\"/glossary#to_currency_code\">TO_CURRENCY_CODE</a>: EUR</p><p><strong>JSON response body fields:</strong></p><p><a href=\"/glossary#\"><strong>bank_id</strong></a>: gh.29.uk</p><p><a href=\"/glossary#conversion_value\"><strong>conversion_value</strong></a>: 100</p><p><a href=\"/glossary#effective_date\"><strong>effective_date</strong></a>: 2020-01-27</p><p><a href=\"/glossary#from_currency_code\"><strong>from_currency_code</strong></a>:</p><p><a href=\"/glossary#inverse_conversion_value\"><strong>inverse_conversion_value</strong></a>: 50</p><p><a href=\"/glossary#to_currency_code\"><strong>to_currency_code</strong></a>: EUR</p>
     * @summary Get Current FxRate
     * @param {string} TO_CURRENCY_CODE The to currency code
     * @param {string} FROM_CURRENCY_CODE The from currency code
     * @param {string} BANK_ID The bank id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FXApi
     */
    public async oBPv220GetCurrentFxRate(TO_CURRENCY_CODE: string, FROM_CURRENCY_CODE: string, BANK_ID: string, options?: AxiosRequestConfig) : Promise<AxiosResponse<FXRateJsonV220>> {
        return FXApiFp(this.configuration).oBPv220GetCurrentFxRate(TO_CURRENCY_CODE, FROM_CURRENCY_CODE, BANK_ID, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * <p>Get Currencies specified by BANK_ID</p><p>User Authentication is Required. The User must be logged in. The Application must also be authenticated.</p><p><strong>URL Parameters:</strong></p><p><a href=\"/glossary#Bank.bank_id\">BANK_ID</a>: gh.29.uk</p><p><strong>JSON response body fields:</strong></p><p><a href=\"/glossary#\"><strong>alphanumeric_code</strong></a>: alphanumeric_code</p><p><a href=\"/glossary#\"><strong>currencies</strong></a>: currencies</p>
     * @summary Get Currencies at a Bank
     * @param {string} BANK_ID The bank id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FXApi
     */
    public async oBPv510GetCurrenciesAtBank(BANK_ID: string, options?: AxiosRequestConfig) : Promise<AxiosResponse<CurrenciesJsonV510>> {
        return FXApiFp(this.configuration).oBPv510GetCurrenciesAtBank(BANK_ID, options).then((request) => request(this.axios, this.basePath));
    }
}
