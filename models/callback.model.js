'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

/**
 * Callback Schema
 */

var callerSchema = new Schema({
// Callers have phone number and callback date
  phoneNumber: String,
  callbackDate: Date,
  created_at: Date,
  updated_at: Date
});

mongoose.model('Callback', callerSchema);