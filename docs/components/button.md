# Button组件

 # 1.支持theme


::: demo 通过设置 theme 属性，展示不同类型的按钮
```html
<template>
    <g-button>普通按钮</g-button>
    <g-button theme="text">文本按钮</g-button>
    <g-button theme="link">链接按钮</g-button>
    <g-button theme="main">主要按钮</g-button>
    <g-button theme="danger">危险按钮</g-button>
    <g-button theme="warning">警告按钮</g-button>
     <g-button theme="success">安全按钮</g-button>
</template>
``` 
:::

# 2.支持size

::: demo 通过设置 size 属性,展示不同大小的按钮
```html
<template>
    <g-button size="big">大大大大</g-button>
    <g-button>普通按钮</g-button>
    <g-button size="small">小小小小</g-button>
</template>
``` 
:::


# 3.支持disabled
::: demo 通过设置 disable 属性,确定是否禁用按钮
```html
<template>
    <g-button >普通按钮</g-button>
    <g-button disabled>禁用按钮</g-button>
</template>
``` 
:::

# 4.支持loading

::: demo 通过设置 loading 属性,确定是否加载中
```html
<template>
    <g-button >普通按钮</g-button>
    <g-button loading>加载按钮</g-button>
</template>
``` 
:::

# 5.按钮组

::: demo 以按钮组的方式出现，常用于多项类似操作
```html
<template>
    <g-button-group>
        <g-button >普通按钮</g-button>
        <g-button >普通按钮</g-button>
        <g-button >普通按钮</g-button>
    </g-button-group>
</template>
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

# Attributes
| 参数     | 说明     | 类型    | 可选值                                | 默认值 |
| -------- | -------- | ------- | ------------------------------------- | ------ |
| theme    | 按钮类型 | String  | main/danger/warning/success/text/link |         |
| size     | 按钮大小 | String  | big/small/normal                      | normal  |
| disabled | 禁用     | Boolean | true/false                            | false   |
| loading  | 加载     | Boolean | true/false                            | false   |