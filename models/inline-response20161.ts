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

import { InlineResponse200152 } from './inline-response200152';
import { InlineResponse20022User } from './inline-response20022-user';
 /**
 * 
 *
 * @export
 * @interface InlineResponse20161
 */
export interface InlineResponse20161 {

    /**
     * @type {string}
     * @memberof InlineResponse20161
     * @example 7uy8a7e4-6d02-40e3-a129-0b2bf89de8uh
     */
    consumer_id: string;

    /**
     * @type {string}
     * @memberof InlineResponse20161
     * @example bwf0ykmwoirip1yjxcn15wnhuyxcziwgtcoaildq
     */
    consumer_key: string;

    /**
     * @type {string}
     * @memberof InlineResponse20161
     * @example appNameBank
     */
    app_name: string;

    /**
     * @type {string}
     * @memberof InlineResponse20161
     * @example Web
     */
    app_type: string;

    /**
     * @type {string}
     * @memberof InlineResponse20161
     * @example Description of the object. Maximum length is 2000. It can be any characters here.
     */
    description: string;

    /**
     * @type {string}
     * @memberof InlineResponse20161
     * @example felixsmith@example.com
     */
    developer_email: string;

    /**
     * @type {string}
     * @memberof InlineResponse20161
     * @example Tesobe GmbH
     */
    company: string;

    /**
     * @type {string}
     * @memberof InlineResponse20161
     * @example https://apisandbox.openbankproject.com
     */
    redirect_url: string;

    /**
     * @type {string}
     * @memberof InlineResponse20161
     * @example -----BEGIN CERTIFICATE-----
MIIFIjCCBAqgAwIBAgIIX3qsz7QQxngwDQYJKoZIhvcNAQELBQAwgZ8xCzAJBgNV
BAYTAkRFMQ8wDQYDVQQIEwZCZXJsaW4xDzANBgNVBAcTBkJlcmxpbjEPMA0GA1UE
ChMGVEVTT0JFMRowGAYDVQQLExFURVNPQkUgT3BlcmF0aW9uczESMBAGA1UEAxMJ
VEVTT0JFIENBMR8wHQYJKoZIhvcNAQkBFhBhZG1pbkB0ZXNvYmUuY29tMQwwCgYD
VQQpEwNWUE4wHhcNMjMwNzE3MDg0MDAwWhcNMjQwNzE3MDg0MDAwWjCBizELMAkG
A1UEBhMCREUxDzANBgNVBAgTBkJlcmxpbjEPMA0GA1UEBxMGQmVybGluMRQwEgYD
VQQKEwtUZXNvYmUgR21iSDEPMA0GA1UECxMGc3lzb3BzMRIwEAYDVQQDEwlsb2Nh
bGhvc3QxHzAdBgkqhkiG9w0BCQEWEGFkbWluQHRlc29iZS5jb20wggEiMA0GCSqG
SIb3DQEBAQUAA4IBDwAwggEKAoIBAQCwxGuWUN1H0d0IeYPYWdLA0I/5BXx4DLO6
zfi1GGJlF8BIXRN0VTJckIY9C3J1RnXDs6p6ufA01iHe1PQdL6VzfcaC3j+jUSgV
1z9ybEUPyUwq3PCCxqoVI9n8yh+O6FDn3dvu/9Q2NtBpJHUBDCLf7OO9TgsFU2sE
Mys+Hw5DuuX5n5OQ2VIwH+qlMTQnd+yw5y8FKHqAZT5hE60lF/x6sQnwi58hLGRW
Sqo/548c2ZpoeWtnyY1I6PyR7zUYGuhruLY8gVFfLE+610u/lj2wYTXMxntpV+tV
ralLFRMhvbqZXW/EpuDb/pEbCnLDNDxq5NarLVDzcHs7VhT9MPChAgMBAAGjggFy
MIIBbjATBgNVHSUEDDAKBggrBgEFBQcDAjAaBgNVHREEEzARgglsb2NhbGhvc3SH
BH8AAAEwggEGBggrBgEFBQcBAwSB+TCB9jAIBgYEAI5GAQEwOAYGBACORgEFMC4w
LBYhaHR0cHM6Ly9leGFtcGxlLm9yZy9wa2lkaXNjbG9zdXJlEwdleGFtcGxlMIGI
BgYEAIGYJwIwfjBMMBEGBwQAgZgnAQMMBlBTUF9BSTARBgcEAIGYJwEBDAZQU1Bf
QVMwEQYHBACBmCcBAgwGUFNQX1BJMBEGBwQAgZgnAQQMBlBTUF9JQwwlRHVtbXkg
RmluYW5jaWFsIFN1cGVydmlzaW9uIEF1dGhvcml0eQwHWFgtREZTQTAlBgYEAI5G
AQYwGwYHBACORgEGAQYHBACORgEGAgYHBACORgEGAzARBglghkgBhvhCAQEEBAMC
B4AwHgYJYIZIAYb4QgENBBEWD3hjYSBjZXJ0aWZpY2F0ZTANBgkqhkiG9w0BAQsF
AAOCAQEAKTS7exS9A7rWJLRzWrlHoTu68Avm5g9Dz1GKjgt8rnvj3D21SE14Rf5p
0JWHYH4SiCdnh8Tx+IA7o0TmPJ1JRfAXR3i/5R7TJi/HrnqL+V7SIx2Cuq/hkZEU
AhVs07nnvHURcrlQGwcfn4TbgpCURpCPpYZlNsYySb6BS6I4qFaadHGqMTyEkphV
wfXyB3brmzxj9V4Qgp0t+s/uFuFirWyIayRc9nSSC7vuNVYvib2Kim4y8kvuWpA4
Z51+fFOmBqCqpmwfAADNgDsLJiA/741eBflVd/ZUeAzgOjMCMIaDGlwiwZlePKT7
553GtfsGxZMf05oqfUrQEQfJaU+/+Q==
-----END CERTIFICATE-----

     */
    certificate_pem: string;

    /**
     * @type {InlineResponse200152}
     * @memberof InlineResponse20161
     */
    certificate_info: InlineResponse200152;

    /**
     * @type {InlineResponse20022User}
     * @memberof InlineResponse20161
     */
    created_by_user: InlineResponse20022User;

    /**
     * @type {boolean}
     * @memberof InlineResponse20161
     * @example true
     */
    enabled: boolean;

    /**
     * @type {string}
     * @memberof InlineResponse20161
     * @example 1100-01-01T00:00:00Z
     */
    created: string;

    /**
     * @type {string}
     * @memberof InlineResponse20161
     * @example https://apisandbox.openbankproject.com/logo
     */
    logo_url: string;
}
