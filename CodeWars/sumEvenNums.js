function sumEvenNumbers(input) {
    // [...]
    if (input.length < 1) {
      return input 
    }
    let arr = []
    for (let i = 0; i < input.length; i++) {
      if (input[i] % 2 === 0) {
        arr.push(input[i])
      }
    }
    return arr.reduce((a, b) =>  a+b)
}

//what i was trying to do but couldn't figure out the filter without looking it up
function sumEvenNumbers(input) {
    return input.filter(function(el) {
      return el % 2 == 0;
    }).reduce(function(a, b) {
      return a + b;
    });
}