# TypeScript[^1]

**TypeScript** 2012 年由微软正式发布，包括 Angular、React、Vue 等广泛使用的前端框架，都在使用 TypeScript 进行开发。



## 1、了解 TypeScript



### 1.1、TypeScript 的定义

>TypeScript 是 JavaScript 的**超集**。
>
>> TypeScript 是 JavaScript 类型的超集（superset），它可以编译成纯 JavaScript。
>>
>> - TS 拥有类型机制，TypeScript 不会被直接执行，而是被编译成  JavaScript  之后才能够运行。
>> - TS 不能直接在浏览器环境或者 Node 环境下运行，必须通过它的编译器编译为普通的 js 后运行。
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
3、个人中文网站: https://www.tslang.cn/
4、官方网站 Playround [编译器](https://www.typescriptlang.org/zh/play?#code/PTAEHUFMBsGMHsC2lQBd5oBYoCoE8AHSAZVgCcBLA1UABWgEM8BzM+AVwDsATAGiwoBnUENANQAd0gAjQRVSQAUCEmYKsTKGYUAbpGF4OY0BoadYKdJMoL+gzAzIoz3UNEiPOofEVKVqAHSKymAAmkYI7NCuqGqcANag8ABmIjQUXrFOKBJMggBcISGgoAC0oACCbvCwDKgU8JkY7p7ehCTkVDQS2E6gnPCxGcwmZqDSTgzxxWWVoASMFmgYkAAeRJTInN3ymj4d-jSCeNsMq-wuoPaOltigAKoASgAywhK7SbGQZIIz5VWCFzSeCrZagNYbChbHaxUDcCjJZLfSDbExIAgUdxkUBIursJzCFJtXydajBBCcQQ0MwAUVWDEQC0gADVHBQGNJ3KAALygABEAAkYNAMOB4GRonzFBTBPB3AERcwABS0+mM9ysygc9wASmCKhwzQ8ZC8iHFzmB7BoXzcZmY7AYzEg-Fg0HUiQ58D0Ii8fLpDKZgj5SWxfPADlQAHJhAA5SASPlBFQAeS+ZHegmdWkgR1QjgUrmkeFATjNOmGWH0KAQiGhwkuNok4uiIgMHGxCyYrA4PCCJSAA "将 TS 编译为 JS")



---



## 2、TS 的基础语法



### 2.1、静态类型



js 动态类型

```javascript
    let a = 123;    // true Number 类型
    a = '123'       // true String 类型
```

**js 中，变量的类型可以随时的改变。**



ts 静态类型

```typescript
    let b: number = 123;      // true
    b = '一二三'               // 不能将类型“String”分配给类型“number”。
		b = 456                   // true
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



👇 编译为 [编译网址](https://www.tslang.cn/play/index.html) 



JS：

```javascript
    "use strict";
    const teacher = {
        name: 'Dell Lee'
    };
```



- TypeScript 会被编译成普通的 JavaScript ，然后再去运行。
- TypeScript 是 JavaScript 的超集，它有自己的静态类型，所以它不能直接在浏览器和Node中运行，需要经过一系列的编译，编译为普通的 JavaScript 代码，才能运行。



### 2.3、🙋💡 需要掌握的点：

> TypeScript 里面区别 JavaScript 的一些新的，语言特性。以及里面的静态类型的机制，和它编译成普通 JavaScript 的过程。



### 2.4、TypeScript 带来了什么优势

js code 勾股定理的公式：

```javascript
		# 给出平面 x 和 y 的长度，算出斜边的长度。
		function demo(data){
      	return Math.sqrt(data.x ** 2 + data.y ** 2);
    }
		demo(); // TypeError: undefined is not an object (evaluating 'data.x')
```



ts

```typescript
		function tsDemo(data: {x: number, y: number}){
    		return Math.sqrt(data.x ** 2 + data.y ** 2);
    }
		tsDemo(); // Expected 1 arguments, but got 0. 应有 1 个参数，但获得 0 个。
		tsDemo({x: 1, y: 123}); // true
```



Ts 的一个类型定义

```typescript
		# TypeScript 中类型别名的一个语法。
		type Point = { x: number, y: number };
		
		# 或者使用 interface 
    interface Point = { x: number, y: number };

		function tsDome(data: Point) {
				return Math.sqrt(data.x ** 2 + data.y ** 2);  
		}
		tsDemo({x: 1, y: 123});
```



:dizzy: __TypeScript 相对于 JavaScript 的优势。__

1、Ts 的静态类型，使得我们在开发过程中，就能发现潜在问题。**错误提示！**

2、用 Ts 编辑代码，有更友好的编辑器自动提示。**语法提示！**

3、类型的一些声明，可以让我们直观的看到，我们代码里面的一些语意。**可读性强！**



### 2.5、TypeScript 的基础语法

如果需要运行 Ts ，需要有基于 Node 的一个开发环境。

所以需要安装 Node 在电脑上，首先从 [node 官网](https://nodejs.org/en/ "node 官网") 下载 node 的安装包。

- 下载时，注意使用长期稳定的安装版本 Recommended For Most Users。





---



## 3、爬虫功能开发



---



## 4、TS 语法进阶



---



## 5、项目接口开发



---



## 6、TS 高级语法



---



## 7、项目代码重构



---



## 8、项目前端开发



---



## 9、学习总结



---



























































## 参考资料

[^1]: 此文档由 Markdown 语法书写✍️，作者 Daniel :wave:   **[Markdown语法参考链接](https://markdown.com.cn "markdown教程")**。 

