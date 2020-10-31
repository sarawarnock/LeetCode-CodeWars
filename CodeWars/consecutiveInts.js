function sumOfN(n) {
    let array = []
    let sum = 0;
    for (let i = 0; i <= Math.abs(n); i++) {
        sum = i + sum
        array.push(sum)
    }
    if (n < 0) {
        array = array.map(i => 0 - i)
    }
    return array;
};