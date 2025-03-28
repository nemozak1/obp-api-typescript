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
 * @interface ProductAttributeResponseJsonV400
 */
export interface ProductAttributeResponseJsonV400 {

    /**
     * @type {string}
     * @memberof ProductAttributeResponseJsonV400
     * @example OVERDRAFT_START_DATE
     */
    name: string;

    /**
     * @type {boolean}
     * @memberof ProductAttributeResponseJsonV400
     * @example true
     */
    is_active?: boolean;

    /**
     * @type {string}
     * @memberof ProductAttributeResponseJsonV400
     * @example 613c83ea-80f9-4560-8404-b9cd4ec42a7f
     */
    product_attribute_id: string;

    /**
     * @type {string}
     * @memberof ProductAttributeResponseJsonV400
     * @example 1234BW
     */
    product_code: string;

    /**
     * @type {string}
     * @memberof ProductAttributeResponseJsonV400
     * @example gh.29.uk
     */
    bank_id: string;

    /**
     * @type {string}
     * @memberof ProductAttributeResponseJsonV400
     * @example DATE_WITH_DAY
     */
    type: string;

    /**
     * @type {string}
     * @memberof ProductAttributeResponseJsonV400
     * @example 2012-04-23
     */
    value: string;
}
