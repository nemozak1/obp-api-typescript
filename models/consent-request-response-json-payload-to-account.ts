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

import { ConsentRequestResponseJsonPayloadFromAccountAccountRouting } from './consent-request-response-json-payload-from-account-account-routing';
import { ConsentRequestResponseJsonPayloadFromAccountBankRouting } from './consent-request-response-json-payload-from-account-bank-routing';
import { ConsentRequestResponseJsonPayloadFromAccountBranchRouting } from './consent-request-response-json-payload-from-account-branch-routing';
import { ConsentRequestResponseJsonPayloadToAccountLimit } from './consent-request-response-json-payload-to-account-limit';
 /**
 * 
 *
 * @export
 * @interface ConsentRequestResponseJsonPayloadToAccount
 */
export interface ConsentRequestResponseJsonPayloadToAccount {

    /**
     * @type {ConsentRequestResponseJsonPayloadFromAccountBankRouting}
     * @memberof ConsentRequestResponseJsonPayloadToAccount
     */
    bank_routing: ConsentRequestResponseJsonPayloadFromAccountBankRouting;

    /**
     * @type {ConsentRequestResponseJsonPayloadFromAccountAccountRouting}
     * @memberof ConsentRequestResponseJsonPayloadToAccount
     */
    account_routing: ConsentRequestResponseJsonPayloadFromAccountAccountRouting;

    /**
     * @type {ConsentRequestResponseJsonPayloadFromAccountBranchRouting}
     * @memberof ConsentRequestResponseJsonPayloadToAccount
     */
    branch_routing: ConsentRequestResponseJsonPayloadFromAccountBranchRouting;

    /**
     * @type {ConsentRequestResponseJsonPayloadToAccountLimit}
     * @memberof ConsentRequestResponseJsonPayloadToAccount
     */
    limit: ConsentRequestResponseJsonPayloadToAccountLimit;
}
