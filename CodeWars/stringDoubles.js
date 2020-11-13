//my first solution - passed all but one test

function doubles(s){
    //loop through our string, s
    //s = s.replace(/(.)(?=.*\1)/g, "")
    //console.log(s)
    for (let i = 0; i < s.length;) {
      //console.log(s[0], s[i], s[i+1])
      if (s[i] === s[i+1]) {
        //console.log(s[i], s[i+1])
        s = s.slice(0, i) + s.slice(i+2)
        //console.log(s)
        i = 0
      }
      i++
    }
    return s
}
  
  //take string, s, and delete any dupliates, but JUST duplicates, not triples
  //test inputs
    //aabbcc => ''
    //aaabcc => 'ab'
    //mmmkknnnnni => 'mni'
  //i am going to take my string, s, and loop through it, comparing the letter your're on
  // to the letter next to it
  //if they are the same, remove BOTH of them. and continue looping
  //then, return whatever you have left of string s
  
  //'aabbcc' 
    //loop over, starting at a, compare it to the next character, a
    //theyre the same, so remove both, so we are left with bbcc
    //continue looping
    //next is b, compare it to b, remove both
    //left with 'cc', continue looping
    //c is the same as c, so remove both of those => '' empty string

//stack solution

function doubles(s){
    let stack = []
    
    for (let i = 0; i < s.length; i++) {
      let j = 0;
      while (s.length > 0 && s[i] === stack[stack.length - 1]) {
        j = stack.pop()
      }
      if (j !== s[i]) {
        stack.push(s[i])
      }
    }
    return stack.join('')
}