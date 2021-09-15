# Grid组件

# 1.基础用法

::: demo 
```html
<template>
        <g-row>
           <g-col span="24"><div class="grid-content bg-dark">col-24</div></g-col>
       </g-row>
        <g-row>
           <g-col span="12"><div class="grid-content bg-dark">col-12</div></g-col>
           <g-col span="12"><div class="grid-content bg-green">col-12</div></g-col>
       </g-row>
        <g-row>
           <g-col span="8"><div class="grid-content bg-dark">col-8</div></g-col>
           <g-col span="8"><div class="grid-content bg-green">col-8</div></g-col>
           <g-col span="8"><div class="grid-content bg-dark">col-8</div></g-col>
       </g-row>
</template>

<script>
export default {
  name:"GridDemo",
}
</script>

<style>
  * { box-sizing: border-box; }
  .g-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .g-col {
    border-radius: 4px;
  }
  .bg-dark {
    background: #99a9bf;
  }
  .bg-green{
      background:#81d2ad
  }
  .grid-content{
      text-align:center
  }
</style>
``` 
:::

# 2.Row选项

## 2.1支持gutter

::: demo 通过设置gutter(单位px),可以使网格之间有间隔
```html
<template>
        <g-row gutter="10" >
           <g-col span="6"><div class="grid-content bg-dark"> col-6 gutter-10</div></g-col>
           <g-col span="6"><div class="grid-content bg-green"> col-6 gutter-10</div></g-col>
          <g-col span="6"><div class="grid-content bg-dark"> col-6 gutter-10</div></g-col>
          <g-col span="6"><div class="grid-content bg-green"> col-6 gutter-10</div></g-col>
       </g-row>
        <g-row gutter="20" >
           <g-col span="6"><div class="grid-content bg-dark"> col-6 gutter-20</div></g-col>
           <g-col span="6"><div class="grid-content bg-green"> col-6 gutter-20</div></g-col>
          <g-col span="6"><div class="grid-content bg-dark"> col-6 gutter-20</div></g-col>
          <g-col span="6"><div class="grid-content bg-green"> col-6 gutter-20</div></g-col>
       </g-row>
        <g-row gutter="30" >
           <g-col span="6"><div class="grid-content bg-dark"> col-6 gutter-30</div></g-col>
           <g-col span="6"><div class="grid-content bg-green"> col-6 gutter-30</div></g-col>
          <g-col span="6"><div class="grid-content bg-dark"> col-6 gutter-30</div></g-col>
          <g-col span="6"><div class="grid-content bg-green"> col-6 gutter-30</div></g-col>
       </g-row>
</template>

<script>
export default {
  name:"gridDemo",
}
</script>

<style>
  * { box-sizing: border-box; }
  .g-row {
    margin-bottom: 20px;
    flex-wrap:no-wrap;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .g-col {
    border-radius: 4px;
  }
  .bg-dark {
    background: #99a9bf;
  }
  .bg-green{
      background:#81d2ad
  }
  .grid-content{
      text-align:center
  }
</style>
```
:::

## 2.2支持align

::: demo 给row设置align，可以控制列的排版
```html
<template>
        <g-row align="left">
           <g-col span="6"><div class="grid-content bg-dark"> col-6 align-left</div></g-col>
           <g-col span="6"><div class="grid-content bg-green"> col-6 align-left</div></g-col>
          <g-col span="6"><div class="grid-content bg-dark"> col-6 align-left</div></g-col>
       </g-row>
        <g-row align="center">
           <g-col span="6"><div class="grid-content bg-dark"> col-6 align-center</div></g-col>
           <g-col span="6"><div class="grid-content bg-green"> col-6 align-center</div></g-col>
          <g-col span="6"><div class="grid-content bg-dark"> col-6 align-center</div></g-col>
       </g-row>
        <g-row align="right">
           <g-col span="6"><div class="grid-content bg-dark"> col-6 align-right</div></g-col>
           <g-col span="6"><div class="grid-content bg-green"> col-6 align-right</div></g-col>
          <g-col span="6"><div class="grid-content bg-dark"> col-6 align-right</div></g-col>
       </g-row>
</template>

<script>
export default {
  name:"GridDemo",
}
</script>

<style>
  * { box-sizing: border-box; }
  .g-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .g-col {
    border-radius: 4px;
  }
  .bg-dark {
    background: #99a9bf;
  }
  .bg-green{
      background:#81d2ad
  }
  .grid-content{
      text-align:center
  }
</style>
``` 
:::

# 3.Col选项

## 3.1支持span
span是指网格占据的列数，从数值1-24等分划分

## 3.2支持offset

::: demo 设置 offset 属性,可以将列向右侧偏。
```html
<template>
        <g-row>
           <g-col span="12"><div class="grid-content bg-dark">col-12</div></g-col>
           <g-col span="8" offset="4"><div class="grid-content bg-green">col-8 offset-4</div></g-col>
       </g-row>
        <g-row>
           <g-col span="6"><div class="grid-content bg-dark">col-6</div></g-col>
           <g-col span="8" offset="4"><div class="grid-content bg-green">col-8 offset-4</div></g-col>
           <g-col span="2"><div class="grid-content bg-dark">col-2</div></g-col>
       </g-row>
</template>

<script>
export default {
  name:"GridDemo",
}
</script>

<style>
  * { box-sizing: border-box; }
  .g-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .g-col {
    border-radius: 4px;
  }
  .bg-dark {
    background: #99a9bf;
  }
  .bg-green{
      background:#81d2ad
  }
  .grid-content{
      text-align:center
  }
</style>
``` 
:::

# 4.响应式

支持ipad 、narrowPc 、pc 、widePc 四种设备的响应式设置。预设了五个响应尺寸：phone、ipad、narrow-pc、pc、wide-pc 。
默认是phone

::: demo
```html
<template>
 <g-row>
      <g-col span="24" :ipad="{span:8}" :narrow-pc="{span:4}" :pc="{span: 2}" :wide-pc="{span:1}">
        <div class="grid-content bg-dark">col</div>
      </g-col>
      <g-col span="24" :ipad="{span:16}" :narrow-pc="{span:20}" :pc="{span: 22}" :wide-pc="{span:23}">
        <div class="grid-content bg-green">col</div>
      </g-col>
    </g-row>
</template>

<script>
export default {
  name:"GridDemo",
}
</script>

<style>
  * { box-sizing: border-box; }
  .g-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .g-col {
    border-radius: 4px;
  }
  .bg-dark {
    background: #99a9bf;
  }
  .bg-green{
      background:#81d2ad
  }
  .grid-content{
      text-align:center
  }
</style>
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

# Row Attributes
| 参数        | 说明           | 类型      | 可选值     | 默认值 |
| -----------   | ------------ | -------   | ---------- | ------ |
| gutter    | 列之间的间距           | String/Number   | true/false | false  | 
| align    | 列的排版       | Boolean   | String | center/right/left  |



# Col Attributes
| 参数        | 说明           | 类型      | 可选值     | 默认值 |
| -----------   | ------------ | -------   | ---------- | ------ |
| span       | 列的宽度   | String/Number    |            |        |
| offset       | 列向右偏移   | String/Number     |            |        |