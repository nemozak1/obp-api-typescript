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

import { OtherAccountJsonV300 } from './other-account-json-v300';
import { ThisAccountJsonV300 } from './this-account-json-v300';
import { TransactionAttributeResponseJson } from './transaction-attribute-response-json';
import { TransactionDetailsJSON } from './transaction-details-json';
import { TransactionMetadataJSON } from './transaction-metadata-json';
 /**
 * 
 *
 * @export
 * @interface TransactionJsonV300
 */
export interface TransactionJsonV300 {

    /**
     * @type {ThisAccountJsonV300}
     * @memberof TransactionJsonV300
     */
    this_account: ThisAccountJsonV300;

    /**
     * @type {string}
     * @memberof TransactionJsonV300
     * @example String
     */
    id: string;

    /**
     * @type {TransactionDetailsJSON}
     * @memberof TransactionJsonV300
     */
    details: TransactionDetailsJSON;

    /**
     * @type {TransactionMetadataJSON}
     * @memberof TransactionJsonV300
     */
    metadata: TransactionMetadataJSON;

    /**
     * @type {OtherAccountJsonV300}
     * @memberof TransactionJsonV300
     */
    other_account: OtherAccountJsonV300;

    /**
     * @type {Array<TransactionAttributeResponseJson>}
     * @memberof TransactionJsonV300
     */
    transaction_attributes: Array<TransactionAttributeResponseJson>;
}
