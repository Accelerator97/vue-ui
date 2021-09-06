<template>
  <div class="wrapper" :class="{'error':error}">
    <input :value="value" type="text" class="g-input" :disabled="disabled" :readonly="readonly"/>
    <template v-if="error">
       <g-icon name="error" class="icon-error"></g-icon>
       <span class="errorMessage">姓名至少需要两个字</span>
    </template>
  </div>
</template>

<script>
import Icon from "./icon.vue"
export default {
 components:{'g-icon':Icon},
  name: "gulu-input",
  props: {
    value: {
      type: String,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    readonly:{
        type:Boolean,
        default:false
    },
    error:{
        type:String
    }
  },
};
</script>

<style lang="scss" scoped>
// html {
//     --button-height: 32px;
//     --font-size: 14px;
//     --button-bg: white;
//     --button-active-bg: #eee;
//     --border-radius: 4px;
//     --color: #333;
//     --border-color: #999;
//     --border-color-hover: #666;
// }
$height: 32px;
$border-color: #999;
$border-color-hover: #666;
$border-radius: 4px;
$font-size: 12px;
$box-shadow-color: rgba(0, 0, 0, 0.5);
$red:#F1453D;
.wrapper {
  font-size: $font-size;
  display: inline-flex;
  align-items: center;
  > :not(:last-child){margin-right: .5em;}
  > .g-input {
    height: 32px;
    border: 1px solid $border-color;
    border-radius: 4px;
    padding: 0 8px;
    font-size: inherit;
    &:hover {
      border-color: $border-color;
    }
    &:focus {
      box-shadow: inset 0 1px 3px $box-shadow-color;
      outline: none;
    }
    &[disabled],&[readonly] {
      border-color: #bbb;
      color: #bbb;
      cursor: not-allowed;
    }
  }
  .icon-error{
      fill:$red
  }
  .errorMessage{
      color: red;
  }
}
</style>