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
 * @interface TransactionAttributeResponseJson
 */
export interface TransactionAttributeResponseJson {

    /**
     * @type {string}
     * @memberof TransactionAttributeResponseJson
     * @example 7uy8a7e4-6d02-40e3-a129-0b2bf89de8uh
     */
    transaction_attribute_id: string;

    /**
     * @type {string}
     * @memberof TransactionAttributeResponseJson
     * @example HOUSE_RENT
     */
    name: string;

    /**
     * @type {string}
     * @memberof TransactionAttributeResponseJson
     * @example DATE_WITH_DAY
     */
    type: string;

    /**
     * @type {string}
     * @memberof TransactionAttributeResponseJson
     * @example 123456789
     */
    value: string;
}
