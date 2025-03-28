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

import { AdapterImplementationJson } from './adapter-implementation-json';
import { EndpointInfo } from './endpoint-info';
import { FieldNameApiVersions } from './field-name-api-versions';
import { MessageDocJsonOutboundAvroSchema } from './message-doc-json-outbound-avro-schema';
 /**
 * 
 *
 * @export
 * @interface MessageDocJson
 */
export interface MessageDocJson {

    /**
     * @type {AdapterImplementationJson}
     * @memberof MessageDocJson
     */
    adapter_implementation: AdapterImplementationJson;

    /**
     * @type {MessageDocJsonOutboundAvroSchema}
     * @memberof MessageDocJson
     */
    outboundAvroSchema?: MessageDocJsonOutboundAvroSchema;

    /**
     * @type {MessageDocJsonOutboundAvroSchema}
     * @memberof MessageDocJson
     */
    example_inbound_message: MessageDocJsonOutboundAvroSchema;

    /**
     * @type {MessageDocJsonOutboundAvroSchema}
     * @memberof MessageDocJson
     */
    inboundAvroSchema?: MessageDocJsonOutboundAvroSchema;

    /**
     * @type {FieldNameApiVersions}
     * @memberof MessageDocJson
     */
    requiredFieldInfo?: FieldNameApiVersions;

    /**
     * @type {string}
     * @memberof MessageDocJson
     * @example get Banks
     */
    description: string;

    /**
     * @type {string}
     * @memberof MessageDocJson
     * @example getAccounts
     */
    process: string;

    /**
     * @type {string}
     * @memberof MessageDocJson
     * @example rest_vMar2019
     */
    message_format: string;

    /**
     * @type {MessageDocJsonOutboundAvroSchema}
     * @memberof MessageDocJson
     */
    example_outbound_message: MessageDocJsonOutboundAvroSchema;

    /**
     * @type {Array<EndpointInfo>}
     * @memberof MessageDocJson
     */
    dependent_endpoints: Array<EndpointInfo>;

    /**
     * @type {string}
     * @memberof MessageDocJson
     * @example to.obp.api.1.caseclass.OutboundGetAccounts
     */
    outbound_topic?: string;

    /**
     * @type {string}
     * @memberof MessageDocJson
     * @example from.obp.api.1.to.adapter.mf.caseclass.OutboundGetAccounts
     */
    inbound_topic?: string;
}
