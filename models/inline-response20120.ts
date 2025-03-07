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

import { InlineResponse2009MetadataCorporateLocationUser } from './inline-response2009-metadata-corporate-location-user';
 /**
 * 
 *
 * @export
 * @interface InlineResponse20120
 */
export interface InlineResponse20120 {

    /**
     * @type {string}
     * @memberof InlineResponse20120
     * @example 5995d6a2-01b3-423c-a173-5481df49bdaf
     */
    id: string;

    /**
     * @type {string}
     * @memberof InlineResponse20120
     * @example OBP
     */
    value: string;

    /**
     * @type {string}
     * @memberof InlineResponse20120
     * @example 1100-01-01T00:00:00Z
     */
    date: string;

    /**
     * @type {InlineResponse2009MetadataCorporateLocationUser}
     * @memberof InlineResponse20120
     */
    user: InlineResponse2009MetadataCorporateLocationUser;
}
