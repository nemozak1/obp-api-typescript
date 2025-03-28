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

import { PinResetJSON } from './pin-reset-json';
import { ReplacementJSON } from './replacement-json';
 /**
 * 
 *
 * @export
 * @interface UpdatePhysicalCardJsonV310
 */
export interface UpdatePhysicalCardJsonV310 {

    /**
     * @type {Array<string>}
     * @memberof UpdatePhysicalCardJsonV310
     */
    allows: Array<string>;

    /**
     * @type {string}
     * @memberof UpdatePhysicalCardJsonV310
     */
    expires_date: string;

    /**
     * @type {Array<string>}
     * @memberof UpdatePhysicalCardJsonV310
     */
    networks: Array<string>;

    /**
     * @type {string}
     * @memberof UpdatePhysicalCardJsonV310
     * @example 7uy8a7e4-6d02-40e3-a129-0b2bf89de8uh
     */
    customer_id: string;

    /**
     * @type {string}
     * @memberof UpdatePhysicalCardJsonV310
     * @example 1
     */
    issue_number: string;

    /**
     * @type {ReplacementJSON}
     * @memberof UpdatePhysicalCardJsonV310
     */
    replacement: ReplacementJSON;

    /**
     * @type {boolean}
     * @memberof UpdatePhysicalCardJsonV310
     * @example true
     */
    enabled: boolean;

    /**
     * @type {string}
     * @memberof UpdatePhysicalCardJsonV310
     */
    collected: string;

    /**
     * @type {string}
     * @memberof UpdatePhysicalCardJsonV310
     * @example technology1
     */
    technology: string;

    /**
     * @type {string}
     * @memberof UpdatePhysicalCardJsonV310
     * @example 8ca8a7e4-6d02-40e3-a129-0b2bf89de9f0
     */
    account_id: string;

    /**
     * @type {Array<PinResetJSON>}
     * @memberof UpdatePhysicalCardJsonV310
     */
    pin_reset: Array<PinResetJSON>;

    /**
     * @type {string}
     * @memberof UpdatePhysicalCardJsonV310
     * @example 1324234
     */
    serial_number: string;

    /**
     * @type {string}
     * @memberof UpdatePhysicalCardJsonV310
     */
    valid_from_date: string;

    /**
     * @type {string}
     * @memberof UpdatePhysicalCardJsonV310
     * @example SusanSmith
     */
    name_on_card: string;

    /**
     * @type {string}
     * @memberof UpdatePhysicalCardJsonV310
     */
    posted: string;

    /**
     * @type {string}
     * @memberof UpdatePhysicalCardJsonV310
     * @example Credit
     */
    card_type: string;
}
