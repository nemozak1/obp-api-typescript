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

import { Obpv510regulatedentitiesServices } from './obpv510regulatedentities-services';
 /**
 * 
 *
 * @export
 * @interface InlineResponse200153Entities
 */
export interface InlineResponse200153Entities {

    /**
     * @type {string}
     * @memberof InlineResponse200153Entities
     * @example 0af807d7-3c39-43ef-9712-82bcfde1b9ca
     */
    entity_id: string;

    /**
     * @type {string}
     * @memberof InlineResponse200153Entities
     * @example CY_CBC
     */
    certificate_authority_ca_owner_id: string;

    /**
     * @type {string}
     * @memberof InlineResponse200153Entities
     * @example -----BEGIN CERTIFICATE-----MIICsjCCAZqgAwIBAgIGAYwQ62R0MA0GCSqGSIb3DQEBCwUAMBoxGDAWBgNVBAMMD2FwcC5leGFtcGxlLmNvbTAeFw0yMzExMjcxMzE1MTFaFw0yNTExMjYxMzE1MTFaMBoxGDAWBgNVBAMMD2FwcC5leGFtcGxlLmNvbTCCASIwDQYJKoZIhvcNAQEBBQADggEPADCCAQoCggEBAK9WIodZHWzKyCcf9YfWEhPURbfO6zKuMqzHN27GdqHsVVEGxP4F/J4mso+0ENcRr6ur4u81iREaVdCc40rHDHVJNEtniD8Icbz7tcsqAewIVhc/q6WXGqImJpCq7hA0m247dDsaZT0lb/MVBiMoJxDEmAE/GYYnWTEn84R35WhJsMvuQ7QmLvNg6RkChY6POCT/YKe9NKwa1NqI1U+oA5RFzAaFtytvZCE3jtp+aR0brL7qaGfgxm6B7dEpGyhg0NcVCV7xMQNq2JxZTVdAr6lcsRGaAFulakmW3aNnmK+L35Wu8uW+OxNxwUuC6f3b4FVBa276FMuUTRfu7gc+k6kCAwEAATANBgkqhkiG9w0BAQsFAAOCAQEAAU5CjEyAoyTn7PgFpQD48ZNPuUsEQ19gzYgJvHMzFIoZ7jKBodjO5mCzWBcR7A4mpeAsdyiNBl2sTiZscSnNqxk61jVzP5Ba1D7XtOjjr7+3iqowrThj6BY40QqhYh/6BSY9fDzVZQiHnvlo6ZUM5kUK6OavZOovKlp5DIl5sGqoP0qAJnpQ4nhB2WVVsKfPlOXc+2KSsbJ23g9l8zaTMr+X0umlvfEKqyEl1Fa2L1dO0y/KFQ+ILmxcZLpRdq1hRAjd0quq9qGC8ucXhRWDgM4hslVpau0da68g0aItWNez3mc5lB82b3dcZpFMzO41bgw7gvw10AvvTfQDqEYIuQ==-----END CERTIFICATE-----
     */
    entity_certificate_public_key: string;

    /**
     * @type {string}
     * @memberof InlineResponse200153Entities
     * @example EXAMPLE COMPANY LTD
     */
    entity_name: string;

    /**
     * @type {string}
     * @memberof InlineResponse200153Entities
     * @example PSD_PICY_CBC!12345
     */
    entity_code: string;

    /**
     * @type {string}
     * @memberof InlineResponse200153Entities
     * @example PSD_PI
     */
    entity_type: string;

    /**
     * @type {string}
     * @memberof InlineResponse200153Entities
     * @example EXAMPLE COMPANY LTD, 5 SOME STREET
     */
    entity_address: string;

    /**
     * @type {string}
     * @memberof InlineResponse200153Entities
     * @example SOME CITY
     */
    entity_town_city: string;

    /**
     * @type {string}
     * @memberof InlineResponse200153Entities
     * @example 1060
     */
    entity_post_code: string;

    /**
     * @type {string}
     * @memberof InlineResponse200153Entities
     * @example CY
     */
    entity_country: string;

    /**
     * @type {string}
     * @memberof InlineResponse200153Entities
     * @example www.example.com
     */
    entity_web_site: string;

    /**
     * @type {Array<Obpv510regulatedentitiesServices>}
     * @memberof InlineResponse200153Entities
     */
    services: Array<Obpv510regulatedentitiesServices>;
}
