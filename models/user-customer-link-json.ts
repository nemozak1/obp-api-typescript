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
 * @interface UserCustomerLinkJson
 */
export interface UserCustomerLinkJson {

    /**
     * @type {boolean}
     * @memberof UserCustomerLinkJson
     * @example true
     */
    is_active: boolean;

    /**
     * @type {string}
     * @memberof UserCustomerLinkJson
     * @example 7uy8a7e4-6d02-40e3-a129-0b2bf89de8uh
     */
    customer_id: string;

    /**
     * @type {string}
     * @memberof UserCustomerLinkJson
     * @example 9ca9a7e4-6d02-40e3-a129-0b2bf89de9b1
     */
    user_id: string;

    /**
     * @type {string}
     * @memberof UserCustomerLinkJson
     */
    date_inserted: string;

    /**
     * @type {string}
     * @memberof UserCustomerLinkJson
     * @example 9ca9a7e4-6d02-40e3-a129-0b2bf89de9b1
     */
    user_customer_link_id: string;
}
