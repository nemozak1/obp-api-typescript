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
import { BanksJson400 } from '../models';
import { ErrorUnknownError } from '../models';
/**
 * BankAccountTag1Api - axios parameter creator
 * @export
 */
export const BankAccountTag1ApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * <p>Get banks on this API instance<br />Returns a list of banks supported on this server:</p><ul><li>ID used as parameter in URLs</li><li>Short and full name of bank</li><li>Logo URL</li><li>Website</li></ul><p>User Authentication is Optional. The User need not be logged in.</p><p><strong>JSON response body fields:</strong></p><p><a href=\"/glossary#address\"><strong>address</strong></a>:</p><p><a href=\"/glossary#bank_routings\"><strong>bank_routings</strong></a>: bank routing in form of (scheme, address)</p><p><a href=\"/glossary#banks\"><strong>banks</strong></a>:</p><p><a href=\"/glossary#full_name\"><strong>full_name</strong></a>: full name string</p><p><a href=\"/glossary#id\"><strong>id</strong></a>: d8839721-ad8f-45dd-9f78-2080414b93f9</p><p><a href=\"/glossary#logo\"><strong>logo</strong></a>: logo url</p><p><a href=\"/glossary#name\"><strong>name</strong></a>: ACCOUNT_MANAGEMENT_FEE</p><p><a href=\"/glossary#scheme\"><strong>scheme</strong></a>: OBP</p><p><a href=\"/glossary#short_name\"><strong>short_name</strong></a>:</p><p><a href=\"/glossary#\"><strong>value</strong></a>: 5987953</p><p><a href=\"/glossary#website\"><strong>website</strong></a>: <a href=\"http://www.openbankproject.com\">www.openbankproject.com</a></p><p><a href=\"/glossary#attributes\">attributes</a>: attribute value in form of (name, value)</p>
         * @summary Get Banks
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        oBPv400GetBanks: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/obp/v4.0.0/banks`;
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
         * <p>Get banks on this API instance<br />Returns a list of banks supported on this server:</p><ul><li>ID used as parameter in URLs</li><li>Short and full name of bank</li><li>Logo URL</li><li>Website</li></ul><p>User Authentication is Optional. The User need not be logged in.</p><p><strong>JSON response body fields:</strong></p><p><a href=\"/glossary#address\"><strong>address</strong></a>:</p><p><a href=\"/glossary#bank_routings\"><strong>bank_routings</strong></a>: bank routing in form of (scheme, address)</p><p><a href=\"/glossary#banks\"><strong>banks</strong></a>:</p><p><a href=\"/glossary#full_name\"><strong>full_name</strong></a>: full name string</p><p><a href=\"/glossary#id\"><strong>id</strong></a>: d8839721-ad8f-45dd-9f78-2080414b93f9</p><p><a href=\"/glossary#logo\"><strong>logo</strong></a>: logo url</p><p><a href=\"/glossary#name\"><strong>name</strong></a>: ACCOUNT_MANAGEMENT_FEE</p><p><a href=\"/glossary#scheme\"><strong>scheme</strong></a>: OBP</p><p><a href=\"/glossary#short_name\"><strong>short_name</strong></a>:</p><p><a href=\"/glossary#\"><strong>value</strong></a>: 5987953</p><p><a href=\"/glossary#website\"><strong>website</strong></a>: <a href=\"http://www.openbankproject.com\">www.openbankproject.com</a></p><p><a href=\"/glossary#attributes\">attributes</a>: attribute value in form of (name, value)</p>
         * @summary Get Banks
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        oBPv400GetBanks_1: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/obp/v4.0.0/banks`;
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
         * <p>Get banks on this API instance<br />Returns a list of banks supported on this server:</p><ul><li>ID used as parameter in URLs</li><li>Short and full name of bank</li><li>Logo URL</li><li>Website</li></ul><p>User Authentication is Optional. The User need not be logged in.</p><p><strong>JSON response body fields:</strong></p><p><a href=\"/glossary#address\"><strong>address</strong></a>:</p><p><a href=\"/glossary#bank_routings\"><strong>bank_routings</strong></a>: bank routing in form of (scheme, address)</p><p><a href=\"/glossary#banks\"><strong>banks</strong></a>:</p><p><a href=\"/glossary#full_name\"><strong>full_name</strong></a>: full name string</p><p><a href=\"/glossary#id\"><strong>id</strong></a>: d8839721-ad8f-45dd-9f78-2080414b93f9</p><p><a href=\"/glossary#logo\"><strong>logo</strong></a>: logo url</p><p><a href=\"/glossary#name\"><strong>name</strong></a>: ACCOUNT_MANAGEMENT_FEE</p><p><a href=\"/glossary#scheme\"><strong>scheme</strong></a>: OBP</p><p><a href=\"/glossary#short_name\"><strong>short_name</strong></a>:</p><p><a href=\"/glossary#\"><strong>value</strong></a>: 5987953</p><p><a href=\"/glossary#website\"><strong>website</strong></a>: <a href=\"http://www.openbankproject.com\">www.openbankproject.com</a></p><p><a href=\"/glossary#attributes\">attributes</a>: attribute value in form of (name, value)</p>
         * @summary Get Banks
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        oBPv400GetBanks_2: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/obp/v4.0.0/banks`;
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
 * BankAccountTag1Api - functional programming interface
 * @export
 */
export const BankAccountTag1ApiFp = function(configuration?: Configuration) {
    return {
        /**
         * <p>Get banks on this API instance<br />Returns a list of banks supported on this server:</p><ul><li>ID used as parameter in URLs</li><li>Short and full name of bank</li><li>Logo URL</li><li>Website</li></ul><p>User Authentication is Optional. The User need not be logged in.</p><p><strong>JSON response body fields:</strong></p><p><a href=\"/glossary#address\"><strong>address</strong></a>:</p><p><a href=\"/glossary#bank_routings\"><strong>bank_routings</strong></a>: bank routing in form of (scheme, address)</p><p><a href=\"/glossary#banks\"><strong>banks</strong></a>:</p><p><a href=\"/glossary#full_name\"><strong>full_name</strong></a>: full name string</p><p><a href=\"/glossary#id\"><strong>id</strong></a>: d8839721-ad8f-45dd-9f78-2080414b93f9</p><p><a href=\"/glossary#logo\"><strong>logo</strong></a>: logo url</p><p><a href=\"/glossary#name\"><strong>name</strong></a>: ACCOUNT_MANAGEMENT_FEE</p><p><a href=\"/glossary#scheme\"><strong>scheme</strong></a>: OBP</p><p><a href=\"/glossary#short_name\"><strong>short_name</strong></a>:</p><p><a href=\"/glossary#\"><strong>value</strong></a>: 5987953</p><p><a href=\"/glossary#website\"><strong>website</strong></a>: <a href=\"http://www.openbankproject.com\">www.openbankproject.com</a></p><p><a href=\"/glossary#attributes\">attributes</a>: attribute value in form of (name, value)</p>
         * @summary Get Banks
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async oBPv400GetBanks(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<BanksJson400>>> {
            const localVarAxiosArgs = await BankAccountTag1ApiAxiosParamCreator(configuration).oBPv400GetBanks(options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * <p>Get banks on this API instance<br />Returns a list of banks supported on this server:</p><ul><li>ID used as parameter in URLs</li><li>Short and full name of bank</li><li>Logo URL</li><li>Website</li></ul><p>User Authentication is Optional. The User need not be logged in.</p><p><strong>JSON response body fields:</strong></p><p><a href=\"/glossary#address\"><strong>address</strong></a>:</p><p><a href=\"/glossary#bank_routings\"><strong>bank_routings</strong></a>: bank routing in form of (scheme, address)</p><p><a href=\"/glossary#banks\"><strong>banks</strong></a>:</p><p><a href=\"/glossary#full_name\"><strong>full_name</strong></a>: full name string</p><p><a href=\"/glossary#id\"><strong>id</strong></a>: d8839721-ad8f-45dd-9f78-2080414b93f9</p><p><a href=\"/glossary#logo\"><strong>logo</strong></a>: logo url</p><p><a href=\"/glossary#name\"><strong>name</strong></a>: ACCOUNT_MANAGEMENT_FEE</p><p><a href=\"/glossary#scheme\"><strong>scheme</strong></a>: OBP</p><p><a href=\"/glossary#short_name\"><strong>short_name</strong></a>:</p><p><a href=\"/glossary#\"><strong>value</strong></a>: 5987953</p><p><a href=\"/glossary#website\"><strong>website</strong></a>: <a href=\"http://www.openbankproject.com\">www.openbankproject.com</a></p><p><a href=\"/glossary#attributes\">attributes</a>: attribute value in form of (name, value)</p>
         * @summary Get Banks
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async oBPv400GetBanks_1(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<BanksJson400>>> {
            const localVarAxiosArgs = await BankAccountTag1ApiAxiosParamCreator(configuration).oBPv400GetBanks_1(options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * <p>Get banks on this API instance<br />Returns a list of banks supported on this server:</p><ul><li>ID used as parameter in URLs</li><li>Short and full name of bank</li><li>Logo URL</li><li>Website</li></ul><p>User Authentication is Optional. The User need not be logged in.</p><p><strong>JSON response body fields:</strong></p><p><a href=\"/glossary#address\"><strong>address</strong></a>:</p><p><a href=\"/glossary#bank_routings\"><strong>bank_routings</strong></a>: bank routing in form of (scheme, address)</p><p><a href=\"/glossary#banks\"><strong>banks</strong></a>:</p><p><a href=\"/glossary#full_name\"><strong>full_name</strong></a>: full name string</p><p><a href=\"/glossary#id\"><strong>id</strong></a>: d8839721-ad8f-45dd-9f78-2080414b93f9</p><p><a href=\"/glossary#logo\"><strong>logo</strong></a>: logo url</p><p><a href=\"/glossary#name\"><strong>name</strong></a>: ACCOUNT_MANAGEMENT_FEE</p><p><a href=\"/glossary#scheme\"><strong>scheme</strong></a>: OBP</p><p><a href=\"/glossary#short_name\"><strong>short_name</strong></a>:</p><p><a href=\"/glossary#\"><strong>value</strong></a>: 5987953</p><p><a href=\"/glossary#website\"><strong>website</strong></a>: <a href=\"http://www.openbankproject.com\">www.openbankproject.com</a></p><p><a href=\"/glossary#attributes\">attributes</a>: attribute value in form of (name, value)</p>
         * @summary Get Banks
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async oBPv400GetBanks_2(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<BanksJson400>>> {
            const localVarAxiosArgs = await BankAccountTag1ApiAxiosParamCreator(configuration).oBPv400GetBanks_2(options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * BankAccountTag1Api - factory interface
 * @export
 */
export const BankAccountTag1ApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * <p>Get banks on this API instance<br />Returns a list of banks supported on this server:</p><ul><li>ID used as parameter in URLs</li><li>Short and full name of bank</li><li>Logo URL</li><li>Website</li></ul><p>User Authentication is Optional. The User need not be logged in.</p><p><strong>JSON response body fields:</strong></p><p><a href=\"/glossary#address\"><strong>address</strong></a>:</p><p><a href=\"/glossary#bank_routings\"><strong>bank_routings</strong></a>: bank routing in form of (scheme, address)</p><p><a href=\"/glossary#banks\"><strong>banks</strong></a>:</p><p><a href=\"/glossary#full_name\"><strong>full_name</strong></a>: full name string</p><p><a href=\"/glossary#id\"><strong>id</strong></a>: d8839721-ad8f-45dd-9f78-2080414b93f9</p><p><a href=\"/glossary#logo\"><strong>logo</strong></a>: logo url</p><p><a href=\"/glossary#name\"><strong>name</strong></a>: ACCOUNT_MANAGEMENT_FEE</p><p><a href=\"/glossary#scheme\"><strong>scheme</strong></a>: OBP</p><p><a href=\"/glossary#short_name\"><strong>short_name</strong></a>:</p><p><a href=\"/glossary#\"><strong>value</strong></a>: 5987953</p><p><a href=\"/glossary#website\"><strong>website</strong></a>: <a href=\"http://www.openbankproject.com\">www.openbankproject.com</a></p><p><a href=\"/glossary#attributes\">attributes</a>: attribute value in form of (name, value)</p>
         * @summary Get Banks
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async oBPv400GetBanks(options?: AxiosRequestConfig): Promise<AxiosResponse<BanksJson400>> {
            return BankAccountTag1ApiFp(configuration).oBPv400GetBanks(options).then((request) => request(axios, basePath));
        },
        /**
         * <p>Get banks on this API instance<br />Returns a list of banks supported on this server:</p><ul><li>ID used as parameter in URLs</li><li>Short and full name of bank</li><li>Logo URL</li><li>Website</li></ul><p>User Authentication is Optional. The User need not be logged in.</p><p><strong>JSON response body fields:</strong></p><p><a href=\"/glossary#address\"><strong>address</strong></a>:</p><p><a href=\"/glossary#bank_routings\"><strong>bank_routings</strong></a>: bank routing in form of (scheme, address)</p><p><a href=\"/glossary#banks\"><strong>banks</strong></a>:</p><p><a href=\"/glossary#full_name\"><strong>full_name</strong></a>: full name string</p><p><a href=\"/glossary#id\"><strong>id</strong></a>: d8839721-ad8f-45dd-9f78-2080414b93f9</p><p><a href=\"/glossary#logo\"><strong>logo</strong></a>: logo url</p><p><a href=\"/glossary#name\"><strong>name</strong></a>: ACCOUNT_MANAGEMENT_FEE</p><p><a href=\"/glossary#scheme\"><strong>scheme</strong></a>: OBP</p><p><a href=\"/glossary#short_name\"><strong>short_name</strong></a>:</p><p><a href=\"/glossary#\"><strong>value</strong></a>: 5987953</p><p><a href=\"/glossary#website\"><strong>website</strong></a>: <a href=\"http://www.openbankproject.com\">www.openbankproject.com</a></p><p><a href=\"/glossary#attributes\">attributes</a>: attribute value in form of (name, value)</p>
         * @summary Get Banks
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async oBPv400GetBanks_1(options?: AxiosRequestConfig): Promise<AxiosResponse<BanksJson400>> {
            return BankAccountTag1ApiFp(configuration).oBPv400GetBanks_1(options).then((request) => request(axios, basePath));
        },
        /**
         * <p>Get banks on this API instance<br />Returns a list of banks supported on this server:</p><ul><li>ID used as parameter in URLs</li><li>Short and full name of bank</li><li>Logo URL</li><li>Website</li></ul><p>User Authentication is Optional. The User need not be logged in.</p><p><strong>JSON response body fields:</strong></p><p><a href=\"/glossary#address\"><strong>address</strong></a>:</p><p><a href=\"/glossary#bank_routings\"><strong>bank_routings</strong></a>: bank routing in form of (scheme, address)</p><p><a href=\"/glossary#banks\"><strong>banks</strong></a>:</p><p><a href=\"/glossary#full_name\"><strong>full_name</strong></a>: full name string</p><p><a href=\"/glossary#id\"><strong>id</strong></a>: d8839721-ad8f-45dd-9f78-2080414b93f9</p><p><a href=\"/glossary#logo\"><strong>logo</strong></a>: logo url</p><p><a href=\"/glossary#name\"><strong>name</strong></a>: ACCOUNT_MANAGEMENT_FEE</p><p><a href=\"/glossary#scheme\"><strong>scheme</strong></a>: OBP</p><p><a href=\"/glossary#short_name\"><strong>short_name</strong></a>:</p><p><a href=\"/glossary#\"><strong>value</strong></a>: 5987953</p><p><a href=\"/glossary#website\"><strong>website</strong></a>: <a href=\"http://www.openbankproject.com\">www.openbankproject.com</a></p><p><a href=\"/glossary#attributes\">attributes</a>: attribute value in form of (name, value)</p>
         * @summary Get Banks
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async oBPv400GetBanks_2(options?: AxiosRequestConfig): Promise<AxiosResponse<BanksJson400>> {
            return BankAccountTag1ApiFp(configuration).oBPv400GetBanks_2(options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * BankAccountTag1Api - object-oriented interface
 * @export
 * @class BankAccountTag1Api
 * @extends {BaseAPI}
 */
export class BankAccountTag1Api extends BaseAPI {
    /**
     * <p>Get banks on this API instance<br />Returns a list of banks supported on this server:</p><ul><li>ID used as parameter in URLs</li><li>Short and full name of bank</li><li>Logo URL</li><li>Website</li></ul><p>User Authentication is Optional. The User need not be logged in.</p><p><strong>JSON response body fields:</strong></p><p><a href=\"/glossary#address\"><strong>address</strong></a>:</p><p><a href=\"/glossary#bank_routings\"><strong>bank_routings</strong></a>: bank routing in form of (scheme, address)</p><p><a href=\"/glossary#banks\"><strong>banks</strong></a>:</p><p><a href=\"/glossary#full_name\"><strong>full_name</strong></a>: full name string</p><p><a href=\"/glossary#id\"><strong>id</strong></a>: d8839721-ad8f-45dd-9f78-2080414b93f9</p><p><a href=\"/glossary#logo\"><strong>logo</strong></a>: logo url</p><p><a href=\"/glossary#name\"><strong>name</strong></a>: ACCOUNT_MANAGEMENT_FEE</p><p><a href=\"/glossary#scheme\"><strong>scheme</strong></a>: OBP</p><p><a href=\"/glossary#short_name\"><strong>short_name</strong></a>:</p><p><a href=\"/glossary#\"><strong>value</strong></a>: 5987953</p><p><a href=\"/glossary#website\"><strong>website</strong></a>: <a href=\"http://www.openbankproject.com\">www.openbankproject.com</a></p><p><a href=\"/glossary#attributes\">attributes</a>: attribute value in form of (name, value)</p>
     * @summary Get Banks
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof BankAccountTag1Api
     */
    public async oBPv400GetBanks(options?: AxiosRequestConfig) : Promise<AxiosResponse<BanksJson400>> {
        return BankAccountTag1ApiFp(this.configuration).oBPv400GetBanks(options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * <p>Get banks on this API instance<br />Returns a list of banks supported on this server:</p><ul><li>ID used as parameter in URLs</li><li>Short and full name of bank</li><li>Logo URL</li><li>Website</li></ul><p>User Authentication is Optional. The User need not be logged in.</p><p><strong>JSON response body fields:</strong></p><p><a href=\"/glossary#address\"><strong>address</strong></a>:</p><p><a href=\"/glossary#bank_routings\"><strong>bank_routings</strong></a>: bank routing in form of (scheme, address)</p><p><a href=\"/glossary#banks\"><strong>banks</strong></a>:</p><p><a href=\"/glossary#full_name\"><strong>full_name</strong></a>: full name string</p><p><a href=\"/glossary#id\"><strong>id</strong></a>: d8839721-ad8f-45dd-9f78-2080414b93f9</p><p><a href=\"/glossary#logo\"><strong>logo</strong></a>: logo url</p><p><a href=\"/glossary#name\"><strong>name</strong></a>: ACCOUNT_MANAGEMENT_FEE</p><p><a href=\"/glossary#scheme\"><strong>scheme</strong></a>: OBP</p><p><a href=\"/glossary#short_name\"><strong>short_name</strong></a>:</p><p><a href=\"/glossary#\"><strong>value</strong></a>: 5987953</p><p><a href=\"/glossary#website\"><strong>website</strong></a>: <a href=\"http://www.openbankproject.com\">www.openbankproject.com</a></p><p><a href=\"/glossary#attributes\">attributes</a>: attribute value in form of (name, value)</p>
     * @summary Get Banks
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof BankAccountTag1Api
     */
    public async oBPv400GetBanks_1(options?: AxiosRequestConfig) : Promise<AxiosResponse<BanksJson400>> {
        return BankAccountTag1ApiFp(this.configuration).oBPv400GetBanks_1(options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * <p>Get banks on this API instance<br />Returns a list of banks supported on this server:</p><ul><li>ID used as parameter in URLs</li><li>Short and full name of bank</li><li>Logo URL</li><li>Website</li></ul><p>User Authentication is Optional. The User need not be logged in.</p><p><strong>JSON response body fields:</strong></p><p><a href=\"/glossary#address\"><strong>address</strong></a>:</p><p><a href=\"/glossary#bank_routings\"><strong>bank_routings</strong></a>: bank routing in form of (scheme, address)</p><p><a href=\"/glossary#banks\"><strong>banks</strong></a>:</p><p><a href=\"/glossary#full_name\"><strong>full_name</strong></a>: full name string</p><p><a href=\"/glossary#id\"><strong>id</strong></a>: d8839721-ad8f-45dd-9f78-2080414b93f9</p><p><a href=\"/glossary#logo\"><strong>logo</strong></a>: logo url</p><p><a href=\"/glossary#name\"><strong>name</strong></a>: ACCOUNT_MANAGEMENT_FEE</p><p><a href=\"/glossary#scheme\"><strong>scheme</strong></a>: OBP</p><p><a href=\"/glossary#short_name\"><strong>short_name</strong></a>:</p><p><a href=\"/glossary#\"><strong>value</strong></a>: 5987953</p><p><a href=\"/glossary#website\"><strong>website</strong></a>: <a href=\"http://www.openbankproject.com\">www.openbankproject.com</a></p><p><a href=\"/glossary#attributes\">attributes</a>: attribute value in form of (name, value)</p>
     * @summary Get Banks
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof BankAccountTag1Api
     */
    public async oBPv400GetBanks_2(options?: AxiosRequestConfig) : Promise<AxiosResponse<BanksJson400>> {
        return BankAccountTag1ApiFp(this.configuration).oBPv400GetBanks_2(options).then((request) => request(this.axios, this.basePath));
    }
}
