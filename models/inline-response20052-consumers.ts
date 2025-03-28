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

import { InlineResponse20022User } from './inline-response20022-user';
 /**
 * 
 *
 * @export
 * @interface InlineResponse20052Consumers
 */
export interface InlineResponse20052Consumers {

    /**
     * @type {string}
     * @memberof InlineResponse20052Consumers
     * @example 8e716299-4668-4efd-976a-67f57a9984ec
     */
    consumer_id: string;

    /**
     * @type {string}
     * @memberof InlineResponse20052Consumers
     * @example SOFI
     */
    app_name: string;

    /**
     * @type {string}
     * @memberof InlineResponse20052Consumers
     * @example Web
     */
    app_type: string;

    /**
     * @type {string}
     * @memberof InlineResponse20052Consumers
     * @example Account Management
     */
    description: string;

    /**
     * @type {string}
     * @memberof InlineResponse20052Consumers
     * @example felixsmith@example.com
     */
    developer_email: string;

    /**
     * @type {string}
     * @memberof InlineResponse20052Consumers
     * @example www.openbankproject.com
     */
    redirect_url: string;

    /**
     * @type {InlineResponse20022User}
     * @memberof InlineResponse20052Consumers
     */
    created_by_user: InlineResponse20022User;

    /**
     * @type {boolean}
     * @memberof InlineResponse20052Consumers
     * @example true
     */
    enabled: boolean;

    /**
     * @type {string}
     * @memberof InlineResponse20052Consumers
     * @example 1100-01-01T00:00:00Z
     */
    created: string;
}
