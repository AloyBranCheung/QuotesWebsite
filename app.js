const express = require('express');
const app = express();
const https = require('https');

// request Kanye REST API id="kanyeApiText"
https.get('https://api.kanye.rest/', (res) => {
  res.on('data', (d) => {
    console.log(JSON.parse(d).quote);
    var quote = JSON.parse(d).quote;
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

