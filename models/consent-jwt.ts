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

import { ConsentAccessJson } from './consent-access-json';
import { ConsentView } from './consent-view';
import { HTTPParam } from './httpparam';
import { Role } from './role';
 /**
 * 
 *
 * @export
 * @interface ConsentJWT
 */
export interface ConsentJWT {

    /**
     * @type {number}
     * @memberof ConsentJWT
     * @example 1730373271
     */
    nbf: number;

    /**
     * @type {string}
     * @memberof ConsentJWT
     */
    name?: string;

    /**
     * @type {string}
     * @memberof ConsentJWT
     */
    email?: string;

    /**
     * @type {Array<HTTPParam>}
     * @memberof ConsentJWT
     */
    request_headers: Array<HTTPParam>;

    /**
     * @type {string}
     * @memberof ConsentJWT
     * @example d33f7463-ee49-4e8a-8a92-6138dc183d16
     */
    jti: string;

    /**
     * @type {number}
     * @memberof ConsentJWT
     * @example 1730937600
     */
    exp: number;

    /**
     * @type {string}
     * @memberof ConsentJWT
     */
    createdByUserId: string;

    /**
     * @type {Array<ConsentView>}
     * @memberof ConsentJWT
     */
    views: Array<ConsentView>;

    /**
     * @type {Array<Role>}
     * @memberof ConsentJWT
     */
    entitlements: Array<Role>;

    /**
     * @type {number}
     * @memberof ConsentJWT
     * @example 1730373271
     */
    iat: number;

    /**
     * @type {string}
     * @memberof ConsentJWT
     * @example fcf346d2-153b-4430-9a8f-f35768533987
     */
    sub: string;

    /**
     * @type {string}
     * @memberof ConsentJWT
     * @example 2664650c-8090-481e-8bd8-03a92f9c87ea
     */
    aud: string;

    /**
     * @type {string}
     * @memberof ConsentJWT
     * @example https://127.0.0.1:8080
     */
    iss: string;

    /**
     * @type {ConsentAccessJson}
     * @memberof ConsentJWT
     */
    access?: ConsentAccessJson;
}
