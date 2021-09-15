# toast组件

# 说明

想要使用 Toast 组件，首先需要引入该组件,然后使用 Vue 官方文档中插件的使用方法使用该插件。

# 1.支持zIndex
此选项用于设定 Toast 组件在当前堆叠上下文中的堆叠层级。默认为20。若你的项目不可见 Toast 组件，尝试传入一个 zIndex 试试。

# 2.支持autoClose

::: demo 设置Toast是否自动关闭，默认5秒自动关闭，可以传递数字或布尔值false
```html
<template>
    <button @click="autoClose">3S后自动关闭</button>
</template>    

<script>
    export default {
        methods:{
            autoClose(){
                  this.$toast('我是 toast 内容', {
                    zIndex:30,
                    autoClose: 3,
                })
            }
        }         
    }
</script>
```
:::

# 3.支持closeButton

::: demo 设置closeButton,编辑气泡框右边的文本，并且执行传入的回调函数。
```html
<template>
    <button @click="clickClose">点击才关闭</button>
</template>    

<script>
    export default {
        methods:{
            clickClose(){
                  this.$toast('我是 toast 内容', {
                    zIndex:30,
                    autoClose: 5,
                    closeButton:{
                        text:"点击关闭",
                        callback:()=>{console.log('关闭成功')}
                    }
                })
            }
        }         
    }
</script>
```
:::

# 4.支持enableHTMl

::: demo 默认为false,开启后toast可以识别Html标签
```html
<template>
    <button @click="autoClose">支持HTML写法</button>
</template>    

<script>
    export default {
        methods:{
            autoClose(){
                  this.$toast('<em>我是 toast 内容</em>', {
                    zIndex:30,
                    enableHTML:true
                })
            }
        }         
    }
</script>
```
:::

# 5.支持position

::: demo 设置toast弹出位置，默认上方
```html
<template>
    <button @click="top">上方弹出</button>
    <button @click="center">中间弹出</button>
    <button @click="bottom">下方弹出</button>
</template>    

<script>
    export default {
        methods:{
            top(){
                  this.$toast('上方弹出', {
                    zIndex:30
                })
            },
            center(){
                  this.$toast('中间弹出', {
                    zIndex:30,
                    position:"middle"
                })
            },
            bottom(){
                  this.$toast('下方弹出', {
                    zIndex:30,
                    enableHTML:true,
                    position:"bottom"
                })
            }
        }         
    }
</script>
```
:::


<style>
table th:first-of-type {
    width: 10%;
}
table th:nth-of-type(2) {
    width: 70;
}
table th:nth-of-type(3) {
    width: 4%;
}
table th:nth-of-type(4) {
    width: 10%;
}
table th:nth-of-type(5) {
    width: 6%;
}

</style>
# Attributes
| 参数        | 说明                             | 类型           | 可选值            | 默认值 |
| ----------- | -------------------------------- | -------------- | ----------------- | ------ |
| zIndex      | 层叠等级                         | Number         |                   | 20     |
| autoClose   | 自动关闭                         | Boolean/Number |                   | 5      |
| closeButton | 关闭执行传入的回调、关闭文本编辑 | Object         |                   |        |
| enableHTML  | 识别HTML标签                     | Boolean        | true/false        | false  |
| position    | 弹出的位置                       | String         | top/middle/bottom | top    |