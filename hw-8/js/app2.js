const N = 225; 

for (let i = 1; i <= 100; i++) {
    const square = i * i;

    switch (true) {
        case square <= N:
            console.log(i);
            break;
        default:
            break; 
    }
}
