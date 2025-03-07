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
 * @interface ManagementConsumersBody
 */
export interface ManagementConsumersBody {

    /**
     * @type {string}
     * @memberof ManagementConsumersBody
     * @example Test
     */
    app_name: string;

    /**
     * @type {string}
     * @memberof ManagementConsumersBody
     * @example Test
     */
    app_type: string;

    /**
     * @type {string}
     * @memberof ManagementConsumersBody
     * @example Description
     */
    description: string;

    /**
     * @type {string}
     * @memberof ManagementConsumersBody
     * @example some@email.com
     */
    developer_email: string;

    /**
     * @type {string}
     * @memberof ManagementConsumersBody
     * @example company
     */
    company: string;

    /**
     * @type {string}
     * @memberof ManagementConsumersBody
     * @example redirecturl
     */
    redirect_url: string;

    /**
     * @type {string}
     * @memberof ManagementConsumersBody
     * @example createdby
     */
    created_by_user_id: string;

    /**
     * @type {boolean}
     * @memberof ManagementConsumersBody
     * @example true
     */
    enabled: boolean;

    /**
     * @type {string}
     * @memberof ManagementConsumersBody
     * @example 2025-03-05T12:14:27Z
     */
    created: string;

    /**
     * @type {string}
     * @memberof ManagementConsumersBody
     * @example -----BEGIN CERTIFICATE-----
client_certificate_content
-----END CERTIFICATE-----
     */
    client_certificate: string;

    /**
     * @type {string}
     * @memberof ManagementConsumersBody
     * @example logoUrl
     */
    logo_url: string;
}
