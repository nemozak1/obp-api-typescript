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
 * @interface TRANSACTIONREQUESTIDChallengeBody
 */
export interface TRANSACTIONREQUESTIDChallengeBody {

    /**
     * @type {string}
     * @memberof TRANSACTIONREQUESTIDChallengeBody
     * @example This is challenge.id, you can get it from `Create Transaction Request.` response, only is useful if status ==`INITIATED` there.
     */
    id: string;

    /**
     * @type {string}
     * @memberof TRANSACTIONREQUESTIDChallengeBody
     * @example 123
     */
    answer: string;

    /**
     * @type {string}
     * @memberof TRANSACTIONREQUESTIDChallengeBody
     * @example [Optional] Reason code for REJECT answer (e.g. 'CUST')
     */
    reason_code: string;

    /**
     * @type {string}
     * @memberof TRANSACTIONREQUESTIDChallengeBody
     * @example [Optional] Additional description for REJECT answer
     */
    additional_information: string;
}
