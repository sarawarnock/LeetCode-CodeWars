function nbYear(p0, percent, aug, p) {
    let perc = percent/100
    //find year 1
    let sum = p0 + (p0*perc) + aug; 
    //start counting and incrementing n
    let n = 1;
    //while the sum is less than the target population
    //add the sum to itself 
    while (sum < p) {
      sum = sum + (sum*perc) + aug;
      n++
    }
    return n
}