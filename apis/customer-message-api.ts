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
import { AddCustomerMessageJson } from '../models';
import { CUSTOMERIDMessagesBody } from '../models';
import { CustomerMessagesJson } from '../models';
import { ErrorUserNotLoggedIn } from '../models';
import { InlineResponse20091 } from '../models';
import { InlineResponse2011 } from '../models';
import { SuccessMessage } from '../models';
/**
 * CustomerMessageApi - axios parameter creator
 * @export
 */
export const CustomerMessageApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * <p>Create a message for the customer specified by CUSTOMER_ID</p><p>User Authentication is Required. The User must be logged in. The Application must also be authenticated.</p><p><strong>URL Parameters:</strong></p><p><a href=\"/glossary#Bank.bank_id\">BANK_ID</a>: gh.29.uk</p><p><a href=\"/glossary#Customer.customer_id\">CUSTOMER_ID</a>: 7uy8a7e4-6d02-40e3-a129-0b2bf89de8uh</p><p><strong>JSON request body fields:</strong></p><p><a href=\"/glossary#from_department\"><strong>from_department</strong></a>: Open Bank</p><p><a href=\"/glossary#from_person\"><strong>from_person</strong></a>: Tom</p><p><a href=\"/glossary#message\"><strong>message</strong></a>: 123456</p><p><strong>JSON response body fields:</strong></p><p><a href=\"/glossary#success\"><strong>success</strong></a>:</p>
         * @summary Create Customer Message
         * @param {AddCustomerMessageJson} body AddCustomerMessageJson object that needs to be added.
         * @param {string} CUSTOMER_ID The customer id
         * @param {string} BANK_ID The bank id
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        oBPv140AddCustomerMessage: async (body: AddCustomerMessageJson, CUSTOMER_ID: string, BANK_ID: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'body' is not null or undefined
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling oBPv140AddCustomerMessage.');
            }
            // verify required parameter 'CUSTOMER_ID' is not null or undefined
            if (CUSTOMER_ID === null || CUSTOMER_ID === undefined) {
                throw new RequiredError('CUSTOMER_ID','Required parameter CUSTOMER_ID was null or undefined when calling oBPv140AddCustomerMessage.');
            }
            // verify required parameter 'BANK_ID' is not null or undefined
            if (BANK_ID === null || BANK_ID === undefined) {
                throw new RequiredError('BANK_ID','Required parameter BANK_ID was null or undefined when calling oBPv140AddCustomerMessage.');
            }
            const localVarPath = `/obp/v5.1.0/banks/{BANK_ID}/customer/{CUSTOMER_ID}/messages`
                .replace(`{${"CUSTOMER_ID"}}`, encodeURIComponent(String(CUSTOMER_ID)))
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
         * <p>Get messages for the logged in customer<br />Messages sent to the currently authenticated user.</p><p>Authentication via OAuth is required.</p><p>User Authentication is Required. The User must be logged in. The Application must also be authenticated.</p><p><strong>URL Parameters:</strong></p><p><a href=\"/glossary#Bank.bank_id\">BANK_ID</a>: gh.29.uk</p><p><strong>JSON response body fields:</strong></p><p><a href=\"/glossary#\"><strong>date</strong></a>: 2020-01-27</p><p><a href=\"/glossary#from_department\"><strong>from_department</strong></a>: Open Bank</p><p><a href=\"/glossary#from_person\"><strong>from_person</strong></a>: Tom</p><p><a href=\"/glossary#id\"><strong>id</strong></a>: d8839721-ad8f-45dd-9f78-2080414b93f9</p><p><a href=\"/glossary#message\"><strong>message</strong></a>: 123456</p><p><a href=\"/glossary#messages\"><strong>messages</strong></a>:</p>
         * @summary Get Customer Messages for all Customers
         * @param {string} BANK_ID The bank id
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        oBPv140GetCustomersMessages: async (BANK_ID: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'BANK_ID' is not null or undefined
            if (BANK_ID === null || BANK_ID === undefined) {
                throw new RequiredError('BANK_ID','Required parameter BANK_ID was null or undefined when calling oBPv140GetCustomersMessages.');
            }
            const localVarPath = `/obp/v5.1.0/banks/{BANK_ID}/customer/messages`
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
         * <p>Create a message for the customer specified by CUSTOMER_ID<br />User Authentication is Required. The User must be logged in. The Application must also be authenticated.</p><p><strong>URL Parameters:</strong></p><p><a href=\"/glossary#Bank.bank_id\">BANK_ID</a>: gh.29.uk</p><p><a href=\"/glossary#Customer.customer_id\">CUSTOMER_ID</a>: 7uy8a7e4-6d02-40e3-a129-0b2bf89de8uh</p><p><strong>JSON request body fields:</strong></p><p><a href=\"/glossary#from_department\"><strong>from_department</strong></a>: Open Bank</p><p><a href=\"/glossary#from_person\"><strong>from_person</strong></a>: Tom</p><p><a href=\"/glossary#message\"><strong>message</strong></a>: 123456</p><p><a href=\"/glossary#transport\"><strong>transport</strong></a>: SMS</p><p><strong>JSON response body fields:</strong></p><p><a href=\"/glossary#success\"><strong>success</strong></a>:</p>
         * @summary Create Customer Message
         * @param {CUSTOMERIDMessagesBody} body JObject object that needs to be added.
         * @param {string} CUSTOMER_ID The customer id
         * @param {string} BANK_ID The bank id
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        oBPv400CreateCustomerMessage: async (body: CUSTOMERIDMessagesBody, CUSTOMER_ID: string, BANK_ID: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'body' is not null or undefined
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling oBPv400CreateCustomerMessage.');
            }
            // verify required parameter 'CUSTOMER_ID' is not null or undefined
            if (CUSTOMER_ID === null || CUSTOMER_ID === undefined) {
                throw new RequiredError('CUSTOMER_ID','Required parameter CUSTOMER_ID was null or undefined when calling oBPv400CreateCustomerMessage.');
            }
            // verify required parameter 'BANK_ID' is not null or undefined
            if (BANK_ID === null || BANK_ID === undefined) {
                throw new RequiredError('BANK_ID','Required parameter BANK_ID was null or undefined when calling oBPv400CreateCustomerMessage.');
            }
            const localVarPath = `/obp/v4.0.0/banks/{BANK_ID}/customers/{CUSTOMER_ID}/messages`
                .replace(`{${"CUSTOMER_ID"}}`, encodeURIComponent(String(CUSTOMER_ID)))
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
         * <p>Get messages for the customer specified by CUSTOMER_ID<br />User Authentication is Required. The User must be logged in. The Application must also be authenticated.</p><p><strong>URL Parameters:</strong></p><p><a href=\"/glossary#Bank.bank_id\">BANK_ID</a>: gh.29.uk</p><p><a href=\"/glossary#Customer.customer_id\">CUSTOMER_ID</a>: 7uy8a7e4-6d02-40e3-a129-0b2bf89de8uh</p><p><strong>JSON response body fields:</strong></p><p><a href=\"/glossary#\"><strong>date</strong></a>: 2020-01-27</p><p><a href=\"/glossary#from_department\"><strong>from_department</strong></a>: Open Bank</p><p><a href=\"/glossary#from_person\"><strong>from_person</strong></a>: Tom</p><p><a href=\"/glossary#id\"><strong>id</strong></a>: d8839721-ad8f-45dd-9f78-2080414b93f9</p><p><a href=\"/glossary#message\"><strong>message</strong></a>: 123456</p><p><a href=\"/glossary#messages\"><strong>messages</strong></a>:</p><p><a href=\"/glossary#transport\"><strong>transport</strong></a>: SMS</p>
         * @summary Get Customer Messages for a Customer
         * @param {string} CUSTOMER_ID The customer id
         * @param {string} BANK_ID The bank id
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        oBPv400GetCustomerMessages: async (CUSTOMER_ID: string, BANK_ID: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'CUSTOMER_ID' is not null or undefined
            if (CUSTOMER_ID === null || CUSTOMER_ID === undefined) {
                throw new RequiredError('CUSTOMER_ID','Required parameter CUSTOMER_ID was null or undefined when calling oBPv400GetCustomerMessages.');
            }
            // verify required parameter 'BANK_ID' is not null or undefined
            if (BANK_ID === null || BANK_ID === undefined) {
                throw new RequiredError('BANK_ID','Required parameter BANK_ID was null or undefined when calling oBPv400GetCustomerMessages.');
            }
            const localVarPath = `/obp/v4.0.0/banks/{BANK_ID}/customers/{CUSTOMER_ID}/messages`
                .replace(`{${"CUSTOMER_ID"}}`, encodeURIComponent(String(CUSTOMER_ID)))
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
 * CustomerMessageApi - functional programming interface
 * @export
 */
export const CustomerMessageApiFp = function(configuration?: Configuration) {
    return {
        /**
         * <p>Create a message for the customer specified by CUSTOMER_ID</p><p>User Authentication is Required. The User must be logged in. The Application must also be authenticated.</p><p><strong>URL Parameters:</strong></p><p><a href=\"/glossary#Bank.bank_id\">BANK_ID</a>: gh.29.uk</p><p><a href=\"/glossary#Customer.customer_id\">CUSTOMER_ID</a>: 7uy8a7e4-6d02-40e3-a129-0b2bf89de8uh</p><p><strong>JSON request body fields:</strong></p><p><a href=\"/glossary#from_department\"><strong>from_department</strong></a>: Open Bank</p><p><a href=\"/glossary#from_person\"><strong>from_person</strong></a>: Tom</p><p><a href=\"/glossary#message\"><strong>message</strong></a>: 123456</p><p><strong>JSON response body fields:</strong></p><p><a href=\"/glossary#success\"><strong>success</strong></a>:</p>
         * @summary Create Customer Message
         * @param {AddCustomerMessageJson} body AddCustomerMessageJson object that needs to be added.
         * @param {string} CUSTOMER_ID The customer id
         * @param {string} BANK_ID The bank id
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async oBPv140AddCustomerMessage(body: AddCustomerMessageJson, CUSTOMER_ID: string, BANK_ID: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<SuccessMessage>>> {
            const localVarAxiosArgs = await CustomerMessageApiAxiosParamCreator(configuration).oBPv140AddCustomerMessage(body, CUSTOMER_ID, BANK_ID, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * <p>Get messages for the logged in customer<br />Messages sent to the currently authenticated user.</p><p>Authentication via OAuth is required.</p><p>User Authentication is Required. The User must be logged in. The Application must also be authenticated.</p><p><strong>URL Parameters:</strong></p><p><a href=\"/glossary#Bank.bank_id\">BANK_ID</a>: gh.29.uk</p><p><strong>JSON response body fields:</strong></p><p><a href=\"/glossary#\"><strong>date</strong></a>: 2020-01-27</p><p><a href=\"/glossary#from_department\"><strong>from_department</strong></a>: Open Bank</p><p><a href=\"/glossary#from_person\"><strong>from_person</strong></a>: Tom</p><p><a href=\"/glossary#id\"><strong>id</strong></a>: d8839721-ad8f-45dd-9f78-2080414b93f9</p><p><a href=\"/glossary#message\"><strong>message</strong></a>: 123456</p><p><a href=\"/glossary#messages\"><strong>messages</strong></a>:</p>
         * @summary Get Customer Messages for all Customers
         * @param {string} BANK_ID The bank id
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async oBPv140GetCustomersMessages(BANK_ID: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<CustomerMessagesJson>>> {
            const localVarAxiosArgs = await CustomerMessageApiAxiosParamCreator(configuration).oBPv140GetCustomersMessages(BANK_ID, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * <p>Create a message for the customer specified by CUSTOMER_ID<br />User Authentication is Required. The User must be logged in. The Application must also be authenticated.</p><p><strong>URL Parameters:</strong></p><p><a href=\"/glossary#Bank.bank_id\">BANK_ID</a>: gh.29.uk</p><p><a href=\"/glossary#Customer.customer_id\">CUSTOMER_ID</a>: 7uy8a7e4-6d02-40e3-a129-0b2bf89de8uh</p><p><strong>JSON request body fields:</strong></p><p><a href=\"/glossary#from_department\"><strong>from_department</strong></a>: Open Bank</p><p><a href=\"/glossary#from_person\"><strong>from_person</strong></a>: Tom</p><p><a href=\"/glossary#message\"><strong>message</strong></a>: 123456</p><p><a href=\"/glossary#transport\"><strong>transport</strong></a>: SMS</p><p><strong>JSON response body fields:</strong></p><p><a href=\"/glossary#success\"><strong>success</strong></a>:</p>
         * @summary Create Customer Message
         * @param {CUSTOMERIDMessagesBody} body JObject object that needs to be added.
         * @param {string} CUSTOMER_ID The customer id
         * @param {string} BANK_ID The bank id
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async oBPv400CreateCustomerMessage(body: CUSTOMERIDMessagesBody, CUSTOMER_ID: string, BANK_ID: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<InlineResponse2011>>> {
            const localVarAxiosArgs = await CustomerMessageApiAxiosParamCreator(configuration).oBPv400CreateCustomerMessage(body, CUSTOMER_ID, BANK_ID, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * <p>Get messages for the customer specified by CUSTOMER_ID<br />User Authentication is Required. The User must be logged in. The Application must also be authenticated.</p><p><strong>URL Parameters:</strong></p><p><a href=\"/glossary#Bank.bank_id\">BANK_ID</a>: gh.29.uk</p><p><a href=\"/glossary#Customer.customer_id\">CUSTOMER_ID</a>: 7uy8a7e4-6d02-40e3-a129-0b2bf89de8uh</p><p><strong>JSON response body fields:</strong></p><p><a href=\"/glossary#\"><strong>date</strong></a>: 2020-01-27</p><p><a href=\"/glossary#from_department\"><strong>from_department</strong></a>: Open Bank</p><p><a href=\"/glossary#from_person\"><strong>from_person</strong></a>: Tom</p><p><a href=\"/glossary#id\"><strong>id</strong></a>: d8839721-ad8f-45dd-9f78-2080414b93f9</p><p><a href=\"/glossary#message\"><strong>message</strong></a>: 123456</p><p><a href=\"/glossary#messages\"><strong>messages</strong></a>:</p><p><a href=\"/glossary#transport\"><strong>transport</strong></a>: SMS</p>
         * @summary Get Customer Messages for a Customer
         * @param {string} CUSTOMER_ID The customer id
         * @param {string} BANK_ID The bank id
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async oBPv400GetCustomerMessages(CUSTOMER_ID: string, BANK_ID: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<InlineResponse20091>>> {
            const localVarAxiosArgs = await CustomerMessageApiAxiosParamCreator(configuration).oBPv400GetCustomerMessages(CUSTOMER_ID, BANK_ID, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * CustomerMessageApi - factory interface
 * @export
 */
export const CustomerMessageApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * <p>Create a message for the customer specified by CUSTOMER_ID</p><p>User Authentication is Required. The User must be logged in. The Application must also be authenticated.</p><p><strong>URL Parameters:</strong></p><p><a href=\"/glossary#Bank.bank_id\">BANK_ID</a>: gh.29.uk</p><p><a href=\"/glossary#Customer.customer_id\">CUSTOMER_ID</a>: 7uy8a7e4-6d02-40e3-a129-0b2bf89de8uh</p><p><strong>JSON request body fields:</strong></p><p><a href=\"/glossary#from_department\"><strong>from_department</strong></a>: Open Bank</p><p><a href=\"/glossary#from_person\"><strong>from_person</strong></a>: Tom</p><p><a href=\"/glossary#message\"><strong>message</strong></a>: 123456</p><p><strong>JSON response body fields:</strong></p><p><a href=\"/glossary#success\"><strong>success</strong></a>:</p>
         * @summary Create Customer Message
         * @param {AddCustomerMessageJson} body AddCustomerMessageJson object that needs to be added.
         * @param {string} CUSTOMER_ID The customer id
         * @param {string} BANK_ID The bank id
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async oBPv140AddCustomerMessage(body: AddCustomerMessageJson, CUSTOMER_ID: string, BANK_ID: string, options?: AxiosRequestConfig): Promise<AxiosResponse<SuccessMessage>> {
            return CustomerMessageApiFp(configuration).oBPv140AddCustomerMessage(body, CUSTOMER_ID, BANK_ID, options).then((request) => request(axios, basePath));
        },
        /**
         * <p>Get messages for the logged in customer<br />Messages sent to the currently authenticated user.</p><p>Authentication via OAuth is required.</p><p>User Authentication is Required. The User must be logged in. The Application must also be authenticated.</p><p><strong>URL Parameters:</strong></p><p><a href=\"/glossary#Bank.bank_id\">BANK_ID</a>: gh.29.uk</p><p><strong>JSON response body fields:</strong></p><p><a href=\"/glossary#\"><strong>date</strong></a>: 2020-01-27</p><p><a href=\"/glossary#from_department\"><strong>from_department</strong></a>: Open Bank</p><p><a href=\"/glossary#from_person\"><strong>from_person</strong></a>: Tom</p><p><a href=\"/glossary#id\"><strong>id</strong></a>: d8839721-ad8f-45dd-9f78-2080414b93f9</p><p><a href=\"/glossary#message\"><strong>message</strong></a>: 123456</p><p><a href=\"/glossary#messages\"><strong>messages</strong></a>:</p>
         * @summary Get Customer Messages for all Customers
         * @param {string} BANK_ID The bank id
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async oBPv140GetCustomersMessages(BANK_ID: string, options?: AxiosRequestConfig): Promise<AxiosResponse<CustomerMessagesJson>> {
            return CustomerMessageApiFp(configuration).oBPv140GetCustomersMessages(BANK_ID, options).then((request) => request(axios, basePath));
        },
        /**
         * <p>Create a message for the customer specified by CUSTOMER_ID<br />User Authentication is Required. The User must be logged in. The Application must also be authenticated.</p><p><strong>URL Parameters:</strong></p><p><a href=\"/glossary#Bank.bank_id\">BANK_ID</a>: gh.29.uk</p><p><a href=\"/glossary#Customer.customer_id\">CUSTOMER_ID</a>: 7uy8a7e4-6d02-40e3-a129-0b2bf89de8uh</p><p><strong>JSON request body fields:</strong></p><p><a href=\"/glossary#from_department\"><strong>from_department</strong></a>: Open Bank</p><p><a href=\"/glossary#from_person\"><strong>from_person</strong></a>: Tom</p><p><a href=\"/glossary#message\"><strong>message</strong></a>: 123456</p><p><a href=\"/glossary#transport\"><strong>transport</strong></a>: SMS</p><p><strong>JSON response body fields:</strong></p><p><a href=\"/glossary#success\"><strong>success</strong></a>:</p>
         * @summary Create Customer Message
         * @param {CUSTOMERIDMessagesBody} body JObject object that needs to be added.
         * @param {string} CUSTOMER_ID The customer id
         * @param {string} BANK_ID The bank id
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async oBPv400CreateCustomerMessage(body: CUSTOMERIDMessagesBody, CUSTOMER_ID: string, BANK_ID: string, options?: AxiosRequestConfig): Promise<AxiosResponse<InlineResponse2011>> {
            return CustomerMessageApiFp(configuration).oBPv400CreateCustomerMessage(body, CUSTOMER_ID, BANK_ID, options).then((request) => request(axios, basePath));
        },
        /**
         * <p>Get messages for the customer specified by CUSTOMER_ID<br />User Authentication is Required. The User must be logged in. The Application must also be authenticated.</p><p><strong>URL Parameters:</strong></p><p><a href=\"/glossary#Bank.bank_id\">BANK_ID</a>: gh.29.uk</p><p><a href=\"/glossary#Customer.customer_id\">CUSTOMER_ID</a>: 7uy8a7e4-6d02-40e3-a129-0b2bf89de8uh</p><p><strong>JSON response body fields:</strong></p><p><a href=\"/glossary#\"><strong>date</strong></a>: 2020-01-27</p><p><a href=\"/glossary#from_department\"><strong>from_department</strong></a>: Open Bank</p><p><a href=\"/glossary#from_person\"><strong>from_person</strong></a>: Tom</p><p><a href=\"/glossary#id\"><strong>id</strong></a>: d8839721-ad8f-45dd-9f78-2080414b93f9</p><p><a href=\"/glossary#message\"><strong>message</strong></a>: 123456</p><p><a href=\"/glossary#messages\"><strong>messages</strong></a>:</p><p><a href=\"/glossary#transport\"><strong>transport</strong></a>: SMS</p>
         * @summary Get Customer Messages for a Customer
         * @param {string} CUSTOMER_ID The customer id
         * @param {string} BANK_ID The bank id
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async oBPv400GetCustomerMessages(CUSTOMER_ID: string, BANK_ID: string, options?: AxiosRequestConfig): Promise<AxiosResponse<InlineResponse20091>> {
            return CustomerMessageApiFp(configuration).oBPv400GetCustomerMessages(CUSTOMER_ID, BANK_ID, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * CustomerMessageApi - object-oriented interface
 * @export
 * @class CustomerMessageApi
 * @extends {BaseAPI}
 */
export class CustomerMessageApi extends BaseAPI {
    /**
     * <p>Create a message for the customer specified by CUSTOMER_ID</p><p>User Authentication is Required. The User must be logged in. The Application must also be authenticated.</p><p><strong>URL Parameters:</strong></p><p><a href=\"/glossary#Bank.bank_id\">BANK_ID</a>: gh.29.uk</p><p><a href=\"/glossary#Customer.customer_id\">CUSTOMER_ID</a>: 7uy8a7e4-6d02-40e3-a129-0b2bf89de8uh</p><p><strong>JSON request body fields:</strong></p><p><a href=\"/glossary#from_department\"><strong>from_department</strong></a>: Open Bank</p><p><a href=\"/glossary#from_person\"><strong>from_person</strong></a>: Tom</p><p><a href=\"/glossary#message\"><strong>message</strong></a>: 123456</p><p><strong>JSON response body fields:</strong></p><p><a href=\"/glossary#success\"><strong>success</strong></a>:</p>
     * @summary Create Customer Message
     * @param {AddCustomerMessageJson} body AddCustomerMessageJson object that needs to be added.
     * @param {string} CUSTOMER_ID The customer id
     * @param {string} BANK_ID The bank id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CustomerMessageApi
     */
    public async oBPv140AddCustomerMessage(body: AddCustomerMessageJson, CUSTOMER_ID: string, BANK_ID: string, options?: AxiosRequestConfig) : Promise<AxiosResponse<SuccessMessage>> {
        return CustomerMessageApiFp(this.configuration).oBPv140AddCustomerMessage(body, CUSTOMER_ID, BANK_ID, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * <p>Get messages for the logged in customer<br />Messages sent to the currently authenticated user.</p><p>Authentication via OAuth is required.</p><p>User Authentication is Required. The User must be logged in. The Application must also be authenticated.</p><p><strong>URL Parameters:</strong></p><p><a href=\"/glossary#Bank.bank_id\">BANK_ID</a>: gh.29.uk</p><p><strong>JSON response body fields:</strong></p><p><a href=\"/glossary#\"><strong>date</strong></a>: 2020-01-27</p><p><a href=\"/glossary#from_department\"><strong>from_department</strong></a>: Open Bank</p><p><a href=\"/glossary#from_person\"><strong>from_person</strong></a>: Tom</p><p><a href=\"/glossary#id\"><strong>id</strong></a>: d8839721-ad8f-45dd-9f78-2080414b93f9</p><p><a href=\"/glossary#message\"><strong>message</strong></a>: 123456</p><p><a href=\"/glossary#messages\"><strong>messages</strong></a>:</p>
     * @summary Get Customer Messages for all Customers
     * @param {string} BANK_ID The bank id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CustomerMessageApi
     */
    public async oBPv140GetCustomersMessages(BANK_ID: string, options?: AxiosRequestConfig) : Promise<AxiosResponse<CustomerMessagesJson>> {
        return CustomerMessageApiFp(this.configuration).oBPv140GetCustomersMessages(BANK_ID, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * <p>Create a message for the customer specified by CUSTOMER_ID<br />User Authentication is Required. The User must be logged in. The Application must also be authenticated.</p><p><strong>URL Parameters:</strong></p><p><a href=\"/glossary#Bank.bank_id\">BANK_ID</a>: gh.29.uk</p><p><a href=\"/glossary#Customer.customer_id\">CUSTOMER_ID</a>: 7uy8a7e4-6d02-40e3-a129-0b2bf89de8uh</p><p><strong>JSON request body fields:</strong></p><p><a href=\"/glossary#from_department\"><strong>from_department</strong></a>: Open Bank</p><p><a href=\"/glossary#from_person\"><strong>from_person</strong></a>: Tom</p><p><a href=\"/glossary#message\"><strong>message</strong></a>: 123456</p><p><a href=\"/glossary#transport\"><strong>transport</strong></a>: SMS</p><p><strong>JSON response body fields:</strong></p><p><a href=\"/glossary#success\"><strong>success</strong></a>:</p>
     * @summary Create Customer Message
     * @param {CUSTOMERIDMessagesBody} body JObject object that needs to be added.
     * @param {string} CUSTOMER_ID The customer id
     * @param {string} BANK_ID The bank id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CustomerMessageApi
     */
    public async oBPv400CreateCustomerMessage(body: CUSTOMERIDMessagesBody, CUSTOMER_ID: string, BANK_ID: string, options?: AxiosRequestConfig) : Promise<AxiosResponse<InlineResponse2011>> {
        return CustomerMessageApiFp(this.configuration).oBPv400CreateCustomerMessage(body, CUSTOMER_ID, BANK_ID, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * <p>Get messages for the customer specified by CUSTOMER_ID<br />User Authentication is Required. The User must be logged in. The Application must also be authenticated.</p><p><strong>URL Parameters:</strong></p><p><a href=\"/glossary#Bank.bank_id\">BANK_ID</a>: gh.29.uk</p><p><a href=\"/glossary#Customer.customer_id\">CUSTOMER_ID</a>: 7uy8a7e4-6d02-40e3-a129-0b2bf89de8uh</p><p><strong>JSON response body fields:</strong></p><p><a href=\"/glossary#\"><strong>date</strong></a>: 2020-01-27</p><p><a href=\"/glossary#from_department\"><strong>from_department</strong></a>: Open Bank</p><p><a href=\"/glossary#from_person\"><strong>from_person</strong></a>: Tom</p><p><a href=\"/glossary#id\"><strong>id</strong></a>: d8839721-ad8f-45dd-9f78-2080414b93f9</p><p><a href=\"/glossary#message\"><strong>message</strong></a>: 123456</p><p><a href=\"/glossary#messages\"><strong>messages</strong></a>:</p><p><a href=\"/glossary#transport\"><strong>transport</strong></a>: SMS</p>
     * @summary Get Customer Messages for a Customer
     * @param {string} CUSTOMER_ID The customer id
     * @param {string} BANK_ID The bank id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CustomerMessageApi
     */
    public async oBPv400GetCustomerMessages(CUSTOMER_ID: string, BANK_ID: string, options?: AxiosRequestConfig) : Promise<AxiosResponse<InlineResponse20091>> {
        return CustomerMessageApiFp(this.configuration).oBPv400GetCustomerMessages(CUSTOMER_ID, BANK_ID, options).then((request) => request(this.axios, this.basePath));
    }
}
