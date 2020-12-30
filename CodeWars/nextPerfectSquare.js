function nextPerfectSquare(int) {
    if (int < 0) {
      return 0
    }
    else if (Math.sqrt(int) % 2 === 0) {
       return Math.pow(Math.sqrt(int)+1, 2)
    }
    else {
      let square = Math.ceil(Math.sqrt(int))
      console.log(square)
      return Math.pow(square, 2) 
    }
}