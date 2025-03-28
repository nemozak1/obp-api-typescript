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
 * @interface ScopeJson
 */
export interface ScopeJson {

    /**
     * @type {string}
     * @memberof ScopeJson
     * @example 88625da4-a671-435e-9d24-e5b6e5cc404f
     */
    scope_id: string;

    /**
     * @type {string}
     * @memberof ScopeJson
     * @example CanGetEntitlementsForAnyUserAtOneBank
     */
    role_name: string;

    /**
     * @type {string}
     * @memberof ScopeJson
     * @example gh.29.uk
     */
    bank_id: string;
}
