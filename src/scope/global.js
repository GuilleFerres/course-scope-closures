var a; // declarando
var b = 'b'; // declaramos y asignamos
b = 'bb'; // reasignación
var a = 'aa'; //redeclarativa

// Global Scope
var fruit = 'Apple'; // global

function bestFruit() {
    console.log(fruit);
}

bestFruit();

function countries() {
    country = 'España'; // al asignarlo sin declararlo se convierte en una variable global
    console.log(country);
}

countries();
console.log(country);


