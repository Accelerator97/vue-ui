# Input组件

# 1.基础用法

::: demo 可以支持双向绑定
```html
<template>
    <g-input  v-model:value="text">默认按钮</g-input>
    <div>{{text}}</div>
</template>
<script>
export default {
  name:"InputDemo",
  data(){
    return{
      text:'Hello World'
    }
  }
}
</script>
<style>

</style>
``` 
:::

# 2.支持disabled

::: demo 设置disabled，禁用输入
```html
<template>
    <g-input value="禁用" disabled>默认按钮</g-input>
</template>
``` 
:::

# 3.支持readonly

::: demo 设置readonly，表示只读无法修改
```html
<template>
    <g-input value="只读" readonly>默认按钮</g-input>
</template>
``` 
:::

# 4.支持error

::: demo 添加 error 属性，会在该 input 右侧显示一个提示图标与文字，用于提示
```html
<template>
    <g-input  value="只读" error="错误">默认按钮</g-input>
</template>
``` 
:::

<style>
table th:first-of-type {
	width: 100px;
}
</style>

<style>
table th:first-of-type {
    width: 10%;
}
table th:nth-of-type(2) {
    width: 50%;
}
table th:nth-of-type(3) {
    width: 10%;
}
table th:nth-of-type(4) {
    width: 10%;
}
table th:nth-of-type(5) {
    width: 20%;
}
</style>

# Attributes
| 参数        | 说明           | 类型      | 可选值     | 默认值 |
| -----------   | ------------ | -------   | ---------- | ------ |
| disabled    | 禁用           | Boolean   | true/false | false  | 
| readonly    | 按钮大小       | Boolean   | true/false | false  |
| error       | 提示错误信息   | String     |            |        |