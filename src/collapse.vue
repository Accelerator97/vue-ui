<template>
  <div class="g-collapse">
    <slot></slot>
  </div>
</template>

<script>
import Vue from "vue";
export default {
  name: "gulu-collapse",
  props: {
    single: {
      type: Boolean,
      default: false,
    },
    selected: {
      type: Array,
    },
  },
  data() {
    return {
      eventBus: new Vue(),
    };
  },
  mounted() {
    // console.log(this.selected)
    this.eventBus.$emit("update:selected", this.selected); //父组件将selected传给子组件

    this.eventBus.$on("update:addSelected", (name) => {
      let selectedCopy = JSON.parse(JSON.stringify(this.selected));//实现深拷贝，因为不能直接操作props的selected
      if (this.single) {
        selectedCopy = [name];
      } else {
        selectedCopy.push(name);
      }
      this.eventBus.$emit("update:selected", selectedCopy);//向子组件传递选中项
      this.$emit("update:selected", selectedCopy);//向外部传递选中项
    });

    this.eventBus.$on("update:removeSelected", (name) => {
      let selectedCopy = JSON.parse(JSON.stringify(this.selected));
      let index = selectedCopy.indexOf(name);
      selectedCopy.splice(index, 1);
      this.eventBus.$emit("update:selected", selectedCopy);
      this.$emit("update:selected", selectedCopy);
    });
  },
  provide() {
    return {
      eventBus: this.eventBus,
    };
  },
};
</script>

<style lang="scss">
$grey: #ddd;
$border-radius: 4px;
.g-collapse {
  border: 1px solid $grey;
  border-radius: $border-radius;
}
</style>