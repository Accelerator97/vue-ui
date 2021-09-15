# tabs组件

# 1.基础用法

:::demo 
```html
<template>
  <div>
  <g-tabs :selected.sync="selectedTab">
      <g-tabs-header>
        <g-tabs-item name='tab1'>Tab1</g-tabs-item>
        <g-tabs-item name='tab2'>Tab2</g-tabs-item>
        <g-tabs-item name='tab3'>Tab3</g-tabs-item>
        <g-tabs-item name='tab4'>Tab4</g-tabs-item>
      </g-tabs-header>
      <g-tabs-body>
        <g-tabs-pane name='tab1'>内容1</g-tabs-pane>
        <g-tabs-pane name='tab2'>内容2</g-tabs-pane>
        <g-tabs-pane name='tab3'>内容3</g-tabs-pane>
        <g-tabs-pane name='tab4'>内容4</g-tabs-pane>
      </g-tabs-body>
    </g-tabs>

    <div style="margin-top:20px">选中的标签是:{{selectedTab}}</div>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                selectedTab:"tab1"
            }
        }
    }
</script>

<style>
</style>    
```
:::


# 2.支持disabled


:::demo tabs-item 设置disabled 不可选中
```html
<template>
  <g-tabs :selected.sync="selectedTab">
      <g-tabs-header>
        <g-tabs-item name='tab1'>Tab1</g-tabs-item>
        <g-tabs-item name='tab2'>Tab2</g-tabs-item>
        <g-tabs-item name='tab3'>Tab3</g-tabs-item>
        <g-tabs-item name='tab4' disabled>Tab4</g-tabs-item>
      </g-tabs-header>
      <g-tabs-body>
        <g-tabs-pane name='tab1'>内容1</g-tabs-pane>
        <g-tabs-pane name='tab2'>内容2</g-tabs-pane>
        <g-tabs-pane name='tab3'>内容3</g-tabs-pane>
        <g-tabs-pane name='tab4'>内容4</g-tabs-pane>
      </g-tabs-body>
    </g-tabs>
</template>

<script>
    export default {
        data(){
            return {
                selectedTab:"tab1"
            }
        }
    }
</script>

<style>
</style>    
```
:::


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
    width: 15%;
}
table th:nth-of-type(5) {
    width: 15%;
}
</style>
# Tabs Attributes
| 参数     | 说明                                  | 类型   | 可选值 | 默认值 |
| -------- | ------------------------------------- | ------ | ------ | ------ |
| selected | 绑定值，选中tabsItem和tabsPane的 name | string |        |        |

# TabsItem Attributes
| 参数     | 说明                                               | 类型    | 可选值     | 默认值 |
| -------- | -------------------------------------------------- | ------- | ---------- | ------ |
| name     | 与Tabs绑定值 selected 对应的标识符，表示选项卡别名 | String  |            |
| disabled | 禁用                                               | Boolean | false/true | false  |


# TabsPane Attributes
| 参数 | 说明                                               | 类型   | 可选值 | 默认值 |
| ---- | -------------------------------------------------- | ------ | ------ | ------ |
| name | 与Tabs绑定值 selected 对应的标识符，表示选项卡别名 | String |        |
   
