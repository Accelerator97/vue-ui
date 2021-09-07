<template>
  <div class="g-row" :style="rowStyle" :class="rowClass">
    <slot />
  </div>
</template>

<script>
export default {
  name: "gulu-row",
  props: {
    gutter: {
      type: [Number, String],
    },
    align: {
      type: String,
      validator(value) {
        return ["left", "right", "center"].includes(value);
      },
    },
  },
  mounted() {
    //运用mouted传递gutter给子组件
    this.$children.forEach((vm) => {
      vm.gutter = this.gutter;
    });
  },
  computed: {
    rowStyle() {
      let { gutter } = this;
      return {
        marginLeft: -gutter / 2 + "px",
        marginRight: -gutter / 2 + "px",
      };
    },
    rowClass() {
      let { align } = this;
      return [align && `align-${align}`];
    },
  },
};
</script>

<style lang="scss">
.g-row {
  display: flex;
  &.align-left {
    justify-content: flex-start;
  }
  &.align-center {
    justify-content: center;
  }
  &.align-right {
    justify-content: flex-end;
  }
}
</style>