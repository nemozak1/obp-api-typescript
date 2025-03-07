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
 * @interface ViewsVIEWIDBody
 */
export interface ViewsVIEWIDBody {

    /**
     * @type {string}
     * @memberof ViewsVIEWIDBody
     * @example this is for family
     */
    description: string;

    /**
     * @type {string}
     * @memberof ViewsVIEWIDBody
     * @example owner
     */
    metadata_view: string;

    /**
     * @type {boolean}
     * @memberof ViewsVIEWIDBody
     * @example true
     */
    is_public: boolean;

    /**
     * @type {string}
     * @memberof ViewsVIEWIDBody
     * @example family
     */
    which_alias_to_use: string;

    /**
     * @type {boolean}
     * @memberof ViewsVIEWIDBody
     * @example true
     */
    hide_metadata_if_alias_used: boolean;

    /**
     * @type {Array<string>}
     * @memberof ViewsVIEWIDBody
     */
    allowed_actions: Array<string>;
}
