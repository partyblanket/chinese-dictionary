const express = require('express');
const compression = require('compression');
const bodyParser = require('body-parser');

const app = express();

app.use(require('cors')());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(compression());

app.use((req, res, next) => {
    //instruct web browsers to block attempts to load the site in a frame.
    res.setHeader('x-frame-options', 'DENY');
    next();
});


module.exports = app;