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
 /**
 * 
 *
 * @export
 * @interface InlineResponse20019Details
 */
export interface InlineResponse20019Details {

    /**
     * @type {string}
     * @memberof InlineResponse20019Details
     * @example AC
     */
    type: string;

    /**
     * @type {string}
     * @memberof InlineResponse20019Details
     * @example OBP
     */
    description: string;

    /**
     * @type {string}
     * @memberof InlineResponse20019Details
     * @example 1100-01-01T00:00:00Z
     */
    posted: string;

    /**
     * @type {string}
     * @memberof InlineResponse20019Details
     * @example 1100-01-01T00:00:00Z
     */
    completed: string;

    /**
     * @type {Obpv210banksBANKIDaccountsACCOUNTIDVIEWIDtransactionrequesttypesSANDBOXTANtransactionrequestsValue}
     * @memberof InlineResponse20019Details
     */
    new_balance: Obpv210banksBANKIDaccountsACCOUNTIDVIEWIDtransactionrequesttypesSANDBOXTANtransactionrequestsValue;

    /**
     * @type {Obpv210banksBANKIDaccountsACCOUNTIDVIEWIDtransactionrequesttypesSANDBOXTANtransactionrequestsValue}
     * @memberof InlineResponse20019Details
     */
    value: Obpv210banksBANKIDaccountsACCOUNTIDVIEWIDtransactionrequesttypesSANDBOXTANtransactionrequestsValue;
}
