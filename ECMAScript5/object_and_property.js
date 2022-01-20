//Get and Setter
//Note que JavaScript não encapsula e permite acesso direto ao campo
"use strict";


class Pessoa{
    setNome(nome){
        this.nome;
    }

    getNome(){
        if(this.nome == null){
            return "Indigente";
        }

        return "Sr." +  this.nome;
    }
}


var p = new Pessoa();
console.log(p.nome);
console.log(p.getNome());

p.nome = "Wender";
console.log(p.nome);
console.log(p.getNome());

p.setNome("Wender");
p.nome = "Wender";
console.log(p.nome);
console.log(p.getNome());




//FUNCTION.bind()
this.x = 9; //this aqui se refere ao objeto global "window" do navegador
var module = {
  x: 81,
  getX: function() { return this.x; }
};

module.getX(); // 81

var retrieveX = module.getX;
retrieveX();
// retorna 9 - a função foi invocada no escopo global

// Criando uma nova função com 'this' vinculada ao módulo
// Programadores novatos podem confundir a variável x
// global com a propriedade x do módulo
var boundGetX = retrieveX.bind(module);
boundGetX(); // 81



//GERENCIANDO OBJETOS

// Create object with an existing object as prototype
Object.create(parent, donor)

// Adding or changing an object property
Object.defineProperty(object, property, descriptor)

// Adding or changing object properties
Object.defineProperties(object, descriptors)

// Accessing Properties
Object.getOwnPropertyDescriptor(object, property)

// Returns all properties as an array
Object.getOwnPropertyNames(object)

// Accessing the prototype
Object.getPrototypeOf(object)

// Returns enumerable properties as an array
Object.keys(object)


//PROTEGENDO OBJETOS
// Prevents adding properties to an object
Object.preventExtensions(object)

// Returns true if properties can be added to an object
Object.isExtensible(object)

// Prevents changes of object properties (not values)
Object.seal(object)

// Returns true if object is sealed
Object.isSealed(object)

// Prevents any changes to an object
Object.freeze(object)

// Returns true if object is frozen
Object.isFrozen(object)