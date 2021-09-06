# 咕噜框架

作者：Ben
[![Build Status](https://app.travis-ci.com/Accelerator97/vue-ui.svg?branch=master)](https://app.travis-ci.com/Accelerator97/vue-ui)
## 介绍

学习时建立的UI框架

## 开始使用

1. 添加CSS样式

 使用本框架前，请在CSS中开启 border-box
 
 ```
 *{box-sizing:border-box}
 *::before{box-sizing:border-box}
 *::after{box-sizing:border-box}
 ```
 IE 8 及以上浏览器支持此样式
 
 还需要设置默认颜色的变量（后续改为SCSS变量）
 ```
 html {
     --button-height: 32px;
     --font-size: 14px;
     --button-bg: white;
     --button-active-bg: #eee;
     --border-radius: 4px;
     --color: #333;
     --border-color: #999;
     --border-color-hover: #666;
 }
 ```
 IE 15 及以上的浏览器支持此样式
2. 安装
 ```
 npm i --save ben-test-1
 ```

3. 引入
import {Button,ButtonGroup,Icon} from 'ben-test-1'
export default {
  name: 'App',
  components: {
    'g-button':Button,
    'g-button-group':ButtonGroup,
    'g-icon':Icon
  }
}



## 文档

## 提问

## 变更记录

## 联系方式

