/**
 * @param {number[]} target
 * @param {number[]} arr
 * @return {boolean}
 */
var canBeEqual = function(target, arr) {
    if (target.length != arr.length) {
        return false;
    }
    
    for (let i = 0; i < arr.length; i ++) {
        let index = target.indexOf(arr[i]);
        if (index == -1) {
            return false
        }
        else {
            target.splice(index, 1)
        }
    }
    return true;
}