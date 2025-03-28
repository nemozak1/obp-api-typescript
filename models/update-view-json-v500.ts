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
 * @interface UpdateViewJsonV500
 */
export interface UpdateViewJsonV500 {

    /**
     * @type {Array<string>}
     * @memberof UpdateViewJsonV500
     */
    can_grant_access_to_views?: Array<string>;

    /**
     * @type {string}
     * @memberof UpdateViewJsonV500
     * @example this is for family
     */
    description: string;

    /**
     * @type {boolean}
     * @memberof UpdateViewJsonV500
     * @example true
     */
    is_public: boolean;

    /**
     * @type {boolean}
     * @memberof UpdateViewJsonV500
     * @example true
     */
    hide_metadata_if_alias_used: boolean;

    /**
     * @type {Array<string>}
     * @memberof UpdateViewJsonV500
     */
    can_revoke_access_to_views?: Array<string>;

    /**
     * @type {string}
     * @memberof UpdateViewJsonV500
     * @example family
     */
    which_alias_to_use: string;

    /**
     * @type {boolean}
     * @memberof UpdateViewJsonV500
     */
    is_firehose?: boolean;

    /**
     * @type {string}
     * @memberof UpdateViewJsonV500
     * @example owner
     */
    metadata_view: string;

    /**
     * @type {Array<string>}
     * @memberof UpdateViewJsonV500
     */
    allowed_actions: Array<string>;
}
