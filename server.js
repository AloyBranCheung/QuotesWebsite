const express = require("express");
const app = express();
const https = require("https");
const { nextTick } = require("process");

// response Kanye REST API id=""
function getKanye(req, res, next) {
  https.get('https://api.kanye.rest/', (response) => {
    response.on('data', (data) => {
      let kanyeQuote = JSON.parse(data).quote;
      console.log("Quote of the Day: " + kanyeQuote);
      res.locals.savedKanyeQuote = kanyeQuote;
      next();
    });
  }).on('error', (e) => {
    console.error(e);
  });
};

// response AnimeQuotes API id=""
function getAnime(req, res, next) {
  https.get('https://animechan.vercel.app/api/random', (response) => {
    response.on('data', (data) => {
      let animeQuote = JSON.parse(data).quote;
      let fromCharacter = JSON.parse(data).character;
      let fromAnime = JSON.parse(data).anime;

      res.locals.savedAnimeQuote = animeQuote;
      res.locals.savedFromCharacter = fromCharacter;
      res.locals.savedFromAnime = fromAnime;
      next();
    });
  }).on('error', (e) => {
    console.error(e);
  });
};

// response InspirationQuotes API id=""
function getInspire(req, res, next) {
  https.get('https://api.goprogram.ai/inspiration', (response) => {
    response.on('data', (data) => {
      let inspireQuote = JSON.parse(data).quote;
      let inspireAuthor = JSON.parse(data).author;

      res.locals.savedInspireQuote = inspireQuote;
      res.locals.savedInspireAuthor = inspireAuthor;
      next();
    });
  }).on('error', (e) => {
    console.error(e);
  });
}

// renderForm 
function renderForm(rem, res) {
  res.render("index");
};

// set ejs view engine
app.set("view engine", "ejs");

// sends static html/css/js files
app.use(express.static("public"));

// API get
app.get("/", getKanye, getAnime, getInspire, renderForm);


// Heroku Port Configuration
var port = process.env.PORT;

if (port == null || port == "") {
  port = 8000;
}

app.listen(port, function () {
  console.log("Server started on port " + port);
});
