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

import { PostCounterpartyBespokeJson } from './post-counterparty-bespoke-json';
 /**
 * 
 *
 * @export
 * @interface CounterpartyJson400
 */
export interface CounterpartyJson400 {

    /**
     * @type {string}
     * @memberof CounterpartyJson400
     * @example 36f8a9e6-c2b1-407a-8bd0-421b7119307e
     */
    other_account_routing_address: string;

    /**
     * @type {string}
     * @memberof CounterpartyJson400
     * @example OBP
     */
    other_account_routing_scheme: string;

    /**
     * @type {string}
     * @memberof CounterpartyJson400
     * @example 9ca9a7e4-6d02-40e3-a129-0b2bf89de9b1
     */
    created_by_user_id: string;

    /**
     * @type {string}
     * @memberof CounterpartyJson400
     * @example CounterpartyName
     */
    name: string;

    /**
     * @type {string}
     * @memberof CounterpartyJson400
     * @example DE89370400440532013000
     */
    other_account_secondary_routing_address: string;

    /**
     * @type {boolean}
     * @memberof CounterpartyJson400
     * @example true
     */
    is_beneficiary: boolean;

    /**
     * @type {string}
     * @memberof CounterpartyJson400
     * @example My landlord
     */
    description: string;

    /**
     * @type {string}
     * @memberof CounterpartyJson400
     * @example 12f8a9e6-c2b1-407a-8bd0-421b7119307e
     */
    other_branch_routing_address: string;

    /**
     * @type {Array<PostCounterpartyBespokeJson>}
     * @memberof CounterpartyJson400
     */
    bespoke: Array<PostCounterpartyBespokeJson>;

    /**
     * @type {string}
     * @memberof CounterpartyJson400
     * @example OBP
     */
    other_bank_routing_scheme: string;

    /**
     * @type {string}
     * @memberof CounterpartyJson400
     * @example OBP
     */
    other_branch_routing_scheme: string;

    /**
     * @type {string}
     * @memberof CounterpartyJson400
     * @example 8ca8a7e4-6d02-40e3-a129-0b2bf89de9f0
     */
    this_account_id: string;

    /**
     * @type {string}
     * @memberof CounterpartyJson400
     * @example owner
     */
    this_view_id: string;

    /**
     * @type {string}
     * @memberof CounterpartyJson400
     * @example EUR
     */
    currency: string;

    /**
     * @type {string}
     * @memberof CounterpartyJson400
     * @example gh.29.uk
     */
    other_bank_routing_address: string;

    /**
     * @type {string}
     * @memberof CounterpartyJson400
     * @example gh.29.uk
     */
    this_bank_id: string;

    /**
     * @type {string}
     * @memberof CounterpartyJson400
     * @example 9fg8a7e4-6d02-40e3-a129-0b2bf89de8uh
     */
    counterparty_id: string;

    /**
     * @type {string}
     * @memberof CounterpartyJson400
     * @example IBAN
     */
    other_account_secondary_routing_scheme: string;
}
