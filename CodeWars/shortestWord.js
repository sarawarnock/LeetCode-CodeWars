function findShort(s){
    let substring = s.split(' ')
    let subL = [];
    let length = 0;
    for (let i = 0; i < substring.length; i++) {
      let length = substring[i].length;
      subL.push(length);
    }
    return Math.min(...subL)
}