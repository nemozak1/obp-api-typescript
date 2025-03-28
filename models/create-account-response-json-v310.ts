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

import { AccountAttributeResponseJson } from './account-attribute-response-json';
import { AccountRoutingJsonV121 } from './account-routing-json-v121';
import { AmountOfMoneyJsonV121 } from './amount-of-money-json-v121';
 /**
 * 
 *
 * @export
 * @interface CreateAccountResponseJsonV310
 */
export interface CreateAccountResponseJsonV310 {

    /**
     * @type {Array<AccountAttributeResponseJson>}
     * @memberof CreateAccountResponseJsonV310
     */
    account_attributes: Array<AccountAttributeResponseJson>;

    /**
     * @type {string}
     * @memberof CreateAccountResponseJsonV310
     * @example DERBY6
     */
    branch_id: string;

    /**
     * @type {Array<AccountRoutingJsonV121>}
     * @memberof CreateAccountResponseJsonV310
     */
    account_routings: Array<AccountRoutingJsonV121>;

    /**
     * @type {string}
     * @memberof CreateAccountResponseJsonV310
     * @example My Account
     */
    label: string;

    /**
     * @type {AmountOfMoneyJsonV121}
     * @memberof CreateAccountResponseJsonV310
     */
    balance: AmountOfMoneyJsonV121;

    /**
     * @type {string}
     * @memberof CreateAccountResponseJsonV310
     * @example 9ca9a7e4-6d02-40e3-a129-0b2bf89de9b1
     */
    user_id: string;

    /**
     * @type {string}
     * @memberof CreateAccountResponseJsonV310
     * @example 1234BW
     */
    product_code: string;

    /**
     * @type {string}
     * @memberof CreateAccountResponseJsonV310
     * @example 8ca8a7e4-6d02-40e3-a129-0b2bf89de9f0
     */
    account_id: string;
}
