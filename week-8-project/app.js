const express = require('express');
const app = express();
const mustacheExpress = require('mustache-express');
const session = require('express-session');
const bodyParser = require('body-parser');
const expressValidator = require('express-validator');
const fs = require('fs');
const words = fs.readFileSync("/usr/share/dict/words", "utf-8").toLowerCase().split("\n");
const dbUrl = "mongodb://localhost:27017/snippets";
const mongoose = require('mongoose');

mongoose.Promise = require('bluebird');
mongoose.connect(dbUrl);

const snippetSchema = new mongoose.Schema({
    title: { type: String, required: true},
    body: { type: String, required: true},
    notes: { type: String, required: true},
    language: { type: String, required: true},
    tags: { type: Array}
});

const Snippet = mongoose.model('Snippet', snippetSchema);

module.exports = Snippet;

app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());
// app.use(expressValidator());
app.use(express.static('public'));

app.use(session({
  secret: 'true',
  resave: false,
  saveUninitialized: true
}));


//create a new user
app.post('/api/createSnippet', function(req, res) {
  var title = req.body.title;
  var body = req.body.body;
  var notes = req.body.notes;
  var language = req.body.language;
  var tags = req.body.tags;
  var newSnippet = new Snippet({title: title,
                             body: body,
                             notes: notes,
                             language: language,
                             tags: tags});

  newSnippet.save();
  res.send("New snippet created.");

});

// //get all users
app.get('/api/allSnippets', function(req, res) {
  var snippets = Snippet.find({}, function(err, snippets) {
    res.send(snippets);
  });
});

//get all snippets by language
app.get('/api/snippetByLanguage/:language', function(req, res) {

  var snippet = Snippet.findOne({language: req.params.language}, function(err, snippet) {
    res.send(snippet)
  });

});

//create a new activity by name
app.get('/api/snippetByTag/:tag', function(req, res){

  // var snippet = Snippet.findOne(req.body.tag, function(err, tags) {

    // tags.forEach(function(tag) {
    //
    // });

    // res.send(snippet);

  // });
});

//get activity details by id
app.get('/api/viewSnippet/:id', function (req, res){

  var snippet = Snippet.findOne({ _id: req.params.id}, function(err, snippet) {

    res.send(snippet);

  });

});

app.listen(3000, function() {
  console.log("Tracker API... Listening on 3000");
});
