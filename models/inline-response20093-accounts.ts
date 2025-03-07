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

import { InlineResponse20017AccountRules } from './inline-response20017-account-rules';
import { InlineResponse2009MetadataCorporateLocationUser } from './inline-response2009-metadata-corporate-location-user';
import { Obpv210banksBANKIDaccountsACCOUNTIDVIEWIDtransactionrequesttypesSANDBOXTANtransactionrequestsValue } from './obpv210banks-bankidaccounts-accountidviewidtransactionrequesttypes-sandboxtantransactionrequests-value';
import { Obpv310managementbanksBANKIDaccountsACCOUNTIDAccountRoutings } from './obpv310managementbanks-bankidaccounts-accountidaccount-routings';
 /**
 * 
 *
 * @export
 * @interface InlineResponse20093Accounts
 */
export interface InlineResponse20093Accounts {

    /**
     * @type {string}
     * @memberof InlineResponse20093Accounts
     * @example 8ca8a7e4-6d02-40e3-a129-0b2bf89de9f0
     */
    id: string;

    /**
     * @type {string}
     * @memberof InlineResponse20093Accounts
     * @example gh.29.uk
     */
    bank_id: string;

    /**
     * @type {string}
     * @memberof InlineResponse20093Accounts
     * @example My Account
     */
    label: string;

    /**
     * @type {string}
     * @memberof InlineResponse20093Accounts
     */
    number: string;

    /**
     * @type {Array<InlineResponse2009MetadataCorporateLocationUser>}
     * @memberof InlineResponse20093Accounts
     */
    owners: Array<InlineResponse2009MetadataCorporateLocationUser>;

    /**
     * @type {string}
     * @memberof InlineResponse20093Accounts
     * @example 1234BW
     */
    product_code: string;

    /**
     * @type {Obpv210banksBANKIDaccountsACCOUNTIDVIEWIDtransactionrequesttypesSANDBOXTANtransactionrequestsValue}
     * @memberof InlineResponse20093Accounts
     */
    balance: Obpv210banksBANKIDaccountsACCOUNTIDVIEWIDtransactionrequesttypesSANDBOXTANtransactionrequestsValue;

    /**
     * @type {Array<Obpv310managementbanksBANKIDaccountsACCOUNTIDAccountRoutings>}
     * @memberof InlineResponse20093Accounts
     */
    account_routings: Array<Obpv310managementbanksBANKIDaccountsACCOUNTIDAccountRoutings>;

    /**
     * @type {Array<InlineResponse20017AccountRules>}
     * @memberof InlineResponse20093Accounts
     */
    account_rules: Array<InlineResponse20017AccountRules>;
}
