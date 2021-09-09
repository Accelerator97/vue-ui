<template>
  <div class="g-tabs-header">
    <slot></slot>
    <div class="actions-wrapper">
      <slot name="actions"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "gulu-tabs-header",
  inject: ["eventBus"],
//   created() {
//     this.eventBus.$on("update:selected", (name) => {
//       console.log(name);
//     });
//   },
};
</script>

<style lang="scss">
$tabs-height: 40px;
.g-tabs-header {
  display: flex;
  height: $tabs-height;
  justify-content: flex-start;
  align-items: center;
  border: 1px solid red;
  .actions-wrapper{
      margin-left: auto;
  }
}
</style>