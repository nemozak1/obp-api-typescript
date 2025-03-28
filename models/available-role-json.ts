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
 * @interface AvailableRoleJSON
 */
export interface AvailableRoleJSON {

    /**
     * @type {string}
     * @memberof AvailableRoleJSON
     * @example CanCreateBranch
     */
    role: string;

    /**
     * @type {boolean}
     * @memberof AvailableRoleJSON
     * @example true
     */
    requires_bank_id: boolean;
}
