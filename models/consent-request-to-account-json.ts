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
import { BankRoutingJsonV121 } from './bank-routing-json-v121';
import { BranchRoutingJsonV141 } from './branch-routing-json-v141';
import { PostCounterpartyLimitV510 } from './post-counterparty-limit-v510';
 /**
 * 
 *
 * @export
 * @interface ConsentRequestToAccountJson
 */
export interface ConsentRequestToAccountJson {

    /**
     * @type {AccountRoutingJsonV121}
     * @memberof ConsentRequestToAccountJson
     */
    account_routing: AccountRoutingJsonV121;

    /**
     * @type {BranchRoutingJsonV141}
     * @memberof ConsentRequestToAccountJson
     */
    branch_routing: BranchRoutingJsonV141;

    /**
     * @type {BankRoutingJsonV121}
     * @memberof ConsentRequestToAccountJson
     */
    bank_routing: BankRoutingJsonV121;

    /**
     * @type {string}
     * @memberof ConsentRequestToAccountJson
     * @example John Smith Ltd.
     */
    counterparty_name: string;

    /**
     * @type {PostCounterpartyLimitV510}
     * @memberof ConsentRequestToAccountJson
     */
    limit: PostCounterpartyLimitV510;
}
