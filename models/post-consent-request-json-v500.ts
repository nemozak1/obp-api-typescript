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

import { AccountAccessV500 } from './account-access-v500';
import { PostConsentEntitlementJsonV310 } from './post-consent-entitlement-json-v310';
 /**
 * 
 *
 * @export
 * @interface PostConsentRequestJsonV500
 */
export interface PostConsentRequestJsonV500 {

    /**
     * @type {string}
     * @memberof PostConsentRequestJsonV500
     * @example +44 07972 444 876
     */
    phone_number?: string;

    /**
     * @type {number}
     * @memberof PostConsentRequestJsonV500
     * @example 3600
     */
    time_to_live?: number;

    /**
     * @type {string}
     * @memberof PostConsentRequestJsonV500
     * @example felixsmith@example.com
     */
    email?: string;

    /**
     * @type {string}
     * @memberof PostConsentRequestJsonV500
     */
    bank_id?: string;

    /**
     * @type {Array<AccountAccessV500>}
     * @memberof PostConsentRequestJsonV500
     */
    account_access: Array<AccountAccessV500>;

    /**
     * @type {boolean}
     * @memberof PostConsentRequestJsonV500
     * @example false
     */
    everything: boolean;

    /**
     * @type {string}
     * @memberof PostConsentRequestJsonV500
     * @example 7uy8a7e4-6d02-40e3-a129-0b2bf89de8uh
     */
    consumer_id?: string;

    /**
     * @type {string}
     * @memberof PostConsentRequestJsonV500
     */
    valid_from?: string;

    /**
     * @type {Array<PostConsentEntitlementJsonV310>}
     * @memberof PostConsentRequestJsonV500
     */
    entitlements?: Array<PostConsentEntitlementJsonV310>;
}
