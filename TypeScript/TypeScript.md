# TypeScript

**TypeScript** 2012 年由微软正式发布，包括 Angular、React、Vue 等广泛使用的前端框架，都在使用 TypeScript 进行开发。



## 1、了解 TypeScript



### 1.1、关于 TypeScript

>TypeScript 是 JavaScript 的**超集**。
>
>> TypeScript 是 JavaScript 类型的超集（superset），它可以编译成纯 JavaScript。
>>
>> - TS 拥有类型机制，TypeScript 不会被直接执行，而是被编译成  JavaScript  之后才能够运行。
>>
>> TypeScript 可以在任何浏览器、任何计算机和任何操作系统上运行，并且是开源的。
>>
>> TypeScript 的文件__后缀名__   
>>
>> - .ts
>>
>> TypeScript 把其它语言上的一些精妙的语法，带入到了 JavaScript 之中，从而把 js 带到了一个新的高度。
>>
>> 你可以在 ts 里面，使用各种的， js 之外的扩展语法，同时借助 ` ts` 对面向对象和静态类型的良好支持，你可以编写出**更健壮**，和**更可维护**的大型项目。
>>
>> 
>



### 1.2、Typescript 的知识点

1、静态类型
2、类型注解
3、类型推断
4、泛型
5、类型定义文件
6、模块化
7、打包编译
8、装饰器
9、Metadata
10、设计模式
11、..........



### 1.3、学习前提

- 学习 TypeScript 需要对 ECMAScript 6 和 JavaScript 5 有一定的基础。
-  后期项目实践中，需要用到 Node、express  、React 技术，或者框架，想彻底理解实践中的方方面面，需要对这些技术有相关基础。



### 1.4、TypeScript 官网：

1、官方网站: https://www.typescriptlang.org/
2、中文官网: https://www.typescriptlang.org/zh/
3、个人中文网站： https://www.tslang.cn/



---



## 2、TS 的基础语法



### 2.1、静态类型



js 动态类型

```javascript
    let a = 123;    // true
    a = '123'       // true
```



ts 静态类型

```typescript
    let b: number = 123;      // true
    b = '一二三'               // 不能将类型“string”分配给类型“number”。
```

__ts 中的变量是静态类型，只能存单一类型的值。__



### 2.2、TypeScript 编译

TS：

```typescript
"use strict";

interface Person {
    name: string
}

const teacher: Person = {
    name: 'Dell Lee'
}
```

👇 编译为

JS：

```javascript
"use strict";
const teacher = {
    name: 'Dell Lee'
};
```



- TypeScript 会被编译成普通的 JavaScript ，然后再去运行。
- TypeScript 是 JavaScript 的超集，它有自己的静态类型，所以它不能直接运行，需要经过一系列的编译，编译为普通的 JavaScript 代码，才能运行。



### 2.3、🙋💡 需要掌握的点：

> TypeScript 里面区别 JavaScript 的一些新的，语言特性。以及里面的静态类型的机制，和它编译成普通 JavaScript 的过程。



### 2.4、TypeScript 带来了什么优势





---



## 2、爬虫功能开发



---



## 3、TS 语法进阶



---



## 4、项目接口开发



---



## 5、TS 高级语法



---



## 6、项目代码重构



---



## 7、项目前端开发



---



## 8、学习总结



---































































