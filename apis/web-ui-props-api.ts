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
import { InlineResponse20053 } from '../models';
import { InlineResponse20114 } from '../models';
import { ManagementWebuiPropsBody } from '../models';
/**
 * WebUiPropsApi - axios parameter creator
 * @export
 */
export const WebUiPropsApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * <p>Create a WebUiProps.</p><p>User Authentication is Required. The User must be logged in. The Application must also be authenticated.</p><p>Explaination of Fields:</p><ul><li>name is required String value</li><li>value is required String value</li></ul><p>The line break and double quotations should do escape, example:</p><pre><code>{&quot;name&quot;: &quot;webui_some&quot;, &quot;value&quot;: &quot;this valuehave &quot;line break&quot; and double quotations.&quot;}</code></pre><p>should do escape like this:</p><pre><code>{&quot;name&quot;: &quot;webui_some&quot;, &quot;value&quot;: &quot;this value\\nhave \\&quot;line break\\&quot; and double quotations.&quot;}</code></pre><p>Insert image examples:</p><pre><code>// set width=100 and height=50{&quot;name&quot;: &quot;webui_some_pic&quot;, &quot;value&quot;: &quot;here is a picture &lt;img alt=&quot;hello&quot; src=&quot;http://somedomain.com/images/pic.png&quot; width=&quot;100&quot; height=&quot;50&quot; /&gt;&quot;}<p>// only set height=50<br />{&quot;name&quot;: &quot;webui_some_pic&quot;, &quot;value&quot;: &quot;here is a picture &lt;img alt=&quot;hello&quot; src=&quot;<a href=\"http://somedomain.com/images/pic.png\">http://somedomain.com/images/pic.png</a>&quot; width=&quot;&quot; height=&quot;50&quot; /&gt;&quot;}</p><p>// only width=20%<br />{&quot;name&quot;: &quot;webui_some_pic&quot;, &quot;value&quot;: &quot;here is a picture &lt;img alt=&quot;hello&quot; src=&quot;<a href=\"http://somedomain.com/images/pic.png\">http://somedomain.com/images/pic.png</a>&quot; width=&quot;20%&quot; height=&quot;&quot; /&gt;&quot;}</p></code></pre><p><strong>JSON request body fields:</strong></p><p><a href=\"/glossary#name\"><strong>name</strong></a>: ACCOUNT_MANAGEMENT_FEE</p><p><a href=\"/glossary#\"><strong>value</strong></a>: 5987953</p><p><strong>JSON response body fields:</strong></p><p><a href=\"/glossary#name\"><strong>name</strong></a>: ACCOUNT_MANAGEMENT_FEE</p><p><a href=\"/glossary#\"><strong>value</strong></a>: 5987953</p>
         * @summary Create WebUiProps
         * @param {ManagementWebuiPropsBody} body JObject object that needs to be added.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        oBPv310CreateWebUiProps: async (body: ManagementWebuiPropsBody, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'body' is not null or undefined
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling oBPv310CreateWebUiProps.');
            }
            const localVarPath = `/obp/v3.1.0/management/webui_props`;
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
         * <p>Delete a WebUiProps specified by WEB_UI_PROPS_ID.</p><p>User Authentication is Required. The User must be logged in. The Application must also be authenticated.</p><p><strong>URL Parameters:</strong></p><p><a href=\"/glossary#web_ui_props_id\">WEB_UI_PROPS_ID</a>:</p><p><strong>JSON response body fields:</strong></p>
         * @summary Delete WebUiProps
         * @param {string} WEB_UI_PROPS_ID the web ui props id
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        oBPv310DeleteWebUiProps: async (WEB_UI_PROPS_ID: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'WEB_UI_PROPS_ID' is not null or undefined
            if (WEB_UI_PROPS_ID === null || WEB_UI_PROPS_ID === undefined) {
                throw new RequiredError('WEB_UI_PROPS_ID','Required parameter WEB_UI_PROPS_ID was null or undefined when calling oBPv310DeleteWebUiProps.');
            }
            const localVarPath = `/obp/v3.1.0/management/webui_props/{WEB_UI_PROPS_ID}`
                .replace(`{${"WEB_UI_PROPS_ID"}}`, encodeURIComponent(String(WEB_UI_PROPS_ID)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions :AxiosRequestConfig = { method: 'DELETE', ...baseOptions, ...options};
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
         * <p>Get the all WebUiProps key values, those props key with &quot;webui_&quot; can be stored in DB, this endpoint get all from DB.</p><p>url query parameter:<br />active: It must be a boolean string. and If active = true, it will show<br />combination of explicit (inserted) + implicit (default)  method_routings.</p><p>eg:<br /><a href=\"https://apisandbox.openbankproject.com/obp/v3.1.0/management/webui_props\">https://apisandbox.openbankproject.com/obp/v3.1.0/management/webui_props</a><br /><a href=\"https://apisandbox.openbankproject.com/obp/v3.1.0/management/webui_props?active=true\">https://apisandbox.openbankproject.com/obp/v3.1.0/management/webui_props?active=true</a></p><p>User Authentication is Required. The User must be logged in. The Application must also be authenticated.</p><p><strong>JSON response body fields:</strong></p><p><a href=\"/glossary#name\"><strong>name</strong></a>: ACCOUNT_MANAGEMENT_FEE</p><p><a href=\"/glossary#\"><strong>value</strong></a>: 5987953</p>
         * @summary Get WebUiProps
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        oBPv310GetWebUiProps: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/obp/v3.1.0/management/webui_props`;
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
 * WebUiPropsApi - functional programming interface
 * @export
 */
export const WebUiPropsApiFp = function(configuration?: Configuration) {
    return {
        /**
         * <p>Create a WebUiProps.</p><p>User Authentication is Required. The User must be logged in. The Application must also be authenticated.</p><p>Explaination of Fields:</p><ul><li>name is required String value</li><li>value is required String value</li></ul><p>The line break and double quotations should do escape, example:</p><pre><code>{&quot;name&quot;: &quot;webui_some&quot;, &quot;value&quot;: &quot;this valuehave &quot;line break&quot; and double quotations.&quot;}</code></pre><p>should do escape like this:</p><pre><code>{&quot;name&quot;: &quot;webui_some&quot;, &quot;value&quot;: &quot;this value\\nhave \\&quot;line break\\&quot; and double quotations.&quot;}</code></pre><p>Insert image examples:</p><pre><code>// set width=100 and height=50{&quot;name&quot;: &quot;webui_some_pic&quot;, &quot;value&quot;: &quot;here is a picture &lt;img alt=&quot;hello&quot; src=&quot;http://somedomain.com/images/pic.png&quot; width=&quot;100&quot; height=&quot;50&quot; /&gt;&quot;}<p>// only set height=50<br />{&quot;name&quot;: &quot;webui_some_pic&quot;, &quot;value&quot;: &quot;here is a picture &lt;img alt=&quot;hello&quot; src=&quot;<a href=\"http://somedomain.com/images/pic.png\">http://somedomain.com/images/pic.png</a>&quot; width=&quot;&quot; height=&quot;50&quot; /&gt;&quot;}</p><p>// only width=20%<br />{&quot;name&quot;: &quot;webui_some_pic&quot;, &quot;value&quot;: &quot;here is a picture &lt;img alt=&quot;hello&quot; src=&quot;<a href=\"http://somedomain.com/images/pic.png\">http://somedomain.com/images/pic.png</a>&quot; width=&quot;20%&quot; height=&quot;&quot; /&gt;&quot;}</p></code></pre><p><strong>JSON request body fields:</strong></p><p><a href=\"/glossary#name\"><strong>name</strong></a>: ACCOUNT_MANAGEMENT_FEE</p><p><a href=\"/glossary#\"><strong>value</strong></a>: 5987953</p><p><strong>JSON response body fields:</strong></p><p><a href=\"/glossary#name\"><strong>name</strong></a>: ACCOUNT_MANAGEMENT_FEE</p><p><a href=\"/glossary#\"><strong>value</strong></a>: 5987953</p>
         * @summary Create WebUiProps
         * @param {ManagementWebuiPropsBody} body JObject object that needs to be added.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async oBPv310CreateWebUiProps(body: ManagementWebuiPropsBody, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<InlineResponse20114>>> {
            const localVarAxiosArgs = await WebUiPropsApiAxiosParamCreator(configuration).oBPv310CreateWebUiProps(body, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * <p>Delete a WebUiProps specified by WEB_UI_PROPS_ID.</p><p>User Authentication is Required. The User must be logged in. The Application must also be authenticated.</p><p><strong>URL Parameters:</strong></p><p><a href=\"/glossary#web_ui_props_id\">WEB_UI_PROPS_ID</a>:</p><p><strong>JSON response body fields:</strong></p>
         * @summary Delete WebUiProps
         * @param {string} WEB_UI_PROPS_ID the web ui props id
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async oBPv310DeleteWebUiProps(WEB_UI_PROPS_ID: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<void>>> {
            const localVarAxiosArgs = await WebUiPropsApiAxiosParamCreator(configuration).oBPv310DeleteWebUiProps(WEB_UI_PROPS_ID, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * <p>Get the all WebUiProps key values, those props key with &quot;webui_&quot; can be stored in DB, this endpoint get all from DB.</p><p>url query parameter:<br />active: It must be a boolean string. and If active = true, it will show<br />combination of explicit (inserted) + implicit (default)  method_routings.</p><p>eg:<br /><a href=\"https://apisandbox.openbankproject.com/obp/v3.1.0/management/webui_props\">https://apisandbox.openbankproject.com/obp/v3.1.0/management/webui_props</a><br /><a href=\"https://apisandbox.openbankproject.com/obp/v3.1.0/management/webui_props?active=true\">https://apisandbox.openbankproject.com/obp/v3.1.0/management/webui_props?active=true</a></p><p>User Authentication is Required. The User must be logged in. The Application must also be authenticated.</p><p><strong>JSON response body fields:</strong></p><p><a href=\"/glossary#name\"><strong>name</strong></a>: ACCOUNT_MANAGEMENT_FEE</p><p><a href=\"/glossary#\"><strong>value</strong></a>: 5987953</p>
         * @summary Get WebUiProps
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async oBPv310GetWebUiProps(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<InlineResponse20053>>> {
            const localVarAxiosArgs = await WebUiPropsApiAxiosParamCreator(configuration).oBPv310GetWebUiProps(options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * WebUiPropsApi - factory interface
 * @export
 */
export const WebUiPropsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * <p>Create a WebUiProps.</p><p>User Authentication is Required. The User must be logged in. The Application must also be authenticated.</p><p>Explaination of Fields:</p><ul><li>name is required String value</li><li>value is required String value</li></ul><p>The line break and double quotations should do escape, example:</p><pre><code>{&quot;name&quot;: &quot;webui_some&quot;, &quot;value&quot;: &quot;this valuehave &quot;line break&quot; and double quotations.&quot;}</code></pre><p>should do escape like this:</p><pre><code>{&quot;name&quot;: &quot;webui_some&quot;, &quot;value&quot;: &quot;this value\\nhave \\&quot;line break\\&quot; and double quotations.&quot;}</code></pre><p>Insert image examples:</p><pre><code>// set width=100 and height=50{&quot;name&quot;: &quot;webui_some_pic&quot;, &quot;value&quot;: &quot;here is a picture &lt;img alt=&quot;hello&quot; src=&quot;http://somedomain.com/images/pic.png&quot; width=&quot;100&quot; height=&quot;50&quot; /&gt;&quot;}<p>// only set height=50<br />{&quot;name&quot;: &quot;webui_some_pic&quot;, &quot;value&quot;: &quot;here is a picture &lt;img alt=&quot;hello&quot; src=&quot;<a href=\"http://somedomain.com/images/pic.png\">http://somedomain.com/images/pic.png</a>&quot; width=&quot;&quot; height=&quot;50&quot; /&gt;&quot;}</p><p>// only width=20%<br />{&quot;name&quot;: &quot;webui_some_pic&quot;, &quot;value&quot;: &quot;here is a picture &lt;img alt=&quot;hello&quot; src=&quot;<a href=\"http://somedomain.com/images/pic.png\">http://somedomain.com/images/pic.png</a>&quot; width=&quot;20%&quot; height=&quot;&quot; /&gt;&quot;}</p></code></pre><p><strong>JSON request body fields:</strong></p><p><a href=\"/glossary#name\"><strong>name</strong></a>: ACCOUNT_MANAGEMENT_FEE</p><p><a href=\"/glossary#\"><strong>value</strong></a>: 5987953</p><p><strong>JSON response body fields:</strong></p><p><a href=\"/glossary#name\"><strong>name</strong></a>: ACCOUNT_MANAGEMENT_FEE</p><p><a href=\"/glossary#\"><strong>value</strong></a>: 5987953</p>
         * @summary Create WebUiProps
         * @param {ManagementWebuiPropsBody} body JObject object that needs to be added.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async oBPv310CreateWebUiProps(body: ManagementWebuiPropsBody, options?: AxiosRequestConfig): Promise<AxiosResponse<InlineResponse20114>> {
            return WebUiPropsApiFp(configuration).oBPv310CreateWebUiProps(body, options).then((request) => request(axios, basePath));
        },
        /**
         * <p>Delete a WebUiProps specified by WEB_UI_PROPS_ID.</p><p>User Authentication is Required. The User must be logged in. The Application must also be authenticated.</p><p><strong>URL Parameters:</strong></p><p><a href=\"/glossary#web_ui_props_id\">WEB_UI_PROPS_ID</a>:</p><p><strong>JSON response body fields:</strong></p>
         * @summary Delete WebUiProps
         * @param {string} WEB_UI_PROPS_ID the web ui props id
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async oBPv310DeleteWebUiProps(WEB_UI_PROPS_ID: string, options?: AxiosRequestConfig): Promise<AxiosResponse<void>> {
            return WebUiPropsApiFp(configuration).oBPv310DeleteWebUiProps(WEB_UI_PROPS_ID, options).then((request) => request(axios, basePath));
        },
        /**
         * <p>Get the all WebUiProps key values, those props key with &quot;webui_&quot; can be stored in DB, this endpoint get all from DB.</p><p>url query parameter:<br />active: It must be a boolean string. and If active = true, it will show<br />combination of explicit (inserted) + implicit (default)  method_routings.</p><p>eg:<br /><a href=\"https://apisandbox.openbankproject.com/obp/v3.1.0/management/webui_props\">https://apisandbox.openbankproject.com/obp/v3.1.0/management/webui_props</a><br /><a href=\"https://apisandbox.openbankproject.com/obp/v3.1.0/management/webui_props?active=true\">https://apisandbox.openbankproject.com/obp/v3.1.0/management/webui_props?active=true</a></p><p>User Authentication is Required. The User must be logged in. The Application must also be authenticated.</p><p><strong>JSON response body fields:</strong></p><p><a href=\"/glossary#name\"><strong>name</strong></a>: ACCOUNT_MANAGEMENT_FEE</p><p><a href=\"/glossary#\"><strong>value</strong></a>: 5987953</p>
         * @summary Get WebUiProps
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async oBPv310GetWebUiProps(options?: AxiosRequestConfig): Promise<AxiosResponse<InlineResponse20053>> {
            return WebUiPropsApiFp(configuration).oBPv310GetWebUiProps(options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * WebUiPropsApi - object-oriented interface
 * @export
 * @class WebUiPropsApi
 * @extends {BaseAPI}
 */
export class WebUiPropsApi extends BaseAPI {
    /**
     * <p>Create a WebUiProps.</p><p>User Authentication is Required. The User must be logged in. The Application must also be authenticated.</p><p>Explaination of Fields:</p><ul><li>name is required String value</li><li>value is required String value</li></ul><p>The line break and double quotations should do escape, example:</p><pre><code>{&quot;name&quot;: &quot;webui_some&quot;, &quot;value&quot;: &quot;this valuehave &quot;line break&quot; and double quotations.&quot;}</code></pre><p>should do escape like this:</p><pre><code>{&quot;name&quot;: &quot;webui_some&quot;, &quot;value&quot;: &quot;this value\\nhave \\&quot;line break\\&quot; and double quotations.&quot;}</code></pre><p>Insert image examples:</p><pre><code>// set width=100 and height=50{&quot;name&quot;: &quot;webui_some_pic&quot;, &quot;value&quot;: &quot;here is a picture &lt;img alt=&quot;hello&quot; src=&quot;http://somedomain.com/images/pic.png&quot; width=&quot;100&quot; height=&quot;50&quot; /&gt;&quot;}<p>// only set height=50<br />{&quot;name&quot;: &quot;webui_some_pic&quot;, &quot;value&quot;: &quot;here is a picture &lt;img alt=&quot;hello&quot; src=&quot;<a href=\"http://somedomain.com/images/pic.png\">http://somedomain.com/images/pic.png</a>&quot; width=&quot;&quot; height=&quot;50&quot; /&gt;&quot;}</p><p>// only width=20%<br />{&quot;name&quot;: &quot;webui_some_pic&quot;, &quot;value&quot;: &quot;here is a picture &lt;img alt=&quot;hello&quot; src=&quot;<a href=\"http://somedomain.com/images/pic.png\">http://somedomain.com/images/pic.png</a>&quot; width=&quot;20%&quot; height=&quot;&quot; /&gt;&quot;}</p></code></pre><p><strong>JSON request body fields:</strong></p><p><a href=\"/glossary#name\"><strong>name</strong></a>: ACCOUNT_MANAGEMENT_FEE</p><p><a href=\"/glossary#\"><strong>value</strong></a>: 5987953</p><p><strong>JSON response body fields:</strong></p><p><a href=\"/glossary#name\"><strong>name</strong></a>: ACCOUNT_MANAGEMENT_FEE</p><p><a href=\"/glossary#\"><strong>value</strong></a>: 5987953</p>
     * @summary Create WebUiProps
     * @param {ManagementWebuiPropsBody} body JObject object that needs to be added.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof WebUiPropsApi
     */
    public async oBPv310CreateWebUiProps(body: ManagementWebuiPropsBody, options?: AxiosRequestConfig) : Promise<AxiosResponse<InlineResponse20114>> {
        return WebUiPropsApiFp(this.configuration).oBPv310CreateWebUiProps(body, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * <p>Delete a WebUiProps specified by WEB_UI_PROPS_ID.</p><p>User Authentication is Required. The User must be logged in. The Application must also be authenticated.</p><p><strong>URL Parameters:</strong></p><p><a href=\"/glossary#web_ui_props_id\">WEB_UI_PROPS_ID</a>:</p><p><strong>JSON response body fields:</strong></p>
     * @summary Delete WebUiProps
     * @param {string} WEB_UI_PROPS_ID the web ui props id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof WebUiPropsApi
     */
    public async oBPv310DeleteWebUiProps(WEB_UI_PROPS_ID: string, options?: AxiosRequestConfig) : Promise<AxiosResponse<void>> {
        return WebUiPropsApiFp(this.configuration).oBPv310DeleteWebUiProps(WEB_UI_PROPS_ID, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * <p>Get the all WebUiProps key values, those props key with &quot;webui_&quot; can be stored in DB, this endpoint get all from DB.</p><p>url query parameter:<br />active: It must be a boolean string. and If active = true, it will show<br />combination of explicit (inserted) + implicit (default)  method_routings.</p><p>eg:<br /><a href=\"https://apisandbox.openbankproject.com/obp/v3.1.0/management/webui_props\">https://apisandbox.openbankproject.com/obp/v3.1.0/management/webui_props</a><br /><a href=\"https://apisandbox.openbankproject.com/obp/v3.1.0/management/webui_props?active=true\">https://apisandbox.openbankproject.com/obp/v3.1.0/management/webui_props?active=true</a></p><p>User Authentication is Required. The User must be logged in. The Application must also be authenticated.</p><p><strong>JSON response body fields:</strong></p><p><a href=\"/glossary#name\"><strong>name</strong></a>: ACCOUNT_MANAGEMENT_FEE</p><p><a href=\"/glossary#\"><strong>value</strong></a>: 5987953</p>
     * @summary Get WebUiProps
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof WebUiPropsApi
     */
    public async oBPv310GetWebUiProps(options?: AxiosRequestConfig) : Promise<AxiosResponse<InlineResponse20053>> {
        return WebUiPropsApiFp(this.configuration).oBPv310GetWebUiProps(options).then((request) => request(this.axios, this.basePath));
    }
}
