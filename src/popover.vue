<template>
  <div class="g-popover" ref="popover">
    <div
      class="g-popover-content-wrapper"
      v-if="popoverVisible"
      ref="contentWrapper"
      :class="{ [`position-${position}`]: true }"
    >
      <slot name="content" :close="close"></slot>
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
  computed: {
    openEvent() {
      if (this.trigger === "click") {
        return "click";
      } else {
        return "mouseenter";
      }
    },
    closeEvent() {
      if (this.trigger === "click") {
        return "click";
      } else {
        return "mouseenter";
      }
    },
  },
  props: {
    position: {
      type: String,
      default: "top",
      validator(value) {
        return ["top", "bottom", "left", "right"].indexOf(value) >= 0;
      },
    },
    trigger: {
      type: String,
      default: 'click',
      validator(value) {
        return ['click', 'hover'].indexOf(value) >= 0;
      },
    },
  },
  computed: {
    openEvent() {
      if (this.trigger === "click") {
        return "click";
      } else {
        return "mouseenter";
      }
    },
    closeEvent() {
      if (this.trigger === "click") {
        return "click";
      } else {
        return "mouseleave";
      }
    },
  },
  mounted(){
    if(this.trigger === 'click'){
      this.$refs.popover.addEventListener('click',this.onClick)
    } else {
      this.$refs.popover.addEventListener('mouseenter',this.open)
      this.$refs.popover.addEventListener('mouseleave',this.close)
    }
  },
  destroyed(){  
    if(this.trigger === 'click'){
      this.$refs.popover.removeEventListener('click',this.onClick)
    } else {
      this.$refs.popover.removeEventListener('mouseenter',this.open)
      this.$refs.popover.removeEventListener('mouseleave',this.close)
    }
  },
  methods: {
    PositionContent() {
      //popover弹出层位置
      const { contentWrapper, triggerWrapper } = this.$refs;
      document.body.appendChild(this.$refs.contentWrapper);
      const { width, height, top, left } =
        triggerWrapper.getBoundingClientRect();
      const { height: height2 } = contentWrapper.getBoundingClientRect();
      let position = {
        top: {
          top: top + window.scrollY,
          left: left + window.scrollX,
        },
        bottom: {
          top: top + height + window.scrollY,
          left: left + window.scrollX,
        },
        left: {
          top: top + window.scrollY + (height - height2) / 2,
          left: left + window.scrollX,
        },
        right: {
          top: top + window.scrollY + (height - height2) / 2,
          left: left + window.scrollX + width,
        },
      };
      contentWrapper.style.left = position[this.position].left + "px";
      contentWrapper.style.top = position[this.position].top + "px";
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
  border-radius: $border-radius;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.5);
  background: white;
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
      border-bottom: none;
      border-top-color: black;
      top: 100%;
    }
    &::after {
      border-bottom: none;
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
      border-top: none;
      border-bottom-color: black;
      border-top: none;
      bottom: 100%;
    }
    &::after {
      border-top: none;
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
      border-right: none;
      border-right: none;
      border-left-color: black;
      left: 100%;
    }
    &::after {
      border-right: none;
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
      border-left: none;
      border-left: none;
      border-right-color: black;
      right: 100%;
    }
    &::after {
      border-left: none;
      border-right-color: white;
      right: calc(100% - 1px);
    }
  }
}
</style>

