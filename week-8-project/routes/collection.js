const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

mongoose.Promise = require("bluebird");
mongoose.connect("mongodb://localhost/goose");
const bookScheema = new Schema({
  title: {type: String, required: true},
  length: Number,
  isbNumber: {type: Number, unique: true},
  haveRead: required:
});
