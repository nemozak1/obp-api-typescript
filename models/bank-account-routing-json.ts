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

import { AccountRoutingJsonV121 } from './account-routing-json-v121';
 /**
 * 
 *
 * @export
 * @interface BankAccountRoutingJson
 */
export interface BankAccountRoutingJson {

    /**
     * @type {string}
     * @memberof BankAccountRoutingJson
     * @example gh.29.uk
     */
    bank_id?: string;

    /**
     * @type {AccountRoutingJsonV121}
     * @memberof BankAccountRoutingJson
     */
    account_routing: AccountRoutingJsonV121;
}
