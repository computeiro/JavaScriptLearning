var  armas = ["carabina", "escopeta", "fuzil", "pistola", "revólver"];

//Array.isArray()
console.log(Array.isArray(armas));


//forEach()
armas.forEach(listArray);

function listArray(value){
    console.log("# " + value);
}

//arr.map(callBack) - Função de iteração sobre um array
//callBack(valorAtual[, indice, arrayDeOrigem])
function createNumericItem(value, indice){
    return indice + " - " + value;
}

function toUp(value){
   return value.toUpperCase();
}
var armasToUpper = armas.map(toUp);
var armasComNumeros = armas.map(createNumericItem);

console.log(armas);
console.log(armasToUpper);
console.log(armasComNumeros);


//Filter
//Itera no Array e dado um booleano define se o item passa ou não.

var nros = [0, 1, 2, 3, 4, 5, 6, 7, 9];

nrosPares = nros.filter(function(nro){
    return nro % 2 == 0;
});

console.log("Nros Pares: " + nrosPares);

//Reduce
//array.reduce(callback( acumulador, valorAtual[, index[, array]] )[, valorInicial]))
//Se não for passado 'valorInicial' é assumido como sendo o primeiro elemento do array

nrosAte5 = [1, 2, 3 ,4, 5];

reduceResult = nrosAte5.reduce(function(ac, value){
    return ac * value;
});

console.log("Soma feito com o reduce: " + reduceResult);

//ReduceRight faz o mesmo que o anterior mas a iteração começa da direita


//função callBack do 'every' e 'some' (currentValue [, index, array])

function maiorQue3(value){
    return value > 3;
}

var every3 = nrosAte5.every(maiorQue3);
var some3 = nrosAte5.some(maiorQue3);

console.log("Every > 3: " + every3);
console.log("Some > 3: " + some3);


