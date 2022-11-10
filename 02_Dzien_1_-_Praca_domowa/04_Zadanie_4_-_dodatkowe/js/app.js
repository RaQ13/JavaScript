function factors(number) {
    let factors = [];
    for (let i = 0; i <= number; i++) {
        if (number % i === 0) {
            factors.push(i);
        }
    }
    console.log(factors.sort(function (b,a){return a - b}));
}

factors(54);