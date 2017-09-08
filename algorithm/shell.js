/**
 * Created by lenovo on 2017/9/7.
 */

const Util = require('./util');
/*
* 希尔排序 实现原理：分区排序的插入排序
* @param {Array} arr 待排序数组
* @return {Array} arr 排序完成数组。
*
* */

function shell(arr) {
    if (!Util.isArray(arr)) throw new Error('please introduce an Array');
    let gap = 1, times = 2;

    while(arr.length > times * gap) {
        gap = gap * times + 1;
    }

    for (gap; gap > 0; gap = parseInt(gap / times)) {
        console.log(gap);
        for (let i = gap; i < arr.length; i += 1) {
            let temp = arr[i], flag = i;
            for (let j = i - gap; j >= 0 && arr[j] > temp; j -= gap) {
                arr[j + gap] = arr[j];
                flag = j;
            }
            arr[flag] = temp;
        }
    }

    return arr;
}
var arr = [1, 4, 5, 27, 8, 6, 3,134, 24, 5, 24, 8, 6, 33, 26,7,13, 2,7,13];

console.log(shell(arr));
// console.log(count)
