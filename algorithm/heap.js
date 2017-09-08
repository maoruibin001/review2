/**
 * Created by lenovo on 2017/9/8.
 */

const Util = require('./util');
/*
* 堆排序 实现原理：构造一个大顶堆，不停的把最大值放到最后。
* @param {Array}  arr 待排序的数组
*
* @return {Array} arr 排序成功数组
*
* */

function heap(arr) {
    if (!Util.isArray(arr)) throw new Error('please introduce an Array');

    // 建堆
    let len = arr.length;

    for (let i = parseInt(len / 2); i >= 0 ; i --) {
        heapify(arr, i, len);
    }

    for (let j = len - 1; j >= 0; j --) {
        Util.swap(arr, j , 0);

        heapify(arr, 0, --len)
    }
    return arr;
}


/*
* 维护堆的性质
*@param {arr} 带建堆数组
*
*@return {arr} 构建成功的对数组
*
* */


function heapify(arr, i, len) {
    let leftChild = 2 * i + 1,
        rightChild = 2 * i + 2;

    let max = i;
    if (leftChild < len && arr[leftChild] > arr[max]) {
        max = leftChild;
    }

    if (rightChild < len && arr[rightChild] > arr[max]) {
        max = rightChild;
    }

    if (max !== i) {
        Util.swap(arr, max, i);
        heapify(arr, max, len)
    }
}


var arr = [1, 4, 5, 2, 8, 6, 3,11, 4, 52, 2, 8, 6, 3, 2,7,13, 2,7,13];

console.log(heap(arr));