"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Product = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Schema = _mongoose["default"].Schema;
var productSchema = new Schema({
  title: String,
  price: Number,
  rating: Number,
  category: String,
  brand: String,
  color: [String],
  guarantee: {
    standard: String,
    extended: String
  }
});

var Product = _mongoose["default"].model('product', productSchema);

exports.Product = Product;