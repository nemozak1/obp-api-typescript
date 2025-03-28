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

import { ManagementDynamicendpointsBody } from './management-dynamicendpoints-body';
 /**
 * 
 *
 * @export
 * @interface InlineResponse20011DynamicEndpoints
 */
export interface InlineResponse20011DynamicEndpoints {

    /**
     * @type {string}
     * @memberof InlineResponse20011DynamicEndpoints
     * @example 9ca9a7e4-6d02-40e3-a129-0b2bf89de9b1
     */
    user_id: string;

    /**
     * @type {string}
     * @memberof InlineResponse20011DynamicEndpoints
     * @example dynamic-endpoint-id
     */
    dynamic_endpoint_id: string;

    /**
     * @type {ManagementDynamicendpointsBody}
     * @memberof InlineResponse20011DynamicEndpoints
     */
    swagger_string: ManagementDynamicendpointsBody;
}
