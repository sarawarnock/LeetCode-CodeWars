function tripleX(str){
    let arr = str.split('');
    console.log(arr)
    //find the first index of x
    let start = arr.indexOf('x');
    //start our loop at that index
    for (let i = start; i < arr.length; i++) {
      if (arr[i+1] == 'x' && arr[i+2] == 'x') {
        return true;
      }
      else {
        return false;
      }
    }
}