function greeting() {
    let userName = 'Guille';

    function displayUserName() {
        return `Hello ${userName}!`;
    }
    return displayUserName;
}

const g = greeting();
console.log(g);
console.log(g());