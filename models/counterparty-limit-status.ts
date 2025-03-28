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
 * @interface CounterpartyLimitStatus
 */
export interface CounterpartyLimitStatus {

    /**
     * @type {string}
     * @memberof CounterpartyLimitStatus
     * @example 10000.12
     */
    max_total_amount_status: string;

    /**
     * @type {number}
     * @memberof CounterpartyLimitStatus
     * @example 10
     */
    max_number_of_monthly_transactions_status: number;

    /**
     * @type {string}
     * @memberof CounterpartyLimitStatus
     * @example 1000.11
     */
    max_monthly_amount_status: string;

    /**
     * @type {string}
     * @memberof CounterpartyLimitStatus
     * @example 12000.11
     */
    max_yearly_amount_status: string;

    /**
     * @type {string}
     * @memberof CounterpartyLimitStatus
     * @example EUR
     */
    currency_status: string;

    /**
     * @type {number}
     * @memberof CounterpartyLimitStatus
     * @example 100
     */
    max_number_of_transactions_status: number;

    /**
     * @type {number}
     * @memberof CounterpartyLimitStatus
     * @example 100
     */
    max_number_of_yearly_transactions_status: number;
}
