const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const app = express();
const twilio = require("twilio");
const accountSid = "Acede4daa576d1fca4b99765a6c818e4da";
const accountAuthToken = "7e44f1ce3b5cb802e4f6f96835a72968";
const client = new twilio(accountSid, authToken);

app.use(bodyParser.urlencoded({ extended: false }));
