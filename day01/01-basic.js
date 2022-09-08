"use strict";
exports.__esModule = true;
var a;
// a = 'hello'
a = 123;
var b;
// b=123
b = "hello";
var c = false;
c = true;
//默认类型为any
var d;
d = 10;
d = "hello";
d = true;
var e;
var s;
e = "hello";
//类型判断
if (typeof e === "string") {
    s = e;
}
//类型断言
s = e;
//<类型>变量
s = e;
//void用来表示空，以函数为例，表示没有返回值的函数
function fn() { }
//never表示永远不会返回结果
function fn2() {
    throw new Error("报错了");
}
