function solution(number){
    numsBelow = []
    for (let i = 0; i < number; i++) {
      if (i % 3 == 0 || i % 5 ==0) {
        numsBelow.push(i) 
      }
    }
    const add = (a, b) => a + b;
    const sum = numsBelow.reduce(add)
    return sum
  }