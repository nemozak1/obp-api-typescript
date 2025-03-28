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
 * @interface OrderObjectJson
 */
export interface OrderObjectJson {

    /**
     * @type {string}
     * @memberof OrderObjectJson
     * @example xjksajfkj
     */
    order_id: string;

    /**
     * @type {string}
     * @memberof OrderObjectJson
     * @example 4
     */
    number_of_checkbooks: string;

    /**
     * @type {string}
     * @memberof OrderObjectJson
     * @example 5165276
     */
    first_check_number: string;

    /**
     * @type {string}
     * @memberof OrderObjectJson
     * @example 07082013
     */
    order_date: string;

    /**
     * @type {string}
     * @memberof OrderObjectJson
     * @example 2
     */
    status: string;

    /**
     * @type {string}
     * @memberof OrderObjectJson
     * @example 1
     */
    shipping_code: string;

    /**
     * @type {string}
     * @memberof OrderObjectJson
     * @example 1201
     */
    distribution_channel: string;
}
