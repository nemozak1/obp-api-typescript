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

import { InlineResponse200146JwtPayload } from './inline-response200146-jwt-payload';
 /**
 * 
 *
 * @export
 * @interface InlineResponse200146Consents
 */
export interface InlineResponse200146Consents {

    /**
     * @type {string}
     * @memberof InlineResponse200146Consents
     * @example 9d429899-24f5-42c8-8565-943ffa6a7945
     */
    consent_reference_id: string;

    /**
     * @type {string}
     * @memberof InlineResponse200146Consents
     * @example 7uy8a7e4-6d02-40e3-a129-0b2bf89de8uh
     */
    consumer_id: string;

    /**
     * @type {string}
     * @memberof InlineResponse200146Consents
     * @example 9ca9a7e4-6d02-40e3-a129-0b2bf89de9b1
     */
    created_by_user_id: string;

    /**
     * @type {string}
     * @memberof InlineResponse200146Consents
     * @example INITIATED
     */
    status: string;

    /**
     * @type {string}
     * @memberof InlineResponse200146Consents
     * @example 2020-01-27
     */
    last_action_date: string;

    /**
     * @type {string}
     * @memberof InlineResponse200146Consents
     * @example 2021-04-08T09:12:27Z
     */
    last_usage_date: string;

    /**
     * @type {InlineResponse200146JwtPayload}
     * @memberof InlineResponse200146Consents
     */
    jwt_payload: InlineResponse200146JwtPayload;

    /**
     * @type {string}
     * @memberof InlineResponse200146Consents
     * @example Berlin Group
     */
    api_standard: string;

    /**
     * @type {string}
     * @memberof InlineResponse200146Consents
     * @example v1.3
     */
    api_version: string;
}
