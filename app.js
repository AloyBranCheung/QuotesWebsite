const express = require('express');
const app = express();
const https = require('https');

// Send static website files
app.use("/static", express.static("public"))
app.get("/static", function (req, res) {
    res.sendFile(__dirname + "/index.html");
});

// request Kanye REST API
https.get('https://api.kanye.rest/', (res) => {
  res.on('data', (d) => {
    console.log(JSON.parse(d).quote);
  });
}).on('error', (e) => {
  console.error(e);
});

// Heroku Port Configuration
var port = process.env.PORT;

if (port == null || port == "") {
  port = 8000;
};

app.listen(port, function(){
    console.log("Server started on port " + port);
});

