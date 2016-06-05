/**
 * seminar-web-shooting
 * https://github.com/odentools/seminar-web-shooting
 * (C) 2016 - OdenTools; Released under MIT License.
 */

'use strict';

var express = require('express');
var app = express();

// ディレクトリの公開
app.use(express.static('node_modules/jquery/dist/')); // jquery.js
app.use(express.static('public/'));

// ルート
//app.use('/api/articles', require(__dirname + '/routes/api/articles'));

// Webサーバを開始
var server = app.listen(3000, function () {
	var host = server.address().address;
	var port = server.address().port;
	console.log('The app listening on port %s:%s', host, port);
});
