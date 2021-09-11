<template>
  <div class="g-popover" @click="xxx">
    <div class="g-popover-content-wrapper" v-if="popoverVisible">
      <slot name="content"></slot>
    </div>
    <slot></slot>
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
    xxx() {
      this.popoverVisible = !this.popoverVisible;
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
  .g-popover-content-wrapper{
      position: absolute;
      bottom: 100%;
      left: 0;
      border: 1px solid red;
      box-shadow: 0 0 3px rgba(0,0,0,.5);
  }
}
</style>

