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
import { Obpv310banksBANKIDcustomersCUSTOMERIDdataFaceImage } from './obpv310banks-bankidcustomers-customeriddata-face-image';
import { Obpv500banksBANKIDcustomersCreditRating } from './obpv500banks-bankidcustomers-credit-rating';
 /**
 * 
 *
 * @export
 * @interface InlineResponse200133
 */
export interface InlineResponse200133 {

    /**
     * @type {string}
     * @memberof InlineResponse200133
     * @example gh.29.uk
     */
    bank_id: string;

    /**
     * @type {string}
     * @memberof InlineResponse200133
     * @example 7uy8a7e4-6d02-40e3-a129-0b2bf89de8uh
     */
    customer_id: string;

    /**
     * @type {string}
     * @memberof InlineResponse200133
     * @example 5987953
     */
    customer_number: string;

    /**
     * @type {string}
     * @memberof InlineResponse200133
     * @example Eveline Tripman
     */
    legal_name: string;

    /**
     * @type {string}
     * @memberof InlineResponse200133
     * @example +44 07972 444 876
     */
    mobile_phone_number: string;

    /**
     * @type {string}
     * @memberof InlineResponse200133
     * @example felixsmith@example.com
     */
    email: string;

    /**
     * @type {Obpv310banksBANKIDcustomersCUSTOMERIDdataFaceImage}
     * @memberof InlineResponse200133
     */
    face_image: Obpv310banksBANKIDcustomersCUSTOMERIDdataFaceImage;

    /**
     * @type {string}
     * @memberof InlineResponse200133
     * @example 1100-01-01T00:00:00Z
     */
    date_of_birth: string;

    /**
     * @type {string}
     * @memberof InlineResponse200133
     * @example single
     */
    relationship_status: string;

    /**
     * @type {number}
     * @memberof InlineResponse200133
     * @example 1
     */
    dependants: number;

    /**
     * @type {Array<string>}
     * @memberof InlineResponse200133
     */
    dob_of_dependants: Array<string>;

    /**
     * @type {Obpv500banksBANKIDcustomersCreditRating}
     * @memberof InlineResponse200133
     */
    credit_rating: Obpv500banksBANKIDcustomersCreditRating;

    /**
     * @type {Obpv210banksBANKIDaccountsACCOUNTIDVIEWIDtransactionrequesttypesSANDBOXTANtransactionrequestsValue}
     * @memberof InlineResponse200133
     */
    credit_limit: Obpv210banksBANKIDaccountsACCOUNTIDVIEWIDtransactionrequesttypesSANDBOXTANtransactionrequestsValue;

    /**
     * @type {string}
     * @memberof InlineResponse200133
     * @example Master
     */
    highest_education_attained: string;

    /**
     * @type {string}
     * @memberof InlineResponse200133
     * @example worker
     */
    employment_status: string;

    /**
     * @type {boolean}
     * @memberof InlineResponse200133
     * @example false
     */
    kyc_status: boolean;

    /**
     * @type {string}
     * @memberof InlineResponse200133
     * @example 2024-03-05T12:14:22Z
     */
    last_ok_date: string;
}
