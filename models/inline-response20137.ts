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
 * @interface InlineResponse20137
 */
export interface InlineResponse20137 {

    /**
     * @type {string}
     * @memberof InlineResponse20137
     */
    outbound_avro_schema: string;

    /**
     * @type {string}
     * @memberof InlineResponse20137
     */
    inbound_avro_schema: string;

    /**
     * @type {string}
     * @memberof InlineResponse20137
     */
    adapter_implementation: string;

    /**
     * @type {string}
     * @memberof InlineResponse20137
     */
    dynamic_message_doc_id: string;

    /**
     * @type {string}
     * @memberof InlineResponse20137
     * @example Description of the object. Maximum length is 2000. It can be any characters here.
     */
    description: string;

    /**
     * @type {string}
     * @memberof InlineResponse20137
     * @example obp.getBank
     */
    process: string;

    /**
     * @type {string}
     * @memberof InlineResponse20137
     */
    outbound_topic: string;

    /**
     * @type {string}
     * @memberof InlineResponse20137
     * @example %20%20%20%20%20%20Future.successful%28%0A%20%20%20%20%20%20%20%20Full%28%28BankCommons%28%0A%20%20%20%20%20%20%20%20%20%20BankId%28%22Hello%20bank%20id%22%29%2C%0A%20%20%20%20%20%20%20%20%20%20%221%22%2C%0A%20%20%20%20%20%20%20%20%20%20%221%22%2C%0A%20%20%20%20%20%20%20%20%20%20%221%22%2C%0A%20%20%20%20%20%20%20%20%20%20%221%22%2C%0A%20%20%20%20%20%20%20%20%20%20%221%22%2C%0A%20%20%20%20%20%20%20%20%20%20%221%22%2C%0A%20%20%20%20%20%20%20%20%20%20%221%22%2C%0A%20%20%20%20%20%20%20%20%20%20%228%22%0A%20%20%20%20%20%20%20%20%29%2C%20None%29%29%0A%20%20%20%20%20%20%29
     */
    method_body: string;

    /**
     * @type {string}
     * @memberof InlineResponse20137
     */
    message_format: string;

    /**
     * @type {any}
     * @memberof InlineResponse20137
     */
    example_outbound_message: any;

    /**
     * @type {string}
     * @memberof InlineResponse20137
     */
    inbound_topic: string;

    /**
     * @type {any}
     * @memberof InlineResponse20137
     */
    example_inbound_message: any;

    /**
     * @type {string}
     * @memberof InlineResponse20137
     * @example gh.29.uk
     */
    bank_id: string;

    /**
     * @type {string}
     * @memberof InlineResponse20137
     * @example Scala
     */
    programming_lang: string;
}
