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
 * @interface KycCheckJSON
 */
export interface KycCheckJSON {

    /**
     * @type {string}
     * @memberof KycCheckJSON
     * @example 7uy8a7e4-6d02-40e3-a129-0b2bf89de8uh
     */
    customer_id: string;

    /**
     * @type {string}
     * @memberof KycCheckJSON
     * @example 5987953
     */
    customer_number: string;

    /**
     * @type {string}
     * @memberof KycCheckJSON
     * @example gh.29.uk
     */
    bank_id: string;

    /**
     * @type {string}
     * @memberof KycCheckJSON
     * @example PlaceholderString
     */
    id: string;

    /**
     * @type {string}
     * @memberof KycCheckJSON
     * @example PlaceholderString
     */
    how: string;

    /**
     * @type {string}
     * @memberof KycCheckJSON
     */
    date: string;

    /**
     * @type {boolean}
     * @memberof KycCheckJSON
     * @example true
     */
    satisfied: boolean;

    /**
     * @type {string}
     * @memberof KycCheckJSON
     * @example 9ca9a7e4-6d02-40e3-a129-0b2bf89de9b1
     */
    staff_user_id: string;

    /**
     * @type {string}
     * @memberof KycCheckJSON
     * @example PlaceholderString
     */
    staff_name: string;

    /**
     * @type {string}
     * @memberof KycCheckJSON
     * @example PlaceholderString
     */
    comments: string;
}
