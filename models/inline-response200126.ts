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

import { InlineResponse200126BackendMessages } from './inline-response200126-backend-messages';
 /**
 * 
 *
 * @export
 * @interface InlineResponse200126
 */
export interface InlineResponse200126 {

    /**
     * @type {string}
     * @memberof InlineResponse200126
     * @example ACCOUNT_MANAGEMENT_FEE
     */
    name: string;

    /**
     * @type {string}
     * @memberof InlineResponse200126
     */
    version: string;

    /**
     * @type {string}
     * @memberof InlineResponse200126
     * @example 59623811dd8a41f6ffe67be46954eee11913dc28
     */
    git_commit: string;

    /**
     * @type {string}
     * @memberof InlineResponse200126
     * @example 2020-01-27
     */
    date: string;

    /**
     * @type {string}
     * @memberof InlineResponse200126
     * @example 5.123
     */
    total_duration: string;

    /**
     * @type {Array<InlineResponse200126BackendMessages>}
     * @memberof InlineResponse200126
     */
    backend_messages: Array<InlineResponse200126BackendMessages>;
}
