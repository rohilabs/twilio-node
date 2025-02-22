/*
 * This code was generated by
 * ___ _ _ _ _ _    _ ____    ____ ____ _    ____ ____ _  _ ____ ____ ____ ___ __   __
 *  |  | | | | |    | |  | __ |  | |__| | __ | __ |___ |\ | |___ |__/ |__|  | |  | |__/
 *  |  |_|_| | |___ | |__|    |__| |  | |    |__] |___ | \| |___ |  \ |  |  | |__| |  \
 *
 * Twilio - Api
 * This is the public Twilio REST API.
 *
 * NOTE: This class is auto generated by OpenAPI Generator.
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { inspect, InspectOptions } from "util";
import Page, { TwilioResponsePayload } from "../../../../../base/Page";
import Response from "../../../../../http/response";
import V2010 from "../../../V2010";
const deserialize = require("../../../../../base/deserialize");
const serialize = require("../../../../../base/serialize");
import { isValidPathParam } from "../../../../../base/utility";

type DependentPhoneNumberAddressRequirement =
  | "none"
  | "any"
  | "local"
  | "foreign";

type DependentPhoneNumberEmergencyStatus = "Active" | "Inactive";

/**
 * Options to pass to each
 */
export interface DependentPhoneNumberListInstanceEachOptions {
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  pageSize?: number;
  /** Function to process each record. If this and a positional callback are passed, this one will be used */
  callback?: (
    item: DependentPhoneNumberInstance,
    done: (err?: Error) => void
  ) => void;
  /** Function to be called upon completion of streaming */
  done?: Function;
  /** Upper limit for the number of records to return. each() guarantees never to return more than limit. Default is no limit */
  limit?: number;
}

/**
 * Options to pass to list
 */
export interface DependentPhoneNumberListInstanceOptions {
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  pageSize?: number;
  /** Upper limit for the number of records to return. list() guarantees never to return more than limit. Default is no limit */
  limit?: number;
}

/**
 * Options to pass to page
 */
export interface DependentPhoneNumberListInstancePageOptions {
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  pageSize?: number;
  /** Page Number, this value is simply for client state */
  pageNumber?: number;
  /** PageToken provided by the API */
  pageToken?: string;
}

export interface DependentPhoneNumberSolution {
  accountSid: string;
  addressSid: string;
}

export interface DependentPhoneNumberListInstance {
  _version: V2010;
  _solution: DependentPhoneNumberSolution;
  _uri: string;

  /**
   * Streams DependentPhoneNumberInstance records from the API.
   *
   * This operation lazily loads records as efficiently as possible until the limit
   * is reached.
   *
   * The results are passed into the callback function, so this operation is memory
   * efficient.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { DependentPhoneNumberListInstanceEachOptions } [params] - Options for request
   * @param { function } [callback] - Function to process each record
   */
  each(
    callback?: (
      item: DependentPhoneNumberInstance,
      done: (err?: Error) => void
    ) => void
  ): void;
  each(
    params: DependentPhoneNumberListInstanceEachOptions,
    callback?: (
      item: DependentPhoneNumberInstance,
      done: (err?: Error) => void
    ) => void
  ): void;
  /**
   * Retrieve a single target page of DependentPhoneNumberInstance records from the API.
   *
   * The request is executed immediately.
   *
   * @param { string } [targetUrl] - API-generated URL for the requested results page
   * @param { function } [callback] - Callback to handle list of records
   */
  getPage(
    targetUrl: string,
    callback?: (error: Error | null, items: DependentPhoneNumberPage) => any
  ): Promise<DependentPhoneNumberPage>;
  /**
   * Lists DependentPhoneNumberInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { DependentPhoneNumberListInstanceOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  list(
    callback?: (
      error: Error | null,
      items: DependentPhoneNumberInstance[]
    ) => any
  ): Promise<DependentPhoneNumberInstance[]>;
  list(
    params: DependentPhoneNumberListInstanceOptions,
    callback?: (
      error: Error | null,
      items: DependentPhoneNumberInstance[]
    ) => any
  ): Promise<DependentPhoneNumberInstance[]>;
  /**
   * Retrieve a single page of DependentPhoneNumberInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { DependentPhoneNumberListInstancePageOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  page(
    callback?: (error: Error | null, items: DependentPhoneNumberPage) => any
  ): Promise<DependentPhoneNumberPage>;
  page(
    params: DependentPhoneNumberListInstancePageOptions,
    callback?: (error: Error | null, items: DependentPhoneNumberPage) => any
  ): Promise<DependentPhoneNumberPage>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export function DependentPhoneNumberListInstance(
  version: V2010,
  accountSid: string,
  addressSid: string
): DependentPhoneNumberListInstance {
  if (!isValidPathParam(accountSid)) {
    throw new Error("Parameter 'accountSid' is not valid.");
  }

  if (!isValidPathParam(addressSid)) {
    throw new Error("Parameter 'addressSid' is not valid.");
  }

  const instance = {} as DependentPhoneNumberListInstance;

  instance._version = version;
  instance._solution = { accountSid, addressSid };
  instance._uri = `/Accounts/${accountSid}/Addresses/${addressSid}/DependentPhoneNumbers.json`;

  instance.page = function page(
    params?:
      | DependentPhoneNumberListInstancePageOptions
      | ((error: Error | null, items: DependentPhoneNumberPage) => any),
    callback?: (error: Error | null, items: DependentPhoneNumberPage) => any
  ): Promise<DependentPhoneNumberPage> {
    if (params instanceof Function) {
      callback = params;
      params = {};
    } else {
      params = params || {};
    }

    let data: any = {};

    if (params["pageSize"] !== undefined) data["PageSize"] = params["pageSize"];

    if (params.pageNumber !== undefined) data["Page"] = params.pageNumber;
    if (params.pageToken !== undefined) data["PageToken"] = params.pageToken;

    const headers: any = {};

    let operationVersion = version,
      operationPromise = operationVersion.page({
        uri: instance._uri,
        method: "get",
        params: data,
        headers,
      });

    operationPromise = operationPromise.then(
      (payload) =>
        new DependentPhoneNumberPage(
          operationVersion,
          payload,
          instance._solution
        )
    );

    operationPromise = instance._version.setPromiseCallback(
      operationPromise,
      callback
    );
    return operationPromise;
  };
  instance.each = instance._version.each;
  instance.list = instance._version.list;

  instance.getPage = function getPage(
    targetUrl: string,
    callback?: (error: Error | null, items: DependentPhoneNumberPage) => any
  ): Promise<DependentPhoneNumberPage> {
    const operationPromise = instance._version._domain.twilio.request({
      method: "get",
      uri: targetUrl,
    });

    let pagePromise = operationPromise.then(
      (payload) =>
        new DependentPhoneNumberPage(
          instance._version,
          payload,
          instance._solution
        )
    );
    pagePromise = instance._version.setPromiseCallback(pagePromise, callback);
    return pagePromise;
  };

  instance.toJSON = function toJSON() {
    return instance._solution;
  };

  instance[inspect.custom] = function inspectImpl(
    _depth: any,
    options: InspectOptions
  ) {
    return inspect(instance.toJSON(), options);
  };

  return instance;
}
export type DependentPhoneNumberVoiceMethod =
  | "HEAD"
  | "GET"
  | "POST"
  | "PATCH"
  | "PUT"
  | "DELETE";
export type DependentPhoneNumberVoiceFallbackMethod =
  | "HEAD"
  | "GET"
  | "POST"
  | "PATCH"
  | "PUT"
  | "DELETE";
export type DependentPhoneNumberSmsFallbackMethod =
  | "HEAD"
  | "GET"
  | "POST"
  | "PATCH"
  | "PUT"
  | "DELETE";
export type DependentPhoneNumberSmsMethod =
  | "HEAD"
  | "GET"
  | "POST"
  | "PATCH"
  | "PUT"
  | "DELETE";
export type DependentPhoneNumberStatusCallbackMethod =
  | "HEAD"
  | "GET"
  | "POST"
  | "PATCH"
  | "PUT"
  | "DELETE";

interface DependentPhoneNumberPayload extends TwilioResponsePayload {
  dependent_phone_numbers: DependentPhoneNumberResource[];
}

interface DependentPhoneNumberResource {
  sid: string;
  account_sid: string;
  friendly_name: string;
  phone_number: string;
  voice_url: string;
  voice_method: DependentPhoneNumberVoiceMethod;
  voice_fallback_method: DependentPhoneNumberVoiceFallbackMethod;
  voice_fallback_url: string;
  voice_caller_id_lookup: boolean;
  date_created: Date;
  date_updated: Date;
  sms_fallback_method: DependentPhoneNumberSmsFallbackMethod;
  sms_fallback_url: string;
  sms_method: DependentPhoneNumberSmsMethod;
  sms_url: string;
  address_requirements: DependentPhoneNumberAddressRequirement;
  capabilities: any;
  status_callback: string;
  status_callback_method: DependentPhoneNumberStatusCallbackMethod;
  api_version: string;
  sms_application_sid: string;
  voice_application_sid: string;
  trunk_sid: string;
  emergency_status: DependentPhoneNumberEmergencyStatus;
  emergency_address_sid: string;
  uri: string;
}

export class DependentPhoneNumberInstance {
  constructor(
    protected _version: V2010,
    payload: DependentPhoneNumberResource,
    accountSid: string,
    addressSid: string
  ) {
    this.sid = payload.sid;
    this.accountSid = payload.account_sid;
    this.friendlyName = payload.friendly_name;
    this.phoneNumber = payload.phone_number;
    this.voiceUrl = payload.voice_url;
    this.voiceMethod = payload.voice_method;
    this.voiceFallbackMethod = payload.voice_fallback_method;
    this.voiceFallbackUrl = payload.voice_fallback_url;
    this.voiceCallerIdLookup = payload.voice_caller_id_lookup;
    this.dateCreated = deserialize.rfc2822DateTime(payload.date_created);
    this.dateUpdated = deserialize.rfc2822DateTime(payload.date_updated);
    this.smsFallbackMethod = payload.sms_fallback_method;
    this.smsFallbackUrl = payload.sms_fallback_url;
    this.smsMethod = payload.sms_method;
    this.smsUrl = payload.sms_url;
    this.addressRequirements = payload.address_requirements;
    this.capabilities = payload.capabilities;
    this.statusCallback = payload.status_callback;
    this.statusCallbackMethod = payload.status_callback_method;
    this.apiVersion = payload.api_version;
    this.smsApplicationSid = payload.sms_application_sid;
    this.voiceApplicationSid = payload.voice_application_sid;
    this.trunkSid = payload.trunk_sid;
    this.emergencyStatus = payload.emergency_status;
    this.emergencyAddressSid = payload.emergency_address_sid;
    this.uri = payload.uri;
  }

  /**
   * The unique string that identifies the resource
   */
  sid: string;
  /**
   * The SID of the Account that created the resource
   */
  accountSid: string;
  /**
   * The string that you assigned to describe the resource
   */
  friendlyName: string;
  /**
   * The phone number in E.164 format
   */
  phoneNumber: string;
  /**
   * The URL we call when the phone number receives a call
   */
  voiceUrl: string;
  /**
   * The HTTP method used with the voice_url
   */
  voiceMethod: DependentPhoneNumberVoiceMethod;
  /**
   * The HTTP method used with voice_fallback_url
   */
  voiceFallbackMethod: DependentPhoneNumberVoiceFallbackMethod;
  /**
   * The URL we call when an error occurs in TwiML
   */
  voiceFallbackUrl: string;
  /**
   * Whether to lookup the caller\'s name
   */
  voiceCallerIdLookup: boolean;
  /**
   * The RFC 2822 date and time in GMT that the resource was created
   */
  dateCreated: Date;
  /**
   * The RFC 2822 date and time in GMT that the resource was last updated
   */
  dateUpdated: Date;
  /**
   * The HTTP method used with sms_fallback_url
   */
  smsFallbackMethod: DependentPhoneNumberSmsFallbackMethod;
  /**
   * The URL that we call when an error occurs while retrieving or executing the TwiML
   */
  smsFallbackUrl: string;
  /**
   * The HTTP method to use with sms_url
   */
  smsMethod: DependentPhoneNumberSmsMethod;
  /**
   * The URL we call when the phone number receives an incoming SMS message
   */
  smsUrl: string;
  addressRequirements: DependentPhoneNumberAddressRequirement;
  /**
   * Indicate if a phone can receive calls or messages
   */
  capabilities: any;
  /**
   * The URL to send status information to your application
   */
  statusCallback: string;
  /**
   * The HTTP method we use to call status_callback
   */
  statusCallbackMethod: DependentPhoneNumberStatusCallbackMethod;
  /**
   * The API version used to start a new TwiML session
   */
  apiVersion: string;
  /**
   * The SID of the application that handles SMS messages sent to the phone number
   */
  smsApplicationSid: string;
  /**
   * The SID of the application that handles calls to the phone number
   */
  voiceApplicationSid: string;
  /**
   * The SID of the Trunk that handles calls to the phone number
   */
  trunkSid: string;
  emergencyStatus: DependentPhoneNumberEmergencyStatus;
  /**
   * The emergency address configuration to use for emergency calling
   */
  emergencyAddressSid: string;
  /**
   * The URI of the resource, relative to `https://api.twilio.com`
   */
  uri: string;

  /**
   * Provide a user-friendly representation
   *
   * @returns Object
   */
  toJSON() {
    return {
      sid: this.sid,
      accountSid: this.accountSid,
      friendlyName: this.friendlyName,
      phoneNumber: this.phoneNumber,
      voiceUrl: this.voiceUrl,
      voiceMethod: this.voiceMethod,
      voiceFallbackMethod: this.voiceFallbackMethod,
      voiceFallbackUrl: this.voiceFallbackUrl,
      voiceCallerIdLookup: this.voiceCallerIdLookup,
      dateCreated: this.dateCreated,
      dateUpdated: this.dateUpdated,
      smsFallbackMethod: this.smsFallbackMethod,
      smsFallbackUrl: this.smsFallbackUrl,
      smsMethod: this.smsMethod,
      smsUrl: this.smsUrl,
      addressRequirements: this.addressRequirements,
      capabilities: this.capabilities,
      statusCallback: this.statusCallback,
      statusCallbackMethod: this.statusCallbackMethod,
      apiVersion: this.apiVersion,
      smsApplicationSid: this.smsApplicationSid,
      voiceApplicationSid: this.voiceApplicationSid,
      trunkSid: this.trunkSid,
      emergencyStatus: this.emergencyStatus,
      emergencyAddressSid: this.emergencyAddressSid,
      uri: this.uri,
    };
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}

export class DependentPhoneNumberPage extends Page<
  V2010,
  DependentPhoneNumberPayload,
  DependentPhoneNumberResource,
  DependentPhoneNumberInstance
> {
  /**
   * Initialize the DependentPhoneNumberPage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(
    version: V2010,
    response: Response<string>,
    solution: DependentPhoneNumberSolution
  ) {
    super(version, response, solution);
  }

  /**
   * Build an instance of DependentPhoneNumberInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(
    payload: DependentPhoneNumberResource
  ): DependentPhoneNumberInstance {
    return new DependentPhoneNumberInstance(
      this._version,
      payload,
      this._solution.accountSid,
      this._solution.addressSid
    );
  }

  [inspect.custom](depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}
