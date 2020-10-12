/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if (strs.length === 1) {
        return strs[0]
    }
    else {
        let sortStrs = strs.sort();
        let firstItem = sortStrs[0];
        let lastItem = sortStrs[sortStrs.length - 1];
        
        if (!firstItem) {
            return ""
        }
        
        let i = 0;
        while (i < firstItem.length && firstItem.charAt(i) === lastItem.charAt(i)) {
            i ++;
        }
        return firstItem.substring(0, i);
    }
    return ""
};