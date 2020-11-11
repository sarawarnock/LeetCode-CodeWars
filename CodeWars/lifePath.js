function lifePathNumber(dateOfBirth) {
    // Your solution...
    return [...dateOfBirth.split('-')].map(i => i.split('').reduce((a,b) => a+b*1, 0)).map(i => i.toString().split('').reduce((a,b) => a+b*1, 0)).reduce((a,b) => a+b*1, 0)
  .toString().split('').reduce((a, b) => a+b*1, 0).toString().split('').reduce((a, b) => a+b*1, 0)
}