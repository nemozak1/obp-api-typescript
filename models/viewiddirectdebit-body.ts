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
 * @interface VIEWIDDirectdebitBody
 */
export interface VIEWIDDirectdebitBody {

    /**
     * @type {string}
     * @memberof VIEWIDDirectdebitBody
     * @example 7uy8a7e4-6d02-40e3-a129-0b2bf89de8uh
     */
    customer_id: string;

    /**
     * @type {string}
     * @memberof VIEWIDDirectdebitBody
     * @example 9ca9a7e4-6d02-40e3-a129-0b2bf89de9b1
     */
    user_id: string;

    /**
     * @type {string}
     * @memberof VIEWIDDirectdebitBody
     * @example 9fg8a7e4-6d02-40e3-a129-0b2bf89de8uh
     */
    counterparty_id: string;

    /**
     * @type {string}
     * @memberof VIEWIDDirectdebitBody
     * @example 1100-01-01T00:00:00Z
     */
    date_signed: string;

    /**
     * @type {string}
     * @memberof VIEWIDDirectdebitBody
     * @example 1100-01-01T00:00:00Z
     */
    date_starts: string;

    /**
     * @type {string}
     * @memberof VIEWIDDirectdebitBody
     * @example 1100-01-01T00:00:00Z
     */
    date_expires: string;
}
