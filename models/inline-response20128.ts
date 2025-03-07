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

import { Obpv400banksBANKIDproductsPRODUCTCODEfeeValue } from './obpv400banks-bankidproducts-productcodefee-value';
 /**
 * 
 *
 * @export
 * @interface InlineResponse20128
 */
export interface InlineResponse20128 {

    /**
     * @type {string}
     * @memberof InlineResponse20128
     * @example gh.29.uk
     */
    bank_id: string;

    /**
     * @type {string}
     * @memberof InlineResponse20128
     * @example 1234BW
     */
    product_code: string;

    /**
     * @type {string}
     * @memberof InlineResponse20128
     * @example 696hlAHLFKUHE37469287634
     */
    product_fee_id: string;

    /**
     * @type {string}
     * @memberof InlineResponse20128
     * @example ACCOUNT_MANAGEMENT_FEE
     */
    name: string;

    /**
     * @type {boolean}
     * @memberof InlineResponse20128
     * @example true
     */
    is_active: boolean;

    /**
     * @type {string}
     * @memberof InlineResponse20128
     * @example More information about this fee
     */
    more_info: string;

    /**
     * @type {Obpv400banksBANKIDproductsPRODUCTCODEfeeValue}
     * @memberof InlineResponse20128
     */
    value: Obpv400banksBANKIDproductsPRODUCTCODEfeeValue;
}
