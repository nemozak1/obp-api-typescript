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

import { LocationJSONV121 } from './location-jsonv121';
import { TransactionCommentJSON } from './transaction-comment-json';
import { TransactionImageJSON } from './transaction-image-json';
import { TransactionTagJSON } from './transaction-tag-json';
 /**
 * 
 *
 * @export
 * @interface TransactionMetadataJSON
 */
export interface TransactionMetadataJSON {

    /**
     * @type {string}
     * @memberof TransactionMetadataJSON
     * @example NONE
     */
    narrative: string;

    /**
     * @type {Array<TransactionTagJSON>}
     * @memberof TransactionMetadataJSON
     */
    tags: Array<TransactionTagJSON>;

    /**
     * @type {LocationJSONV121}
     * @memberof TransactionMetadataJSON
     */
    where: LocationJSONV121;

    /**
     * @type {Array<TransactionImageJSON>}
     * @memberof TransactionMetadataJSON
     */
    images: Array<TransactionImageJSON>;

    /**
     * @type {Array<TransactionCommentJSON>}
     * @memberof TransactionMetadataJSON
     */
    comments: Array<TransactionCommentJSON>;
}
