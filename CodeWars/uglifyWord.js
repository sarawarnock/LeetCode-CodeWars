function uglifyWord(s) {
    const regex = /[a-zA-Z]/
    let flag = 1;
    let answer = ''
    for (let i = 0; i < s.length; i++) {
      if (regex.test(s[i]) === true && flag === 1) {
        answer = answer.concat(s[i].toUpperCase())
        flag = 0;
      }
      else if (regex.test(s[i]) === true && flag === 0) {
        answer = answer.concat(s[i].toLowerCase())
        flag = 1;
      }
      else {
        answer = answer.concat(s[i])
        flag = 1
      }
    }
    return answer
  }
  
  // loop through string, s, and change every other letter to the opposite case
  //test cases:
    // ("aAaA") => AaAa ?
    // ("0aa0") => 0aA0
  
  //loop through the string. if the current index character has flag value of 1, make it uppercase
  //if current index flag value is 0, change character to lowercase
  //if the current index is not an alphabetical character, just change the flag value to the opposite
  
  //steps:
    // regex variable -- regex = [a-zA-Z]
    // 1. the flag value --> 0 or 1
      //change flag value after every iteration
    // 2. an if statement - if flag == 0, s[i].toLowerCase()
    // 3. if (s[i] !== regex) flag = 1 
  
  //test cases
    // (0aa0) => first loop hits the third if statement, and flag gets changed from 1 to 0
    // 2nd iteration ('a', flag is 0) = keep lowercase, change flag to 1
    //3rd iteration ('a', flag is 1) = change to A, change flag to 0
    //4th iteration ('0') => hit 3rd if statement, change flag
    // answer = '0aA0', what i thought above