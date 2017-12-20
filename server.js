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

		/*if(req.url.indexOf("?") > 0){
			var urlData = req.url.split("?");
			var parametros = urlData[1].split("&");
			let mapping = parametros.map(function(val){
				let datos = val.split("=");
				parametross[datos[0]] = datos[1];
				console.log(datos[1]);
			});
		}*/


		let mapping = variables.map(function(val, index){
			var value = parametross[val];	
			var output = html_string.replace("{"+val+"}", value);
			return output;
		});
		res.write(mapping.toString());
		res.end();
	});
}).listen(5000);