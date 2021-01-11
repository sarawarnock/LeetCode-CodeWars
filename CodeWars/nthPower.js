function index(array, n){
    if (n <= array.length - 1) {
      return Math.pow(array[n], n)
    }
    else {
      return -1
    }
}

//with ternary
const index = (array, n) => array.length > n ? Math.pow(array[n], n) : -1;