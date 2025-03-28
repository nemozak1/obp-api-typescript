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

import { AmountOfMoneyJsonV121 } from './amount-of-money-json-v121';
import { IbanJson } from './iban-json';
import { TransactionRequestReasonJsonV400 } from './transaction-request-reason-json-v400';
 /**
 * 
 *
 * @export
 * @interface TransactionRequestBodySEPAJsonV400
 */
export interface TransactionRequestBodySEPAJsonV400 {

    /**
     * @type {string}
     * @memberof TransactionRequestBodySEPAJsonV400
     * @example This is a SEPA Transaction Request
     */
    description: string;

    /**
     * @type {string}
     * @memberof TransactionRequestBodySEPAJsonV400
     * @example 20200127
     */
    future_date?: string;

    /**
     * @type {IbanJson}
     * @memberof TransactionRequestBodySEPAJsonV400
     */
    to: IbanJson;

    /**
     * @type {string}
     * @memberof TransactionRequestBodySEPAJsonV400
     * @example SHARED
     */
    charge_policy: string;

    /**
     * @type {AmountOfMoneyJsonV121}
     * @memberof TransactionRequestBodySEPAJsonV400
     */
    value: AmountOfMoneyJsonV121;

    /**
     * @type {Array<TransactionRequestReasonJsonV400>}
     * @memberof TransactionRequestBodySEPAJsonV400
     */
    reasons?: Array<TransactionRequestReasonJsonV400>;
}
