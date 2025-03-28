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
 * @interface FastFirehoseOwners
 */
export interface FastFirehoseOwners {

    /**
     * @type {string}
     * @memberof FastFirehoseOwners
     * @example b27327a2-a822-41e5-a909-0150da688939
     */
    user_id: string;

    /**
     * @type {string}
     * @memberof FastFirehoseOwners
     * @example https://finx22openplatform.fintech-galaxy.com,user_name:synth_user_1_54891
     */
    provider: string;

    /**
     * @type {string}
     * @memberof FastFirehoseOwners
     */
    user_name: string;
}
