var firstName; // declaramos. Valor undefined.
firstName = 'Guille';
console.log(firstName);

var lastName = 'David'; // declarar / asignar
lastName = 'Pepe'; // reasignar
console.log(lastName);

var secondName = 'David'; // declarando / asignando
var secondName = 'Ana'; // redeclarar y reasignar
console.log(secondName);

// Let

let fruit = 'Apple'; // declarar y asignar
fruit = 'Kiwi'; // Reasignar

let fruit = 'Banana';

// Const
const animal = 'dog';
animal = 'cat'; // No se puede reasignar
const animal = 'Snake' // No se puede declarar y asignar
console.log(animal);

const vehicles = []; // Sobre el arreglo si se le pueden añadir elementos o quitarlos.
vehicles.push("car");
console.log(vehicles);

vehicles.pop();
console.log(vehicles);