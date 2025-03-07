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
import { ErrorUserNotLoggedIn } from '../models';
import { InlineResponse20011 } from '../models';
/**
 * TransactionFirehoseApi - axios parameter creator
 * @export
 */
export const TransactionFirehoseApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * <p>Get Transactions for an Account that has a firehose View.</p><p>Allows bulk access to an account's transactions.<br />User must have the CanUseFirehoseAtAnyBank Role</p><p>To find ACCOUNT_IDs, use the getFirehoseAccountsAtOneBank call.</p><p>For VIEW_ID try 'owner'</p><p>Possible custom url parameters for pagination:</p><ul><li>limit=NUMBER ==&gt; default value: 50</li><li>offset=NUMBER ==&gt; default value: 0</li></ul><p>eg1:?limit=100&amp;offset=0</p><ul><li>sort_direction=ASC/DESC ==&gt; default value: DESC.</li></ul><p>eg2:?limit=100&amp;offset=0&amp;sort_direction=ASC</p><ul><li>from_date=DATE =&gt; example value: 1970-01-01T00:00:00.000Z. NOTE! The default value is one year ago (1970-01-01T00:00:00.000Z).</li><li>to_date=DATE =&gt; example value: 2025-03-05T12:14:24.850Z. NOTE! The default value is now (2025-03-05T12:14:24.851Z).</li></ul><p>Date format parameter: yyyy-MM-dd'T'HH:mm:ss.SSS'Z'(1100-01-01T01:01:01.000Z) ==&gt; time zone is UTC.</p><p>eg3:?sort_direction=ASC&amp;limit=100&amp;offset=0&amp;from_date=1100-01-01T01:01:01.000Z&amp;to_date=1100-01-01T01:01:01.000Z</p><p>User Authentication is Required. The User must be logged in. The Application must also be authenticated.</p><p><strong>URL Parameters:</strong></p><p><a href=\"/glossary#Account.account_id\">ACCOUNT_ID</a>: 8ca8a7e4-6d02-40e3-a129-0b2bf89de9f0</p><p><a href=\"/glossary#Bank.bank_id\">BANK_ID</a>: gh.29.uk</p><p><a href=\"/glossary#this_view_id\">VIEW_ID</a>: owner</p><p><strong>JSON response body fields:</strong></p><p><a href=\"/glossary#\"><strong>URL</strong></a>: <a href=\"http://www.example.com/id-docs/123/image.png\">http://www.example.com/id-docs/123/image.png</a></p><p><a href=\"/glossary#account_routings\"><strong>account_routings</strong></a>:</p><p><a href=\"/glossary#address\"><strong>address</strong></a>:</p><p><a href=\"/glossary#\"><strong>amount</strong></a>: 10.12</p><p><a href=\"/glossary#bank_routing\"><strong>bank_routing</strong></a>:</p><p><a href=\"/glossary#comments\"><strong>comments</strong></a>:</p><p><a href=\"/glossary#completed\"><strong>completed</strong></a>: 2020-01-27</p><p><a href=\"/glossary#corporate_location\"><strong>corporate_location</strong></a>: 10</p><p><a href=\"/glossary#\"><strong>currency</strong></a>: EUR</p><p><a href=\"/glossary#\"><strong>date</strong></a>: 2020-01-27</p><p><a href=\"/glossary#description\"><strong>description</strong></a>: Description of the object. Maximum length is 2000. It can be any characters here.</p><p><a href=\"/glossary#details\"><strong>details</strong></a>:</p><p><a href=\"/glossary#display_name\"><strong>display_name</strong></a>:</p><p><a href=\"/glossary#holder\"><strong>holder</strong></a>:</p><p><a href=\"/glossary#holders\"><strong>holders</strong></a>:</p><p><a href=\"/glossary#id\"><strong>id</strong></a>: d8839721-ad8f-45dd-9f78-2080414b93f9</p><p><a href=\"/glossary#image_url\"><strong>image_URL</strong></a>:</p><p><a href=\"/glossary#images\"><strong>images</strong></a>:</p><p><a href=\"/glossary#is_alias\"><strong>is_alias</strong></a>:</p><p><a href=\"/glossary#\"><strong>label</strong></a>: My Account</p><p><a href=\"/glossary#latitude\"><strong>latitude</strong></a>: 38.8951</p><p><a href=\"/glossary#longitude\"><strong>longitude</strong></a>: -77.0364</p><p><a href=\"/glossary#metadata\"><strong>metadata</strong></a>:</p><p><a href=\"/glossary#more_info\"><strong>more_info</strong></a>: More information about this fee</p><p><a href=\"/glossary#name\"><strong>name</strong></a>: ACCOUNT_MANAGEMENT_FEE</p><p><a href=\"/glossary#narrative\"><strong>narrative</strong></a>:</p><p><a href=\"/glossary#new_balance\"><strong>new_balance</strong></a>: 20</p><p><a href=\"/glossary#open_corporates_url\"><strong>open_corporates_URL</strong></a>:</p><p><a href=\"/glossary#other_account\"><strong>other_account</strong></a>:</p><p><a href=\"/glossary#physical_location\"><strong>physical_location</strong></a>:</p><p><a href=\"/glossary#posted\"><strong>posted</strong></a>: 2020-01-27</p><p><a href=\"/glossary#private_alias\"><strong>private_alias</strong></a>:</p><p><a href=\"/glossary#provider\"><strong>provider</strong></a>: ETHEREUM</p><p><a href=\"/glossary#public_alias\"><strong>public_alias</strong></a>:</p><p><a href=\"/glossary#scheme\"><strong>scheme</strong></a>: OBP</p><p><a href=\"/glossary#tags\"><strong>tags</strong></a>: Create-My-User</p><p><a href=\"/glossary#this_account\"><strong>this_account</strong></a>:</p><p><a href=\"/glossary#\"><strong>transaction_attribute_id</strong></a>: 7uy8a7e4-6d02-40e3-a129-0b2bf89de8uh</p><p><a href=\"/glossary#transaction_attributes\"><strong>transaction_attributes</strong></a>:</p><p><a href=\"/glossary#transactions\"><strong>transactions</strong></a>:</p><p><a href=\"/glossary#type\"><strong>type</strong></a>:</p><p><a href=\"/glossary#User\"><strong>user</strong></a>:</p><p><a href=\"/glossary#\"><strong>value</strong></a>: 5987953</p><p><a href=\"/glossary#where\"><strong>where</strong></a>:</p>
         * @summary Get Firehose Transactions for Account
         * @param {string} VIEW_ID The view id
         * @param {string} ACCOUNT_ID The account id
         * @param {string} BANK_ID The bank id
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        oBPv300GetFirehoseTransactionsForBankAccount: async (VIEW_ID: string, ACCOUNT_ID: string, BANK_ID: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'VIEW_ID' is not null or undefined
            if (VIEW_ID === null || VIEW_ID === undefined) {
                throw new RequiredError('VIEW_ID','Required parameter VIEW_ID was null or undefined when calling oBPv300GetFirehoseTransactionsForBankAccount.');
            }
            // verify required parameter 'ACCOUNT_ID' is not null or undefined
            if (ACCOUNT_ID === null || ACCOUNT_ID === undefined) {
                throw new RequiredError('ACCOUNT_ID','Required parameter ACCOUNT_ID was null or undefined when calling oBPv300GetFirehoseTransactionsForBankAccount.');
            }
            // verify required parameter 'BANK_ID' is not null or undefined
            if (BANK_ID === null || BANK_ID === undefined) {
                throw new RequiredError('BANK_ID','Required parameter BANK_ID was null or undefined when calling oBPv300GetFirehoseTransactionsForBankAccount.');
            }
            const localVarPath = `/obp/v3.0.0/banks/{BANK_ID}/firehose/accounts/{ACCOUNT_ID}/views/{VIEW_ID}/transactions`
                .replace(`{${"VIEW_ID"}}`, encodeURIComponent(String(VIEW_ID)))
                .replace(`{${"ACCOUNT_ID"}}`, encodeURIComponent(String(ACCOUNT_ID)))
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
 * TransactionFirehoseApi - functional programming interface
 * @export
 */
export const TransactionFirehoseApiFp = function(configuration?: Configuration) {
    return {
        /**
         * <p>Get Transactions for an Account that has a firehose View.</p><p>Allows bulk access to an account's transactions.<br />User must have the CanUseFirehoseAtAnyBank Role</p><p>To find ACCOUNT_IDs, use the getFirehoseAccountsAtOneBank call.</p><p>For VIEW_ID try 'owner'</p><p>Possible custom url parameters for pagination:</p><ul><li>limit=NUMBER ==&gt; default value: 50</li><li>offset=NUMBER ==&gt; default value: 0</li></ul><p>eg1:?limit=100&amp;offset=0</p><ul><li>sort_direction=ASC/DESC ==&gt; default value: DESC.</li></ul><p>eg2:?limit=100&amp;offset=0&amp;sort_direction=ASC</p><ul><li>from_date=DATE =&gt; example value: 1970-01-01T00:00:00.000Z. NOTE! The default value is one year ago (1970-01-01T00:00:00.000Z).</li><li>to_date=DATE =&gt; example value: 2025-03-05T12:14:24.850Z. NOTE! The default value is now (2025-03-05T12:14:24.851Z).</li></ul><p>Date format parameter: yyyy-MM-dd'T'HH:mm:ss.SSS'Z'(1100-01-01T01:01:01.000Z) ==&gt; time zone is UTC.</p><p>eg3:?sort_direction=ASC&amp;limit=100&amp;offset=0&amp;from_date=1100-01-01T01:01:01.000Z&amp;to_date=1100-01-01T01:01:01.000Z</p><p>User Authentication is Required. The User must be logged in. The Application must also be authenticated.</p><p><strong>URL Parameters:</strong></p><p><a href=\"/glossary#Account.account_id\">ACCOUNT_ID</a>: 8ca8a7e4-6d02-40e3-a129-0b2bf89de9f0</p><p><a href=\"/glossary#Bank.bank_id\">BANK_ID</a>: gh.29.uk</p><p><a href=\"/glossary#this_view_id\">VIEW_ID</a>: owner</p><p><strong>JSON response body fields:</strong></p><p><a href=\"/glossary#\"><strong>URL</strong></a>: <a href=\"http://www.example.com/id-docs/123/image.png\">http://www.example.com/id-docs/123/image.png</a></p><p><a href=\"/glossary#account_routings\"><strong>account_routings</strong></a>:</p><p><a href=\"/glossary#address\"><strong>address</strong></a>:</p><p><a href=\"/glossary#\"><strong>amount</strong></a>: 10.12</p><p><a href=\"/glossary#bank_routing\"><strong>bank_routing</strong></a>:</p><p><a href=\"/glossary#comments\"><strong>comments</strong></a>:</p><p><a href=\"/glossary#completed\"><strong>completed</strong></a>: 2020-01-27</p><p><a href=\"/glossary#corporate_location\"><strong>corporate_location</strong></a>: 10</p><p><a href=\"/glossary#\"><strong>currency</strong></a>: EUR</p><p><a href=\"/glossary#\"><strong>date</strong></a>: 2020-01-27</p><p><a href=\"/glossary#description\"><strong>description</strong></a>: Description of the object. Maximum length is 2000. It can be any characters here.</p><p><a href=\"/glossary#details\"><strong>details</strong></a>:</p><p><a href=\"/glossary#display_name\"><strong>display_name</strong></a>:</p><p><a href=\"/glossary#holder\"><strong>holder</strong></a>:</p><p><a href=\"/glossary#holders\"><strong>holders</strong></a>:</p><p><a href=\"/glossary#id\"><strong>id</strong></a>: d8839721-ad8f-45dd-9f78-2080414b93f9</p><p><a href=\"/glossary#image_url\"><strong>image_URL</strong></a>:</p><p><a href=\"/glossary#images\"><strong>images</strong></a>:</p><p><a href=\"/glossary#is_alias\"><strong>is_alias</strong></a>:</p><p><a href=\"/glossary#\"><strong>label</strong></a>: My Account</p><p><a href=\"/glossary#latitude\"><strong>latitude</strong></a>: 38.8951</p><p><a href=\"/glossary#longitude\"><strong>longitude</strong></a>: -77.0364</p><p><a href=\"/glossary#metadata\"><strong>metadata</strong></a>:</p><p><a href=\"/glossary#more_info\"><strong>more_info</strong></a>: More information about this fee</p><p><a href=\"/glossary#name\"><strong>name</strong></a>: ACCOUNT_MANAGEMENT_FEE</p><p><a href=\"/glossary#narrative\"><strong>narrative</strong></a>:</p><p><a href=\"/glossary#new_balance\"><strong>new_balance</strong></a>: 20</p><p><a href=\"/glossary#open_corporates_url\"><strong>open_corporates_URL</strong></a>:</p><p><a href=\"/glossary#other_account\"><strong>other_account</strong></a>:</p><p><a href=\"/glossary#physical_location\"><strong>physical_location</strong></a>:</p><p><a href=\"/glossary#posted\"><strong>posted</strong></a>: 2020-01-27</p><p><a href=\"/glossary#private_alias\"><strong>private_alias</strong></a>:</p><p><a href=\"/glossary#provider\"><strong>provider</strong></a>: ETHEREUM</p><p><a href=\"/glossary#public_alias\"><strong>public_alias</strong></a>:</p><p><a href=\"/glossary#scheme\"><strong>scheme</strong></a>: OBP</p><p><a href=\"/glossary#tags\"><strong>tags</strong></a>: Create-My-User</p><p><a href=\"/glossary#this_account\"><strong>this_account</strong></a>:</p><p><a href=\"/glossary#\"><strong>transaction_attribute_id</strong></a>: 7uy8a7e4-6d02-40e3-a129-0b2bf89de8uh</p><p><a href=\"/glossary#transaction_attributes\"><strong>transaction_attributes</strong></a>:</p><p><a href=\"/glossary#transactions\"><strong>transactions</strong></a>:</p><p><a href=\"/glossary#type\"><strong>type</strong></a>:</p><p><a href=\"/glossary#User\"><strong>user</strong></a>:</p><p><a href=\"/glossary#\"><strong>value</strong></a>: 5987953</p><p><a href=\"/glossary#where\"><strong>where</strong></a>:</p>
         * @summary Get Firehose Transactions for Account
         * @param {string} VIEW_ID The view id
         * @param {string} ACCOUNT_ID The account id
         * @param {string} BANK_ID The bank id
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async oBPv300GetFirehoseTransactionsForBankAccount(VIEW_ID: string, ACCOUNT_ID: string, BANK_ID: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<InlineResponse20011>>> {
            const localVarAxiosArgs = await TransactionFirehoseApiAxiosParamCreator(configuration).oBPv300GetFirehoseTransactionsForBankAccount(VIEW_ID, ACCOUNT_ID, BANK_ID, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * TransactionFirehoseApi - factory interface
 * @export
 */
export const TransactionFirehoseApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * <p>Get Transactions for an Account that has a firehose View.</p><p>Allows bulk access to an account's transactions.<br />User must have the CanUseFirehoseAtAnyBank Role</p><p>To find ACCOUNT_IDs, use the getFirehoseAccountsAtOneBank call.</p><p>For VIEW_ID try 'owner'</p><p>Possible custom url parameters for pagination:</p><ul><li>limit=NUMBER ==&gt; default value: 50</li><li>offset=NUMBER ==&gt; default value: 0</li></ul><p>eg1:?limit=100&amp;offset=0</p><ul><li>sort_direction=ASC/DESC ==&gt; default value: DESC.</li></ul><p>eg2:?limit=100&amp;offset=0&amp;sort_direction=ASC</p><ul><li>from_date=DATE =&gt; example value: 1970-01-01T00:00:00.000Z. NOTE! The default value is one year ago (1970-01-01T00:00:00.000Z).</li><li>to_date=DATE =&gt; example value: 2025-03-05T12:14:24.850Z. NOTE! The default value is now (2025-03-05T12:14:24.851Z).</li></ul><p>Date format parameter: yyyy-MM-dd'T'HH:mm:ss.SSS'Z'(1100-01-01T01:01:01.000Z) ==&gt; time zone is UTC.</p><p>eg3:?sort_direction=ASC&amp;limit=100&amp;offset=0&amp;from_date=1100-01-01T01:01:01.000Z&amp;to_date=1100-01-01T01:01:01.000Z</p><p>User Authentication is Required. The User must be logged in. The Application must also be authenticated.</p><p><strong>URL Parameters:</strong></p><p><a href=\"/glossary#Account.account_id\">ACCOUNT_ID</a>: 8ca8a7e4-6d02-40e3-a129-0b2bf89de9f0</p><p><a href=\"/glossary#Bank.bank_id\">BANK_ID</a>: gh.29.uk</p><p><a href=\"/glossary#this_view_id\">VIEW_ID</a>: owner</p><p><strong>JSON response body fields:</strong></p><p><a href=\"/glossary#\"><strong>URL</strong></a>: <a href=\"http://www.example.com/id-docs/123/image.png\">http://www.example.com/id-docs/123/image.png</a></p><p><a href=\"/glossary#account_routings\"><strong>account_routings</strong></a>:</p><p><a href=\"/glossary#address\"><strong>address</strong></a>:</p><p><a href=\"/glossary#\"><strong>amount</strong></a>: 10.12</p><p><a href=\"/glossary#bank_routing\"><strong>bank_routing</strong></a>:</p><p><a href=\"/glossary#comments\"><strong>comments</strong></a>:</p><p><a href=\"/glossary#completed\"><strong>completed</strong></a>: 2020-01-27</p><p><a href=\"/glossary#corporate_location\"><strong>corporate_location</strong></a>: 10</p><p><a href=\"/glossary#\"><strong>currency</strong></a>: EUR</p><p><a href=\"/glossary#\"><strong>date</strong></a>: 2020-01-27</p><p><a href=\"/glossary#description\"><strong>description</strong></a>: Description of the object. Maximum length is 2000. It can be any characters here.</p><p><a href=\"/glossary#details\"><strong>details</strong></a>:</p><p><a href=\"/glossary#display_name\"><strong>display_name</strong></a>:</p><p><a href=\"/glossary#holder\"><strong>holder</strong></a>:</p><p><a href=\"/glossary#holders\"><strong>holders</strong></a>:</p><p><a href=\"/glossary#id\"><strong>id</strong></a>: d8839721-ad8f-45dd-9f78-2080414b93f9</p><p><a href=\"/glossary#image_url\"><strong>image_URL</strong></a>:</p><p><a href=\"/glossary#images\"><strong>images</strong></a>:</p><p><a href=\"/glossary#is_alias\"><strong>is_alias</strong></a>:</p><p><a href=\"/glossary#\"><strong>label</strong></a>: My Account</p><p><a href=\"/glossary#latitude\"><strong>latitude</strong></a>: 38.8951</p><p><a href=\"/glossary#longitude\"><strong>longitude</strong></a>: -77.0364</p><p><a href=\"/glossary#metadata\"><strong>metadata</strong></a>:</p><p><a href=\"/glossary#more_info\"><strong>more_info</strong></a>: More information about this fee</p><p><a href=\"/glossary#name\"><strong>name</strong></a>: ACCOUNT_MANAGEMENT_FEE</p><p><a href=\"/glossary#narrative\"><strong>narrative</strong></a>:</p><p><a href=\"/glossary#new_balance\"><strong>new_balance</strong></a>: 20</p><p><a href=\"/glossary#open_corporates_url\"><strong>open_corporates_URL</strong></a>:</p><p><a href=\"/glossary#other_account\"><strong>other_account</strong></a>:</p><p><a href=\"/glossary#physical_location\"><strong>physical_location</strong></a>:</p><p><a href=\"/glossary#posted\"><strong>posted</strong></a>: 2020-01-27</p><p><a href=\"/glossary#private_alias\"><strong>private_alias</strong></a>:</p><p><a href=\"/glossary#provider\"><strong>provider</strong></a>: ETHEREUM</p><p><a href=\"/glossary#public_alias\"><strong>public_alias</strong></a>:</p><p><a href=\"/glossary#scheme\"><strong>scheme</strong></a>: OBP</p><p><a href=\"/glossary#tags\"><strong>tags</strong></a>: Create-My-User</p><p><a href=\"/glossary#this_account\"><strong>this_account</strong></a>:</p><p><a href=\"/glossary#\"><strong>transaction_attribute_id</strong></a>: 7uy8a7e4-6d02-40e3-a129-0b2bf89de8uh</p><p><a href=\"/glossary#transaction_attributes\"><strong>transaction_attributes</strong></a>:</p><p><a href=\"/glossary#transactions\"><strong>transactions</strong></a>:</p><p><a href=\"/glossary#type\"><strong>type</strong></a>:</p><p><a href=\"/glossary#User\"><strong>user</strong></a>:</p><p><a href=\"/glossary#\"><strong>value</strong></a>: 5987953</p><p><a href=\"/glossary#where\"><strong>where</strong></a>:</p>
         * @summary Get Firehose Transactions for Account
         * @param {string} VIEW_ID The view id
         * @param {string} ACCOUNT_ID The account id
         * @param {string} BANK_ID The bank id
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async oBPv300GetFirehoseTransactionsForBankAccount(VIEW_ID: string, ACCOUNT_ID: string, BANK_ID: string, options?: AxiosRequestConfig): Promise<AxiosResponse<InlineResponse20011>> {
            return TransactionFirehoseApiFp(configuration).oBPv300GetFirehoseTransactionsForBankAccount(VIEW_ID, ACCOUNT_ID, BANK_ID, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * TransactionFirehoseApi - object-oriented interface
 * @export
 * @class TransactionFirehoseApi
 * @extends {BaseAPI}
 */
export class TransactionFirehoseApi extends BaseAPI {
    /**
     * <p>Get Transactions for an Account that has a firehose View.</p><p>Allows bulk access to an account's transactions.<br />User must have the CanUseFirehoseAtAnyBank Role</p><p>To find ACCOUNT_IDs, use the getFirehoseAccountsAtOneBank call.</p><p>For VIEW_ID try 'owner'</p><p>Possible custom url parameters for pagination:</p><ul><li>limit=NUMBER ==&gt; default value: 50</li><li>offset=NUMBER ==&gt; default value: 0</li></ul><p>eg1:?limit=100&amp;offset=0</p><ul><li>sort_direction=ASC/DESC ==&gt; default value: DESC.</li></ul><p>eg2:?limit=100&amp;offset=0&amp;sort_direction=ASC</p><ul><li>from_date=DATE =&gt; example value: 1970-01-01T00:00:00.000Z. NOTE! The default value is one year ago (1970-01-01T00:00:00.000Z).</li><li>to_date=DATE =&gt; example value: 2025-03-05T12:14:24.850Z. NOTE! The default value is now (2025-03-05T12:14:24.851Z).</li></ul><p>Date format parameter: yyyy-MM-dd'T'HH:mm:ss.SSS'Z'(1100-01-01T01:01:01.000Z) ==&gt; time zone is UTC.</p><p>eg3:?sort_direction=ASC&amp;limit=100&amp;offset=0&amp;from_date=1100-01-01T01:01:01.000Z&amp;to_date=1100-01-01T01:01:01.000Z</p><p>User Authentication is Required. The User must be logged in. The Application must also be authenticated.</p><p><strong>URL Parameters:</strong></p><p><a href=\"/glossary#Account.account_id\">ACCOUNT_ID</a>: 8ca8a7e4-6d02-40e3-a129-0b2bf89de9f0</p><p><a href=\"/glossary#Bank.bank_id\">BANK_ID</a>: gh.29.uk</p><p><a href=\"/glossary#this_view_id\">VIEW_ID</a>: owner</p><p><strong>JSON response body fields:</strong></p><p><a href=\"/glossary#\"><strong>URL</strong></a>: <a href=\"http://www.example.com/id-docs/123/image.png\">http://www.example.com/id-docs/123/image.png</a></p><p><a href=\"/glossary#account_routings\"><strong>account_routings</strong></a>:</p><p><a href=\"/glossary#address\"><strong>address</strong></a>:</p><p><a href=\"/glossary#\"><strong>amount</strong></a>: 10.12</p><p><a href=\"/glossary#bank_routing\"><strong>bank_routing</strong></a>:</p><p><a href=\"/glossary#comments\"><strong>comments</strong></a>:</p><p><a href=\"/glossary#completed\"><strong>completed</strong></a>: 2020-01-27</p><p><a href=\"/glossary#corporate_location\"><strong>corporate_location</strong></a>: 10</p><p><a href=\"/glossary#\"><strong>currency</strong></a>: EUR</p><p><a href=\"/glossary#\"><strong>date</strong></a>: 2020-01-27</p><p><a href=\"/glossary#description\"><strong>description</strong></a>: Description of the object. Maximum length is 2000. It can be any characters here.</p><p><a href=\"/glossary#details\"><strong>details</strong></a>:</p><p><a href=\"/glossary#display_name\"><strong>display_name</strong></a>:</p><p><a href=\"/glossary#holder\"><strong>holder</strong></a>:</p><p><a href=\"/glossary#holders\"><strong>holders</strong></a>:</p><p><a href=\"/glossary#id\"><strong>id</strong></a>: d8839721-ad8f-45dd-9f78-2080414b93f9</p><p><a href=\"/glossary#image_url\"><strong>image_URL</strong></a>:</p><p><a href=\"/glossary#images\"><strong>images</strong></a>:</p><p><a href=\"/glossary#is_alias\"><strong>is_alias</strong></a>:</p><p><a href=\"/glossary#\"><strong>label</strong></a>: My Account</p><p><a href=\"/glossary#latitude\"><strong>latitude</strong></a>: 38.8951</p><p><a href=\"/glossary#longitude\"><strong>longitude</strong></a>: -77.0364</p><p><a href=\"/glossary#metadata\"><strong>metadata</strong></a>:</p><p><a href=\"/glossary#more_info\"><strong>more_info</strong></a>: More information about this fee</p><p><a href=\"/glossary#name\"><strong>name</strong></a>: ACCOUNT_MANAGEMENT_FEE</p><p><a href=\"/glossary#narrative\"><strong>narrative</strong></a>:</p><p><a href=\"/glossary#new_balance\"><strong>new_balance</strong></a>: 20</p><p><a href=\"/glossary#open_corporates_url\"><strong>open_corporates_URL</strong></a>:</p><p><a href=\"/glossary#other_account\"><strong>other_account</strong></a>:</p><p><a href=\"/glossary#physical_location\"><strong>physical_location</strong></a>:</p><p><a href=\"/glossary#posted\"><strong>posted</strong></a>: 2020-01-27</p><p><a href=\"/glossary#private_alias\"><strong>private_alias</strong></a>:</p><p><a href=\"/glossary#provider\"><strong>provider</strong></a>: ETHEREUM</p><p><a href=\"/glossary#public_alias\"><strong>public_alias</strong></a>:</p><p><a href=\"/glossary#scheme\"><strong>scheme</strong></a>: OBP</p><p><a href=\"/glossary#tags\"><strong>tags</strong></a>: Create-My-User</p><p><a href=\"/glossary#this_account\"><strong>this_account</strong></a>:</p><p><a href=\"/glossary#\"><strong>transaction_attribute_id</strong></a>: 7uy8a7e4-6d02-40e3-a129-0b2bf89de8uh</p><p><a href=\"/glossary#transaction_attributes\"><strong>transaction_attributes</strong></a>:</p><p><a href=\"/glossary#transactions\"><strong>transactions</strong></a>:</p><p><a href=\"/glossary#type\"><strong>type</strong></a>:</p><p><a href=\"/glossary#User\"><strong>user</strong></a>:</p><p><a href=\"/glossary#\"><strong>value</strong></a>: 5987953</p><p><a href=\"/glossary#where\"><strong>where</strong></a>:</p>
     * @summary Get Firehose Transactions for Account
     * @param {string} VIEW_ID The view id
     * @param {string} ACCOUNT_ID The account id
     * @param {string} BANK_ID The bank id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TransactionFirehoseApi
     */
    public async oBPv300GetFirehoseTransactionsForBankAccount(VIEW_ID: string, ACCOUNT_ID: string, BANK_ID: string, options?: AxiosRequestConfig) : Promise<AxiosResponse<InlineResponse20011>> {
        return TransactionFirehoseApiFp(this.configuration).oBPv300GetFirehoseTransactionsForBankAccount(VIEW_ID, ACCOUNT_ID, BANK_ID, options).then((request) => request(this.axios, this.basePath));
    }
}
