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
import { SepaCreditTransfers } from './sepa-credit-transfers';
import { TransactionRequestAccount } from './transaction-request-account';
import { TransactionRequestAgentCashWithdrawal } from './transaction-request-agent-cash-withdrawal';
import { TransactionRequestCounterpartyId } from './transaction-request-counterparty-id';
import { TransactionRequestIban } from './transaction-request-iban';
import { TransactionRequestSimple } from './transaction-request-simple';
import { TransactionRequestTransferToAccount } from './transaction-request-transfer-to-account';
import { TransactionRequestTransferToAtm } from './transaction-request-transfer-to-atm';
import { TransactionRequestTransferToPhone } from './transaction-request-transfer-to-phone';
 /**
 * 
 *
 * @export
 * @interface TransactionRequestBodyAllTypes
 */
export interface TransactionRequestBodyAllTypes {

    /**
     * @type {TransactionRequestTransferToPhone}
     * @memberof TransactionRequestBodyAllTypes
     */
    to_transfer_to_phone?: TransactionRequestTransferToPhone;

    /**
     * @type {string}
     * @memberof TransactionRequestBodyAllTypes
     * @example Description of the object. Maximum length is 2000. It can be any characters here.
     */
    description: string;

    /**
     * @type {TransactionRequestTransferToAtm}
     * @memberof TransactionRequestBodyAllTypes
     */
    to_transfer_to_atm?: TransactionRequestTransferToAtm;

    /**
     * @type {TransactionRequestCounterpartyId}
     * @memberof TransactionRequestBodyAllTypes
     */
    to_counterparty?: TransactionRequestCounterpartyId;

    /**
     * @type {TransactionRequestAgentCashWithdrawal}
     * @memberof TransactionRequestBodyAllTypes
     */
    to_agent?: TransactionRequestAgentCashWithdrawal;

    /**
     * @type {SepaCreditTransfers}
     * @memberof TransactionRequestBodyAllTypes
     */
    to_sepa_credit_transfers?: SepaCreditTransfers;

    /**
     * @type {TransactionRequestSimple}
     * @memberof TransactionRequestBodyAllTypes
     */
    to_simple?: TransactionRequestSimple;

    /**
     * @type {TransactionRequestIban}
     * @memberof TransactionRequestBodyAllTypes
     */
    to_sepa?: TransactionRequestIban;

    /**
     * @type {TransactionRequestTransferToAccount}
     * @memberof TransactionRequestBodyAllTypes
     */
    to_transfer_to_account?: TransactionRequestTransferToAccount;

    /**
     * @type {AmountOfMoney}
     * @memberof TransactionRequestBodyAllTypes
     */
    value: AmountOfMoney;

    /**
     * @type {TransactionRequestAccount}
     * @memberof TransactionRequestBodyAllTypes
     */
    to_sandbox_tan?: TransactionRequestAccount;
}
