<template>
  <div class="g-tabs">
    <slot></slot>
  </div>
</template>

<script>
import Vue from "vue";
export default {
  name: "gulu-tabs",
  props: {
    selected: {
      type: String,
      required: true,
    },
    direction: {
      type: String,
      default: "horizontal",
      validator(value) {
        return ["horizontal", "vertical"].indexOf(value) >= 0;
      },
    },
  },
  data() {
    return {
      eventBus: new Vue(),
    };
  },
  provide() {
    return {
      eventBus: this.eventBus,
    };
  },
  mounted() {
    this.$children.forEach((vm) => {
      if (vm.$options.name === "gulu-tabs-header") {
        //子元素为tabs-header
        vm.$children.forEach((childVm) => {
          if (
            childVm.$options.name === "gulu-tabs-item" && //孙元素为tabs-item
            childVm.name === this.selected //孙元素被选中
          ) {
            this.eventBus.$emit("update:selected", this.selected, childVm);
          }
        });
      }
    });
  },
};
</script>

<style lang="scss">
</style>