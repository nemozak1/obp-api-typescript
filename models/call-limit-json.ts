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

import { RedisCallLimitJson } from './redis-call-limit-json';
 /**
 * 
 *
 * @export
 * @interface CallLimitJson
 */
export interface CallLimitJson {

    /**
     * @type {RedisCallLimitJson}
     * @memberof CallLimitJson
     */
    current_state?: RedisCallLimitJson;

    /**
     * @type {string}
     * @memberof CallLimitJson
     * @example -1
     */
    per_month_call_limit: string;

    /**
     * @type {string}
     * @memberof CallLimitJson
     * @example -1
     */
    per_week_call_limit: string;

    /**
     * @type {string}
     * @memberof CallLimitJson
     * @example -1
     */
    per_hour_call_limit: string;

    /**
     * @type {string}
     * @memberof CallLimitJson
     * @example -1
     */
    per_second_call_limit: string;

    /**
     * @type {string}
     * @memberof CallLimitJson
     * @example -1
     */
    per_minute_call_limit: string;

    /**
     * @type {string}
     * @memberof CallLimitJson
     * @example -1
     */
    per_day_call_limit: string;
}
