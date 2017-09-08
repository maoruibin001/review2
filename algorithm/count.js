/**
 * Created by lenovo on 2017/9/8.
 */

const Util = require('./util');
/*
* 技术排序 实现原理：先将一个一个整数抽出来放到数轴上，
*                   然后再计算前面有多少个元素，
*                   最后将元素放入对应位置。
*
* @param {Array} arr 待排序的数组
*
* @return {Array} arr 排序完成数组
* */


function count(arr) {
    if (!Util.isArray(arr)) throw new Error('please introduce an Array');

    let max = arr[0],
        min = arr[0];
    let axis = [],
        rets = [];
    for (let i = 0; i < arr.length; i ++) {
        max = arr[i] >= max ? arr[i] : max;
        min = arr[i] <= min ? arr[i] : min;
        axis[arr[i]] = axis[arr[i]] ? axis[arr[i]] + 1 : 1;
    }



    for (let j = min; j < max; j ++) {
        axis[j + 1] = (axis[j + 1] || 0) +  (axis[j] || 0);
    }

    for (let k = 0; k < arr.length; k ++) {
        rets[axis[arr[k]] - 1] = arr[k];

        axis[arr[k]] --;
    }
    return rets;
}


var arr = [1, 4, 5, 2, 8, 6, 3,11, 4, 52, 2, 8, 6, 3, 2,7,13, 2,7,13];

console.log(count(arr));