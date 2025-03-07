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
 * @interface PostKycCheckJSON
 */
export interface PostKycCheckJSON {

    /**
     * @type {string}
     * @memberof PostKycCheckJSON
     * @example 5987953
     */
    customer_number: string;

    /**
     * @type {string}
     * @memberof PostKycCheckJSON
     * @example online_meeting
     */
    how: string;

    /**
     * @type {string}
     * @memberof PostKycCheckJSON
     */
    date: string;

    /**
     * @type {boolean}
     * @memberof PostKycCheckJSON
     * @example true
     */
    satisfied: boolean;

    /**
     * @type {string}
     * @memberof PostKycCheckJSON
     * @example 67876
     */
    staff_user_id: string;

    /**
     * @type {string}
     * @memberof PostKycCheckJSON
     * @example Simon
     */
    staff_name: string;

    /**
     * @type {string}
     * @memberof PostKycCheckJSON
     * @example String
     */
    comments: string;
}
