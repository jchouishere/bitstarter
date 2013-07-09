var fs = require('fs');

var data_from_index_html = '';

var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {

    fs.readFile('index.html', 'utf8', function (err,data) {
	if (err) {
	    return console.log(err);
	}
	data_from_index_html = data;
    });
    response.send(data_from_index_html);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
