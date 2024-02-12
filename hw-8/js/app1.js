const exchange = 27;

for (let dollars = 10; dollars <= 100; dollars += 10) {
    const uah = dollars * exchange;
    console.log(`${dollars} доларів коштують ${uah} гривень.`);
}
