// Function scope
function greeting() {
    let userName = 'Ana'; // Alcance únicamente local
    console.log(userName);

    if(userName === 'Ana') {
        console.log(`Hello ${userName}!`);
    }
}

greeting();
console.log(userName);