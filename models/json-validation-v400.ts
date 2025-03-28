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

import { JsonSchemaV400 } from './json-schema-v400';
 /**
 * 
 *
 * @export
 * @interface JsonValidationV400
 */
export interface JsonValidationV400 {

    /**
     * @type {string}
     * @memberof JsonValidationV400
     * @example OBPv4.0.0-createXxx
     */
    operation_id: string;

    /**
     * @type {JsonSchemaV400}
     * @memberof JsonValidationV400
     */
    json_schema: JsonSchemaV400;
}
