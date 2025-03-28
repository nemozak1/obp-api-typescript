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

import { Properties } from './properties';
 /**
 * 
 *
 * @export
 * @interface JsonSchemaV400
 */
export interface JsonSchemaV400 {

    /**
     * @type {string}
     * @memberof JsonSchemaV400
     * @example The demo json-schema
     */
    description: string;

    /**
     * @type {Properties}
     * @memberof JsonSchemaV400
     */
    properties: Properties;

    /**
     * @type {boolean}
     * @memberof JsonSchemaV400
     * @example true
     */
    additionalProperties: boolean;

    /**
     * @type {string}
     * @memberof JsonSchemaV400
     * @example The demo schema
     */
    title: string;

    /**
     * @type {string}
     * @memberof JsonSchemaV400
     * @example object
     */
    type: string;

    /**
     * @type {Array<string>}
     * @memberof JsonSchemaV400
     */
    required: Array<string>;

    /**
     * @type {string}
     * @memberof JsonSchemaV400
     * @example http://json-schema.org/draft-07/schema
     */
    schema: string;
}
