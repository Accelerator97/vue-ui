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
    console.log(this.selected)
    this.$children.forEach((vm) => {
      if (vm.$options.name === "gulu-tabs-header") {
        vm.$children.forEach((item) => {
          if (
            item.$options.name === "gulu-tabs-item" &&
            item.name === this.selected
          ) {
            console.log(item.$el);
            this.eventBus.$emit("update:selected", this.selected,item);
          } 
        });
      }
    });
  },
};
</script>

<style lang="scss">
</style>