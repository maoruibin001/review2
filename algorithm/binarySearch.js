/**
 * Created by lenovo on 2017/9/8.
 */
/*
* 二分法查找 实现原理： 折半查找
*
* @param {Array} arr 待查找的数组
* @param {ele} arr 待查找的元素
*
* @return {Number} index 如果查找到返回对应的位置，否则返回-1
*
* */

function binary(arr, ele) {
    let start = 0,
        end = arr.length,
        middle = 0;

    let index = -1;

    while (start <= end) {
        middle = parseInt((start + end) / 2);
        if (ele === arr[middle]) {
            index =  middle;
            break;
        } else if (ele > arr[middle]) {
            start = middle + 1;
        } else {
            end = middle - 1;
        }
    }

    return index;
}


var arr = [1, 3, 5, 7, 9, 13];

console.log(binary(arr, 5));