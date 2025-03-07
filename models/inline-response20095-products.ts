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

import { Obpv500banksBANKIDproductsPRODUCTCODEMeta } from './obpv500banks-bankidproducts-productcodemeta';
 /**
 * 
 *
 * @export
 * @interface InlineResponse20095Products
 */
export interface InlineResponse20095Products {

    /**
     * @type {string}
     * @memberof InlineResponse20095Products
     * @example gh.29.uk
     */
    bank_id: string;

    /**
     * @type {string}
     * @memberof InlineResponse20095Products
     * @example 1234BW
     */
    product_code: string;

    /**
     * @type {string}
     * @memberof InlineResponse20095Products
     * @example 787LOW
     */
    parent_product_code: string;

    /**
     * @type {string}
     * @memberof InlineResponse20095Products
     * @example Deposit Account 1
     */
    name: string;

    /**
     * @type {string}
     * @memberof InlineResponse20095Products
     * @example www.example.com/abc
     */
    more_info_url: string;

    /**
     * @type {string}
     * @memberof InlineResponse20095Products
     * @example www.example.com/xyz
     */
    terms_and_conditions_url: string;

    /**
     * @type {string}
     * @memberof InlineResponse20095Products
     * @example Description of the object. Maximum length is 2000. It can be any characters here.
     */
    description: string;

    /**
     * @type {Obpv500banksBANKIDproductsPRODUCTCODEMeta}
     * @memberof InlineResponse20095Products
     */
    meta: Obpv500banksBANKIDproductsPRODUCTCODEMeta;
}
