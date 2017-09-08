/**
 * Created by lenovo on 2017/9/7.
 */
/*
* 简单选择排序
* 实现原理：找出最小或者最大的，然后插入到相应的位置。
* @param {Array} arr 待排序的数组
* @return {Array} arr 排序后的数组
* */

const Util = require('./util');

var count  = 0;
function select(arr) {
    if (!Util.isArray(arr)) throw new Error('please introduce an Array');
    for (let i = 0; i < arr.length - 1; i ++) {
        let min = i;

        for (let j = i + 1; j < arr.length; j ++) {

            if (arr[j] < arr[min]) {
                min = j;
            }
        }

        if (min !== i) {
            count ++;
            Util.swap(arr, min, i);
        }
    }

    return arr;
}

var arr = [1, 4, 5, 2, 8, 6, 3,1, 4, 5, 2, 8, 6, 3, 2,7,13, 2,7,13];

console.log(select(arr));
console.log(count)