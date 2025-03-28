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
 * @interface ResourceUserJSON
 */
export interface ResourceUserJSON {

    /**
     * @type {string}
     * @memberof ResourceUserJSON
     * @example http://127.0.0.1:8080
     */
    provider: string;

    /**
     * @type {string}
     * @memberof ResourceUserJSON
     * @example felixsmith@example.com
     */
    email: string;

    /**
     * @type {string}
     * @memberof ResourceUserJSON
     * @example felixsmith
     */
    username: string;

    /**
     * @type {string}
     * @memberof ResourceUserJSON
     * @example Chris
     */
    provider_id: string;

    /**
     * @type {string}
     * @memberof ResourceUserJSON
     * @example 9ca9a7e4-6d02-40e3-a129-0b2bf89de9b1
     */
    user_id: string;
}
