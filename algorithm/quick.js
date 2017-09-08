/**
 * Created by lenovo on 2017/9/7.
 */

const Util = require('util');
/*
* 快速排序 实现原理：大的放一边，小的放一边，归并。
* @param {Array} arr 待排序数组。
* @return {Array} ret 排序完成数组。
* */

function quick(arr) {
    if (!Util.isArray(arr)) throw new Error('please introduce an Array');

    if (arr.length < 2) {
        return arr;
    }
    let start = 0,
        end = arr.length,
        middle = parseInt((start + end) / 2),
        left = [],
        right = [];


    let middleValue = arr.splice(middle, 1);



    for (let i = 0; i < arr.length; i ++) {
        if (arr[i] > middleValue[0]) {
            right.push(arr[i]);
        } else {
            left.push(arr[i]);
        }
    }

    console.log('left: ', left);
    console.log('middle: ', middleValue);
    console.log('right: ', right);
    let ret = quick(left).concat(middleValue).concat(quick(right));
    return ret;
}


var arr = [1, 4, 5, 2, 8, 6, 3,1, 4, 5, 2, 8, 6, 3, 2,7,13, 2,7,13];

console.log(quick(arr));