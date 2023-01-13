/*
 * This code was generated by
 * ___ _ _ _ _ _    _ ____    ____ ____ _    ____ ____ _  _ ____ ____ ____ ___ __   __
 *  |  | | | | |    | |  | __ |  | |__| | __ | __ |___ |\ | |___ |__/ |__|  | |  | |__/
 *  |  |_|_| | |___ | |__|    |__| |  | |    |__] |___ | \| |___ |  \ |  |  | |__| |  \
 *
 * Twilio - Studio
 * This is the public Twilio REST API.
 *
 * NOTE: This class is auto generated by OpenAPI Generator.
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { inspect, InspectOptions } from "util";
import V1 from "../../../V1";
const deserialize = require("../../../../../base/deserialize");
const serialize = require("../../../../../base/serialize");
import { isValidPathParam } from "../../../../../base/utility";

export interface ExecutionContextContext {
  /**
   * Fetch a ExecutionContextInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed ExecutionContextInstance
   */
  fetch(
    callback?: (error: Error | null, item?: ExecutionContextInstance) => any
  ): Promise<ExecutionContextInstance>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface ExecutionContextContextSolution {
  flowSid: string;
  executionSid: string;
}

export class ExecutionContextContextImpl implements ExecutionContextContext {
  protected _solution: ExecutionContextContextSolution;
  protected _uri: string;

  constructor(protected _version: V1, flowSid: string, executionSid: string) {
    if (!isValidPathParam(flowSid)) {
      throw new Error("Parameter 'flowSid' is not valid.");
    }

    if (!isValidPathParam(executionSid)) {
      throw new Error("Parameter 'executionSid' is not valid.");
    }

    this._solution = { flowSid, executionSid };
    this._uri = `/Flows/${flowSid}/Executions/${executionSid}/Context`;
  }

  fetch(
    callback?: (error: Error | null, item?: ExecutionContextInstance) => any
  ): Promise<ExecutionContextInstance> {
    const instance = this;
    let operationVersion = instance._version,
      operationPromise = operationVersion.fetch({
        uri: instance._uri,
        method: "get",
      });

    operationPromise = operationPromise.then(
      (payload) =>
        new ExecutionContextInstance(
          operationVersion,
          payload,
          instance._solution.flowSid,
          instance._solution.executionSid
        )
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

interface ExecutionContextPayload extends ExecutionContextResource {}

interface ExecutionContextResource {
  account_sid: string;
  context: any;
  flow_sid: string;
  execution_sid: string;
  url: string;
}

export class ExecutionContextInstance {
  protected _solution: ExecutionContextContextSolution;
  protected _context?: ExecutionContextContext;

  constructor(
    protected _version: V1,
    payload: ExecutionContextResource,
    flowSid: string,
    executionSid: string
  ) {
    this.accountSid = payload.account_sid;
    this.context = payload.context;
    this.flowSid = payload.flow_sid;
    this.executionSid = payload.execution_sid;
    this.url = payload.url;

    this._solution = { flowSid, executionSid };
  }

  /**
   * The SID of the Account that created the resource
   */
  accountSid: string;
  /**
   * The current state of the flow
   */
  context: any;
  /**
   * The SID of the Flow
   */
  flowSid: string;
  /**
   * The SID of the Execution
   */
  executionSid: string;
  /**
   * The absolute URL of the resource
   */
  url: string;

  private get _proxy(): ExecutionContextContext {
    this._context =
      this._context ||
      new ExecutionContextContextImpl(
        this._version,
        this._solution.flowSid,
        this._solution.executionSid
      );
    return this._context;
  }

  /**
   * Fetch a ExecutionContextInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed ExecutionContextInstance
   */
  fetch(
    callback?: (error: Error | null, item?: ExecutionContextInstance) => any
  ): Promise<ExecutionContextInstance> {
    return this._proxy.fetch(callback);
  }

  /**
   * Provide a user-friendly representation
   *
   * @returns Object
   */
  toJSON() {
    return {
      accountSid: this.accountSid,
      context: this.context,
      flowSid: this.flowSid,
      executionSid: this.executionSid,
      url: this.url,
    };
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}

export interface ExecutionContextSolution {
  flowSid: string;
  executionSid: string;
}

export interface ExecutionContextListInstance {
  _version: V1;
  _solution: ExecutionContextSolution;
  _uri: string;

  (): ExecutionContextContext;
  get(): ExecutionContextContext;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export function ExecutionContextListInstance(
  version: V1,
  flowSid: string,
  executionSid: string
): ExecutionContextListInstance {
  if (!isValidPathParam(flowSid)) {
    throw new Error("Parameter 'flowSid' is not valid.");
  }

  if (!isValidPathParam(executionSid)) {
    throw new Error("Parameter 'executionSid' is not valid.");
  }

  const instance = (() => instance.get()) as ExecutionContextListInstance;

  instance.get = function get(): ExecutionContextContext {
    return new ExecutionContextContextImpl(version, flowSid, executionSid);
  };

  instance._version = version;
  instance._solution = { flowSid, executionSid };
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
