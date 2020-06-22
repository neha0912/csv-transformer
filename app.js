const _ = require('lodash');
const express = require('express');
const app = express();
const transform = require('./routes/routes')

app.use('/', transform);
const port = process.env.PORT || 8080;
app.listen(port);

module.exports = app;
