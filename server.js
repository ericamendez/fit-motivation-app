const webpackHotMiddleware = require('webpack-hot-middleware');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackconfig = require('./webpack.config')
const webpack = require('webpack');
const express = require('express');
const app = express();

const port = process.env.PORT || 3300;
console.log("Node Process Object: ", process)
app.use(express.static('dist'));

const webpackCompiler = webpack(webpackconfig);
app.use(webpackDevMiddleware(webpackCompiler, {}));
app.use(webpackHotMiddleware(webpackCompiler));
app.listen(port, () => {
  console.log(`App listening on port: ${port}!`)
});
