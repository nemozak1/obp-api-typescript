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

import { Obpv510consumervrpconsentrequestsFromAccount } from './obpv510consumervrpconsentrequests-from-account';
import { Obpv510consumervrpconsentrequestsToAccount } from './obpv510consumervrpconsentrequests-to-account';
 /**
 * 
 *
 * @export
 * @interface ConsumerVrpconsentrequestsBody
 */
export interface ConsumerVrpconsentrequestsBody {

    /**
     * @type {Obpv510consumervrpconsentrequestsFromAccount}
     * @memberof ConsumerVrpconsentrequestsBody
     */
    from_account: Obpv510consumervrpconsentrequestsFromAccount;

    /**
     * @type {Obpv510consumervrpconsentrequestsToAccount}
     * @memberof ConsumerVrpconsentrequestsBody
     */
    to_account: Obpv510consumervrpconsentrequestsToAccount;

    /**
     * @type {string}
     * @memberof ConsumerVrpconsentrequestsBody
     * @example felixsmith@example.com
     */
    email: string;

    /**
     * @type {string}
     * @memberof ConsumerVrpconsentrequestsBody
     * @example +44 07972 444 876
     */
    phone_number: string;

    /**
     * @type {string}
     * @memberof ConsumerVrpconsentrequestsBody
     * @example 2025-03-05T12:14:23Z
     */
    valid_from: string;

    /**
     * @type {number}
     * @memberof ConsumerVrpconsentrequestsBody
     * @example 3600
     */
    time_to_live: number;
}
