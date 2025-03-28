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
 * @interface CreateViewJsonV500
 */
export interface CreateViewJsonV500 {

    /**
     * @type {Array<string>}
     * @memberof CreateViewJsonV500
     */
    can_grant_access_to_views?: Array<string>;

    /**
     * @type {string}
     * @memberof CreateViewJsonV500
     * @example owner
     */
    name: string;

    /**
     * @type {string}
     * @memberof CreateViewJsonV500
     * @example This view is for the owner for the account.
     */
    description: string;

    /**
     * @type {boolean}
     * @memberof CreateViewJsonV500
     * @example false
     */
    is_public: boolean;

    /**
     * @type {boolean}
     * @memberof CreateViewJsonV500
     * @example false
     */
    hide_metadata_if_alias_used: boolean;

    /**
     * @type {Array<string>}
     * @memberof CreateViewJsonV500
     */
    can_revoke_access_to_views?: Array<string>;

    /**
     * @type {string}
     * @memberof CreateViewJsonV500
     * @example public
     */
    which_alias_to_use: string;

    /**
     * @type {string}
     * @memberof CreateViewJsonV500
     * @example This view is for the owner for the account.
     */
    metadata_view: string;

    /**
     * @type {Array<string>}
     * @memberof CreateViewJsonV500
     */
    allowed_actions: Array<string>;
}
