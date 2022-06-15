const express = require('express');
const app = express();

app.get("/", function (req, res) {
    res.sendFile(__dirname + "/index.html");
});

// Heroku Port Configuration
var port = process.env.PORT;

if (port == null || port == "") {
  port = 8000;
};

app.listen(port, function(){
    console.log("Server started on port " + port);
});

