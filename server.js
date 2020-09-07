const webpackHotMiddleware = require('webpack-hot-middleware');
const webpackMiddleware = require('webpack-dev-middleware');
const webpackconfig = require('./webpack.config')
const webpack = require('webpack');
const express = require('express');
const app = express();

const port = process.env || 3300;
app.use(express.static('dist'));

const webpackCompiler = webpack(webpackconfig);
app.use(webpackMiddleware(webpackCompiler, {}));
app.use(webpackHotMiddleware(webpackCompiler));
app.listen(port, () => {
  console.log(`App listening on port: ${port}!`)
});
