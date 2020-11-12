// Auto-generated. Do not edit!

// (in-package custom_messages.msg)


"use strict";

const _serializer = _ros_msg_utils.Serialize;
const _arraySerializer = _serializer.Array;
const _deserializer = _ros_msg_utils.Deserialize;
const _arrayDeserializer = _deserializer.Array;
const _finder = _ros_msg_utils.Find;
const _getByteLength = _ros_msg_utils.getByteLength;

//-----------------------------------------------------------

class Play {
  constructor(initObj={}) {
    if (initObj === null) {
      // initObj === null is a special case for deserialization where we don't initialize fields
      this.play_pose_x = null;
      this.play_pose_y = null;
    }
    else {
      if (initObj.hasOwnProperty('play_pose_x')) {
        this.play_pose_x = initObj.play_pose_x
      }
      else {
        this.play_pose_x = 0.0;
      }
      if (initObj.hasOwnProperty('play_pose_y')) {
        this.play_pose_y = initObj.play_pose_y
      }
      else {
        this.play_pose_y = 0.0;
      }
    }
  }

  static serialize(obj, buffer, bufferOffset) {
    // Serializes a message object of type Play
    // Serialize message field [play_pose_x]
    bufferOffset = _serializer.float32(obj.play_pose_x, buffer, bufferOffset);
    // Serialize message field [play_pose_y]
    bufferOffset = _serializer.float32(obj.play_pose_y, buffer, bufferOffset);
    return bufferOffset;
  }

  static deserialize(buffer, bufferOffset=[0]) {
    //deserializes a message object of type Play
    let len;
    let data = new Play(null);
    // Deserialize message field [play_pose_x]
    data.play_pose_x = _deserializer.float32(buffer, bufferOffset);
    // Deserialize message field [play_pose_y]
    data.play_pose_y = _deserializer.float32(buffer, bufferOffset);
    return data;
  }

  static getMessageSize(object) {
    return 8;
  }

  static datatype() {
    // Returns string type for a message object
    return 'custom_messages/Play';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return '4c60304461db9a9373cfa924ea61bbd9';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    float32 play_pose_x
    float32 play_pose_y
    
    `;
  }

  static Resolve(msg) {
    // deep-construct a valid message object instance of whatever was passed in
    if (typeof msg !== 'object' || msg === null) {
      msg = {};
    }
    const resolved = new Play(null);
    if (msg.play_pose_x !== undefined) {
      resolved.play_pose_x = msg.play_pose_x;
    }
    else {
      resolved.play_pose_x = 0.0
    }

    if (msg.play_pose_y !== undefined) {
      resolved.play_pose_y = msg.play_pose_y;
    }
    else {
      resolved.play_pose_y = 0.0
    }

    return resolved;
    }
};

module.exports = Play;
