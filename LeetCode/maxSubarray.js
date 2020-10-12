/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    if (nums.length === 1) {
        return nums[0]
    }
    else {
        let maxCurrent = nums[0];
        let maxGlobal = nums[0];
        for (let i = 1; i < nums.length; i++) {
            let item = nums[i];
            maxCurrent = Math.max(item, maxCurrent + item);
            if (maxCurrent > maxGlobal) {
                maxGlobal = maxCurrent;
            }
        }
        return maxGlobal;
    }
};