/**
 * Created by lenovo on 2017/9/7.
 */
const Util = require('./util');

/**
 * 简单插入排序 实现原理：从第一个开始，把后面的元素插入有序的数组排序，像打扑克牌一样。
 * @param {Array} arr 待排序的数组。
 * @return {Array} arr 排序完之后的数组。
 */
var count = 0;
function insert(arr) {
    if (!Util.isArray(arr)) throw new Error('please introduce an Array');

    for (let i = 0; i < arr.length - 1; i ++) {
        let left = 0, right = i, middle;
        let temp = arr[i + 1];
        while (left <= right) {
            middle = parseInt((left + right) / 2);
            if (temp <= arr[middle]) {
                right = middle - 1;
            } else {
                left = middle + 1;
            }
        }

        for (let j = i; j >= left; j --) {
            arr[j + 1] = arr[j];
        }
        arr[left] = temp;
    }


    return arr;
}

let sortArr = [3, 1, 5, 2, 4];
// for (let i = 0;i < 50000; i ++) {
//     sortArr.push(parseInt(Math.random() * 100000));
// }
console.time('插入排序耗时：')
console.log(insert(sortArr));
console.timeEnd('插入排序耗时：')
console.log(count)