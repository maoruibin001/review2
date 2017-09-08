/**
 * Created by lenovo on 2017/9/8.
 */
/*
* 插入二分法查找 实现原理： 中值取一个更合理的插入值
*
* @param {Array} arr 待查找的数组
* @param {ele} arr 待查找的元素
*
* @return {Number} index 如果查找到返回对应的位置，否则返回-1
*
* */

function binary(arr, ele) {
    let start = 0,
        end = arr.length - 1,
        middle = 0;

    while (start <= end) {
        middle = start + Math.round((ele - arr[start]) / (arr[end] - arr[start]) * (end - start));
        if (ele === arr[middle]) {
            return middle;
        } else if (ele > arr[middle]) {
            start = middle + 1;
        } else {
            end = middle - 1;
        }
    }

    if (arr.length === 1 && arr[0] === ele) {
        return 0;
    }

    return -1;
}


var arr = [1];

console.log(binary(arr, 2));