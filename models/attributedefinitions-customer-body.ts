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
 * @interface AttributedefinitionsCustomerBody
 */
export interface AttributedefinitionsCustomerBody {

    /**
     * @type {string}
     * @memberof AttributedefinitionsCustomerBody
     * @example SPECIAL_TAX_NUMBER
     */
    name: string;

    /**
     * @type {string}
     * @memberof AttributedefinitionsCustomerBody
     * @example Customer
     */
    category: string;

    /**
     * @type {string}
     * @memberof AttributedefinitionsCustomerBody
     * @example STRING
     */
    type: string;

    /**
     * @type {string}
     * @memberof AttributedefinitionsCustomerBody
     * @example description
     */
    description: string;

    /**
     * @type {string}
     * @memberof AttributedefinitionsCustomerBody
     * @example STRING
     */
    alias: string;

    /**
     * @type {Array<string>}
     * @memberof AttributedefinitionsCustomerBody
     */
    can_be_seen_on_views: Array<string>;

    /**
     * @type {boolean}
     * @memberof AttributedefinitionsCustomerBody
     * @example true
     */
    is_active: boolean;
}
