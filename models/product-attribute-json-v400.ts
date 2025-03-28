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
 * @interface ProductAttributeJsonV400
 */
export interface ProductAttributeJsonV400 {

    /**
     * @type {string}
     * @memberof ProductAttributeJsonV400
     * @example OVERDRAFT_START_DATE
     */
    name: string;

    /**
     * @type {string}
     * @memberof ProductAttributeJsonV400
     * @example DATE_WITH_DAY
     */
    type: string;

    /**
     * @type {string}
     * @memberof ProductAttributeJsonV400
     * @example 2012-04-23
     */
    value: string;

    /**
     * @type {boolean}
     * @memberof ProductAttributeJsonV400
     * @example true
     */
    is_active?: boolean;
}
