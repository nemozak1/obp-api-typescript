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

import { InlineResponse20024Account } from './inline-response20024-account';
import { InlineResponse20024Orders } from './inline-response20024-orders';
 /**
 * 
 *
 * @export
 * @interface InlineResponse20024
 */
export interface InlineResponse20024 {

    /**
     * @type {InlineResponse20024Account}
     * @memberof InlineResponse20024
     */
    account: InlineResponse20024Account;

    /**
     * @type {Array<InlineResponse20024Orders>}
     * @memberof InlineResponse20024
     */
    orders: Array<InlineResponse20024Orders>;
}
