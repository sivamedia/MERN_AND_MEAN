const dbConfig = require("../config/dbconfig.js");

const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.url = dbConfig.url;
db.tutorials = require("./tutorial.model.js")(mongoose);

module.exports = db;