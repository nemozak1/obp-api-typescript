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

import { ResourceUserJSON } from './resource-user-json';
 /**
 * 
 *
 * @export
 * @interface ConsumerJsonV210
 */
export interface ConsumerJsonV210 {

    /**
     * @type {string}
     * @memberof ConsumerJsonV210
     * @example 9ca9a7e4-6d02-40e3-a129-0b2bf89de9b1
     */
    created_by_user_id: string;

    /**
     * @type {string}
     * @memberof ConsumerJsonV210
     * @example Web
     */
    app_type: string;

    /**
     * @type {string}
     * @memberof ConsumerJsonV210
     * @example Account Management
     */
    description: string;

    /**
     * @type {ResourceUserJSON}
     * @memberof ConsumerJsonV210
     */
    created_by_user: ResourceUserJSON;

    /**
     * @type {boolean}
     * @memberof ConsumerJsonV210
     * @example true
     */
    enabled: boolean;

    /**
     * @type {string}
     * @memberof ConsumerJsonV210
     * @example www.openbankproject.com
     */
    redirect_url: string;

    /**
     * @type {string}
     * @memberof ConsumerJsonV210
     * @example felixsmith@example.com
     */
    developer_email: string;

    /**
     * @type {number}
     * @memberof ConsumerJsonV210
     * @example 1213
     */
    consumer_id: number;

    /**
     * @type {string}
     * @memberof ConsumerJsonV210
     * @example SOFI
     */
    app_name: string;

    /**
     * @type {string}
     * @memberof ConsumerJsonV210
     */
    created: string;
}
