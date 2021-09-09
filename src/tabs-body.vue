<template>
  <div class="g-tabs-body">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "gulu-tabs-body",
  inject: ["eventBus"],
//   created() {
//     this.eventBus.$on("update:selected", (name) => {
//       console.log(name);
//     });
//   },
};
</script>

<style lang="scss">
</style>