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

import { InlineResponse20160Payload } from './inline-response20160-payload';
 /**
 * 
 *
 * @export
 * @interface InlineResponse20160
 */
export interface InlineResponse20160 {

    /**
     * @type {string}
     * @memberof InlineResponse20160
     * @example 8ca8a7e4-6d02-40e3-a129-0b2bf89de9f0
     */
    consent_request_id: string;

    /**
     * @type {InlineResponse20160Payload}
     * @memberof InlineResponse20160
     */
    payload: InlineResponse20160Payload;

    /**
     * @type {string}
     * @memberof InlineResponse20160
     * @example 7uy8a7e4-6d02-40e3-a129-0b2bf89de8uh
     */
    consumer_id: string;
}
