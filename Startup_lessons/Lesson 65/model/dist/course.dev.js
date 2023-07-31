"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Course = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Schema = _mongoose["default"].Schema;
var courseSchema = new Schema({
  title: String,
  description: String,
  price: Number,
  link: String
});

var Course = _mongoose["default"].model('course', courseSchema);

exports.Course = Course;