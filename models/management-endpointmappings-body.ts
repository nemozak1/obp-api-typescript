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

import { Obpv400managementbanksBANKIDendpointmappingsENDPOINTMAPPINGIDResponseMapping } from './obpv400managementbanks-bankidendpointmappings-endpointmappingidresponse-mapping';
 /**
 * 
 *
 * @export
 * @interface ManagementEndpointmappingsBody
 */
export interface ManagementEndpointmappingsBody {

    /**
     * @type {string}
     * @memberof ManagementEndpointmappingsBody
     * @example OBPv4.0.0-dynamicEndpoint_POST_account
     */
    operation_id: string;

    /**
     * @type {any}
     * @memberof ManagementEndpointmappingsBody
     */
    request_mapping: any;

    /**
     * @type {Obpv400managementbanksBANKIDendpointmappingsENDPOINTMAPPINGIDResponseMapping}
     * @memberof ManagementEndpointmappingsBody
     */
    response_mapping: Obpv400managementbanksBANKIDendpointmappingsENDPOINTMAPPINGIDResponseMapping;
}
