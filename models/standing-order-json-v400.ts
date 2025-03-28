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

import { AmountOfMoneyJsonV121 } from './amount-of-money-json-v121';
import { When } from './when';
 /**
 * 
 *
 * @export
 * @interface StandingOrderJsonV400
 */
export interface StandingOrderJsonV400 {

    /**
     * @type {string}
     * @memberof StandingOrderJsonV400
     */
    date_starts: string;

    /**
     * @type {string}
     * @memberof StandingOrderJsonV400
     * @example 7uy8a7e4-6d02-40e3-a129-0b2bf89de8uh
     */
    customer_id: string;

    /**
     * @type {string}
     * @memberof StandingOrderJsonV400
     * @example aa0533bd-eb22-4bff-af75-d45240361b05
     */
    standing_order_id: string;

    /**
     * @type {string}
     * @memberof StandingOrderJsonV400
     */
    date_cancelled: string;

    /**
     * @type {string}
     * @memberof StandingOrderJsonV400
     */
    date_signed: string;

    /**
     * @type {string}
     * @memberof StandingOrderJsonV400
     * @example 9ca9a7e4-6d02-40e3-a129-0b2bf89de9b1
     */
    user_id: string;

    /**
     * @type {AmountOfMoneyJsonV121}
     * @memberof StandingOrderJsonV400
     */
    amount: AmountOfMoneyJsonV121;

    /**
     * @type {string}
     * @memberof StandingOrderJsonV400
     * @example gh.29.uk
     */
    bank_id: string;

    /**
     * @type {string}
     * @memberof StandingOrderJsonV400
     * @example 8ca8a7e4-6d02-40e3-a129-0b2bf89de9f0
     */
    account_id: string;

    /**
     * @type {string}
     * @memberof StandingOrderJsonV400
     */
    date_expires: string;

    /**
     * @type {string}
     * @memberof StandingOrderJsonV400
     * @example 9fg8a7e4-6d02-40e3-a129-0b2bf89de8uh
     */
    counterparty_id: string;

    /**
     * @type {When}
     * @memberof StandingOrderJsonV400
     */
    when: When;

    /**
     * @type {boolean}
     * @memberof StandingOrderJsonV400
     * @example true
     */
    active: boolean;
}
