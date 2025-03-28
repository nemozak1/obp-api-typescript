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

import { MetaJsonV140 } from './meta-json-v140';
 /**
 * 
 *
 * @export
 * @interface PutProductJsonV500
 */
export interface PutProductJsonV500 {

    /**
     * @type {string}
     * @memberof PutProductJsonV500
     * @example Deposit Account 1
     */
    name: string;

    /**
     * @type {string}
     * @memberof PutProductJsonV500
     * @example Description of the object. Maximum length is 2000. It can be any characters here.
     */
    description?: string;

    /**
     * @type {string}
     * @memberof PutProductJsonV500
     * @example www.example.com/xyz
     */
    terms_and_conditions_url?: string;

    /**
     * @type {string}
     * @memberof PutProductJsonV500
     * @example www.example.com/abc
     */
    more_info_url?: string;

    /**
     * @type {MetaJsonV140}
     * @memberof PutProductJsonV500
     */
    meta?: MetaJsonV140;

    /**
     * @type {string}
     * @memberof PutProductJsonV500
     * @example 787LOW
     */
    parent_product_code: string;
}
