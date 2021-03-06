const express = require('express');
const path = require('path');
const logger = require('morgan');
const bodyParser = require('body-parser');
var cors = require('cors')
const app = express();

//configure app
app.use(logger('dev'));
app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.text())

//search in public
app.use(express.static(path.join(__dirname, 'public')));

//configure routers
const routers = require('./routes/routers');
app.use('/', routers.root);
app.use('/model', routers.model);

module.exports = app;