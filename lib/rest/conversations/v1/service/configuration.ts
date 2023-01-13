/*
 * This code was generated by
 * ___ _ _ _ _ _    _ ____    ____ ____ _    ____ ____ _  _ ____ ____ ____ ___ __   __
 *  |  | | | | |    | |  | __ |  | |__| | __ | __ |___ |\ | |___ |__/ |__|  | |  | |__/
 *  |  |_|_| | |___ | |__|    |__| |  | |    |__] |___ | \| |___ |  \ |  |  | |__| |  \
 *
 * Twilio - Conversations
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
import { NotificationListInstance } from "./configuration/notification";
import { WebhookListInstance } from "./configuration/webhook";

/**
 * Options to pass to update a ConfigurationInstance
 */
export interface ConfigurationContextUpdateOptions {
  /** The conversation-level role assigned to a conversation creator when they join a new conversation. See the [Conversation Role](https://www.twilio.com/docs/conversations/api/role-resource) for more info about roles. */
  defaultConversationCreatorRoleSid?: string;
  /** The conversation-level role assigned to users when they are added to a conversation. See the [Conversation Role](https://www.twilio.com/docs/conversations/api/role-resource) for more info about roles. */
  defaultConversationRoleSid?: string;
  /** The service-level role assigned to users when they are added to the service. See the [Conversation Role](https://www.twilio.com/docs/conversations/api/role-resource) for more info about roles. */
  defaultChatServiceRoleSid?: string;
  /** Whether the [Reachability Indicator](https://www.twilio.com/docs/chat/reachability-indicator) is enabled for this Conversations Service. The default is `false`. */
  reachabilityEnabled?: boolean;
}

export interface ConfigurationContext {
  /**
   * Fetch a ConfigurationInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed ConfigurationInstance
   */
  fetch(
    callback?: (error: Error | null, item?: ConfigurationInstance) => any
  ): Promise<ConfigurationInstance>;

  /**
   * Update a ConfigurationInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed ConfigurationInstance
   */
  update(
    callback?: (error: Error | null, item?: ConfigurationInstance) => any
  ): Promise<ConfigurationInstance>;
  /**
   * Update a ConfigurationInstance
   *
   * @param params - Parameter for request
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed ConfigurationInstance
   */
  update(
    params: ConfigurationContextUpdateOptions,
    callback?: (error: Error | null, item?: ConfigurationInstance) => any
  ): Promise<ConfigurationInstance>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface ConfigurationContextSolution {
  chatServiceSid: string;
}

export class ConfigurationContextImpl implements ConfigurationContext {
  protected _solution: ConfigurationContextSolution;
  protected _uri: string;

  constructor(protected _version: V1, chatServiceSid: string) {
    if (!isValidPathParam(chatServiceSid)) {
      throw new Error("Parameter 'chatServiceSid' is not valid.");
    }

    this._solution = { chatServiceSid };
    this._uri = `/Services/${chatServiceSid}/Configuration`;
  }

  fetch(
    callback?: (error: Error | null, item?: ConfigurationInstance) => any
  ): Promise<ConfigurationInstance> {
    const instance = this;
    let operationVersion = instance._version,
      operationPromise = operationVersion.fetch({
        uri: instance._uri,
        method: "get",
      });

    operationPromise = operationPromise.then(
      (payload) =>
        new ConfigurationInstance(
          operationVersion,
          payload,
          instance._solution.chatServiceSid
        )
    );

    operationPromise = instance._version.setPromiseCallback(
      operationPromise,
      callback
    );
    return operationPromise;
  }

  update(
    params?:
      | ConfigurationContextUpdateOptions
      | ((error: Error | null, item?: ConfigurationInstance) => any),
    callback?: (error: Error | null, item?: ConfigurationInstance) => any
  ): Promise<ConfigurationInstance> {
    if (params instanceof Function) {
      callback = params;
      params = {};
    } else {
      params = params || {};
    }

    let data: any = {};

    if (params["defaultConversationCreatorRoleSid"] !== undefined)
      data["DefaultConversationCreatorRoleSid"] =
        params["defaultConversationCreatorRoleSid"];
    if (params["defaultConversationRoleSid"] !== undefined)
      data["DefaultConversationRoleSid"] = params["defaultConversationRoleSid"];
    if (params["defaultChatServiceRoleSid"] !== undefined)
      data["DefaultChatServiceRoleSid"] = params["defaultChatServiceRoleSid"];
    if (params["reachabilityEnabled"] !== undefined)
      data["ReachabilityEnabled"] = serialize.bool(
        params["reachabilityEnabled"]
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
      (payload) =>
        new ConfigurationInstance(
          operationVersion,
          payload,
          instance._solution.chatServiceSid
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

interface ConfigurationPayload extends ConfigurationResource {}

interface ConfigurationResource {
  chat_service_sid: string;
  default_conversation_creator_role_sid: string;
  default_conversation_role_sid: string;
  default_chat_service_role_sid: string;
  url: string;
  links: Record<string, string>;
  reachability_enabled: boolean;
}

export class ConfigurationInstance {
  protected _solution: ConfigurationContextSolution;
  protected _context?: ConfigurationContext;

  constructor(
    protected _version: V1,
    payload: ConfigurationResource,
    chatServiceSid: string
  ) {
    this.chatServiceSid = payload.chat_service_sid;
    this.defaultConversationCreatorRoleSid =
      payload.default_conversation_creator_role_sid;
    this.defaultConversationRoleSid = payload.default_conversation_role_sid;
    this.defaultChatServiceRoleSid = payload.default_chat_service_role_sid;
    this.url = payload.url;
    this.links = payload.links;
    this.reachabilityEnabled = payload.reachability_enabled;

    this._solution = { chatServiceSid };
  }

  /**
   * The unique string that identifies the resource
   */
  chatServiceSid: string;
  /**
   * The role assigned to a conversation creator user when they join a new conversation
   */
  defaultConversationCreatorRoleSid: string;
  /**
   * The role assigned to users when they are added to a conversation
   */
  defaultConversationRoleSid: string;
  /**
   * The service role assigned to users when they are added to the service
   */
  defaultChatServiceRoleSid: string;
  /**
   * An absolute URL for this service configuration.
   */
  url: string;
  /**
   * Absolute URL to access the push notifications configuration of this service.
   */
  links: Record<string, string>;
  /**
   * Whether the Reachability Indicator feature is enabled for this Conversations Service
   */
  reachabilityEnabled: boolean;

  private get _proxy(): ConfigurationContext {
    this._context =
      this._context ||
      new ConfigurationContextImpl(
        this._version,
        this._solution.chatServiceSid
      );
    return this._context;
  }

  /**
   * Fetch a ConfigurationInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed ConfigurationInstance
   */
  fetch(
    callback?: (error: Error | null, item?: ConfigurationInstance) => any
  ): Promise<ConfigurationInstance> {
    return this._proxy.fetch(callback);
  }

  /**
   * Update a ConfigurationInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed ConfigurationInstance
   */
  update(
    callback?: (error: Error | null, item?: ConfigurationInstance) => any
  ): Promise<ConfigurationInstance>;
  /**
   * Update a ConfigurationInstance
   *
   * @param params - Parameter for request
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed ConfigurationInstance
   */
  update(
    params: ConfigurationContextUpdateOptions,
    callback?: (error: Error | null, item?: ConfigurationInstance) => any
  ): Promise<ConfigurationInstance>;

  update(
    params?: any,
    callback?: (error: Error | null, item?: ConfigurationInstance) => any
  ): Promise<ConfigurationInstance> {
    return this._proxy.update(params, callback);
  }

  /**
   * Provide a user-friendly representation
   *
   * @returns Object
   */
  toJSON() {
    return {
      chatServiceSid: this.chatServiceSid,
      defaultConversationCreatorRoleSid: this.defaultConversationCreatorRoleSid,
      defaultConversationRoleSid: this.defaultConversationRoleSid,
      defaultChatServiceRoleSid: this.defaultChatServiceRoleSid,
      url: this.url,
      links: this.links,
      reachabilityEnabled: this.reachabilityEnabled,
    };
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}

export interface ConfigurationSolution {
  chatServiceSid: string;
}

export interface ConfigurationListInstance {
  _version: V1;
  _solution: ConfigurationSolution;
  _uri: string;

  (): ConfigurationContext;
  get(): ConfigurationContext;

  _notifications?: NotificationListInstance;
  notifications: NotificationListInstance;
  _webhooks?: WebhookListInstance;
  webhooks: WebhookListInstance;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export function ConfigurationListInstance(
  version: V1,
  chatServiceSid: string
): ConfigurationListInstance {
  if (!isValidPathParam(chatServiceSid)) {
    throw new Error("Parameter 'chatServiceSid' is not valid.");
  }

  const instance = (() => instance.get()) as ConfigurationListInstance;

  instance.get = function get(): ConfigurationContext {
    return new ConfigurationContextImpl(version, chatServiceSid);
  };

  instance._version = version;
  instance._solution = { chatServiceSid };
  instance._uri = ``;

  Object.defineProperty(instance, "notifications", {
    get: function notifications() {
      if (!instance._notifications) {
        instance._notifications = NotificationListInstance(
          instance._version,
          instance._solution.chatServiceSid
        );
      }
      return instance._notifications;
    },
  });

  Object.defineProperty(instance, "webhooks", {
    get: function webhooks() {
      if (!instance._webhooks) {
        instance._webhooks = WebhookListInstance(
          instance._version,
          instance._solution.chatServiceSid
        );
      }
      return instance._webhooks;
    },
  });

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
