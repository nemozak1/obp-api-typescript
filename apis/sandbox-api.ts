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
import { SandboxDataImport } from '../models';
import { SuccessMessage } from '../models';
/**
 * SandboxApi - axios parameter creator
 * @export
 */
export const SandboxApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * <p>Import bulk data into the sandbox (Authenticated access).</p><p>This call can be used to create banks, users, accounts and transactions which are stored in the local RDBMS.</p><p>The user needs to have CanCreateSandbox entitlement.</p><p>Note: This is a monolithic call. You could also use a combination of endpoints including create bank, create user, create account and create transaction request to create similar data.</p><p>An example of an import set of data (json) can be found <a href=\"https://raw.githubusercontent.com/OpenBankProject/OBP-API/develop/obp-api/src/main/scala/code/api/sandbox/example_data/2016-04-28/example_import.json\">here</a><br />User Authentication is Required. The User must be logged in. The Application must also be authenticated.</p><p><strong>JSON request body fields:</strong></p><p><a href=\"/glossary#\"><strong>IBAN</strong></a>: DE91 1000 0000 0123 4567 89</p><p><a href=\"/glossary#accounts\"><strong>accounts</strong></a>:</p><p><a href=\"/glossary#actual_date\"><strong>actual_date</strong></a>: 2020-01-27</p><p><a href=\"/glossary#address\"><strong>address</strong></a>:</p><p><a href=\"/glossary#\"><strong>amount</strong></a>: 10.12</p><p><a href=\"/glossary#atms\"><strong>atms</strong></a>:</p><p><a href=\"/glossary#balance\"><strong>balance</strong></a>: 10</p><p><a href=\"/glossary#Bank\"><strong>bank</strong></a>:</p><p><a href=\"/glossary#\"><strong>bank_id</strong></a>: gh.29.uk</p><p><a href=\"/glossary#banks\"><strong>banks</strong></a>:</p><p><a href=\"/glossary#branches\"><strong>branches</strong></a>:</p><p><a href=\"/glossary#category\"><strong>category</strong></a>:</p><p><a href=\"/glossary#channel\"><strong>channel</strong></a>:</p><p><a href=\"/glossary#city\"><strong>city</strong></a>:</p><p><a href=\"/glossary#code\"><strong>code</strong></a>: 125</p><p><a href=\"/glossary#completed\"><strong>completed</strong></a>: 2020-01-27</p><p><a href=\"/glossary#country_code\"><strong>country_code</strong></a>: 1254</p><p><a href=\"/glossary#county\"><strong>county</strong></a>:</p><p><a href=\"/glossary#crm_events\"><strong>crm_events</strong></a>:</p><p><a href=\"/glossary#\"><strong>currency</strong></a>: EUR</p><p><a href=\"/glossary#Customer\"><strong>customer</strong></a>:</p><p><a href=\"/glossary#description\"><strong>description</strong></a>: Description of the object. Maximum length is 2000. It can be any characters here.</p><p><a href=\"/glossary#detail\"><strong>detail</strong></a>:</p><p><a href=\"/glossary#details\"><strong>details</strong></a>:</p><p><a href=\"/glossary#\"><strong>email</strong></a>: <a href=\"&#x6d;a&#105;lt&#x6f;&#x3a;&#x66;&#x65;&#108;&#105;&#x78;sm&#x69;th&#64;&#x65;x&#x61;&#109;&#112;&#108;&#x65;&#x2e;&#99;&#x6f;m\">&#x66;&#101;&#x6c;&#x69;&#x78;&#x73;&#109;&#105;&#x74;h&#x40;&#101;&#x78;&#x61;&#109;&#x70;&#x6c;&#101;.&#x63;&#111;&#x6d;</a></p><p><a href=\"/glossary#family\"><strong>family</strong></a>:</p><p><a href=\"/glossary#full_name\"><strong>full_name</strong></a>: full name string</p><p><a href=\"/glossary#generate_accountants_view\"><strong>generate_accountants_view</strong></a>:</p><p><a href=\"/glossary#generate_auditors_view\"><strong>generate_auditors_view</strong></a>:</p><p><a href=\"/glossary#generate_public_view\"><strong>generate_public_view</strong></a>:</p><p><a href=\"/glossary#hours\"><strong>hours</strong></a>:</p><p><a href=\"/glossary#id\"><strong>id</strong></a>: d8839721-ad8f-45dd-9f78-2080414b93f9</p><p><a href=\"/glossary#\"><strong>label</strong></a>: My Account</p><p><a href=\"/glossary#latitude\"><strong>latitude</strong></a>: 38.8951</p><p><a href=\"/glossary#license\"><strong>license</strong></a>:</p><p><a href=\"/glossary#\"><strong>line_1</strong></a>:</p><p><a href=\"/glossary#\"><strong>line_2</strong></a>:</p><p><a href=\"/glossary#\"><strong>line_3</strong></a>:</p><p><a href=\"/glossary#location\"><strong>location</strong></a>:</p><p><a href=\"/glossary#logo\"><strong>logo</strong></a>: logo url</p><p><a href=\"/glossary#longitude\"><strong>longitude</strong></a>: -77.0364</p><p><a href=\"/glossary#meta\"><strong>meta</strong></a>:</p><p><a href=\"/glossary#more_info_url\"><strong>more_info_url</strong></a>: <a href=\"http://www.example.com/abc\">www.example.com/abc</a></p><p><a href=\"/glossary#name\"><strong>name</strong></a>: ACCOUNT_MANAGEMENT_FEE</p><p><a href=\"/glossary#new_balance\"><strong>new_balance</strong></a>: 20</p><p><a href=\"/glossary#number\"><strong>number</strong></a>:</p><p><a href=\"/glossary#owners\"><strong>owners</strong></a>:</p><p><a href=\"/glossary#\"><strong>password</strong></a>: password</p><p><a href=\"/glossary#post_code\"><strong>post_code</strong></a>: 789</p><p><a href=\"/glossary#posted\"><strong>posted</strong></a>: 2020-01-27</p><p><a href=\"/glossary#products\"><strong>products</strong></a>:</p><p><a href=\"/glossary#short_name\"><strong>short_name</strong></a>:</p><p><a href=\"/glossary#state\"><strong>state</strong></a>:</p><p><a href=\"/glossary#super_family\"><strong>super_family</strong></a>:</p><p><a href=\"/glossary#this_account\"><strong>this_account</strong></a>:</p><p><a href=\"/glossary#transactions\"><strong>transactions</strong></a>:</p><p><a href=\"/glossary#type\"><strong>type</strong></a>:</p><p><a href=\"/glossary#\"><strong>user_name</strong></a>: felixsmith</p><p><a href=\"/glossary#users\"><strong>users</strong></a>: user list</p><p><a href=\"/glossary#\"><strong>value</strong></a>: 5987953</p><p><a href=\"/glossary#website\"><strong>website</strong></a>: <a href=\"http://www.openbankproject.com\">www.openbankproject.com</a></p><p><a href=\"/glossary#\">account_number</a>: 546387432</p><p><a href=\"/glossary#counterparty\">counterparty</a>:</p><p><a href=\"/glossary#driveup\">driveUp</a>:</p><p><a href=\"/glossary#lobby\">lobby</a>:</p><p><a href=\"/glossary#name\"><strong>name</strong></a>: ACCOUNT_MANAGEMENT_FEE</p><p><strong>JSON response body fields:</strong></p><p><a href=\"/glossary#success\"><strong>success</strong></a>:</p>
         * @summary Create sandbox
         * @param {SandboxDataImport} body SandboxDataImport object that needs to be added.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        oBPv210SandboxDataImport: async (body: SandboxDataImport, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'body' is not null or undefined
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling oBPv210SandboxDataImport.');
            }
            const localVarPath = `/obp/v2.1.0/sandbox/data-import`;
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
 * SandboxApi - functional programming interface
 * @export
 */
export const SandboxApiFp = function(configuration?: Configuration) {
    return {
        /**
         * <p>Import bulk data into the sandbox (Authenticated access).</p><p>This call can be used to create banks, users, accounts and transactions which are stored in the local RDBMS.</p><p>The user needs to have CanCreateSandbox entitlement.</p><p>Note: This is a monolithic call. You could also use a combination of endpoints including create bank, create user, create account and create transaction request to create similar data.</p><p>An example of an import set of data (json) can be found <a href=\"https://raw.githubusercontent.com/OpenBankProject/OBP-API/develop/obp-api/src/main/scala/code/api/sandbox/example_data/2016-04-28/example_import.json\">here</a><br />User Authentication is Required. The User must be logged in. The Application must also be authenticated.</p><p><strong>JSON request body fields:</strong></p><p><a href=\"/glossary#\"><strong>IBAN</strong></a>: DE91 1000 0000 0123 4567 89</p><p><a href=\"/glossary#accounts\"><strong>accounts</strong></a>:</p><p><a href=\"/glossary#actual_date\"><strong>actual_date</strong></a>: 2020-01-27</p><p><a href=\"/glossary#address\"><strong>address</strong></a>:</p><p><a href=\"/glossary#\"><strong>amount</strong></a>: 10.12</p><p><a href=\"/glossary#atms\"><strong>atms</strong></a>:</p><p><a href=\"/glossary#balance\"><strong>balance</strong></a>: 10</p><p><a href=\"/glossary#Bank\"><strong>bank</strong></a>:</p><p><a href=\"/glossary#\"><strong>bank_id</strong></a>: gh.29.uk</p><p><a href=\"/glossary#banks\"><strong>banks</strong></a>:</p><p><a href=\"/glossary#branches\"><strong>branches</strong></a>:</p><p><a href=\"/glossary#category\"><strong>category</strong></a>:</p><p><a href=\"/glossary#channel\"><strong>channel</strong></a>:</p><p><a href=\"/glossary#city\"><strong>city</strong></a>:</p><p><a href=\"/glossary#code\"><strong>code</strong></a>: 125</p><p><a href=\"/glossary#completed\"><strong>completed</strong></a>: 2020-01-27</p><p><a href=\"/glossary#country_code\"><strong>country_code</strong></a>: 1254</p><p><a href=\"/glossary#county\"><strong>county</strong></a>:</p><p><a href=\"/glossary#crm_events\"><strong>crm_events</strong></a>:</p><p><a href=\"/glossary#\"><strong>currency</strong></a>: EUR</p><p><a href=\"/glossary#Customer\"><strong>customer</strong></a>:</p><p><a href=\"/glossary#description\"><strong>description</strong></a>: Description of the object. Maximum length is 2000. It can be any characters here.</p><p><a href=\"/glossary#detail\"><strong>detail</strong></a>:</p><p><a href=\"/glossary#details\"><strong>details</strong></a>:</p><p><a href=\"/glossary#\"><strong>email</strong></a>: <a href=\"&#x6d;a&#105;lt&#x6f;&#x3a;&#x66;&#x65;&#108;&#105;&#x78;sm&#x69;th&#64;&#x65;x&#x61;&#109;&#112;&#108;&#x65;&#x2e;&#99;&#x6f;m\">&#x66;&#101;&#x6c;&#x69;&#x78;&#x73;&#109;&#105;&#x74;h&#x40;&#101;&#x78;&#x61;&#109;&#x70;&#x6c;&#101;.&#x63;&#111;&#x6d;</a></p><p><a href=\"/glossary#family\"><strong>family</strong></a>:</p><p><a href=\"/glossary#full_name\"><strong>full_name</strong></a>: full name string</p><p><a href=\"/glossary#generate_accountants_view\"><strong>generate_accountants_view</strong></a>:</p><p><a href=\"/glossary#generate_auditors_view\"><strong>generate_auditors_view</strong></a>:</p><p><a href=\"/glossary#generate_public_view\"><strong>generate_public_view</strong></a>:</p><p><a href=\"/glossary#hours\"><strong>hours</strong></a>:</p><p><a href=\"/glossary#id\"><strong>id</strong></a>: d8839721-ad8f-45dd-9f78-2080414b93f9</p><p><a href=\"/glossary#\"><strong>label</strong></a>: My Account</p><p><a href=\"/glossary#latitude\"><strong>latitude</strong></a>: 38.8951</p><p><a href=\"/glossary#license\"><strong>license</strong></a>:</p><p><a href=\"/glossary#\"><strong>line_1</strong></a>:</p><p><a href=\"/glossary#\"><strong>line_2</strong></a>:</p><p><a href=\"/glossary#\"><strong>line_3</strong></a>:</p><p><a href=\"/glossary#location\"><strong>location</strong></a>:</p><p><a href=\"/glossary#logo\"><strong>logo</strong></a>: logo url</p><p><a href=\"/glossary#longitude\"><strong>longitude</strong></a>: -77.0364</p><p><a href=\"/glossary#meta\"><strong>meta</strong></a>:</p><p><a href=\"/glossary#more_info_url\"><strong>more_info_url</strong></a>: <a href=\"http://www.example.com/abc\">www.example.com/abc</a></p><p><a href=\"/glossary#name\"><strong>name</strong></a>: ACCOUNT_MANAGEMENT_FEE</p><p><a href=\"/glossary#new_balance\"><strong>new_balance</strong></a>: 20</p><p><a href=\"/glossary#number\"><strong>number</strong></a>:</p><p><a href=\"/glossary#owners\"><strong>owners</strong></a>:</p><p><a href=\"/glossary#\"><strong>password</strong></a>: password</p><p><a href=\"/glossary#post_code\"><strong>post_code</strong></a>: 789</p><p><a href=\"/glossary#posted\"><strong>posted</strong></a>: 2020-01-27</p><p><a href=\"/glossary#products\"><strong>products</strong></a>:</p><p><a href=\"/glossary#short_name\"><strong>short_name</strong></a>:</p><p><a href=\"/glossary#state\"><strong>state</strong></a>:</p><p><a href=\"/glossary#super_family\"><strong>super_family</strong></a>:</p><p><a href=\"/glossary#this_account\"><strong>this_account</strong></a>:</p><p><a href=\"/glossary#transactions\"><strong>transactions</strong></a>:</p><p><a href=\"/glossary#type\"><strong>type</strong></a>:</p><p><a href=\"/glossary#\"><strong>user_name</strong></a>: felixsmith</p><p><a href=\"/glossary#users\"><strong>users</strong></a>: user list</p><p><a href=\"/glossary#\"><strong>value</strong></a>: 5987953</p><p><a href=\"/glossary#website\"><strong>website</strong></a>: <a href=\"http://www.openbankproject.com\">www.openbankproject.com</a></p><p><a href=\"/glossary#\">account_number</a>: 546387432</p><p><a href=\"/glossary#counterparty\">counterparty</a>:</p><p><a href=\"/glossary#driveup\">driveUp</a>:</p><p><a href=\"/glossary#lobby\">lobby</a>:</p><p><a href=\"/glossary#name\"><strong>name</strong></a>: ACCOUNT_MANAGEMENT_FEE</p><p><strong>JSON response body fields:</strong></p><p><a href=\"/glossary#success\"><strong>success</strong></a>:</p>
         * @summary Create sandbox
         * @param {SandboxDataImport} body SandboxDataImport object that needs to be added.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async oBPv210SandboxDataImport(body: SandboxDataImport, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<SuccessMessage>>> {
            const localVarAxiosArgs = await SandboxApiAxiosParamCreator(configuration).oBPv210SandboxDataImport(body, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * SandboxApi - factory interface
 * @export
 */
export const SandboxApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * <p>Import bulk data into the sandbox (Authenticated access).</p><p>This call can be used to create banks, users, accounts and transactions which are stored in the local RDBMS.</p><p>The user needs to have CanCreateSandbox entitlement.</p><p>Note: This is a monolithic call. You could also use a combination of endpoints including create bank, create user, create account and create transaction request to create similar data.</p><p>An example of an import set of data (json) can be found <a href=\"https://raw.githubusercontent.com/OpenBankProject/OBP-API/develop/obp-api/src/main/scala/code/api/sandbox/example_data/2016-04-28/example_import.json\">here</a><br />User Authentication is Required. The User must be logged in. The Application must also be authenticated.</p><p><strong>JSON request body fields:</strong></p><p><a href=\"/glossary#\"><strong>IBAN</strong></a>: DE91 1000 0000 0123 4567 89</p><p><a href=\"/glossary#accounts\"><strong>accounts</strong></a>:</p><p><a href=\"/glossary#actual_date\"><strong>actual_date</strong></a>: 2020-01-27</p><p><a href=\"/glossary#address\"><strong>address</strong></a>:</p><p><a href=\"/glossary#\"><strong>amount</strong></a>: 10.12</p><p><a href=\"/glossary#atms\"><strong>atms</strong></a>:</p><p><a href=\"/glossary#balance\"><strong>balance</strong></a>: 10</p><p><a href=\"/glossary#Bank\"><strong>bank</strong></a>:</p><p><a href=\"/glossary#\"><strong>bank_id</strong></a>: gh.29.uk</p><p><a href=\"/glossary#banks\"><strong>banks</strong></a>:</p><p><a href=\"/glossary#branches\"><strong>branches</strong></a>:</p><p><a href=\"/glossary#category\"><strong>category</strong></a>:</p><p><a href=\"/glossary#channel\"><strong>channel</strong></a>:</p><p><a href=\"/glossary#city\"><strong>city</strong></a>:</p><p><a href=\"/glossary#code\"><strong>code</strong></a>: 125</p><p><a href=\"/glossary#completed\"><strong>completed</strong></a>: 2020-01-27</p><p><a href=\"/glossary#country_code\"><strong>country_code</strong></a>: 1254</p><p><a href=\"/glossary#county\"><strong>county</strong></a>:</p><p><a href=\"/glossary#crm_events\"><strong>crm_events</strong></a>:</p><p><a href=\"/glossary#\"><strong>currency</strong></a>: EUR</p><p><a href=\"/glossary#Customer\"><strong>customer</strong></a>:</p><p><a href=\"/glossary#description\"><strong>description</strong></a>: Description of the object. Maximum length is 2000. It can be any characters here.</p><p><a href=\"/glossary#detail\"><strong>detail</strong></a>:</p><p><a href=\"/glossary#details\"><strong>details</strong></a>:</p><p><a href=\"/glossary#\"><strong>email</strong></a>: <a href=\"&#x6d;a&#105;lt&#x6f;&#x3a;&#x66;&#x65;&#108;&#105;&#x78;sm&#x69;th&#64;&#x65;x&#x61;&#109;&#112;&#108;&#x65;&#x2e;&#99;&#x6f;m\">&#x66;&#101;&#x6c;&#x69;&#x78;&#x73;&#109;&#105;&#x74;h&#x40;&#101;&#x78;&#x61;&#109;&#x70;&#x6c;&#101;.&#x63;&#111;&#x6d;</a></p><p><a href=\"/glossary#family\"><strong>family</strong></a>:</p><p><a href=\"/glossary#full_name\"><strong>full_name</strong></a>: full name string</p><p><a href=\"/glossary#generate_accountants_view\"><strong>generate_accountants_view</strong></a>:</p><p><a href=\"/glossary#generate_auditors_view\"><strong>generate_auditors_view</strong></a>:</p><p><a href=\"/glossary#generate_public_view\"><strong>generate_public_view</strong></a>:</p><p><a href=\"/glossary#hours\"><strong>hours</strong></a>:</p><p><a href=\"/glossary#id\"><strong>id</strong></a>: d8839721-ad8f-45dd-9f78-2080414b93f9</p><p><a href=\"/glossary#\"><strong>label</strong></a>: My Account</p><p><a href=\"/glossary#latitude\"><strong>latitude</strong></a>: 38.8951</p><p><a href=\"/glossary#license\"><strong>license</strong></a>:</p><p><a href=\"/glossary#\"><strong>line_1</strong></a>:</p><p><a href=\"/glossary#\"><strong>line_2</strong></a>:</p><p><a href=\"/glossary#\"><strong>line_3</strong></a>:</p><p><a href=\"/glossary#location\"><strong>location</strong></a>:</p><p><a href=\"/glossary#logo\"><strong>logo</strong></a>: logo url</p><p><a href=\"/glossary#longitude\"><strong>longitude</strong></a>: -77.0364</p><p><a href=\"/glossary#meta\"><strong>meta</strong></a>:</p><p><a href=\"/glossary#more_info_url\"><strong>more_info_url</strong></a>: <a href=\"http://www.example.com/abc\">www.example.com/abc</a></p><p><a href=\"/glossary#name\"><strong>name</strong></a>: ACCOUNT_MANAGEMENT_FEE</p><p><a href=\"/glossary#new_balance\"><strong>new_balance</strong></a>: 20</p><p><a href=\"/glossary#number\"><strong>number</strong></a>:</p><p><a href=\"/glossary#owners\"><strong>owners</strong></a>:</p><p><a href=\"/glossary#\"><strong>password</strong></a>: password</p><p><a href=\"/glossary#post_code\"><strong>post_code</strong></a>: 789</p><p><a href=\"/glossary#posted\"><strong>posted</strong></a>: 2020-01-27</p><p><a href=\"/glossary#products\"><strong>products</strong></a>:</p><p><a href=\"/glossary#short_name\"><strong>short_name</strong></a>:</p><p><a href=\"/glossary#state\"><strong>state</strong></a>:</p><p><a href=\"/glossary#super_family\"><strong>super_family</strong></a>:</p><p><a href=\"/glossary#this_account\"><strong>this_account</strong></a>:</p><p><a href=\"/glossary#transactions\"><strong>transactions</strong></a>:</p><p><a href=\"/glossary#type\"><strong>type</strong></a>:</p><p><a href=\"/glossary#\"><strong>user_name</strong></a>: felixsmith</p><p><a href=\"/glossary#users\"><strong>users</strong></a>: user list</p><p><a href=\"/glossary#\"><strong>value</strong></a>: 5987953</p><p><a href=\"/glossary#website\"><strong>website</strong></a>: <a href=\"http://www.openbankproject.com\">www.openbankproject.com</a></p><p><a href=\"/glossary#\">account_number</a>: 546387432</p><p><a href=\"/glossary#counterparty\">counterparty</a>:</p><p><a href=\"/glossary#driveup\">driveUp</a>:</p><p><a href=\"/glossary#lobby\">lobby</a>:</p><p><a href=\"/glossary#name\"><strong>name</strong></a>: ACCOUNT_MANAGEMENT_FEE</p><p><strong>JSON response body fields:</strong></p><p><a href=\"/glossary#success\"><strong>success</strong></a>:</p>
         * @summary Create sandbox
         * @param {SandboxDataImport} body SandboxDataImport object that needs to be added.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async oBPv210SandboxDataImport(body: SandboxDataImport, options?: AxiosRequestConfig): Promise<AxiosResponse<SuccessMessage>> {
            return SandboxApiFp(configuration).oBPv210SandboxDataImport(body, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * SandboxApi - object-oriented interface
 * @export
 * @class SandboxApi
 * @extends {BaseAPI}
 */
export class SandboxApi extends BaseAPI {
    /**
     * <p>Import bulk data into the sandbox (Authenticated access).</p><p>This call can be used to create banks, users, accounts and transactions which are stored in the local RDBMS.</p><p>The user needs to have CanCreateSandbox entitlement.</p><p>Note: This is a monolithic call. You could also use a combination of endpoints including create bank, create user, create account and create transaction request to create similar data.</p><p>An example of an import set of data (json) can be found <a href=\"https://raw.githubusercontent.com/OpenBankProject/OBP-API/develop/obp-api/src/main/scala/code/api/sandbox/example_data/2016-04-28/example_import.json\">here</a><br />User Authentication is Required. The User must be logged in. The Application must also be authenticated.</p><p><strong>JSON request body fields:</strong></p><p><a href=\"/glossary#\"><strong>IBAN</strong></a>: DE91 1000 0000 0123 4567 89</p><p><a href=\"/glossary#accounts\"><strong>accounts</strong></a>:</p><p><a href=\"/glossary#actual_date\"><strong>actual_date</strong></a>: 2020-01-27</p><p><a href=\"/glossary#address\"><strong>address</strong></a>:</p><p><a href=\"/glossary#\"><strong>amount</strong></a>: 10.12</p><p><a href=\"/glossary#atms\"><strong>atms</strong></a>:</p><p><a href=\"/glossary#balance\"><strong>balance</strong></a>: 10</p><p><a href=\"/glossary#Bank\"><strong>bank</strong></a>:</p><p><a href=\"/glossary#\"><strong>bank_id</strong></a>: gh.29.uk</p><p><a href=\"/glossary#banks\"><strong>banks</strong></a>:</p><p><a href=\"/glossary#branches\"><strong>branches</strong></a>:</p><p><a href=\"/glossary#category\"><strong>category</strong></a>:</p><p><a href=\"/glossary#channel\"><strong>channel</strong></a>:</p><p><a href=\"/glossary#city\"><strong>city</strong></a>:</p><p><a href=\"/glossary#code\"><strong>code</strong></a>: 125</p><p><a href=\"/glossary#completed\"><strong>completed</strong></a>: 2020-01-27</p><p><a href=\"/glossary#country_code\"><strong>country_code</strong></a>: 1254</p><p><a href=\"/glossary#county\"><strong>county</strong></a>:</p><p><a href=\"/glossary#crm_events\"><strong>crm_events</strong></a>:</p><p><a href=\"/glossary#\"><strong>currency</strong></a>: EUR</p><p><a href=\"/glossary#Customer\"><strong>customer</strong></a>:</p><p><a href=\"/glossary#description\"><strong>description</strong></a>: Description of the object. Maximum length is 2000. It can be any characters here.</p><p><a href=\"/glossary#detail\"><strong>detail</strong></a>:</p><p><a href=\"/glossary#details\"><strong>details</strong></a>:</p><p><a href=\"/glossary#\"><strong>email</strong></a>: <a href=\"&#x6d;a&#105;lt&#x6f;&#x3a;&#x66;&#x65;&#108;&#105;&#x78;sm&#x69;th&#64;&#x65;x&#x61;&#109;&#112;&#108;&#x65;&#x2e;&#99;&#x6f;m\">&#x66;&#101;&#x6c;&#x69;&#x78;&#x73;&#109;&#105;&#x74;h&#x40;&#101;&#x78;&#x61;&#109;&#x70;&#x6c;&#101;.&#x63;&#111;&#x6d;</a></p><p><a href=\"/glossary#family\"><strong>family</strong></a>:</p><p><a href=\"/glossary#full_name\"><strong>full_name</strong></a>: full name string</p><p><a href=\"/glossary#generate_accountants_view\"><strong>generate_accountants_view</strong></a>:</p><p><a href=\"/glossary#generate_auditors_view\"><strong>generate_auditors_view</strong></a>:</p><p><a href=\"/glossary#generate_public_view\"><strong>generate_public_view</strong></a>:</p><p><a href=\"/glossary#hours\"><strong>hours</strong></a>:</p><p><a href=\"/glossary#id\"><strong>id</strong></a>: d8839721-ad8f-45dd-9f78-2080414b93f9</p><p><a href=\"/glossary#\"><strong>label</strong></a>: My Account</p><p><a href=\"/glossary#latitude\"><strong>latitude</strong></a>: 38.8951</p><p><a href=\"/glossary#license\"><strong>license</strong></a>:</p><p><a href=\"/glossary#\"><strong>line_1</strong></a>:</p><p><a href=\"/glossary#\"><strong>line_2</strong></a>:</p><p><a href=\"/glossary#\"><strong>line_3</strong></a>:</p><p><a href=\"/glossary#location\"><strong>location</strong></a>:</p><p><a href=\"/glossary#logo\"><strong>logo</strong></a>: logo url</p><p><a href=\"/glossary#longitude\"><strong>longitude</strong></a>: -77.0364</p><p><a href=\"/glossary#meta\"><strong>meta</strong></a>:</p><p><a href=\"/glossary#more_info_url\"><strong>more_info_url</strong></a>: <a href=\"http://www.example.com/abc\">www.example.com/abc</a></p><p><a href=\"/glossary#name\"><strong>name</strong></a>: ACCOUNT_MANAGEMENT_FEE</p><p><a href=\"/glossary#new_balance\"><strong>new_balance</strong></a>: 20</p><p><a href=\"/glossary#number\"><strong>number</strong></a>:</p><p><a href=\"/glossary#owners\"><strong>owners</strong></a>:</p><p><a href=\"/glossary#\"><strong>password</strong></a>: password</p><p><a href=\"/glossary#post_code\"><strong>post_code</strong></a>: 789</p><p><a href=\"/glossary#posted\"><strong>posted</strong></a>: 2020-01-27</p><p><a href=\"/glossary#products\"><strong>products</strong></a>:</p><p><a href=\"/glossary#short_name\"><strong>short_name</strong></a>:</p><p><a href=\"/glossary#state\"><strong>state</strong></a>:</p><p><a href=\"/glossary#super_family\"><strong>super_family</strong></a>:</p><p><a href=\"/glossary#this_account\"><strong>this_account</strong></a>:</p><p><a href=\"/glossary#transactions\"><strong>transactions</strong></a>:</p><p><a href=\"/glossary#type\"><strong>type</strong></a>:</p><p><a href=\"/glossary#\"><strong>user_name</strong></a>: felixsmith</p><p><a href=\"/glossary#users\"><strong>users</strong></a>: user list</p><p><a href=\"/glossary#\"><strong>value</strong></a>: 5987953</p><p><a href=\"/glossary#website\"><strong>website</strong></a>: <a href=\"http://www.openbankproject.com\">www.openbankproject.com</a></p><p><a href=\"/glossary#\">account_number</a>: 546387432</p><p><a href=\"/glossary#counterparty\">counterparty</a>:</p><p><a href=\"/glossary#driveup\">driveUp</a>:</p><p><a href=\"/glossary#lobby\">lobby</a>:</p><p><a href=\"/glossary#name\"><strong>name</strong></a>: ACCOUNT_MANAGEMENT_FEE</p><p><strong>JSON response body fields:</strong></p><p><a href=\"/glossary#success\"><strong>success</strong></a>:</p>
     * @summary Create sandbox
     * @param {SandboxDataImport} body SandboxDataImport object that needs to be added.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SandboxApi
     */
    public async oBPv210SandboxDataImport(body: SandboxDataImport, options?: AxiosRequestConfig) : Promise<AxiosResponse<SuccessMessage>> {
        return SandboxApiFp(this.configuration).oBPv210SandboxDataImport(body, options).then((request) => request(this.axios, this.basePath));
    }
}
