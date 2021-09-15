# collapse组件

# 1. 基础用法

:::demo Collapse 组件必须接受两个参数： title 用于显示折叠面板的标题。 name 用于表示选中的 item。
```html
<template>
<div>
 <g-collapse :selected.sync="selected">
      <g-collapse-item title="标题1" name="标题1">1</g-collapse-item>
      <g-collapse-item title="标题2" name="标题2">2</g-collapse-item>
      <g-collapse-item title="标题3" name="标题3">3</g-collapse-item>
</g-collapse>

<div style="margin-top:20px">选中的是:{{selected}}</div>
</div>
</template>

<script>
export default {
    data(){ return{ selected : ['标题1'] } },
}
</script>
```
:::


# 2.支持single


:::demo 通过设置 single 属性，一次只能同时显示一个面板内容
```html
<template>
<div>
 <g-collapse :selected.sync="selected" single>
      <g-collapse-item title="标题1" name="标题1">1</g-collapse-item>
      <g-collapse-item title="标题2" name="标题2">2</g-collapse-item>
      <g-collapse-item title="标题3" name="标题3">3</g-collapse-item>
</g-collapse>

<div style="margin-top:20px">选中的是:{{selected}}</div>
</div>
</template>

<script>
export default {
    data(){ return{ selected : ['标题1'] } },
}
</script>
```
:::

<style>
table th:first-of-type {
    width: 10%;
}
table th:nth-of-type(2) {
    width: 40%;
}
table th:nth-of-type(3) {
    width: 10%;
}
table th:nth-of-type(4) {
    width: 20%;
}
table th:nth-of-type(5) {
    width: 20%;
}
</style>
# Collapse Attributes
| 参数     | 说明                      | 类型    | 可选值 | 默认值 |
| -------- | ------------------------- | ------- | ------ | ------ |
| selected | 绑定值，选中选项卡的 name | string  |        |        |
| single   | 一次只显示一个面板        | Boolean |        | false  |

# CollapseItem Attributes
| 参数  | 说明                                                 | 类型   | 可选值 | 默认值 |
| ----- | ---------------------------------------------------- | ------ | ------ | ------ |
| title | 选项卡的标题                                         | String |        |        |
| name  | 与选项卡绑定值 selected 对应的标识符，表示选项卡别名 | String |        |
   
