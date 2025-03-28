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

import { AccountJSON } from './account-json';
import { PinResetJSON } from './pin-reset-json';
import { ReplacementJSON } from './replacement-json';
 /**
 * 
 *
 * @export
 * @interface PhysicalCardJsonV500
 */
export interface PhysicalCardJsonV500 {

    /**
     * @type {Array<string>}
     * @memberof PhysicalCardJsonV500
     */
    allows: Array<string>;

    /**
     * @type {string}
     * @memberof PhysicalCardJsonV500
     * @example 123
     */
    cvv: string;

    /**
     * @type {string}
     * @memberof PhysicalCardJsonV500
     */
    expires_date: string;

    /**
     * @type {Array<string>}
     * @memberof PhysicalCardJsonV500
     */
    networks: Array<string>;

    /**
     * @type {string}
     * @memberof PhysicalCardJsonV500
     * @example 7uy8a7e4-6d02-40e3-a129-0b2bf89de8uh
     */
    customer_id: string;

    /**
     * @type {string}
     * @memberof PhysicalCardJsonV500
     * @example 1
     */
    issue_number: string;

    /**
     * @type {ReplacementJSON}
     * @memberof PhysicalCardJsonV500
     */
    replacement: ReplacementJSON;

    /**
     * @type {boolean}
     * @memberof PhysicalCardJsonV500
     * @example true
     */
    enabled: boolean;

    /**
     * @type {string}
     * @memberof PhysicalCardJsonV500
     */
    collected: string;

    /**
     * @type {string}
     * @memberof PhysicalCardJsonV500
     * @example Visa
     */
    brand: string;

    /**
     * @type {string}
     * @memberof PhysicalCardJsonV500
     * @example 364435172576215
     */
    card_number: string;

    /**
     * @type {string}
     * @memberof PhysicalCardJsonV500
     * @example technology1
     */
    technology: string;

    /**
     * @type {boolean}
     * @memberof PhysicalCardJsonV500
     * @example true
     */
    cancelled: boolean;

    /**
     * @type {string}
     * @memberof PhysicalCardJsonV500
     * @example gh.29.uk
     */
    bank_id: string;

    /**
     * @type {string}
     * @memberof PhysicalCardJsonV500
     * @example 36f8a9e6-c2b1-407a-8bd0-421b7119307e 
     */
    card_id: string;

    /**
     * @type {Array<PinResetJSON>}
     * @memberof PhysicalCardJsonV500
     */
    pin_reset: Array<PinResetJSON>;

    /**
     * @type {string}
     * @memberof PhysicalCardJsonV500
     * @example 1324234
     */
    serial_number: string;

    /**
     * @type {AccountJSON}
     * @memberof PhysicalCardJsonV500
     */
    account: AccountJSON;

    /**
     * @type {string}
     * @memberof PhysicalCardJsonV500
     */
    valid_from_date: string;

    /**
     * @type {string}
     * @memberof PhysicalCardJsonV500
     * @example SusanSmith
     */
    name_on_card: string;

    /**
     * @type {string}
     * @memberof PhysicalCardJsonV500
     */
    posted: string;

    /**
     * @type {string}
     * @memberof PhysicalCardJsonV500
     * @example Credit
     */
    card_type: string;

    /**
     * @type {boolean}
     * @memberof PhysicalCardJsonV500
     * @example true
     */
    on_hot_list: boolean;
}
