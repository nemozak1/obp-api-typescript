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

import { CustomerFaceImageJson } from './customer-face-image-json';
 /**
 * 
 *
 * @export
 * @interface PutUpdateCustomerDataJsonV310
 */
export interface PutUpdateCustomerDataJsonV310 {

    /**
     * @type {string}
     * @memberof PutUpdateCustomerDataJsonV310
     * @example Master
     */
    highest_education_attained: string;

    /**
     * @type {string}
     * @memberof PutUpdateCustomerDataJsonV310
     * @example worker
     */
    employment_status: string;

    /**
     * @type {CustomerFaceImageJson}
     * @memberof PutUpdateCustomerDataJsonV310
     */
    face_image: CustomerFaceImageJson;

    /**
     * @type {number}
     * @memberof PutUpdateCustomerDataJsonV310
     * @example 1
     */
    dependants: number;

    /**
     * @type {string}
     * @memberof PutUpdateCustomerDataJsonV310
     * @example single
     */
    relationship_status: string;
}
