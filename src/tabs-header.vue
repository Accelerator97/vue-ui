<template>
  <div class="g-tabs-header">
    <slot></slot>
    <div class="g-tabs-line" ref="line"></div>
    <div class="actions-wrapper">
      <slot name="actions"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "gulu-tabs-header",
  inject: ["eventBus"],
  mounted() {
    this.eventBus.$on("update:selected", (name, vm) => {
      let { width, height, top, left } = vm.$el.getBoundingClientRect();
      this.$refs.line.style.width = `${width}px`
      this.$refs.line.style.left = `${left}px`
    });
  },
};
</script>

<style lang="scss">
$tabs-height: 40px;
<<<<<<< HEAD
$tabs-blue: blue;
=======
$tabs-blue:blue;
>>>>>>> tabs
.g-tabs-header {
  display: flex;
  height: $tabs-height;
  justify-content: flex-start;
  align-items: center;
  border: 1px solid red;
  position: relative;
<<<<<<< HEAD
  .actions-wrapper {
    margin-left: auto;
  }
  > .g-tabs-line {
    position: absolute;
    bottom: 0;
    border-bottom: 1px solid $tabs-blue;
    width: 100px;
=======
  .actions-wrapper{
      margin-left: auto;
>>>>>>> tabs
  }
  .g-tabs-line {
    position: absolute;
    bottom: 0;
    border-bottom: 1px solid $tabs-blue;
    width: 100px;
    transition: all 350ms;
  }
}
</style>