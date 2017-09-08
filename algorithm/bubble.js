/**
 * Created by lenovo on 2017/9/7.
 */
/*
* 冒泡排序
* *@param {Array} arr 待排序数组
* */
const swap = require('./swap');
var count = 0;
function bubble( originArr ) {
    let toString = Object.prototype.toString;
    if (toString.call(originArr) !== '[object Array]') {
        throw new Error('please introduce an array');
    }
    let arr = originArr.concat([]);
    for (let i = 0; i < arr.length; i ++) {
        for (let j = 1; j < arr.length -1 - i; j ++) {
            if (arr[j] > arr[j + 1]) {
                count ++;
                swap(arr, j , j + 1);
            }
        }
    };

    return arr;
}


var arr = [1, 4, 5, 2, 8, 6, 3,1, 4, 5, 2, 8, 6, 3, 2,7,13, 2,7,13];
var newArr = bubble(arr);
console.log(count);
console.log(newArr)
module.exports = bubble;