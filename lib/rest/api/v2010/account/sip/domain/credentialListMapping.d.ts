/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Page = require('../../../../../../base/Page');
import Response = require('../../../../../../http/response');
import V2010 = require('../../../../V2010');
import { SerializableClass } from '../../../../../../interfaces';

/**
 * @description Initialize the CredentialListMappingList
 *
 * @param version - Version of the resource
 * @param accountSid - The unique id of the Account that responsible for this resource.
 * @param domainSid - A string that uniquely identifies the SIP Domain
 */
declare function CredentialListMappingList(version: V2010, accountSid: string, domainSid: string): CredentialListMappingListInstance;

interface CredentialListMappingListInstance {
  /**
   * @param sid - sid of instance
   */
  (sid: string): CredentialListMappingContext;
  /**
   * create a CredentialListMappingInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  create(opts: CredentialListMappingListInstanceCreateOptions, callback?: (error: Error | null, item: CredentialListMappingInstance) => any): Promise<CredentialListMappingInstance>;
  /**
   * Streams CredentialListMappingInstance records from the API.
   *
   * This operation lazily loads records as efficiently as possible until the limit
   * is reached.
   *
   * The results are passed into the callback function, so this operation is memory efficient.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   * @param callback - Function to process each record
   */
  each(opts?: CredentialListMappingListInstanceEachOptions, callback?: (item: CredentialListMappingInstance, done: (err?: Error) => void) => void): void;
  /**
   * Constructs a credential_list_mapping
   *
   * @param sid - The sid
   */
  get(sid: string): CredentialListMappingContext;
  /**
   * Retrieve a single target page of CredentialListMappingInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param targetUrl - API-generated URL for the requested results page
   * @param callback - Callback to handle list of records
   */
  getPage(targetUrl?: string, callback?: (error: Error | null, items: CredentialListMappingPage) => any): Promise<CredentialListMappingPage>;
  /**
   * Lists CredentialListMappingInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle list of records
   */
  list(opts?: CredentialListMappingListInstanceOptions, callback?: (error: Error | null, items: CredentialListMappingInstance[]) => any): Promise<CredentialListMappingInstance[]>;
  /**
   * Retrieve a single page of CredentialListMappingInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle list of records
   */
  page(opts?: CredentialListMappingListInstancePageOptions, callback?: (error: Error | null, items: CredentialListMappingPage) => any): Promise<CredentialListMappingPage>;
}

/**
 * Options to pass to create
 *
 * @property credentialListSid - The credential_list_sid
 */
interface CredentialListMappingListInstanceCreateOptions {
  credentialListSid: string;
}

/**
 * Options to pass to each
 *
 * @property callback -
 *                         Function to process each record. If this and a positional
 *                         callback are passed, this one will be used
 * @property done - Function to be called upon completion of streaming
 * @property limit -
 *                         Upper limit for the number of records to return.
 *                         each() guarantees never to return more than limit.
 *                         Default is no limit
 * @property pageSize -
 *                         Number of records to fetch per request,
 *                         when not set will use the default value of 50 records.
 *                         If no pageSize is defined but a limit is defined,
 *                         each() will attempt to read the limit with the most efficient
 *                         page size, i.e. min(limit, 1000)
 */
interface CredentialListMappingListInstanceEachOptions {
  callback?: (item: CredentialListMappingInstance, done: (err?: Error) => void) => void;
  done?: Function;
  limit?: number;
  pageSize?: number;
}

/**
 * Options to pass to list
 *
 * @property limit -
 *                         Upper limit for the number of records to return.
 *                         list() guarantees never to return more than limit.
 *                         Default is no limit
 * @property pageSize -
 *                         Number of records to fetch per request,
 *                         when not set will use the default value of 50 records.
 *                         If no page_size is defined but a limit is defined,
 *                         list() will attempt to read the limit with the most
 *                         efficient page size, i.e. min(limit, 1000)
 */
interface CredentialListMappingListInstanceOptions {
  limit?: number;
  pageSize?: number;
}

/**
 * Options to pass to page
 *
 * @property pageNumber - Page Number, this value is simply for client state
 * @property pageSize - Number of records to return, defaults to 50
 * @property pageToken - PageToken provided by the API
 */
interface CredentialListMappingListInstancePageOptions {
  pageNumber?: number;
  pageSize?: number;
  pageToken?: string;
}

interface CredentialListMappingPayload extends CredentialListMappingResource, Page.TwilioResponsePayload {
}

interface CredentialListMappingResource {
  account_sid: string;
  date_created: Date;
  date_updated: Date;
  friendly_name: string;
  sid: string;
  subresource_uris: string;
  uri: string;
}

interface CredentialListMappingSolution {
  accountSid?: string;
  domainSid?: string;
}


declare class CredentialListMappingContext {
  /**
   * Initialize the CredentialListMappingContext
   *
   * @param version - Version of the resource
   * @param accountSid - The account_sid
   * @param domainSid - The domain_sid
   * @param sid - The sid
   */
  constructor(version: V2010, accountSid: string, domainSid: string, sid: string);

  /**
   * fetch a CredentialListMappingInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: (error: Error | null, items: CredentialListMappingInstance) => any): Promise<CredentialListMappingInstance>;
  /**
   * remove a CredentialListMappingInstance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: (error: Error | null, items: CredentialListMappingInstance) => any): void;
}


declare class CredentialListMappingInstance extends SerializableClass {
  /**
   * Initialize the CredentialListMappingContext
   *
   * @property accountSid - The unique id of the Account that responsible for this resource.
   * @property dateCreated - The date that this resource was created, given as GMT in RFC 2822 format.
   * @property dateUpdated - The date that this resource was last updated, given as GMT in RFC 2822 format.
   * @property friendlyName - A human readable descriptive text for this resource, up to 64 characters long.
   * @property sid - A 34 character string that uniquely identifies this resource.
   * @property uri - The URI for this resource, relative to https://api.twilio.com
   * @property subresourceUris - The subresource_uris
   *
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param accountSid - The unique id of the Account that responsible for this resource.
   * @param domainSid - A string that uniquely identifies the SIP Domain
   * @param sid - The sid
   */
  constructor(version: V2010, payload: CredentialListMappingPayload, accountSid: string, domainSid: string, sid: string);

  private _proxy: CredentialListMappingContext;
  accountSid: string;
  dateCreated: Date;
  dateUpdated: Date;
  /**
   * fetch a CredentialListMappingInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: (error: Error | null, items: CredentialListMappingInstance) => any): void;
  friendlyName: string;
  /**
   * remove a CredentialListMappingInstance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: (error: Error | null, items: CredentialListMappingInstance) => any): void;
  sid: string;
  subresourceUris: string;
  /**
   * Produce a plain JSON object version of the CredentialListMappingInstance for serialization.
   * Removes any circular references in the object.
   */
  toJSON(): any;
  uri: string;
}


declare class CredentialListMappingPage extends Page<V2010, CredentialListMappingPayload, CredentialListMappingResource, CredentialListMappingInstance> {
  /**
   * Initialize the CredentialListMappingPage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: V2010, response: Response<string>, solution: CredentialListMappingSolution);

  /**
   * Build an instance of CredentialListMappingInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: CredentialListMappingPayload): CredentialListMappingInstance;
}

export { CredentialListMappingContext, CredentialListMappingInstance, CredentialListMappingList, CredentialListMappingListInstance, CredentialListMappingListInstanceCreateOptions, CredentialListMappingListInstanceEachOptions, CredentialListMappingListInstanceOptions, CredentialListMappingListInstancePageOptions, CredentialListMappingPage, CredentialListMappingPayload, CredentialListMappingResource, CredentialListMappingSolution }