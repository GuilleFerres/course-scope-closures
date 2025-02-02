// Las variables declaradas con var son elevadas, pero su valor no se inicializa hasta que la ejecución alcanza la línea de la asignación.
// console.log(dogName);
// var dogName = 'Elmo';
// console.log(dogName);

// El motor de JavaScript mueve toda la declaración de la función al inicio, permitiendo que sea llamada antes.
nameOfDog();

function nameOfDog() {
    console.log(`El mejor perrito es ${elmo}`);
}

var elmo = 'Elmito';

// En cambio, las funciones en variables (function expressions) NO se elevan de la misma forma:
saludar(); // TypeError: saludar is not a function

var saludar = function () {
  console.log("Hola!");
};
// En este caso, saludar es elevada como undefined, pero la función no está disponible hasta que se ejecuta la asignación.

// Las variables declaradas con let y const también son elevadas, pero no pueden ser usadas antes de su declaración debido a la "Zona Temporal Muerta" (TDZ).
// Diferencia clave: let y const existen en memoria desde el inicio, pero no pueden usarse antes de ser declaradas.
console.log(edad); // ReferenceError: Cannot access 'edad' before initialization
let edad = 25;
console.log(edad);

