[![Build Status](https://travis-ci.org/digi1874/digi.svg?branch=master)](https://travis-ci.org)
[![codecov](https://codecov.io/gh/digi1874/digi/branch/master/graph/badge.svg)](https://codecov.io/gh/digi1874/digi)
[![npm](https://img.shields.io/npm/v/digi.svg)](https://www.npmjs.com/package/digi)
[![license](https://img.shields.io/npm/l/digi.svg)](https://github.com/digi1874/digi/blob/master/LICENSE)
[![language](https://img.shields.io/badge/language-javascript-orange.svg)](https://developer.mozilla.org/bm/docs/Web/JavaScript)
[![platform](https://img.shields.io/badge/platform-nodejs-lightgrey.svg)](https://nodejs.org)
[![platform](https://img.shields.io/badge/platform-browser-lightgrey.svg)](https://baike.baidu.com/item/%E6%B5%8F%E8%A7%88%E5%99%A8/213911)


## 一个简单的 js 框架
- [demo](https://github.com/lin09/digi-demo)
- [refs](https://github.com/digi1874/digi-refs)

----
#### 安装
```
yarn add -D digi
```

----
#### 简单例子
```
import digi, { createData } from 'digi'

// 创建监听数据
const data = createData({ a: 123 })

// 添加元素
digi({ text: data.$tp('a') })

console.log(document.body.outerHTML)
// => <body><div>123</div></body>

data.a = 321
console.log(document.body.outerHTML)
// => <body><div>321</div></body>
```
