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

import { MetricsJsonV220 } from './metrics-json-v220';
import { WarehouseJSON } from './warehouse-json';
 /**
 * 
 *
 * @export
 * @interface ElasticSearchJSON
 */
export interface ElasticSearchJSON {

    /**
     * @type {Array<MetricsJsonV220>}
     * @memberof ElasticSearchJSON
     */
    metrics: Array<MetricsJsonV220>;

    /**
     * @type {Array<WarehouseJSON>}
     * @memberof ElasticSearchJSON
     */
    warehouse: Array<WarehouseJSON>;
}
