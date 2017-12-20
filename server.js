var http = require("http"),
	  fs = require("fs"),
	  parse = require("./params.js");

var p = parse.parse;
http.createServer(function(req, res){
	if(req.url.indexOf(" ") > 0){
		return;
	}

	fs.readFile("./index.html", function(err, html){
		var html_string = html.toString();
		var variables = html_string.match(/[^\{\}]+(?=\})/g);
		var parametross = p(req);
		let mapping = variables.map(function(val, index){
			var value = parametross[val];	
			var output = html_string.replace("{"+val+"}", value);
			return output;
		});
		res.write(mapping.toString());
		res.end();
	});
}).listen(5000);