const express = require("express");
const cors = require("cors");
const db = require("./app/models");

const app = express();

/*
app.use(
  cors({
    //credentials: true,
    //origin: ["http://localhost:8081"], // ng serve --port 8081 ----- angular client servise with port 8081
    origin: ["http://192.168.1.7:3000"], // ng serve --port 8081 ----- angular client servise with port 8081
  })
);*/

// CORS Support
app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

/*
var corsOptions = {
 // origin: "http://localhost:8081"
 origin: "http://192.168.1.7:3000"
};

app.use(cors(corsOptions));
*/
// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to bezkoder application." });
});

// set port, listen for requests
const PORT = process.env.PORT || 8081;
require("./app/routes/tutorial.routes")(app);
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});


db.mongoose
  .connect(db.url, {
   // useNewUrlParser: true,
   // useUnifiedTopology: true
  })
  .then(() => {
    console.log("Connected to the database!");
  })
  .catch(err => {
    console.log("Cannot connect to the database!", err);
    process.exit();
  });