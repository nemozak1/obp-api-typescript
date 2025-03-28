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

import { InlineResponse20022Customer } from './inline-response20022-customer';
import { InlineResponse20090Users } from './inline-response20090-users';
 /**
 * 
 *
 * @export
 * @interface InlineResponse20090
 */
export interface InlineResponse20090 {

    /**
     * @type {InlineResponse20022Customer}
     * @memberof InlineResponse20090
     */
    customer: InlineResponse20022Customer;

    /**
     * @type {Array<InlineResponse20090Users>}
     * @memberof InlineResponse20090
     */
    users: Array<InlineResponse20090Users>;
}
