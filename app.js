var http = require('http');
var fs = require('fs');
var express = require('express');
const app = express();
var request = require('request');

http.createServer(function(req, res) {


    fs.readFile('index.html', function(err, data) {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(data);
        res.send('Hello world');
        return res.end();
    });

}).listen(8087);