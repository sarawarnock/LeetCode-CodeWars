


//not my solution, but I want to understand this
function findEvenIndex(arr) {
    //come from both sides of array, adding from front and back
    //return the index where those sums are equal
    let sum = 0;
    let leftSum = 0;
    
    for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
    }
    
    for (let i = 0; i < arr.length; i++) {
      sum -= arr[i]
      
    if (leftSum === sum) {
      return i
    }
      
    leftSum += arr[i]
    }
    return -1
}