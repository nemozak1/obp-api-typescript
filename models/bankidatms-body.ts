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

import { Obpv300banksBANKIDbranchesLobbyMonday } from './obpv300banks-bankidbranches-lobby-monday';
import { Obpv500banksBANKIDproductsPRODUCTCODEMeta } from './obpv500banks-bankidproducts-productcodemeta';
import { Obpv510banksBANKIDatmsAddress } from './obpv510banks-bankidatms-address';
import { Obpv510banksBANKIDatmsLocation } from './obpv510banks-bankidatms-location';
 /**
 * 
 *
 * @export
 * @interface BANKIDAtmsBody
 */
export interface BANKIDAtmsBody {

    /**
     * @type {string}
     * @memberof BANKIDAtmsBody
     * @example atme-9a0f-4bfa-b30b-9003aa467f51
     */
    id: string;

    /**
     * @type {string}
     * @memberof BANKIDAtmsBody
     * @example gh.29.uk
     */
    bank_id: string;

    /**
     * @type {string}
     * @memberof BANKIDAtmsBody
     * @example Atm by the Lake
     */
    name: string;

    /**
     * @type {Obpv510banksBANKIDatmsAddress}
     * @memberof BANKIDAtmsBody
     */
    address: Obpv510banksBANKIDatmsAddress;

    /**
     * @type {Obpv510banksBANKIDatmsLocation}
     * @memberof BANKIDAtmsBody
     */
    location: Obpv510banksBANKIDatmsLocation;

    /**
     * @type {Obpv500banksBANKIDproductsPRODUCTCODEMeta}
     * @memberof BANKIDAtmsBody
     */
    meta: Obpv500banksBANKIDproductsPRODUCTCODEMeta;

    /**
     * @type {Obpv300banksBANKIDbranchesLobbyMonday}
     * @memberof BANKIDAtmsBody
     */
    monday: Obpv300banksBANKIDbranchesLobbyMonday;

    /**
     * @type {Obpv300banksBANKIDbranchesLobbyMonday}
     * @memberof BANKIDAtmsBody
     */
    tuesday: Obpv300banksBANKIDbranchesLobbyMonday;

    /**
     * @type {Obpv300banksBANKIDbranchesLobbyMonday}
     * @memberof BANKIDAtmsBody
     */
    wednesday: Obpv300banksBANKIDbranchesLobbyMonday;

    /**
     * @type {Obpv300banksBANKIDbranchesLobbyMonday}
     * @memberof BANKIDAtmsBody
     */
    thursday: Obpv300banksBANKIDbranchesLobbyMonday;

    /**
     * @type {Obpv300banksBANKIDbranchesLobbyMonday}
     * @memberof BANKIDAtmsBody
     */
    friday: Obpv300banksBANKIDbranchesLobbyMonday;

    /**
     * @type {Obpv300banksBANKIDbranchesLobbyMonday}
     * @memberof BANKIDAtmsBody
     */
    saturday: Obpv300banksBANKIDbranchesLobbyMonday;

    /**
     * @type {Obpv300banksBANKIDbranchesLobbyMonday}
     * @memberof BANKIDAtmsBody
     */
    sunday: Obpv300banksBANKIDbranchesLobbyMonday;

    /**
     * @type {string}
     * @memberof BANKIDAtmsBody
     * @example false
     */
    is_accessible: string;

    /**
     * @type {string}
     * @memberof BANKIDAtmsBody
     */
    located_at: string;

    /**
     * @type {string}
     * @memberof BANKIDAtmsBody
     * @example More information about this fee
     */
    more_info: string;

    /**
     * @type {string}
     * @memberof BANKIDAtmsBody
     * @example false
     */
    has_deposit_capability: string;

    /**
     * @type {Array<string>}
     * @memberof BANKIDAtmsBody
     */
    supported_languages: Array<string>;

    /**
     * @type {Array<string>}
     * @memberof BANKIDAtmsBody
     */
    services: Array<string>;

    /**
     * @type {Array<string>}
     * @memberof BANKIDAtmsBody
     */
    accessibility_features: Array<string>;

    /**
     * @type {Array<string>}
     * @memberof BANKIDAtmsBody
     */
    supported_currencies: Array<string>;

    /**
     * @type {Array<string>}
     * @memberof BANKIDAtmsBody
     */
    notes: Array<string>;

    /**
     * @type {Array<string>}
     * @memberof BANKIDAtmsBody
     */
    location_categories: Array<string>;

    /**
     * @type {string}
     * @memberof BANKIDAtmsBody
     * @example 5
     */
    minimum_withdrawal: string;

    /**
     * @type {string}
     * @memberof BANKIDAtmsBody
     */
    branch_identification: string;

    /**
     * @type {string}
     * @memberof BANKIDAtmsBody
     */
    site_identification: string;

    /**
     * @type {string}
     * @memberof BANKIDAtmsBody
     */
    site_name: string;

    /**
     * @type {string}
     * @memberof BANKIDAtmsBody
     */
    cash_withdrawal_national_fee: string;

    /**
     * @type {string}
     * @memberof BANKIDAtmsBody
     */
    cash_withdrawal_international_fee: string;

    /**
     * @type {string}
     * @memberof BANKIDAtmsBody
     */
    balance_inquiry_fee: string;

    /**
     * @type {string}
     * @memberof BANKIDAtmsBody
     */
    atm_type: string;

    /**
     * @type {string}
     * @memberof BANKIDAtmsBody
     */
    phone: string;
}
