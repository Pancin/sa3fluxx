const express = require('express');
const path = require('path');
const logger = require('morgan');
const bodyParser = require('body-parser');
const app = express();

//configure app
app.use(logger('dev'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.text())

//search in public
app.use(express.static(path.join(__dirname, 'public')));

//configure routers
const routers = require('./routes/routers');
console.log(routers)
app.use('/', routers.root);

module.exports = app;