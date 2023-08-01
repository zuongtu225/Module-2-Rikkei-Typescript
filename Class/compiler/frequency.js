"use strict";
// input : 2 mảng
// output: boolean
// problem : bình phương của mảng thứ 1 == với mảng thứ 2
// case: nếu chìu dài 2 mảng ko == nhau thì như thế nào? mảng có được sắp xếp hay ko?
//c1 ko dùng frequencyType
const same = (arr1, arr2) => {
    if (arr1.length !== arr2.length) {
        console.log("false");
        return false; //nếu đúng điều kiện  thì dừng lun
    }
    //điều kiện đầu tiên length hai mảng phải bằng nhau nếu đúng thì chạy tiếp
    for (let i = 0; i < arr1.length; i++) {
        let correctIndex = arr2.indexOf(arr1[i] ** 2);
        // 1*1=1 correctIndex = 0 vị trí 0
        // 2*2 = 4  correctIndex = 2 vị trí 2
        // 3*3=9 correctIndex = -1 vị trí -1 -> nếu 1 cái false thì dừng lun
        // 4*4=16 correctIndex = -1 vị trí -1
        // [1,5,4,7] arr2
        //các element trong arr1 bình phương sẽ tham chiếu vs các element trong mảng arr2 xem có element đó hay ko
        arr2.splice(correctIndex, 1);
        if (correctIndex === -1) {
            console.log("false");
            return false;
        }
    }
    console.log("true");
    return true; //nếu tất cả element arr1 bình phương mà == element in arr2 thì đúng
};
// same([1, 2, 3, 4], [1, 5, 4, 7]);
same([1, 2, 3, 4], [1, 9, 4, 16]);
function checkSame(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false;
    }
    let frequencyCount1 = {};
    let frequencyCount2 = {};
    //1 key ko thể xuất hiện 2 lần
    for (let val of arr1) {
        // lặp từng element trong mảng
        frequencyCount1[val] = (frequencyCount1[val] || 0) + 1;
        //vế trái "key" => element val làm "key" cho "object" frequencyCount1 = {}
        // vế phải "value"=> khi có val rồi thì + 1
        //frequencyCount1[key] = frequencyCount1[key] + 1
        //frequencyCount1[1] = 0 + 1
        // 1 : 1
        //frequencyCount1[1] = frequencyCount1[1] + 1
        // 1 : 2
        //frequencyCount1[1] = frequencyCount1[1] + 1
        // 1 : 2
        //frequencyCount1[key] giống object.key
    }
    for (let val of arr2) {
        frequencyCount2[val] = (frequencyCount2[val] || 0) + 1;
    }
    for (let key in frequencyCount1) {
        if (!((+key) ** 2 in frequencyCount2)) {
            // biến key thành số để bình phương xem có key nào ở arr1 có trong arr2 ko
            return false; //nếu ko thì sai
        }
        if (frequencyCount2[(+key) ** 2] !== frequencyCount1[key]) {
            return false;
        }
    }
    return true;
}
console.log("Array check tần số xuất hiện của các key", [1, 2, 3], [1, 4, 9]);
console.log("frequency", checkSame([1, 2, 3], [1, 4, 9]));
