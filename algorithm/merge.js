/**
 * Created by lenovo on 2017/9/7.
 */
const Util = require('./util');


/*
* 归并排序 实现原理：建一个空数组，把左右两边数组元素先排好序然后再比较处理
*
* @param {Array} arr 待排序数组。
* @return {Array} arr 排序完的数组。
* */

function merge(arr) {
    if (!Util.isArray(arr)) throw new Error('please introduce an Array');

    if (arr.length < 2) return arr;

    let middle = parseInt((arr.length) / 2);
    let left = arr.slice(0, middle);
    let right = arr.slice(middle);
    let mergeLeft = merge(left);
    let mergeRight = merge(right);
    let ret = mergeify(mergeLeft, mergeRight);
    return ret;
}

function mergeify(left, right) {

    let ret = [];
    while (left.length && right.length) {
        if (left[0] < right[0]) {
            ret.push(left.shift());
        } else {
            ret.push(right.shift());
        }
    }

    while (left.length) ret.push(left.shift());
    while (right.length) ret.push(right.shift());

    return ret;

}


var arr = [1, 4, 5, 2, 8, 6, 3,11, 4, 52, 2, 8, 6, 3, 2,7,13, 2,7,13];

console.log(merge(arr));