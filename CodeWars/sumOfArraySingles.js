function repeats(arr){
    //filter out both sets of doubles
    //get the sum of the remaining result
    let res = arr.filter(function(v) {
      return arr.filter(function(v1) {
        return v1 == v;
      }).length == 1;
    });
    console.log(res)
    let sum = res.reduce(function(a, b) {
      return a + b
    })
    return sum
};