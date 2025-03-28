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

import { SandboxAddressImport } from './sandbox-address-import';
import { SandboxDriveUpImport } from './sandbox-drive-up-import';
import { SandboxLobbyImport } from './sandbox-lobby-import';
import { SandboxLocationImport } from './sandbox-location-import';
import { SandboxMetaImport } from './sandbox-meta-import';
 /**
 * 
 *
 * @export
 * @interface SandboxBranchImport
 */
export interface SandboxBranchImport {

    /**
     * @type {string}
     * @memberof SandboxBranchImport
     * @example Genel Müdürlük
     */
    name: string;

    /**
     * @type {SandboxLocationImport}
     * @memberof SandboxBranchImport
     */
    location: SandboxLocationImport;

    /**
     * @type {SandboxDriveUpImport}
     * @memberof SandboxBranchImport
     */
    driveUp?: SandboxDriveUpImport;

    /**
     * @type {string}
     * @memberof SandboxBranchImport
     * @example bank1
     */
    bank_id: string;

    /**
     * @type {string}
     * @memberof SandboxBranchImport
     * @example branch1
     */
    id: string;

    /**
     * @type {SandboxMetaImport}
     * @memberof SandboxBranchImport
     */
    meta: SandboxMetaImport;

    /**
     * @type {SandboxLobbyImport}
     * @memberof SandboxBranchImport
     */
    lobby?: SandboxLobbyImport;

    /**
     * @type {SandboxAddressImport}
     * @memberof SandboxBranchImport
     */
    address: SandboxAddressImport;
}
