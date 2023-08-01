"use strict";
function maxSubArraySum(arr, num) {
    if (num > arr.length) {
        return null;
    }
    var max = -Infinity;
    // Infinity đại diện cho Dương vô cực.
    //-Infinity đại diện cho Âm vô cực.
    for (let i = 0; i < arr.length - num + 1; i++) {
        let temp = 0;
        for (let k = 0; k < num; k++) {
            temp += arr[i + k];
        }
    }
}
maxSubArraySum([1, 2, 5, 6, 7, 8, 9], 2);
