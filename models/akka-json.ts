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

import { PortJSON } from './port-json';
 /**
 * 
 *
 * @export
 * @interface AkkaJSON
 */
export interface AkkaJSON {

    /**
     * @type {Array<PortJSON>}
     * @memberof AkkaJSON
     */
    ports: Array<PortJSON>;

    /**
     * @type {string}
     * @memberof AkkaJSON
     * @example Debug
     */
    log_level: string;

    /**
     * @type {boolean}
     * @memberof AkkaJSON
     * @example true
     */
    remote_data_secret_matched?: boolean;
}
