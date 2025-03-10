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

 /**
 * 
 *
 * @export
 * @interface Obpv510banksBANKIDatmsAddress
 */
export interface Obpv510banksBANKIDatmsAddress {

    /**
     * @type {string}
     * @memberof Obpv510banksBANKIDatmsAddress
     * @example No 1 the Road
     */
    line_1: string;

    /**
     * @type {string}
     * @memberof Obpv510banksBANKIDatmsAddress
     * @example The Place
     */
    line_2: string;

    /**
     * @type {string}
     * @memberof Obpv510banksBANKIDatmsAddress
     * @example The Hill
     */
    line_3: string;

    /**
     * @type {string}
     * @memberof Obpv510banksBANKIDatmsAddress
     * @example Berlin
     */
    city: string;

    /**
     * @type {string}
     * @memberof Obpv510banksBANKIDatmsAddress
     */
    county: string;

    /**
     * @type {string}
     * @memberof Obpv510banksBANKIDatmsAddress
     * @example Brandenburg
     */
    state: string;

    /**
     * @type {string}
     * @memberof Obpv510banksBANKIDatmsAddress
     * @example 13359
     */
    postcode: string;

    /**
     * @type {string}
     * @memberof Obpv510banksBANKIDatmsAddress
     * @example DE
     */
    country_code: string;
}
