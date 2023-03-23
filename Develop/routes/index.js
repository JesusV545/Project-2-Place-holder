const express = require('express');

const CHANGEME = require('./CHANGE');
const CHANGEMETOO = require('./METOO');

const app = express();

app.use('/CHANGE', CHANGEME);
app.use('/METOO', CHANGEMETOO);

module.exports = app;
