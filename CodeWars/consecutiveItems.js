function consecutive(arr, a, b) {
    //take arr, loop through and check to see if arr[i] == a and arr[i+1] = b
    for (let i = 0; i < arr.length - 1; i++) {
      let firstItem = arr[i]
      let secondItem = arr[i+1]
      console.log(firstItem, secondItem)
      if ((firstItem == a || firstItem === b) && (secondItem == b || secondItem === a)) {
          return true
      }
    }
    return false
}
  
  //do a and b (inputs) appear next to each other in the array
  //inputs: 
    // [] => is this a test? false
    // [4, 4, 4, 4,] 4, 1 => false
    // [1, 2, 3, 4] 3, 4 => true, 4, 3 => true
  //take the array, loop through and see if a and b are arr[i] and arr[i+1] - reverse order = true

//I overcomplicated this - tried to do a nested for loop, unnecessary