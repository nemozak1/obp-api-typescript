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
 * @interface SystemAccountNotificationWebhookJson
 */
export interface SystemAccountNotificationWebhookJson {

    /**
     * @type {string}
     * @memberof SystemAccountNotificationWebhookJson
     * @example 9ca9a7e4-6d02-40e3-a129-0b2bf89de9b1
     */
    created_by_user_id: string;

    /**
     * @type {string}
     * @memberof SystemAccountNotificationWebhookJson
     * @example https://localhost.openbankproject.com
     */
    url: string;

    /**
     * @type {string}
     * @memberof SystemAccountNotificationWebhookJson
     * @example OnCreateTransaction
     */
    trigger_name: string;

    /**
     * @type {string}
     * @memberof SystemAccountNotificationWebhookJson
     * @example HTTP/1.1
     */
    http_protocol: string;

    /**
     * @type {string}
     * @memberof SystemAccountNotificationWebhookJson
     * @example POST
     */
    http_method: string;

    /**
     * @type {string}
     * @memberof SystemAccountNotificationWebhookJson
     * @example fc23a7e2-7dd2-4bdf-a0b4-ae31232a4762
     */
    webhook_id: string;
}
