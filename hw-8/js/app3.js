const number = parseInt(prompt('Enter a number: '));
let isPrime = true;

if (number <= 1) {
    isPrime = false; 
} else if (number === 2) {
    isPrime = true; 
} else {
    for (let i = 2; i < number; i++) {
        if (number % i === 0) {
            isPrime = false; 
            break;
        }
    }
}

if (isPrime) {
    alert(`${number} is a prime number.`);
} else {
    alert(`${number} is not a prime number.`);
}
