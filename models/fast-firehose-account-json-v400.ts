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
import { FastFirehoseAttributes } from './fast-firehose-attributes';
import { FastFirehoseOwners } from './fast-firehose-owners';
import { FastFirehoseRoutings } from './fast-firehose-routings';
 /**
 * 
 *
 * @export
 * @interface FastFirehoseAccountJsonV400
 */
export interface FastFirehoseAccountJsonV400 {

    /**
     * @type {string}
     * @memberof FastFirehoseAccountJsonV400
     */
    number: string;

    /**
     * @type {Array<FastFirehoseAttributes>}
     * @memberof FastFirehoseAccountJsonV400
     */
    account_attributes: Array<FastFirehoseAttributes>;

    /**
     * @type {Array<FastFirehoseRoutings>}
     * @memberof FastFirehoseAccountJsonV400
     */
    account_routings: Array<FastFirehoseRoutings>;

    /**
     * @type {string}
     * @memberof FastFirehoseAccountJsonV400
     * @example My Account
     */
    label: string;

    /**
     * @type {Array<FastFirehoseOwners>}
     * @memberof FastFirehoseAccountJsonV400
     */
    owners: Array<FastFirehoseOwners>;

    /**
     * @type {AmountOfMoneyJsonV121}
     * @memberof FastFirehoseAccountJsonV400
     */
    balance: AmountOfMoneyJsonV121;

    /**
     * @type {string}
     * @memberof FastFirehoseAccountJsonV400
     * @example 1234BW
     */
    product_code: string;

    /**
     * @type {string}
     * @memberof FastFirehoseAccountJsonV400
     * @example gh.29.uk
     */
    bank_id: string;

    /**
     * @type {string}
     * @memberof FastFirehoseAccountJsonV400
     * @example 8ca8a7e4-6d02-40e3-a129-0b2bf89de9f0
     */
    id: string;
}
