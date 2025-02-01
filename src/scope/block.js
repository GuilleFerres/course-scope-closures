function fruits() {
    if(true) {
        var fruit1 = 'Apple'; // function scope. Se puede acceder fuera del bloque
        let fruit2 = 'Kiwi'; // block scope. No se accde fuera del bloque
        const fruit3 = 'Banana'; // block scope
        console.log(fruit2);
        console.log(fruit3);
    }
    console.log(fruit1);
}

fruits();