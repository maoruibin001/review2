/**
 * Created by lenovo on 2017/9/7.
 */
const swap = function swap(arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
};

module.exports = swap;