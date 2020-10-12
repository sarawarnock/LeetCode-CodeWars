function arrayDiff(a, b) {
    let array = a.filter(item => !b.includes(item))
    return array;
}