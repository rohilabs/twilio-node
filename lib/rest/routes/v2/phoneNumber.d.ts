/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Page = require('../../../base/Page');
import Response = require('../../../http/response');
import V2 = require('../V2');
import { SerializableClass } from '../../../interfaces';

/**
 * Initialize the PhoneNumberList
 *
 * @param version - Version of the resource
 */
declare function PhoneNumberList(version: V2): PhoneNumberListInstance;

/**
 * Options to pass to update
 *
 * @property friendlyName - A human readable description of this resource.
 * @property voiceRegion - The Inbound Processing Region used for this phone number for voice
 */
interface PhoneNumberInstanceUpdateOptions {
  friendlyName?: string;
  voiceRegion?: string;
}

interface PhoneNumberListInstance {
  /**
   * @param sid - sid of instance
   */
  (sid: string): PhoneNumberContext;
  /**
   * Constructs a phone_number
   *
   * @param phoneNumber - The phone number
   */
  get(phoneNumber: string): PhoneNumberContext;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
}

interface PhoneNumberPayload extends PhoneNumberResource, Page.TwilioResponsePayload {
}

interface PhoneNumberResource {
  account_sid: string;
  date_created: Date;
  date_updated: Date;
  friendly_name: string;
  phone_number: string;
  sid: string;
  url: string;
  voice_region: string;
}

interface PhoneNumberSolution {
}


declare class PhoneNumberContext {
  /**
   * Initialize the PhoneNumberContext
   *
   * @param version - Version of the resource
   * @param phoneNumber - The phone number
   */
  constructor(version: V2, phoneNumber: string);

  /**
   * fetch a PhoneNumberInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: (error: Error | null, items: PhoneNumberInstance) => any): Promise<PhoneNumberInstance>;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  /**
   * update a PhoneNumberInstance
   *
   * @param callback - Callback to handle processed record
   */
  update(callback?: (error: Error | null, items: PhoneNumberInstance) => any): Promise<PhoneNumberInstance>;
  /**
   * update a PhoneNumberInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  update(opts?: PhoneNumberInstanceUpdateOptions, callback?: (error: Error | null, items: PhoneNumberInstance) => any): Promise<PhoneNumberInstance>;
}


declare class PhoneNumberInstance extends SerializableClass {
  /**
   * Initialize the PhoneNumberContext
   *
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param phoneNumber - The phone number
   */
  constructor(version: V2, payload: PhoneNumberPayload, phoneNumber: string);

  private _proxy: PhoneNumberContext;
  accountSid: string;
  dateCreated: Date;
  dateUpdated: Date;
  /**
   * fetch a PhoneNumberInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: (error: Error | null, items: PhoneNumberInstance) => any): Promise<PhoneNumberInstance>;
  friendlyName: string;
  phoneNumber: string;
  sid: string;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  /**
   * update a PhoneNumberInstance
   *
   * @param callback - Callback to handle processed record
   */
  update(callback?: (error: Error | null, items: PhoneNumberInstance) => any): Promise<PhoneNumberInstance>;
  /**
   * update a PhoneNumberInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  update(opts?: PhoneNumberInstanceUpdateOptions, callback?: (error: Error | null, items: PhoneNumberInstance) => any): Promise<PhoneNumberInstance>;
  url: string;
  voiceRegion: string;
}


declare class PhoneNumberPage extends Page<V2, PhoneNumberPayload, PhoneNumberResource, PhoneNumberInstance> {
  /**
   * Initialize the PhoneNumberPage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: V2, response: Response<string>, solution: PhoneNumberSolution);

  /**
   * Build an instance of PhoneNumberInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: PhoneNumberPayload): PhoneNumberInstance;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
}

export { PhoneNumberContext, PhoneNumberInstance, PhoneNumberInstanceUpdateOptions, PhoneNumberList, PhoneNumberListInstance, PhoneNumberPage, PhoneNumberPayload, PhoneNumberResource, PhoneNumberSolution }