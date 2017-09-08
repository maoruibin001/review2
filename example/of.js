/**
 * Created by lenovo on 2017/9/7.
 */
function AA(name, age) {
    this.name = name;
    this.age = age;
}
Function.prototype.of = function () {
    return (new this(...arguments));
}

var obj = {
    name: 'rui',
    age: 33
}
var aa = AA.of('mao', 20);

function m () {
    var b = this.name;
    return b;
}
console.log(aa);