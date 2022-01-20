
//Arrow Function é um definição simplificada de função
// Use (x, y) => {//x, y são dois params e isso aqui é um bloco}
var nros = [0, 1, 2, 3, 4, 5, 6, 7];

var nrosPares = nros.filter(x => x  % 2 == 0);

console.log(nrosPares);

//Map
// Array possui o método map() para criar um array a partir de outro
var map = new Map();

map.set("Titan", "125");
map.set("Strada", "200");
map.set("YBR", "127");

map.forEach((key, value) => {
    console.log("Moto: " + key + ", CC: " + value);
});

console.log("Imprimindo map")
console.log(map);

console.log("Imprimindo map com Array.from")
console.log(Array.from(map));

console.log("Imprimindo map com [... map]")
console.log([...map]);


//SET
//Idêntico a outras linguagens
// Tem um forçação pra map: método values() e Keys(), que retornam a mesma coisa

var motoSet = new Set();
motoSet.add("Titan");
motoSet.add("Strada");
motoSet.add("Strada");
motoSet.add("YBR");

console.log([... motoSet]);
console.log("Tem Titan: " + motoSet.has("Titan"));

console.log("For each");
motoSet.forEach(moto => console.log("# " + moto));

//Array find
console.log("Find em Arrays:");
var nroPar = nros.find((value, index, arr) => value > 5 && value %2 == 0);
console.log(nroPar);

var iNroPar = nros.findIndex((value, index, arr) => value > 5 && value %2 == 0);
console.log(iNroPar);