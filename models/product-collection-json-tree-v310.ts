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

import { ProductJsonV310 } from './product-json-v310';
 /**
 * 
 *
 * @export
 * @interface ProductCollectionJsonTreeV310
 */
export interface ProductCollectionJsonTreeV310 {

    /**
     * @type {string}
     * @memberof ProductCollectionJsonTreeV310
     * @example A
     */
    collection_code: string;

    /**
     * @type {Array<ProductJsonV310>}
     * @memberof ProductCollectionJsonTreeV310
     */
    products: Array<ProductJsonV310>;
}
