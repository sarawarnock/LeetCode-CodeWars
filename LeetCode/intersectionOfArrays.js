/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    const int = [];
    
    for (let i = 0; i < nums1.length; i++) {
        let val = nums1[i]; 
        if (nums2.includes(val) && (!int.includes(val))) {
            int.push(val)
        }
    }
    return int;
};