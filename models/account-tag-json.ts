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

import { UserJSONV121 } from './user-jsonv121';
 /**
 * 
 *
 * @export
 * @interface AccountTagJSON
 */
export interface AccountTagJSON {

    /**
     * @type {string}
     * @memberof AccountTagJSON
     * @example 5995d6a2-01b3-423c-a173-5481df49bdaf
     */
    id: string;

    /**
     * @type {string}
     * @memberof AccountTagJSON
     * @example OBP
     */
    value: string;

    /**
     * @type {string}
     * @memberof AccountTagJSON
     */
    date: string;

    /**
     * @type {UserJSONV121}
     * @memberof AccountTagJSON
     */
    user: UserJSONV121;
}
