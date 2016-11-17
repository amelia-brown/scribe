const express = require('express');
const app = express();
const db = require('./config');
const path = require('path');
const webpack = require('webpack');
const webpackConfig = require('../webpack.config');
const compiler = webpack(webpackConfig);


app.use(express.static(path.join(__dirname, 'src')));

app.set('views', path.resolve(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('*', (req, res) => {
  res.render('index');
});

module.exports = app;
