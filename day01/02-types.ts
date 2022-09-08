//object表示一个js对象
let a: object;
a = {};
a = function () {};

//{}用来表示指定对象中可以包含哪些属性
//语法：{属性名：属性值}
//在属性名后边加上?,表示属性是可选的
let b: { name: string; age?: number };

b = { name: "孙悟空", age: 18 };
//[proName: string]: any任意类型的属性
let c: { name: string; [proName: string]: any };

c = { name: "猪八戒", age: 18, gender: "男" };
/*
设置函数结构的类型声明
语法：(形参:类型,形参:类型...)=>返回值
*/
let d: (a: number, b: number) => number;
d = function (n1: number, n2: number): number {
  return n1 + n2;
};

/*
数组的类型声明：
类型[]
Array<类型>
*/
//string[]表示字符串数组
let e: string[];
e = ["1", "2", "3"];
//number[]表示数值数组
let f: number[];
f = [1, 2, 3];

let g: Array<number>;
g = [1, 2, 3];

/*
元组就是固定长度的数组
语法：[类型，类型，类型]
*/
let h: [string, number];
h = ["hello", 1];

/*
enum枚举
*/
enum Gender {
  Male = 0,
  Female = 1,
}
let i: { name: string; gender: Gender };
i = {
  name: "孙悟空",
  gender: Gender.Male,
};
console.log(i.gender === Gender.Male);

//&表示同时
let j: { name: string } & { age: number };
j = { name: "孙悟空", age: 18 };

//类型别名
type myType = 1 | 2 | 3 | 4 | 5;
let k: myType;
let l: myType;
let m: myType;
k = 1;

export {};
