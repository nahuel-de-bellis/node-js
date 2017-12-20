function parse(req){
	var parametross = {};
	if(req.url.indexOf("?") > 0){
		var urlData = req.url.split("?");
		var parametros = urlData[1].split("&");
		let mapping = parametros.map(function(val){
			let datos = val.split("=");
			parametross[datos[0]] = datos[1];
		});
	}
	return parametross;
}

module.exports.parse = parse;