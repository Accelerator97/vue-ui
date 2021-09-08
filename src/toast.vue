<template>
  <div class="g-toast" ref="wrapper" :class="toastClasses">
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
</template>

<script>
export default {
  name: "gulu-toast",
  props: {
    autoClose: {
      type: Boolean,
      default: true,
    },
    autoCloseDelay: {
      type: Number,
      default: 50,
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
  created() {
    console.log(this.closeButton);
  },
  mounted() {
    this.execautoClose();
    this.updateCss();
  },
  methods: {
    updateCss() {
      this.$nextTick(() => {
        this.$refs.line.style.height = `${
          this.$refs.wrapper.getBoundingClientRect().height
        }px`;
      });
    },
    execautoClose() {
      if (this.autoClose) {
        setTimeout(() => {
          this.close();
        }, this.autoCloseDelay * 1000);
      }
    },
    close() {
      this.$el.remove();
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
.g-toast {
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
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
  }
  .g-line {
    height: 100%;
    border: 1px solid #666;
    margin-left: 16px;
  }
  &.position-top {
    top: 0;
  }
  &.position-bottom {
    bottom: 0;
  }
  &.position-middle {
    top: 50%;
    transform: translate(-50%,-50%);
  }
}
</style>
