var express = require('express');
var path = require('path');
var logger = require('morgan');

const PORT = 3000;

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

app.listen(PORT, () => {
  console.log("Listening on port " + PORT)
})

module.exports = app;
