"use strict";
// function sumZero(arr: number[]): number[] | undefined {
//   for (let i = 0; i < arr.length; i++) {
//     for (let k = 0; k < arr.length; k++) {
//       if (arr[i] + arr[k] === 0) {
//         return [arr[i], arr[k]];
//       }
//     }
//   }
// }
// sumZero([-4, -3, -2, -1, 0, 1, 2, 5]);
// console.log(sumZero([-4, -3, -2, -1, 0, 1, 2, 5]));
// multiple
function sumZero2(arr) {
    let start = 0;
    let end = arr.length - 1;
    while (start < end) {
        if (arr[start] + arr[end] < 0) {
            end--;
        }
        else if (arr[start] + arr[end] > 0) {
            start++;
        }
        else {
            return [arr[start], arr[end]];
        }
    }
}
sumZero2([12, 3, 4, 54]);
console.log("s", sumZero2([-3, -2, 0, 2, 3])); //????????????
