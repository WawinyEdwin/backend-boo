"use strict";

const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const bodyParser = require("body-parser")
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

// set the view engine to ejs
app.set("view engine", "ejs");


// routes
app.use("/", require("./routes/profile")());
app.use("/comments/", require("./routes/comment"))
app.use("/votes/", require("./routes/vote"))
app.use("/accounts/", require("./routes/user"))



// start server
const server = app.listen(port);

console.log("Express started. Listening on %s", port);
