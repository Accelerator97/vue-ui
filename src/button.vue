<template>
  <button
    class="g-button"
    :class="classes"
    @click="$emit('click')"
    :disabled="disabled"
  >
    <g-icon class="icon" v-if="icon && !loading" :name="icon"></g-icon>
    <span v-if="loading" class="g-loadingIndicator"></span>
    <div class="content">
      <slot />
    </div>
  </button>
</template>

<script>
import Icon from "./icon";
export default {
  name: "gulu-button",
  components: { "g-icon": Icon },
  props: {
    icon: {},
    loading: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    theme: {
      type: String,
    },
    size: {
      type: String,
      default: "normal",
    },
  },
  computed: {
    classes() {
      return {
        [`g-theme-${this.theme}`]: this.theme,
        [`g-size-${this.size}`]: this.size,
      };
    },
  },
};
</script>

<style lang="scss">
$font-size: 4px;
$button-height: 40px;
$button-bg: white;
$button-active-bg: #eee;
$border-radius: 4px;
$color: #333;
$border-color: #999;
$border-color-hover: #666;
$blue: #40a9ff;
$red: #ff4f57;
$warning-color: #ffc107;
$success-color: #13ce66;
$grey: grey;
@keyframes g-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.g-button {
  font-size: $font-size;
  height: $button-height;
  padding: 0 2em;
  border-radius: $border-radius;
  border: 1px solid $border-color;
  background: $button-bg;
  display: inline-flex; //转为弹性盒模型
  justify-content: center;
  align-items: center;
  vertical-align: middle;
  cursor:pointer;
  &:hover {
    border-color: $border-color-hover;
    
  }
  &:active {
    background-color: $button-active-bg;
  }
  &:focus {
    outline: none;
  }

  > .content {
    order: 2;
  }
  > .icon {
    order: 1;
    margin-right: 0.1em;
  }
  .loading {
    animation: spin 1s infinite linear;
  }
  &[disabled] {
    cursor: not-allowed;
    color: $grey;
    &:hover {
      border-color: $grey;
    }
  }
  &.g-theme-link {
    border-color: transparent;
    box-shadow: none;
    color: $blue;
    &:hover,
    &:focus {
      color: lighten($blue, 10%);
    }
    &[disabled] {
      cursor: not-allowed;
      color: $grey;
      &:hover {
        border-color: $grey;
      }
    }
  }
  &.g-theme-text {
    border-color: transparent;
    box-shadow: none;
    color: inherit;
    &:hover,
    &:focus {
      background: darken(white, 5%);
    }
    &[disabled] {
      cursor: not-allowed;
      color: $grey;
      &:hover {
        border-color: $grey;
      }
    }
  }
  &.g-theme-main {
    background: $blue;
    color: white;
    border-color: $blue;
    &:hover,
    &:focus {
      background: darken($blue, 10%);
      border-color: darken($blue, 10%);
    }
    &[disabled] {
      cursor: not-allowed;
      color: $grey;
      &:hover {
        border-color: $grey;
      }
    }
  }
  &.g-theme-danger {
    background: $red;
    border-color: $red;
    color: white;
    &:hover,
    &:focus {
      background: darken($red, 10%);
      border-color: darken($red, 10%);
    }
    &[disabled] {
      cursor: not-allowed;
      color: $grey;
      &:hover {
        border-color: $grey;
      }
    }
  }
  &.g-theme-warning {
    background: $warning-color;
    color: white;
    border-color: $warning-color;
    &:hover,
    &:focus {
      background: darken($warning-color, 10%);
      border-color: darken($warning-color, 10%);
    }
    &[disabled] {
      cursor: not-allowed;
      color: $grey;
      &:hover {
        border-color: $grey;
      }
    }
  }
  &.g-theme-success {
    background: $success-color;
    color: white;
    border-color: $success-color;
    &:hover,
    &:focus {
      background: darken($success-color, 10%);
      border-color: darken($success-color, 10%);
    }
    &[disabled] {
      cursor: not-allowed;
      color: $grey;
      &:hover {
        border-color: $grey;
      }
    }
  }
  &.g-size-big {
    font-size: 24px;
    height: 48px;
    padding: 0 16px;
  }
  &.g-size-small {
    font-size: 12px;
    height: 24px;
    padding: 0 4px;
  }
  > .g-loadingIndicator {
    width: 10px;
    height: 10px;
    display: inline-block;
    margin-right: 4px;
    border-radius: 50%;
    border-color: $blue $blue $blue transparent;
    border-style: solid;
    border-width: 2px;
    animation: g-spin 1s infinite linear;
  }
}
</style>