function mirror(data) {
    //sort the array
    //then, add each element back in the reverse order
    let newArray = []
    data.map(item => newArray.push(item))
    newArray.sort(function(a, b) {return a - b})
    let i = newArray.length
    while ( i > 1) {
      newArray.push(newArray[i-2])
      i--
    }
    return newArray
}

//Not my solution, but looks cleaner
function mirror(data) {
    const sort = data.slice().sort((a, b) => a - b);
    return [...sort, ...sort.reverse().slice(1)];
}