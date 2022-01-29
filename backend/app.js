const express = require("express");

const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
//app.use(express.json());
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
//Route imports
const student = require("./routes/studentRoute");

app.use("", student);
module.exports = app;
