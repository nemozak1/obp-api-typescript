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

 /**
 * 
 *
 * @export
 * @interface JsonDynamicResourceDocSuccessResponseBody
 */
export interface JsonDynamicResourceDocSuccessResponseBody {

    /**
     * @type {string}
     * @memberof JsonDynamicResourceDocSuccessResponseBody
     * @example some_id_value
     */
    my_user_id: string;

    /**
     * @type {string}
     * @memberof JsonDynamicResourceDocSuccessResponseBody
     * @example Jhon
     */
    name: string;

    /**
     * @type {number}
     * @memberof JsonDynamicResourceDocSuccessResponseBody
     * @example 12
     */
    age: number;

    /**
     * @type {Array<string>}
     * @memberof JsonDynamicResourceDocSuccessResponseBody
     */
    hobby: Array<string>;

    /**
     * @type {Array<string>}
     * @memberof JsonDynamicResourceDocSuccessResponseBody
     */
    _optional_fields_: Array<string>;
}
