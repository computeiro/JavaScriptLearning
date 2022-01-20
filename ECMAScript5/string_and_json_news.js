"use strict";

//String.charAt(x) e acessado como array

var str = "HELLO WORLD!";

console.log(str.charAt(6));
console.log(str[1]);

//String com múltiplas linhas, como no Bash

var text = "Sabão cracra, \
não deixa os cabelos do saco enrolar. " +
"Sabão crecre, \
não deixa os cabelos de pé" 

console.log(text);

//trim()

var hello = "       Hello World!        ";
console.log("###" + hello + "####");
console.log("###" + hello.trim() + "####");

var game  = JSON.parse('{"titulo": "Donkey Kong Country", "nota": 10, "console": "SNES"}');
console.log("Json Parse, titulo = " + game.titulo);

var cartucho = new Object();
cartucho.titulo = "Super Metroid";
cartucho.anoLancamento = "1994";
cartucho.nota = 10;
cartucho.console = "Super Nintendo";

console.log(JSON.stringify(cartucho))
