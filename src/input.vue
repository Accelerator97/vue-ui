<template>
  <div class="wrapper" :class="{ error: error }">
    <input
      :value="value"
      type="text"
      class="g-input"
      :disabled="disabled"
      :readonly="readonly"
      @change="$emit('change', $event.target.value)"
      @input="$emit('input', $event.target.value)"
      @focus="$emit('focus', $event.target.value)"
      @blur="$emit('blur', $event.target.value)"
    />
    <!-- JS里的input原本就有change事件，$event就是浏览器里触发的原生change事件对象，通过自定义的change事件发送出去，index.html中@change="inputChange"，监听自定义的change事件，然后触发inputChange -->
    <template v-if="error">
      <g-icon name="error" class="icon-error"></g-icon>
      <span class="errorMessage">{{ error }}</span>
    </template>
  </div>
</template>

<script>
import Icon from "./icon.vue";
export default {
  components: { "g-icon": Icon },
  name: "gulu-input",
  props: {
    value: {
      type: String,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    readonly: {
      type: Boolean,
      default: false,
    },
    error: {
      type: String,
    },
  },
};
</script>

<style lang="scss" >
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
$red: #f1453d;
.wrapper {
  font-size: $font-size;
  display: inline-flex;
  align-items: center;
  > :not(:last-child) {
    margin-right: 0.5em;
  }
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
    &[disabled],
    &[readonly] {
      border-color: #bbb;
      color: #bbb;
      cursor: not-allowed;
    }
  }
  .icon-error {
    fill: $red;
  }
  .errorMessage {
    color: red;
  }
}
</style>