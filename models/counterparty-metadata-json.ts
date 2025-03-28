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

import { LocationJsonV210 } from './location-json-v210';
 /**
 * 
 *
 * @export
 * @interface CounterpartyMetadataJson
 */
export interface CounterpartyMetadataJson {

    /**
     * @type {string}
     * @memberof CounterpartyMetadataJson
     * @example String
     */
    public_alias: string;

    /**
     * @type {LocationJsonV210}
     * @memberof CounterpartyMetadataJson
     */
    physical_location: LocationJsonV210;

    /**
     * @type {string}
     * @memberof CounterpartyMetadataJson
     * @example String
     */
    image_url: string;

    /**
     * @type {string}
     * @memberof CounterpartyMetadataJson
     * @example String
     */
    private_alias: string;

    /**
     * @type {string}
     * @memberof CounterpartyMetadataJson
     * @example String
     */
    url: string;

    /**
     * @type {string}
     * @memberof CounterpartyMetadataJson
     * @example String
     */
    more_info: string;

    /**
     * @type {LocationJsonV210}
     * @memberof CounterpartyMetadataJson
     */
    corporate_location: LocationJsonV210;

    /**
     * @type {string}
     * @memberof CounterpartyMetadataJson
     * @example String
     */
    open_corporates_url: string;
}
