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
import { FromAccountTransfer } from './from-account-transfer';
import { ToAccountTransferToAtm } from './to-account-transfer-to-atm';
 /**
 * 
 *
 * @export
 * @interface TransactionRequestTransferToAtm
 */
export interface TransactionRequestTransferToAtm {

    /**
     * @type {string}
     * @memberof TransactionRequestTransferToAtm
     * @example String
     */
    description: string;

    /**
     * @type {ToAccountTransferToAtm}
     * @memberof TransactionRequestTransferToAtm
     */
    to: ToAccountTransferToAtm;

    /**
     * @type {FromAccountTransfer}
     * @memberof TransactionRequestTransferToAtm
     */
    from: FromAccountTransfer;

    /**
     * @type {string}
     * @memberof TransactionRequestTransferToAtm
     * @example String
     */
    message: string;

    /**
     * @type {AmountOfMoneyJsonV121}
     * @memberof TransactionRequestTransferToAtm
     */
    value: AmountOfMoneyJsonV121;
}
