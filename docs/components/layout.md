# layout组件

# 基础用法

::: demo
```html
<template>
<g-layout>
    <g-header>header</g-header>
    <g-content>content</g-content>
    <g-footer>footer</g-footer>
</g-layout>
<br>
<g-layout >
    <g-header>header</g-header>
    <g-layout>
       <g-sider>sider</g-sider>
       <g-content>content</g-content>
    </g-layout>
    <g-footer>footer</g-footer>
</g-layout>
<br>
<g-layout >
    <g-header>header</g-header>
    <g-layout>
        <g-sider>sider</g-sider>
        <g-layout>
          <g-content>content</g-content>
          <g-footer>footer</g-footer>
        </g-layout>
    </g-layout>
</g-layout>
</template>

<style>
.g-header, .g-footer {
   background-color: #B3C0D1;
   color: #333;
   text-align: center;
   line-height: 20px;
}
.g-content {
   background-color: #E9EEF3;
   color: #333;
   text-align: center;
   line-height: 200px;
}
.g-sider {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
}
</style>
```
:::


# 说明

* g-layout ：布局容器，其下可嵌套 Header Sider Content Footer 或 Layout 本身，可以放在任何父容器中。

* g-header ：顶部布局，其下可嵌套任何元素，只能放在 Layout 中。

* g-sider ：侧边栏，其下可嵌套任何元素，只能放在 Layout 中。

* g-content ：内容部分，其下可嵌套任何元素，只能放在 Layout 中。

* g-footer ：底部布局，其下可嵌套任何元素，只能放在 Layout 中。