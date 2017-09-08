/**
 * Created by lenovo on 2017/9/7.
 */
const Util = {
    swap: function (arr, i, j) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    },
    isArray: function(arr) {
        if (Object.prototype.toString.call(arr) === '[object Array]') {
            return true;
        }
        return false;
    }
};

module.exports = Util;