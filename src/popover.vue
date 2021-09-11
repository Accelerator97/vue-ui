<template>
  <div class="g-popover" @click="onClick" ref="popover">
    <div
      class="g-popover-content-wrapper"
      v-if="popoverVisible"
      ref="contentWrapper"
    >
      <slot name="content"></slot>
    </div>
    <span ref="triggerWrapper">
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
  methods: {
    PositionContent() {
      //popover弹出层位置
      document.body.appendChild(this.$refs.contentWrapper);
      let { width, height, top, left } =
        this.$refs.triggerWrapper.getBoundingClientRect();
      this.$refs.contentWrapper.style.left = left + window.scrollX + "px";
      this.$refs.contentWrapper.style.top = top + window.scrollY + "px";
    },
    onClickDocument(e) { 
      if (
        this.$refs.popover &&
        (this.$refs.popover === e.target ||
          this.$refs.popover.contains(e.target))
      ) {return;}
      this.close();
    },
    open() {
      this.popoverVisible = true;
      this.$nextTick(() => {
        this.PositionContent();
        document.addEventListener('click',this.onClickDocument)
      });
    },
    close() {
      this.popoverVisible = false;
      document.removeEventListener("click", this.onClickDocument);
    },
    onClick(event) {
      if (this.$refs.triggerWrapper.contains(event.target)) {
        //如果点击的是触发弹出层的按钮
        if(this.popoverVisible === true) {
          this.close();
        }else{
            this.open()
        }
      }
    },
  },
};
</script>

<style lang="scss">
.g-popover {
  display: inline-block;
  vertical-align: top;
  position: relative;
  border: 1px solid blue;
}
.g-popover-content-wrapper {
  position: absolute;
  border: 1px solid red;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.5);
  transform: translateY(-100%);
}
</style>

