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

import { InlineResponse20059Attributes } from './inline-response20059-attributes';
import { Obpv500banksBankRoutings } from './obpv500banks-bank-routings';
 /**
 * 
 *
 * @export
 * @interface InlineResponse20059Banks
 */
export interface InlineResponse20059Banks {

    /**
     * @type {string}
     * @memberof InlineResponse20059Banks
     * @example gh.29.uk
     */
    id: string;

    /**
     * @type {string}
     * @memberof InlineResponse20059Banks
     * @example short_name 
     */
    short_name: string;

    /**
     * @type {string}
     * @memberof InlineResponse20059Banks
     * @example full_name
     */
    full_name: string;

    /**
     * @type {string}
     * @memberof InlineResponse20059Banks
     * @example logo
     */
    logo: string;

    /**
     * @type {string}
     * @memberof InlineResponse20059Banks
     * @example www.openbankproject.com
     */
    website: string;

    /**
     * @type {Array<Obpv500banksBankRoutings>}
     * @memberof InlineResponse20059Banks
     */
    bank_routings: Array<Obpv500banksBankRoutings>;

    /**
     * @type {Array<InlineResponse20059Attributes>}
     * @memberof InlineResponse20059Banks
     */
    attributes: Array<InlineResponse20059Attributes>;
}
