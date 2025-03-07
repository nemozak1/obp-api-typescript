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

import { InlineResponse2007Description } from './inline-response2007-description';
 /**
 * 
 *
 * @export
 * @interface InlineResponse2007GlossaryItems
 */
export interface InlineResponse2007GlossaryItems {

    /**
     * @type {string}
     * @memberof InlineResponse2007GlossaryItems
     * @example Dr.
     */
    title: string;

    /**
     * @type {InlineResponse2007Description}
     * @memberof InlineResponse2007GlossaryItems
     */
    description: InlineResponse2007Description;
}
