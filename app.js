var express = require("express");
var bodyParser = require("body-parser");
var app = express();
 
app.use(bodyParser.json());
 
var routes = require("./routes/routes.js")(app);
 
var server = app.listen(3000, function () {
    console.log("Escutando na porta %s...", server.address().port);
});