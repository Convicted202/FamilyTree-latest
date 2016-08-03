var path = require('path');
var express = require('express');
var webpack = require('webpack');
var open = require('open');
var config = require('./webpack.config.dev');

var app = express();
var compiler = webpack(config);
var port = 9000;

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath,
  contentBase: './src'
}));

app.use(require('webpack-hot-middleware')(compiler));

// app.use('/public', express.static('public'));

app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(port, function(err) {
  if (err) {
    console.log(err);
    return;
  }

  console.log('Listening at http://localhost:' + port);

  open('http://localhost:' + port);
});
