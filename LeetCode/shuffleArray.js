/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function(nums, n) {
    let newArray = []
    
    for (let i = 0; i < nums.length; i++) {
        if (newArray.length == nums.length) {
            return newArray
        } 
        else {
            newArray.push(nums[i]);
            newArray.push(nums[i+n]);
        }
    }
};