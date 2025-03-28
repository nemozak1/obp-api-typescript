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
import { PaymentAccount } from './payment-account';
 /**
 * 
 *
 * @export
 * @interface SepaCreditTransfers
 */
export interface SepaCreditTransfers {

    /**
     * @type {PaymentAccount}
     * @memberof SepaCreditTransfers
     */
    debtorAccount: PaymentAccount;

    /**
     * @type {AmountOfMoneyJsonV121}
     * @memberof SepaCreditTransfers
     */
    instructedAmount: AmountOfMoneyJsonV121;

    /**
     * @type {PaymentAccount}
     * @memberof SepaCreditTransfers
     */
    creditorAccount: PaymentAccount;

    /**
     * @type {string}
     * @memberof SepaCreditTransfers
     * @example John Miles
     */
    creditorName: string;
}
