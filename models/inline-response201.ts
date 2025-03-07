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

import { InlineResponse201Challenge } from './inline-response201-challenge';
import { InlineResponse201Charge } from './inline-response201-charge';
import { InlineResponse201Details } from './inline-response201-details';
import { Obpv210banksBANKIDaccountsACCOUNTIDVIEWIDtransactionrequesttypesSANDBOXTANtransactionrequestsTo } from './obpv210banks-bankidaccounts-accountidviewidtransactionrequesttypes-sandboxtantransactionrequests-to';
 /**
 * 
 *
 * @export
 * @interface InlineResponse201
 */
export interface InlineResponse201 {

    /**
     * @type {string}
     * @memberof InlineResponse201
     * @example 4050046c-63b3-4868-8a22-14b4181d33a6
     */
    id: string;

    /**
     * @type {string}
     * @memberof InlineResponse201
     * @example SANDBOX_TAN
     */
    type: string;

    /**
     * @type {Obpv210banksBANKIDaccountsACCOUNTIDVIEWIDtransactionrequesttypesSANDBOXTANtransactionrequestsTo}
     * @memberof InlineResponse201
     */
    from: Obpv210banksBANKIDaccountsACCOUNTIDVIEWIDtransactionrequesttypesSANDBOXTANtransactionrequestsTo;

    /**
     * @type {InlineResponse201Details}
     * @memberof InlineResponse201
     */
    details: InlineResponse201Details;

    /**
     * @type {Array<string>}
     * @memberof InlineResponse201
     */
    transaction_ids: Array<string>;

    /**
     * @type {string}
     * @memberof InlineResponse201
     * @example COMPLETED
     */
    status: string;

    /**
     * @type {string}
     * @memberof InlineResponse201
     * @example 1100-01-01T00:00:00Z
     */
    start_date: string;

    /**
     * @type {string}
     * @memberof InlineResponse201
     * @example 1100-01-01T00:00:00Z
     */
    end_date: string;

    /**
     * @type {InlineResponse201Challenge}
     * @memberof InlineResponse201
     */
    challenge: InlineResponse201Challenge;

    /**
     * @type {InlineResponse201Charge}
     * @memberof InlineResponse201
     */
    charge: InlineResponse201Charge;
}
