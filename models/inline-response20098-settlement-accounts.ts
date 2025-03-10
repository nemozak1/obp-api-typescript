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

import { InlineResponse2016 } from './inline-response2016';
import { Obpv210banksBANKIDaccountsACCOUNTIDVIEWIDtransactionrequesttypesSANDBOXTANtransactionrequestsValue } from './obpv210banks-bankidaccounts-accountidviewidtransactionrequesttypes-sandboxtantransactionrequests-value';
import { Obpv310managementbanksBANKIDaccountsACCOUNTIDAccountRoutings } from './obpv310managementbanks-bankidaccounts-accountidaccount-routings';
 /**
 * 
 *
 * @export
 * @interface InlineResponse20098SettlementAccounts
 */
export interface InlineResponse20098SettlementAccounts {

    /**
     * @type {string}
     * @memberof InlineResponse20098SettlementAccounts
     * @example 8ca8a7e4-6d02-40e3-a129-0b2bf89de9f0
     */
    account_id: string;

    /**
     * @type {string}
     * @memberof InlineResponse20098SettlementAccounts
     * @example SEPA
     */
    payment_system: string;

    /**
     * @type {Obpv210banksBANKIDaccountsACCOUNTIDVIEWIDtransactionrequesttypesSANDBOXTANtransactionrequestsValue}
     * @memberof InlineResponse20098SettlementAccounts
     */
    balance: Obpv210banksBANKIDaccountsACCOUNTIDVIEWIDtransactionrequesttypesSANDBOXTANtransactionrequestsValue;

    /**
     * @type {string}
     * @memberof InlineResponse20098SettlementAccounts
     * @example My Account
     */
    label: string;

    /**
     * @type {string}
     * @memberof InlineResponse20098SettlementAccounts
     * @example DERBY6
     */
    branch_id: string;

    /**
     * @type {Array<Obpv310managementbanksBANKIDaccountsACCOUNTIDAccountRoutings>}
     * @memberof InlineResponse20098SettlementAccounts
     */
    account_routings: Array<Obpv310managementbanksBANKIDaccountsACCOUNTIDAccountRoutings>;

    /**
     * @type {Array<InlineResponse2016>}
     * @memberof InlineResponse20098SettlementAccounts
     */
    account_attributes: Array<InlineResponse2016>;
}
