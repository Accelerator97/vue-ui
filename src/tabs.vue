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
  methods: {
    checkChildren(){
    if (this.$children.length === 0) {
      console && console.warn && console.warn('tabs组件只能是tabs-body和tabs-header')
    }
    },
    selectTab() {
      this.$children.forEach((vm) => {
        if (vm.$options.name === "gulu-tabs-header") {
          //子元素为tabs-header
          vm.$children.forEach((childVm) => {
            if (
              childVm.$options.name === "gulu-tabs-item"  &&//孙元素为tabs-item
               childVm.name === this.selected //孙元素被选中
            ) {
              this.eventBus.$emit("update:selected", this.selected, childVm);
            }
          });
        }
      });
    },
  },
  mounted() {
    this.checkChildren();
    this.selectTab()
    this.eventBus.$on("update:selected", (vm)=>{
        this.$emit('update:selected', vm);
    })
  },
};
</script>

<style lang="scss">
</style>