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

import { AmountOfMoney } from './amount-of-money';
import { BankId } from './bank-id';
import { TransactionTypeId } from './transaction-type-id';
 /**
 * 
 *
 * @export
 * @interface TransactionType
 */
export interface TransactionType {

    /**
     * @type {string}
     * @memberof TransactionType
     * @example 80080
     */
    shortCode: string;

    /**
     * @type {string}
     * @memberof TransactionType
     * @example This is the sandbox mode, charging litter money.
     */
    description: string;

    /**
     * @type {TransactionTypeId}
     * @memberof TransactionType
     */
    id: TransactionTypeId;

    /**
     * @type {AmountOfMoney}
     * @memberof TransactionType
     */
    charge: AmountOfMoney;

    /**
     * @type {BankId}
     * @memberof TransactionType
     */
    bankId: BankId;

    /**
     * @type {string}
     * @memberof TransactionType
     * @example SANDBOX_TAN
     */
    summary: string;
}
