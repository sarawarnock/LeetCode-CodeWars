//We define  to be a sequence of distinct sequential integers from  to ; in other words, . We want to know the maximum bitwise AND value of any two integers,  and  (where ), in sequence  that is also less than a given integer, .

//Complete the function in the editor so that given  and , it returns the maximum .

//Note: The  symbol represents the bitwise AND operator.

//The first line contains an integer, , denoting the number of function calls.
//Each of the  subsequent lines defines a dataset for a function call in the form of two space-separated integers describing the respective values of  and .

//one solution
function getMaxLessThanK(n, k) {
    let maxVal = 0;
    for (let b = n; b > 0; b--) {
        for (let a = b-1; a > 0; a--) {
            if ((a & b) < k && (a & b) > maxVal) {
                maxVal = (a&b);
            }
        }
    }
    return maxVal
}


//another
function getMaxLessThanK(n, k) {
    return ((k | (k - 1)) > n) ? (k - 2) : (k - 1);
}