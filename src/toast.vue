<template>
  <div class="g-toast-wrapper" :class="toastClasses">
    <div class="g-toast" ref="toast">
      <div class="g-message">
        <slot v-if="!enableHTML"></slot>
        <div v-else v-html="$slots.default[0]"></div>
      </div>

      <div class="g-line" ref="line"></div>
      <!-- 写成 <slot></slot>，不要写成<slot /> 不然下面的标签内容加载不出来 -->
      <span v-if="closeButton" class="g-close" @click="onClickClose">
        {{ closeButton.text }}
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "gulu-toast",
  props: {
    autoClose: {
      type: [Boolean, Number],
      default: false,
      validator(value) {
        if( value === false || typeof value === "number"){
          return true
        };
      },
    },
    closeButton: {
      type: Object,
      default() {
        return {
          text: "关闭",
          callback: undefined,
        };
      },
    },
    enableHTML: {
      type: Boolean,
      default: false,
    },
    position: {
      type: String,
      default: "top",
      validator(value) {
        return ["top", "bottom", "middle"].indexOf(value) >= 0;
      },
    },
  },
  computed: {
    toastClasses() {
      return {
        [`position-${this.position}`]: true,
      };
    },
  },
  mounted() {
    this.execautoClose();
    this.updateCss();
    // console.log(this.autoClose)
    // setTimeout(() => {
    //     console.log(this.$refs.toast.getBoundingClientRect().height);
    // }, 2000);
  },
  methods: {
    updateCss() {
      this.$nextTick(() => {
        this.$refs.line.style.height = `${
          this.$refs.toast.getBoundingClientRect().height
        }px`;
      });
    },
    execautoClose() {
      if (this.autoClose) {
        setTimeout(() => {
          this.close();
        }, this.autoClose * 1000);
      }
    },
    close() {
      this.$el.remove();
      this.$emit("close");
      this.$destroy();
    },
    onClickClose() {
      if (this.closeButton && typeof this.closeButton.callback === "function") {
        this.closeButton.callback(); //调用用户传的回调
      }
      this.close(); //先关闭自己
    },
  },
};
</script>

<style lang="scss">
$font-size: 12px;
$toast-min-height: 40px;
$toast-background: rgba(0, 0, 0, 0.75);
@keyframes slide-up {
  0% {
    opacity: 0;
    transform: translateY(100%);
  }
  100% {
    opacity: 100%;
    transform: translateY(0%);
  }
}
@keyframes slide-down {
  0% {
    opacity: 0;
    transform: translateY(-100%);
  }
  100% {
    opacity: 100%;
    transform: translateY(0%);
  }
}
@keyframes fade-in {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 100%;
  }
}
.g-toast-wrapper {
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  $animation-duration: 1s;
  &.position-top {
    top: 0;
    .g-toast {
      border-top-left-radius: 0;
      border-top-right-radius: 0;
      animation: slide-down $animation-duration;
    }
  }
  &.position-bottom {
    bottom: 0;
    .g-toast {
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
      animation: slide-up $animation-duration;
    }
  }
  &.position-middle {
    top: 50%;
    transform: translateX(-50%) translateY(-50%);
    animation: fade-in $animation-duration;
  }
}
.g-toast {
  font-size: $font-size;
  min-height: $toast-min-height;
  line-height: 1.8;
  display: flex;
  align-items: center;
  background: $toast-background;
  box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.5);
  border-radius: 4px;
  color: white;
  padding: 0 16px;
  .g-message {
    padding: 8px 0;
  }
  .g-close {
    padding-left: 16px;
    flex-shrink: 0;
    // text-align: center;
  }
  .g-line {
    flex-shrink: 0;
    height: 100%;
    border: 1px solid #666;
    margin-left: 16px;
  }
}
</style>
