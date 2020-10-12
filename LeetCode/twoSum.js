/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  const complements = new Map();
  for (let i = 0; i < nums.length; i++) {
    if(complements.has(nums[i])) {
      return [i, complements.get(nums[i])];
    }
    else {
      const currentComplement = target - nums[i];
      complements.set(currentComplement, i);
    }
  }
};