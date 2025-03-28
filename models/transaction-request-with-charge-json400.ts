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

import { BankAttributeBankResponseJsonV400 } from './bank-attribute-bank-response-json-v400';
import { ChallengeJsonV400 } from './challenge-json-v400';
import { TransactionRequestAccountJsonV140 } from './transaction-request-account-json-v140';
import { TransactionRequestBodyAllTypes } from './transaction-request-body-all-types';
import { TransactionRequestChargeJsonV200 } from './transaction-request-charge-json-v200';
 /**
 * 
 *
 * @export
 * @interface TransactionRequestWithChargeJSON400
 */
export interface TransactionRequestWithChargeJSON400 {

    /**
     * @type {string}
     * @memberof TransactionRequestWithChargeJSON400
     */
    start_date: string;

    /**
     * @type {Array<BankAttributeBankResponseJsonV400>}
     * @memberof TransactionRequestWithChargeJSON400
     */
    attributes?: Array<BankAttributeBankResponseJsonV400>;

    /**
     * @type {string}
     * @memberof TransactionRequestWithChargeJSON400
     * @example 4050046c-63b3-4868-8a22-14b4181d33a6
     */
    id: string;

    /**
     * @type {string}
     * @memberof TransactionRequestWithChargeJSON400
     */
    end_date: string;

    /**
     * @type {string}
     * @memberof TransactionRequestWithChargeJSON400
     * @example COMPLETED
     */
    status: string;

    /**
     * @type {TransactionRequestAccountJsonV140}
     * @memberof TransactionRequestWithChargeJSON400
     */
    from: TransactionRequestAccountJsonV140;

    /**
     * @type {TransactionRequestBodyAllTypes}
     * @memberof TransactionRequestWithChargeJSON400
     */
    details: TransactionRequestBodyAllTypes;

    /**
     * @type {TransactionRequestChargeJsonV200}
     * @memberof TransactionRequestWithChargeJSON400
     */
    charge: TransactionRequestChargeJsonV200;

    /**
     * @type {string}
     * @memberof TransactionRequestWithChargeJSON400
     * @example SANDBOX_TAN
     */
    type: string;

    /**
     * @type {Array<string>}
     * @memberof TransactionRequestWithChargeJSON400
     */
    transaction_ids: Array<string>;

    /**
     * @type {Array<ChallengeJsonV400>}
     * @memberof TransactionRequestWithChargeJSON400
     */
    challenges: Array<ChallengeJsonV400>;
}
