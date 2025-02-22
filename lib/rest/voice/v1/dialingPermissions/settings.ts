/*
 * This code was generated by
 * ___ _ _ _ _ _    _ ____    ____ ____ _    ____ ____ _  _ ____ ____ ____ ___ __   __
 *  |  | | | | |    | |  | __ |  | |__| | __ | __ |___ |\ | |___ |__/ |__|  | |  | |__/
 *  |  |_|_| | |___ | |__|    |__| |  | |    |__] |___ | \| |___ |  \ |  |  | |__| |  \
 *
 * Twilio - Voice
 * This is the public Twilio REST API.
 *
 * NOTE: This class is auto generated by OpenAPI Generator.
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { inspect, InspectOptions } from "util";
import V1 from "../../V1";
const deserialize = require("../../../../base/deserialize");
const serialize = require("../../../../base/serialize");
import { isValidPathParam } from "../../../../base/utility";

/**
 * Options to pass to update a SettingsInstance
 */
export interface SettingsContextUpdateOptions {
  /** `true` for the sub-account to inherit voice dialing permissions from the Master Project; otherwise `false`. */
  dialingPermissionsInheritance?: boolean;
}

export interface SettingsContext {
  /**
   * Fetch a SettingsInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed SettingsInstance
   */
  fetch(
    callback?: (error: Error | null, item?: SettingsInstance) => any
  ): Promise<SettingsInstance>;

  /**
   * Update a SettingsInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed SettingsInstance
   */
  update(
    callback?: (error: Error | null, item?: SettingsInstance) => any
  ): Promise<SettingsInstance>;
  /**
   * Update a SettingsInstance
   *
   * @param params - Parameter for request
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed SettingsInstance
   */
  update(
    params: SettingsContextUpdateOptions,
    callback?: (error: Error | null, item?: SettingsInstance) => any
  ): Promise<SettingsInstance>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface SettingsContextSolution {}

export class SettingsContextImpl implements SettingsContext {
  protected _solution: SettingsContextSolution;
  protected _uri: string;

  constructor(protected _version: V1) {
    this._solution = {};
    this._uri = `/Settings`;
  }

  fetch(
    callback?: (error: Error | null, item?: SettingsInstance) => any
  ): Promise<SettingsInstance> {
    const instance = this;
    let operationVersion = instance._version,
      operationPromise = operationVersion.fetch({
        uri: instance._uri,
        method: "get",
      });

    operationPromise = operationPromise.then(
      (payload) => new SettingsInstance(operationVersion, payload)
    );

    operationPromise = instance._version.setPromiseCallback(
      operationPromise,
      callback
    );
    return operationPromise;
  }

  update(
    params?:
      | SettingsContextUpdateOptions
      | ((error: Error | null, item?: SettingsInstance) => any),
    callback?: (error: Error | null, item?: SettingsInstance) => any
  ): Promise<SettingsInstance> {
    if (params instanceof Function) {
      callback = params;
      params = {};
    } else {
      params = params || {};
    }

    let data: any = {};

    if (params["dialingPermissionsInheritance"] !== undefined)
      data["DialingPermissionsInheritance"] = serialize.bool(
        params["dialingPermissionsInheritance"]
      );

    const headers: any = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";

    const instance = this;
    let operationVersion = instance._version,
      operationPromise = operationVersion.update({
        uri: instance._uri,
        method: "post",
        data,
        headers,
      });

    operationPromise = operationPromise.then(
      (payload) => new SettingsInstance(operationVersion, payload)
    );

    operationPromise = instance._version.setPromiseCallback(
      operationPromise,
      callback
    );
    return operationPromise;
  }

  /**
   * Provide a user-friendly representation
   *
   * @returns Object
   */
  toJSON() {
    return this._solution;
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}

interface SettingsPayload extends SettingsResource {}

interface SettingsResource {
  dialing_permissions_inheritance: boolean;
  url: string;
}

export class SettingsInstance {
  protected _solution: SettingsContextSolution;
  protected _context?: SettingsContext;

  constructor(protected _version: V1, payload: SettingsResource) {
    this.dialingPermissionsInheritance =
      payload.dialing_permissions_inheritance;
    this.url = payload.url;

    this._solution = {};
  }

  /**
   * `true` if the sub-account will inherit voice dialing permissions from the Master Project; otherwise `false`
   */
  dialingPermissionsInheritance: boolean;
  /**
   * The absolute URL of this resource
   */
  url: string;

  private get _proxy(): SettingsContext {
    this._context = this._context || new SettingsContextImpl(this._version);
    return this._context;
  }

  /**
   * Fetch a SettingsInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed SettingsInstance
   */
  fetch(
    callback?: (error: Error | null, item?: SettingsInstance) => any
  ): Promise<SettingsInstance> {
    return this._proxy.fetch(callback);
  }

  /**
   * Update a SettingsInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed SettingsInstance
   */
  update(
    callback?: (error: Error | null, item?: SettingsInstance) => any
  ): Promise<SettingsInstance>;
  /**
   * Update a SettingsInstance
   *
   * @param params - Parameter for request
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed SettingsInstance
   */
  update(
    params: SettingsContextUpdateOptions,
    callback?: (error: Error | null, item?: SettingsInstance) => any
  ): Promise<SettingsInstance>;

  update(
    params?: any,
    callback?: (error: Error | null, item?: SettingsInstance) => any
  ): Promise<SettingsInstance> {
    return this._proxy.update(params, callback);
  }

  /**
   * Provide a user-friendly representation
   *
   * @returns Object
   */
  toJSON() {
    return {
      dialingPermissionsInheritance: this.dialingPermissionsInheritance,
      url: this.url,
    };
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}

export interface SettingsSolution {}

export interface SettingsListInstance {
  _version: V1;
  _solution: SettingsSolution;
  _uri: string;

  (): SettingsContext;
  get(): SettingsContext;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export function SettingsListInstance(version: V1): SettingsListInstance {
  const instance = (() => instance.get()) as SettingsListInstance;

  instance.get = function get(): SettingsContext {
    return new SettingsContextImpl(version);
  };

  instance._version = version;
  instance._solution = {};
  instance._uri = ``;

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
