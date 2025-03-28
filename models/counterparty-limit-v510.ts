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
 * @interface CounterpartyLimitV510
 */
export interface CounterpartyLimitV510 {

    /**
     * @type {string}
     * @memberof CounterpartyLimitV510
     * @example abc9a7e4-6d02-40e3-a129-0b2bf89de9b1
     */
    counterparty_limit_id: string;

    /**
     * @type {string}
     * @memberof CounterpartyLimitV510
     * @example 10000.11
     */
    max_monthly_amount: string;

    /**
     * @type {number}
     * @memberof CounterpartyLimitV510
     * @example 10
     */
    max_number_of_monthly_transactions: number;

    /**
     * @type {string}
     * @memberof CounterpartyLimitV510
     * @example 1000.11
     */
    max_single_amount: string;

    /**
     * @type {string}
     * @memberof CounterpartyLimitV510
     * @example owner
     */
    view_id: string;

    /**
     * @type {string}
     * @memberof CounterpartyLimitV510
     * @example gh.29.uk
     */
    bank_id: string;

    /**
     * @type {string}
     * @memberof CounterpartyLimitV510
     * @example 8ca8a7e4-6d02-40e3-a129-0b2bf89de9f0
     */
    account_id: string;

    /**
     * @type {number}
     * @memberof CounterpartyLimitV510
     * @example 100
     */
    max_number_of_transactions: number;

    /**
     * @type {string}
     * @memberof CounterpartyLimitV510
     * @example EUR
     */
    currency: string;

    /**
     * @type {number}
     * @memberof CounterpartyLimitV510
     * @example 100
     */
    max_number_of_yearly_transactions: number;

    /**
     * @type {string}
     * @memberof CounterpartyLimitV510
     * @example 12000.11
     */
    max_yearly_amount: string;

    /**
     * @type {string}
     * @memberof CounterpartyLimitV510
     * @example 9fg8a7e4-6d02-40e3-a129-0b2bf89de8uh
     */
    counterparty_id: string;

    /**
     * @type {string}
     * @memberof CounterpartyLimitV510
     * @example 10000.12
     */
    max_total_amount: string;
}
