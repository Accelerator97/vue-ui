<template>
  <div class="g-toastWrapper" :class="toastClasses" ref="toastWrapper">
    <div class="g-toast" ref="toast">
      <div class="g-toast-message">
        <slot v-if="!enableHTML"></slot>
        <div v-else v-html="$slots.default[0]"></div>
      </div>

      <div class="g-line" ref="line" v-show="closeButton"></div>
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
      default: 5,
      validator(value) {
        return value === false || typeof value === "number";
      },
    },
    closeButton: {
      type: Object,
      validator(val) {
        let flag = true;
        for (let key of Object.keys(val)) {
          if (!["text", "callback"].includes(key)) {
            flag = false;
            break;
          }
        }
        if (flag) {
          val["text"] = val["text"] || "关闭";
        }
        return flag;
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
    zIndex: {
      type: Number,
      default: 20,
      validator(value) {
        return typeof value === "number";
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
    this.$refs.toastWrapper.style.zIndex = this.zIndex;
    this.execautoClose();
    this.updateCss();
    // console.log(this.autoCloseDelay)
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
      this.close(); //先关闭自己
      if (this.closeButton && typeof this.closeButton.callback === "function") {
        this.closeButton.callback(); //调用用户传的回调
      }
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
.g-toastWrapper {
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
  .g-toast-message {
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
