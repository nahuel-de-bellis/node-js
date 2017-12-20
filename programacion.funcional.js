				//functional programming
//map
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let mapping = arr.map( (val) => val+2 );
console.log(mapping); // [3, 4, 5, 6, 7, 8, 9, 10, 11]
//filter
let filtro = arr.filter( (val) =>  val > 5);[]
console.log(filtro);//[2, 4, 6, 8]
//reducer
let redux = arr.reduce( (acc, val) => acc * val, 0);
console.log(redux);//362.880

//compose
//funcional
let add1 = function(num){ return num + 1}
let doubleit = function(num){ return num * 2}
let compose = function(arr, val){
	return arr.reduce( (acc, value) => value(acc) , val);
}
let resul = arr.map( (val) => compose([add1, doubleit], val));

console.log(resul);

//imperativo
function suma1(num){
	return num+1
}

let doble = function(num){ 
	return num * 2
}

let componer = function(){
	for(let i = 0; i < arr.length;i++){
		arr[i] = doble(suma1(i));
	}
	return arr;
}

console.log(componer());

var fs = require("fs");
var file = fs.readFile("holamundo.txt", (err, data) => {
		console.log(data.toString());
	});
console.log("impresion");