<template>
  <div class="g-popover" @click="onClick" ref="popover">
    <div
      class="g-popover-content-wrapper"
      v-if="popoverVisible"
      ref="contentWrapper"
      :class="{ [`position-${position}`]: true }"
    >
      <slot name="content"></slot>
    </div>
    <span ref="triggerWrapper" style="display: inline-block">
      <slot></slot>
    </span>
  </div>
</template>

<script>
export default {
  name: "gulu-popover",
  data() {
    return {
      popoverVisible: false,
    };
  },
  props: {
    position: {
      type: String,
      default: "top",
      validator(value) {
        return ["top", "bottom", "left", "right"].indexOf(value) >= 0;
      },
    },
  },
  methods: {
    PositionContent() {
      //popover弹出层位置
      const { contentWrapper, triggerWrapper } = this.$refs;
      document.body.appendChild(this.$refs.contentWrapper);
      let { width, height, top, left } = triggerWrapper.getBoundingClientRect();
      if (this.position === "top") {
        contentWrapper.style.left = left + window.scrollX + "px";
        contentWrapper.style.top = top + window.scrollY + "px";
      } else if (this.position === "bottom  ") {
        contentWrapper.style.left = left + window.scrollX + "px";
        contentWrapper.style.top = top + height + window.scrollY + "px";
      } else if (this.position === "left") {
        contentWrapper.style.left = left + window.scrollX + "px";
        const { height: height2 } = contentWrapper.getBoundingClientRect();
        contentWrapper.style.top =
          top + window.scrollY + (height - height2) / 2 + "px"; //使popover弹出层与按钮对齐
      } else if (this.position === "right") {
        contentWrapper.style.left = left + window.scrollX + width + "px";
          const { height: height2 } = contentWrapper.getBoundingClientRect();
        contentWrapper.style.top = top + window.scrollY + (height - height2) / 2 + "px";  //使popover弹出层与按钮对齐
      }
    },
    onClickDocument(e) {
      if (
        this.$refs.popover &&
        (this.$refs.popover === e.target ||
          this.$refs.popover.contains(e.target))
      ) {
        return;
      }
      if (
        this.$refs.contentWrapper &&
        (this.$refs.contentWrapper === e.target ||
          this.$refs.contentWrapper.contains(e.target))
      ) {
        return;
      }
      this.close();
    },
    open() {
      this.popoverVisible = true;
      this.$nextTick(() => {
        this.PositionContent();
        document.addEventListener("click", this.onClickDocument);
      });
    },
    close() {
      this.popoverVisible = false;
      document.removeEventListener("click", this.onClickDocument);
    },
    onClick(event) {
      if (this.$refs.triggerWrapper.contains(event.target)) {
        //如果点击的是触发弹出层的按钮
        if (this.popoverVisible === true) {
          this.close();
        } else {
          this.open();
        }
      }
    },
  },
};
</script>

<style lang="scss">
$border-color: #333;
$border-radius: 4px;
.g-popover {
  display: inline-block;
  vertical-align: top;
  position: relative;
}
.g-popover-content-wrapper {
  position: absolute;
  border: 1px solid $border-color;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.5);
  padding: 0.5em 1em;
  max-width: 20em;
  &::before,
  &::after {
    content: "";
    display: block;
    border: 10px solid transparent;
    width: 0px;
    height: 0px;
    position: absolute;
  }
  &.position-top {
    margin-top: -10px;
    transform: translateY(-100%);
    &::before,
    &::after {
      left: 10px;
    }
    &::before {
      border-top-color: black;
      top: 100%;
    }
    &::after {
      border-top-color: white;
      top: calc(100% - 1px);
    }
  }
  &.position-bottom {
    margin-top: 10px;
    &::before,
    &::after {
      left: 10px;
    }
    &::before {
      border-bottom-color: black;
      bottom: 100%;
    }
    &::after {
      border-bottom-color: white;
      bottom: calc(100% - 1px);
    }
  }
  &.position-left {
    transform: translateX(-100%);
    margin-left: -10px;
    &::before,
    &::after {
      transform: translateY(-50%);
      top: 50%;
    }
    &::before {
      border-left-color: black;
      left: 100%;
    }
    &::after {
      border-left-color: white;
      left: calc(100% - 1px);
    }
  }
  &.position-right {
    margin-left: 10px;
    &::before,
    &::after {
      transform: translateY(-50%);
      top: 50%;
    }
    &::before {
      border-right-color: black;
      right: 100%;
    }
    &::after {
      border-right-color: white;
      right: calc(100% - 1px);
    }
  }
}
</style>

