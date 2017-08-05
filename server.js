const express = require('express'),
    app = express(),
    port = process.env.PORT || 3001,
    mongoose = require('mongoose'),
    Task = require('./api/models/conspiracyListModel'),
    bodyParser = require('body-parser');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/tododb');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(function (err, req, res, next) {
  console.error(err.stack)
  res.status(404).send({url: `${req.originalUrl} not found...`})
})

var routes = require('./api/routes/conspiracyListRoutes');
routes(app);

app.listen(port);

console.log('conspiracies list serving on: ' + port);