'use strict';

var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var MessagesSchema = new Schema(
{
  title:
  {
    type: String,
    required: 'Kindly enter the message title'
  },
  createdOn:
  {
    type: Date,
    default: Date.now
  },
  contents:
  {
    type: String,
    default: ''
  },
  isPalindrome:
  {
    type: Boolean,
    default: false
  }
});

module.exports = mongoose.model('Messages', MessagesSchema);
