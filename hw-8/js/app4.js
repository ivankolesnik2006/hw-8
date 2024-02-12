const number = parseInt(prompt('Enter a number: '));

let result = 1;
while (result < number) {
    result *= 3;
}

if (result === number) {
    alert(`${number} can be obtained by raising 3 to some power.`);
} else {
    alert(`${number} cannot be obtained by raising 3 to any power.`);
}
