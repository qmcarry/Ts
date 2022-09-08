let a: number;
// a = 'hello'
a = 123;

let b: string;
// b=123
b = "hello";

let c: boolean = false;
c = true;
//默认类型为any
let d;
d = 10;
d = "hello";
d = true;

let e: unknown;
let s: string;
e = "hello";
//类型判断
if (typeof e === "string") {
  s = e;
}
//类型断言
s = e as string;
//<类型>变量
s = <string>e;
//void用来表示空，以函数为例，表示没有返回值的函数
function fn(): void {}
//never表示永远不会返回结果
function fn2(): never {
  throw new Error("报错了");
}
export {};
