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
 * @interface UserAuthContextJsonV500
 */
export interface UserAuthContextJsonV500 {

    /**
     * @type {string}
     * @memberof UserAuthContextJsonV500
     */
    time_stamp: string;

    /**
     * @type {string}
     * @memberof UserAuthContextJsonV500
     * @example 9ca9a7e4-6d02-40e3-a129-0b2bf89de9b1
     */
    user_id: string;

    /**
     * @type {string}
     * @memberof UserAuthContextJsonV500
     * @example CUSTOMER_NUMBER
     */
    key: string;

    /**
     * @type {string}
     * @memberof UserAuthContextJsonV500
     * @example 7uy8a7e4-6d02-40e3-a129-0b2bf89de8uh
     */
    consumer_id: string;

    /**
     * @type {string}
     * @memberof UserAuthContextJsonV500
     * @example 613c83ea-80f9-4560-8404-b9cd4ec42a7f
     */
    user_auth_context_id: string;

    /**
     * @type {string}
     * @memberof UserAuthContextJsonV500
     * @example 78987432
     */
    value: string;
}
