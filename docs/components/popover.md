# popover组件

# 1.支持trigger

:::demo trigger 默认为 click ,点击显示popover。 除此之外还支持 hover,鼠标经过显示popover
```html
<template>
    <g-popover>
      <template slot="content">
        HelloWorld
      </template>
      <g-button>点击显示popover</g-button>
    </g-popover>
    <g-popover trigger="hover">
      <template slot="content">
        HelloWorld
      </template>
      <g-button>hover显示popover</g-button>
    </g-popover>
</template>

```
:::

# 2.支持position
:::demo 可选择的参数为 top , left , right , bottom ,分别设置 popover 显示的方位。
```html
<template>
    <g-popover position="top"> 
      <template slot="content">
        HelloWorld
      </template>
      <g-button>顶部显示popover</g-button>
    </g-popover>
    <g-popover position="bottom" >
      <template slot="content">
        HelloWorld
      </template>
      <g-button>底部显示popover</g-button>
    </g-popover>
    <g-popover position="left" >
      <template slot="content">
        HelloWorld
      </template>
       <g-button>左边显示popover</g-button>
    </g-popover>
    <g-popover position="right" >
      <template slot="content">
        HelloWorld
      </template>
      <g-button>右边popover</g-button>
    </g-popover>
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
#  Attributes
| 参数     | 说明              | 类型   | 可选值                | 默认值 |
| -------- | ----------------- | ------ | --------------------- | ------ |
| position | popover的显示位置 | string | top/left/right/bottom | top    |
| trigger | 触发popover的方式 | string | click/hover | click    |