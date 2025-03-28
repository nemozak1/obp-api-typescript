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

import { AgentCashWithdrawalJson } from './agent-cash-withdrawal-json';
import { AmountOfMoneyJsonV121 } from './amount-of-money-json-v121';
 /**
 * 
 *
 * @export
 * @interface TransactionRequestBodyAgentJsonV400
 */
export interface TransactionRequestBodyAgentJsonV400 {

    /**
     * @type {string}
     * @memberof TransactionRequestBodyAgentJsonV400
     * @example Description of the object. Maximum length is 2000. It can be any characters here.
     */
    description: string;

    /**
     * @type {string}
     * @memberof TransactionRequestBodyAgentJsonV400
     * @example 20200127
     */
    future_date?: string;

    /**
     * @type {AgentCashWithdrawalJson}
     * @memberof TransactionRequestBodyAgentJsonV400
     */
    to: AgentCashWithdrawalJson;

    /**
     * @type {string}
     * @memberof TransactionRequestBodyAgentJsonV400
     * @example SHARED
     */
    charge_policy: string;

    /**
     * @type {AmountOfMoneyJsonV121}
     * @memberof TransactionRequestBodyAgentJsonV400
     */
    value: AmountOfMoneyJsonV121;
}
