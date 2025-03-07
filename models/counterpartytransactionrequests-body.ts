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

import { Obpv210banksBANKIDaccountsACCOUNTIDVIEWIDtransactionrequesttypesSANDBOXTANtransactionrequestsValue } from './obpv210banks-bankidaccounts-accountidviewidtransactionrequesttypes-sandboxtantransactionrequests-value';
import { Obpv400banksBANKIDaccountsACCOUNTIDVIEWIDtransactionrequesttypesCOUNTERPARTYtransactionrequestsAttributes } from './obpv400banks-bankidaccounts-accountidviewidtransactionrequesttypes-counterpartytransactionrequests-attributes';
import { Obpv400banksBANKIDaccountsACCOUNTIDVIEWIDtransactionrequesttypesCOUNTERPARTYtransactionrequestsTo } from './obpv400banks-bankidaccounts-accountidviewidtransactionrequesttypes-counterpartytransactionrequests-to';
 /**
 * 
 *
 * @export
 * @interface COUNTERPARTYTransactionrequestsBody
 */
export interface COUNTERPARTYTransactionrequestsBody {

    /**
     * @type {Obpv400banksBANKIDaccountsACCOUNTIDVIEWIDtransactionrequesttypesCOUNTERPARTYtransactionrequestsTo}
     * @memberof COUNTERPARTYTransactionrequestsBody
     */
    to: Obpv400banksBANKIDaccountsACCOUNTIDVIEWIDtransactionrequesttypesCOUNTERPARTYtransactionrequestsTo;

    /**
     * @type {Obpv210banksBANKIDaccountsACCOUNTIDVIEWIDtransactionrequesttypesSANDBOXTANtransactionrequestsValue}
     * @memberof COUNTERPARTYTransactionrequestsBody
     */
    value: Obpv210banksBANKIDaccountsACCOUNTIDVIEWIDtransactionrequesttypesSANDBOXTANtransactionrequestsValue;

    /**
     * @type {string}
     * @memberof COUNTERPARTYTransactionrequestsBody
     * @example A description for the transaction to the counterparty
     */
    description: string;

    /**
     * @type {string}
     * @memberof COUNTERPARTYTransactionrequestsBody
     * @example SHARED
     */
    charge_policy: string;

    /**
     * @type {string}
     * @memberof COUNTERPARTYTransactionrequestsBody
     * @example 20200127
     */
    future_date: string;

    /**
     * @type {Array<Obpv400banksBANKIDaccountsACCOUNTIDVIEWIDtransactionrequesttypesCOUNTERPARTYtransactionrequestsAttributes>}
     * @memberof COUNTERPARTYTransactionrequestsBody
     */
    attributes: Array<Obpv400banksBANKIDaccountsACCOUNTIDVIEWIDtransactionrequesttypesCOUNTERPARTYtransactionrequestsAttributes>;
}
