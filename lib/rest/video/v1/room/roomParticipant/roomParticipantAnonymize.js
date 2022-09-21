'use strict';

/* jshint ignore:start */
/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */
/* jshint ignore:end */

var Q = require('q');  /* jshint ignore:line */
var _ = require('lodash');  /* jshint ignore:line */
var util = require('util');  /* jshint ignore:line */
var Page = require('../../../../../base/Page');  /* jshint ignore:line */
var deserialize = require(
    '../../../../../base/deserialize');  /* jshint ignore:line */
var values = require('../../../../../base/values');  /* jshint ignore:line */

var AnonymizeList;
var AnonymizePage;
var AnonymizeInstance;
var AnonymizeContext;

/* jshint ignore:start */
/**
 * Initialize the AnonymizeList
 *
 * @constructor Twilio.Video.V1.RoomContext.ParticipantContext.AnonymizeList
 *
 * @param {Twilio.Video.V1} version - Version of the resource
 * @param {string} roomSid - The SID of the participant's room
 * @param {string} sid - The unique string that identifies the resource
 */
/* jshint ignore:end */
AnonymizeList = function AnonymizeList(version, roomSid, sid) {
  /* jshint ignore:start */
  /**
   * @function anonymize
   * @memberof Twilio.Video.V1.RoomContext.ParticipantContext#
   *
   * @param {string} sid - sid of instance
   *
   * @returns {Twilio.Video.V1.RoomContext.ParticipantContext.AnonymizeContext}
   */
  /* jshint ignore:end */
  function AnonymizeListInstance(sid) {
    return AnonymizeListInstance.get(sid);
  }

  AnonymizeListInstance._version = version;
  // Path Solution
  AnonymizeListInstance._solution = {roomSid: roomSid, sid: sid};
  /* jshint ignore:start */
  /**
   * Constructs a anonymize
   *
   * @function get
   * @memberof Twilio.Video.V1.RoomContext.ParticipantContext.AnonymizeList#
   *
   * @returns {Twilio.Video.V1.RoomContext.ParticipantContext.AnonymizeContext}
   */
  /* jshint ignore:end */
  AnonymizeListInstance.get = function get() {
    return new AnonymizeContext(this._version, this._solution.roomSid, this._solution.sid);
  };

  /* jshint ignore:start */
  /**
   * Provide a user-friendly representation
   *
   * @function toJSON
   * @memberof Twilio.Video.V1.RoomContext.ParticipantContext.AnonymizeList#
   *
   * @returns Object
   */
  /* jshint ignore:end */
  AnonymizeListInstance.toJSON = function toJSON() {
    return this._solution;
  };

  AnonymizeListInstance[util.inspect.custom] = function inspect(depth, options) {
    return util.inspect(this.toJSON(), options);
  };

  return AnonymizeListInstance;
};


/* jshint ignore:start */
/**
 * Initialize the AnonymizePage
 *
 * @constructor Twilio.Video.V1.RoomContext.ParticipantContext.AnonymizePage
 *
 * @param {V1} version - Version of the resource
 * @param {Response<string>} response - Response from the API
 * @param {AnonymizeSolution} solution - Path solution
 *
 * @returns AnonymizePage
 */
/* jshint ignore:end */
AnonymizePage = function AnonymizePage(version, response, solution) {
  // Path Solution
  this._solution = solution;

  Page.prototype.constructor.call(this, version, response, this._solution);
};

_.extend(AnonymizePage.prototype, Page.prototype);
AnonymizePage.prototype.constructor = AnonymizePage;

/* jshint ignore:start */
/**
 * Build an instance of AnonymizeInstance
 *
 * @function getInstance
 * @memberof Twilio.Video.V1.RoomContext.ParticipantContext.AnonymizePage#
 *
 * @param {AnonymizePayload} payload - Payload response from the API
 *
 * @returns AnonymizeInstance
 */
/* jshint ignore:end */
AnonymizePage.prototype.getInstance = function getInstance(payload) {
  return new AnonymizeInstance(this._version, payload, this._solution.roomSid, this._solution.sid);
};

/* jshint ignore:start */
/**
 * Provide a user-friendly representation
 *
 * @function toJSON
 * @memberof Twilio.Video.V1.RoomContext.ParticipantContext.AnonymizePage#
 *
 * @returns Object
 */
/* jshint ignore:end */
AnonymizePage.prototype.toJSON = function toJSON() {
  let clone = {};
  _.forOwn(this, function(value, key) {
    if (!_.startsWith(key, '_') && ! _.isFunction(value)) {
      clone[key] = value;
    }
  });
  return clone;
};

AnonymizePage.prototype[util.inspect.custom] = function inspect(depth, options)
    {
  return util.inspect(this.toJSON(), options);
};


/* jshint ignore:start */
/**
 * Initialize the AnonymizeContext
 *
 * @constructor Twilio.Video.V1.RoomContext.ParticipantContext.AnonymizeInstance
 *
 * @property {string} sid - The unique string that identifies the resource
 * @property {string} roomSid - The SID of the participant's room
 * @property {string} accountSid - The SID of the Account that created the resource
 * @property {anonymize.status} status - The status of the Participant
 * @property {string} identity - The SID of the participant
 * @property {Date} dateCreated -
 *          The ISO 8601 date and time in GMT when the resource was created
 * @property {Date} dateUpdated -
 *          The ISO 8601 date and time in GMT when the resource was last updated
 * @property {Date} startTime -
 *          The time of participant connected to the room in ISO 8601 format
 * @property {Date} endTime -
 *          The time when the participant disconnected from the room in ISO 8601 format
 * @property {number} duration -
 *          Duration of time in seconds the participant was connected
 * @property {string} url - The absolute URL of the resource
 *
 * @param {V1} version - Version of the resource
 * @param {AnonymizePayload} payload - The instance payload
 * @param {sid} roomSid - The SID of the participant's room
 * @param {sid} sid - The unique string that identifies the resource
 */
/* jshint ignore:end */
AnonymizeInstance = function AnonymizeInstance(version, payload, roomSid, sid) {
  this._version = version;

  // Marshaled Properties
  this.sid = payload.sid; // jshint ignore:line
  this.roomSid = payload.room_sid; // jshint ignore:line
  this.accountSid = payload.account_sid; // jshint ignore:line
  this.status = payload.status; // jshint ignore:line
  this.identity = payload.identity; // jshint ignore:line
  this.dateCreated = deserialize.iso8601DateTime(payload.date_created); // jshint ignore:line
  this.dateUpdated = deserialize.iso8601DateTime(payload.date_updated); // jshint ignore:line
  this.startTime = deserialize.iso8601DateTime(payload.start_time); // jshint ignore:line
  this.endTime = deserialize.iso8601DateTime(payload.end_time); // jshint ignore:line
  this.duration = deserialize.integer(payload.duration); // jshint ignore:line
  this.url = payload.url; // jshint ignore:line

  // Context
  this._context = undefined;
  this._solution = {roomSid: roomSid, sid: sid, };
};

Object.defineProperty(AnonymizeInstance.prototype,
  '_proxy', {
    get: function() {
      if (!this._context) {
        this._context = new AnonymizeContext(this._version, this._solution.roomSid, this._solution.sid);
      }

      return this._context;
    }
});

/* jshint ignore:start */
/**
 * update a AnonymizeInstance
 *
 * @function update
 * @memberof Twilio.Video.V1.RoomContext.ParticipantContext.AnonymizeInstance#
 *
 * @param {function} [callback] - Callback to handle processed record
 *
 * @returns {Promise} Resolves to processed AnonymizeInstance
 */
/* jshint ignore:end */
AnonymizeInstance.prototype.update = function update(callback) {
  return this._proxy.update(callback);
};

/* jshint ignore:start */
/**
 * Provide a user-friendly representation
 *
 * @function toJSON
 * @memberof Twilio.Video.V1.RoomContext.ParticipantContext.AnonymizeInstance#
 *
 * @returns Object
 */
/* jshint ignore:end */
AnonymizeInstance.prototype.toJSON = function toJSON() {
  let clone = {};
  _.forOwn(this, function(value, key) {
    if (!_.startsWith(key, '_') && ! _.isFunction(value)) {
      clone[key] = value;
    }
  });
  return clone;
};

AnonymizeInstance.prototype[util.inspect.custom] = function inspect(depth,
    options) {
  return util.inspect(this.toJSON(), options);
};


/* jshint ignore:start */
/**
 * Initialize the AnonymizeContext
 *
 * @constructor Twilio.Video.V1.RoomContext.ParticipantContext.AnonymizeContext
 *
 * @param {V1} version - Version of the resource
 * @param {sid_like} roomSid - The SID of the room with the participant to update
 * @param {sid_like} sid - The SID that identifies the resource to update
 */
/* jshint ignore:end */
AnonymizeContext = function AnonymizeContext(version, roomSid, sid) {
  this._version = version;

  // Path Solution
  this._solution = {roomSid: roomSid, sid: sid, };
  this._uri = `/Rooms/${roomSid}/Participants/${sid}/Anonymize`;
};

/* jshint ignore:start */
/**
 * update a AnonymizeInstance
 *
 * @function update
 * @memberof Twilio.Video.V1.RoomContext.ParticipantContext.AnonymizeContext#
 *
 * @param {function} [callback] - Callback to handle processed record
 *
 * @returns {Promise} Resolves to processed AnonymizeInstance
 */
/* jshint ignore:end */
AnonymizeContext.prototype.update = function update(callback) {
  var deferred = Q.defer();
  var promise = this._version.update({uri: this._uri, method: 'POST'});

  promise = promise.then(function(payload) {
    deferred.resolve(new AnonymizeInstance(
      this._version,
      payload,
      this._solution.roomSid,
      this._solution.sid
    ));
  }.bind(this));

  promise.catch(function(error) {
    deferred.reject(error);
  });

  if (_.isFunction(callback)) {
    deferred.promise.nodeify(callback);
  }

  return deferred.promise;
};

/* jshint ignore:start */
/**
 * Provide a user-friendly representation
 *
 * @function toJSON
 * @memberof Twilio.Video.V1.RoomContext.ParticipantContext.AnonymizeContext#
 *
 * @returns Object
 */
/* jshint ignore:end */
AnonymizeContext.prototype.toJSON = function toJSON() {
  return this._solution;
};

AnonymizeContext.prototype[util.inspect.custom] = function inspect(depth,
    options) {
  return util.inspect(this.toJSON(), options);
};

module.exports = {
  AnonymizeList: AnonymizeList,
  AnonymizePage: AnonymizePage,
  AnonymizeInstance: AnonymizeInstance,
  AnonymizeContext: AnonymizeContext
};