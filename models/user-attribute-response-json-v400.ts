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
 * @interface UserAttributeResponseJsonV400
 */
export interface UserAttributeResponseJsonV400 {

    /**
     * @type {string}
     * @memberof UserAttributeResponseJsonV400
     * @example BATTERY_LEVEL
     */
    name: string;

    /**
     * @type {string}
     * @memberof UserAttributeResponseJsonV400
     */
    insert_date: string;

    /**
     * @type {string}
     * @memberof UserAttributeResponseJsonV400
     * @example 7uy8a7e4-6d02-40e3-a129-0b2bf89de8uh
     */
    user_attribute_id: string;

    /**
     * @type {string}
     * @memberof UserAttributeResponseJsonV400
     * @example STRING
     */
    type: string;

    /**
     * @type {string}
     * @memberof UserAttributeResponseJsonV400
     * @example 90
     */
    value: string;
}
