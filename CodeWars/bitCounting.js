var countBits = function(n) {
    let binary = (n >>> 0).toString(2);
    let array = binary.toString(10).split('').map(Number);
    let counter = 0;
    array.map(item => {
      if (item == 1) {
        counter ++ 
      }
    })
    return counter;
};