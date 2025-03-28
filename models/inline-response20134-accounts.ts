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

import { InlineResponse20011MetadataComments } from './inline-response20011-metadata-comments';
import { InlineResponse20044AccountViewsAvailable } from './inline-response20044-account-views-available';
import { InlineResponse2009MetadataCorporateLocationUser } from './inline-response2009-metadata-corporate-location-user';
import { InlineResponse2016 } from './inline-response2016';
import { Obpv210banksBANKIDaccountsACCOUNTIDVIEWIDtransactionrequesttypesSANDBOXTANtransactionrequestsValue } from './obpv210banks-bankidaccounts-accountidviewidtransactionrequesttypes-sandboxtantransactionrequests-value';
import { Obpv310managementbanksBANKIDaccountsACCOUNTIDAccountRoutings } from './obpv310managementbanks-bankidaccounts-accountidaccount-routings';
 /**
 * 
 *
 * @export
 * @interface InlineResponse20134Accounts
 */
export interface InlineResponse20134Accounts {

    /**
     * @type {string}
     * @memberof InlineResponse20134Accounts
     * @example 5995d6a2-01b3-423c-a173-5481df49bdaf
     */
    id: string;

    /**
     * @type {string}
     * @memberof InlineResponse20134Accounts
     * @example NoneLabel
     */
    label: string;

    /**
     * @type {string}
     * @memberof InlineResponse20134Accounts
     * @example 123
     */
    number: string;

    /**
     * @type {Array<InlineResponse2009MetadataCorporateLocationUser>}
     * @memberof InlineResponse20134Accounts
     */
    owners: Array<InlineResponse2009MetadataCorporateLocationUser>;

    /**
     * @type {string}
     * @memberof InlineResponse20134Accounts
     * @example 1234BW
     */
    product_code: string;

    /**
     * @type {Obpv210banksBANKIDaccountsACCOUNTIDVIEWIDtransactionrequesttypesSANDBOXTANtransactionrequestsValue}
     * @memberof InlineResponse20134Accounts
     */
    balance: Obpv210banksBANKIDaccountsACCOUNTIDVIEWIDtransactionrequesttypesSANDBOXTANtransactionrequestsValue;

    /**
     * @type {Array<InlineResponse20044AccountViewsAvailable>}
     * @memberof InlineResponse20134Accounts
     */
    views_available: Array<InlineResponse20044AccountViewsAvailable>;

    /**
     * @type {string}
     * @memberof InlineResponse20134Accounts
     * @example gh.29.uk
     */
    bank_id: string;

    /**
     * @type {Array<Obpv310managementbanksBANKIDaccountsACCOUNTIDAccountRoutings>}
     * @memberof InlineResponse20134Accounts
     */
    account_routings: Array<Obpv310managementbanksBANKIDaccountsACCOUNTIDAccountRoutings>;

    /**
     * @type {Array<InlineResponse2016>}
     * @memberof InlineResponse20134Accounts
     */
    account_attributes: Array<InlineResponse2016>;

    /**
     * @type {Array<InlineResponse20011MetadataComments>}
     * @memberof InlineResponse20134Accounts
     */
    tags: Array<InlineResponse20011MetadataComments>;
}
