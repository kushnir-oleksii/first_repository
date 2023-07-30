"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Customer = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// customer.js
var Schema = _mongoose["default"].Schema;
var customerSchema = new Schema({
  name: String,
  product_id: {
    type: Schema.Types.ObjectId,
    ref: 'product'
  } // Corrected reference field name

});

var Customer = _mongoose["default"].model('customer', customerSchema);

exports.Customer = Customer;