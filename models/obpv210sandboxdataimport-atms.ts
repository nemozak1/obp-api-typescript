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

import { Obpv210sandboxdataimportAddress } from './obpv210sandboxdataimport-address';
import { Obpv210sandboxdataimportLocation } from './obpv210sandboxdataimport-location';
import { Obpv210sandboxdataimportMeta1 } from './obpv210sandboxdataimport-meta1';
 /**
 * 
 *
 * @export
 * @interface Obpv210sandboxdataimportAtms
 */
export interface Obpv210sandboxdataimportAtms {

    /**
     * @type {string}
     * @memberof Obpv210sandboxdataimportAtms
     * @example atm1
     */
    id: string;

    /**
     * @type {string}
     * @memberof Obpv210sandboxdataimportAtms
     * @example bank1
     */
    bank_id: string;

    /**
     * @type {string}
     * @memberof Obpv210sandboxdataimportAtms
     * @example Ashbourne Atm 1
     */
    name: string;

    /**
     * @type {Obpv210sandboxdataimportAddress}
     * @memberof Obpv210sandboxdataimportAtms
     */
    address: Obpv210sandboxdataimportAddress;

    /**
     * @type {Obpv210sandboxdataimportLocation}
     * @memberof Obpv210sandboxdataimportAtms
     */
    location: Obpv210sandboxdataimportLocation;

    /**
     * @type {Obpv210sandboxdataimportMeta1}
     * @memberof Obpv210sandboxdataimportAtms
     */
    meta: Obpv210sandboxdataimportMeta1;
}
