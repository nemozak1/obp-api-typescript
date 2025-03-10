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
 * @interface InlineResponse20122Challenges
 */
export interface InlineResponse20122Challenges {

    /**
     * @type {string}
     * @memberof InlineResponse20122Challenges
     * @example 2fg8a7e4-6d02-40e3-a129-0b2bf89de8ub
     */
    id: string;

    /**
     * @type {string}
     * @memberof InlineResponse20122Challenges
     * @example 9ca9a7e4-6d02-40e3-a129-0b2bf89de9b1
     */
    user_id: string;

    /**
     * @type {number}
     * @memberof InlineResponse20122Challenges
     * @example 3
     */
    allowed_attempts: number;

    /**
     * @type {string}
     * @memberof InlineResponse20122Challenges
     * @example OBP_TRANSACTION_REQUEST_CHALLENGE
     */
    challenge_type: string;

    /**
     * @type {string}
     * @memberof InlineResponse20122Challenges
     * @example /obp/v4.0.0/banks/BANK_ID/accounts/ACCOUNT_ID/VIEW_ID/transaction-request-types/TRANSACTION_REQUEST_TYPE/transaction-requests/TRANSACTION_REQUEST_ID/challenge
     */
    link: string;
}
