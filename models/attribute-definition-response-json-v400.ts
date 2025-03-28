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

 /**
 * 
 *
 * @export
 * @interface AttributeDefinitionResponseJsonV400
 */
export interface AttributeDefinitionResponseJsonV400 {

    /**
     * @type {string}
     * @memberof AttributeDefinitionResponseJsonV400
     * @example SPECIAL_TAX_NUMBER
     */
    name: string;

    /**
     * @type {boolean}
     * @memberof AttributeDefinitionResponseJsonV400
     * @example true
     */
    is_active: boolean;

    /**
     * @type {string}
     * @memberof AttributeDefinitionResponseJsonV400
     * @example description
     */
    description: string;

    /**
     * @type {string}
     * @memberof AttributeDefinitionResponseJsonV400
     * @example 9ca9a7e4-6d02-40e3-a129-0b2bf89de9b1
     */
    attribute_definition_id: string;

    /**
     * @type {string}
     * @memberof AttributeDefinitionResponseJsonV400
     * @example STRING
     */
    alias: string;

    /**
     * @type {string}
     * @memberof AttributeDefinitionResponseJsonV400
     * @example gh.29.uk
     */
    bank_id: string;

    /**
     * @type {Array<string>}
     * @memberof AttributeDefinitionResponseJsonV400
     */
    can_be_seen_on_views: Array<string>;

    /**
     * @type {string}
     * @memberof AttributeDefinitionResponseJsonV400
     * @example Card
     */
    category: string;

    /**
     * @type {string}
     * @memberof AttributeDefinitionResponseJsonV400
     * @example STRING
     */
    type: string;
}
