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
 * @interface PostAgentJsonV510
 */
export interface PostAgentJsonV510 {

    /**
     * @type {string}
     * @memberof PostAgentJsonV510
     * @example Eveline Tripman
     */
    legal_name: string;

    /**
     * @type {string}
     * @memberof PostAgentJsonV510
     * @example +49 30 901820
     */
    mobile_phone_number: string;

    /**
     * @type {string}
     * @memberof PostAgentJsonV510
     * @example 5987953
     */
    agent_number: string;

    /**
     * @type {string}
     * @memberof PostAgentJsonV510
     * @example EUR
     */
    currency: string;
}
