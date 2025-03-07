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

import { InlineResponse20044Account } from './inline-response20044-account';
import { Obpv310managementbanksBANKIDcardsCARDIDPinReset } from './obpv310managementbanks-bankidcards-cardidpin-reset';
import { Obpv310managementbanksBANKIDcardsCARDIDReplacement } from './obpv310managementbanks-bankidcards-cardidreplacement';
 /**
 * 
 *
 * @export
 * @interface InlineResponse20044Cards
 */
export interface InlineResponse20044Cards {

    /**
     * @type {string}
     * @memberof InlineResponse20044Cards
     * @example 36f8a9e6-c2b1-407a-8bd0-421b7119307e 
     */
    card_id: string;

    /**
     * @type {string}
     * @memberof InlineResponse20044Cards
     * @example gh.29.uk
     */
    bank_id: string;

    /**
     * @type {string}
     * @memberof InlineResponse20044Cards
     * @example 364435172576215
     */
    card_number: string;

    /**
     * @type {string}
     * @memberof InlineResponse20044Cards
     * @example Credit
     */
    card_type: string;

    /**
     * @type {string}
     * @memberof InlineResponse20044Cards
     * @example SusanSmith
     */
    name_on_card: string;

    /**
     * @type {string}
     * @memberof InlineResponse20044Cards
     * @example 1
     */
    issue_number: string;

    /**
     * @type {string}
     * @memberof InlineResponse20044Cards
     * @example 1324234
     */
    serial_number: string;

    /**
     * @type {string}
     * @memberof InlineResponse20044Cards
     * @example 1100-01-01T00:00:00Z
     */
    valid_from_date: string;

    /**
     * @type {string}
     * @memberof InlineResponse20044Cards
     * @example 1100-01-01T00:00:00Z
     */
    expires_date: string;

    /**
     * @type {boolean}
     * @memberof InlineResponse20044Cards
     * @example true
     */
    enabled: boolean;

    /**
     * @type {boolean}
     * @memberof InlineResponse20044Cards
     * @example true
     */
    cancelled: boolean;

    /**
     * @type {boolean}
     * @memberof InlineResponse20044Cards
     * @example true
     */
    on_hot_list: boolean;

    /**
     * @type {string}
     * @memberof InlineResponse20044Cards
     * @example technologyString1
     */
    technology: string;

    /**
     * @type {Array<string>}
     * @memberof InlineResponse20044Cards
     */
    networks: Array<string>;

    /**
     * @type {Array<string>}
     * @memberof InlineResponse20044Cards
     */
    allows: Array<string>;

    /**
     * @type {InlineResponse20044Account}
     * @memberof InlineResponse20044Cards
     */
    account: InlineResponse20044Account;

    /**
     * @type {Obpv310managementbanksBANKIDcardsCARDIDReplacement}
     * @memberof InlineResponse20044Cards
     */
    replacement: Obpv310managementbanksBANKIDcardsCARDIDReplacement;

    /**
     * @type {Array<Obpv310managementbanksBANKIDcardsCARDIDPinReset>}
     * @memberof InlineResponse20044Cards
     */
    pin_reset: Array<Obpv310managementbanksBANKIDcardsCARDIDPinReset>;

    /**
     * @type {string}
     * @memberof InlineResponse20044Cards
     * @example 1100-01-01T00:00:00Z
     */
    collected: string;

    /**
     * @type {string}
     * @memberof InlineResponse20044Cards
     * @example 1100-01-01T00:00:00Z
     */
    posted: string;

    /**
     * @type {string}
     * @memberof InlineResponse20044Cards
     * @example 7uy8a7e4-6d02-40e3-a129-0b2bf89de8uh
     */
    customer_id: string;
}
