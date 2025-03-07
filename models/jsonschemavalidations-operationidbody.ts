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

import { Obpv400managementjsonschemavalidationsOPERATIONIDProperties } from './obpv400managementjsonschemavalidations-operationidproperties';
 /**
 * 
 *
 * @export
 * @interface JsonschemavalidationsOPERATIONIDBody
 */
export interface JsonschemavalidationsOPERATIONIDBody {

    /**
     * @type {string}
     * @memberof JsonschemavalidationsOPERATIONIDBody
     * @example http://json-schema.org/draft-07/schema
     */
    schema: string;

    /**
     * @type {string}
     * @memberof JsonschemavalidationsOPERATIONIDBody
     * @example The demo json-schema
     */
    description: string;

    /**
     * @type {string}
     * @memberof JsonschemavalidationsOPERATIONIDBody
     * @example The demo schema
     */
    title: string;

    /**
     * @type {Array<string>}
     * @memberof JsonschemavalidationsOPERATIONIDBody
     */
    required: Array<string>;

    /**
     * @type {string}
     * @memberof JsonschemavalidationsOPERATIONIDBody
     * @example object
     */
    type: string;

    /**
     * @type {Obpv400managementjsonschemavalidationsOPERATIONIDProperties}
     * @memberof JsonschemavalidationsOPERATIONIDBody
     */
    properties: Obpv400managementjsonschemavalidationsOPERATIONIDProperties;

    /**
     * @type {boolean}
     * @memberof JsonschemavalidationsOPERATIONIDBody
     * @example true
     */
    additionalProperties: boolean;
}
