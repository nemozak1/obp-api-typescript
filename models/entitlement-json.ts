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
 * @interface EntitlementJSON
 */
export interface EntitlementJSON {

    /**
     * @type {string}
     * @memberof EntitlementJSON
     * @example 6fb17583-1e49-4435-bb74-a14fe0996723
     */
    entitlement_id: string;

    /**
     * @type {string}
     * @memberof EntitlementJSON
     * @example CanQueryOtherUser
     */
    role_name: string;

    /**
     * @type {string}
     * @memberof EntitlementJSON
     * @example gh.29.uk
     */
    bank_id: string;
}
