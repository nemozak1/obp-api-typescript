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

import { InlineResponse20039Akka } from './inline-response20039-akka';
import { InlineResponse20039Cache } from './inline-response20039-cache';
import { InlineResponse20039ElasticSearch } from './inline-response20039-elastic-search';
import { InlineResponse20039Scopes } from './inline-response20039-scopes';
 /**
 * 
 *
 * @export
 * @interface InlineResponse20039
 */
export interface InlineResponse20039 {

    /**
     * @type {InlineResponse20039Akka}
     * @memberof InlineResponse20039
     */
    akka: InlineResponse20039Akka;

    /**
     * @type {InlineResponse20039ElasticSearch}
     * @memberof InlineResponse20039
     */
    elastic_search: InlineResponse20039ElasticSearch;

    /**
     * @type {Array<InlineResponse20039Cache>}
     * @memberof InlineResponse20039
     */
    cache: Array<InlineResponse20039Cache>;

    /**
     * @type {InlineResponse20039Scopes}
     * @memberof InlineResponse20039
     */
    scopes: InlineResponse20039Scopes;
}
