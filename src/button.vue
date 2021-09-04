<template>
  <button class="g-button" :class="{ [`icon-${position}`]: true }">
    <g-icon  class="icon" v-if="icon" :name="icon"></g-icon>
    <g-icon class="loading" name="loading"></g-icon>
    <div class="content">
      <slot/>
    </div>
  </button>
</template>

<script>
export default {

  props: {
    icon: {},
    position: {
      type: String,
      default: "left",
    //   validator(value) {
    //     if (value !== "left" && value !== "right") {
    //       return false;
    //     } else {
    //       return true;
    //     }
    //   },
    validaor(value) {
        return value === "left" || value === "right"
    }
    },
  },
};
</script>

<style lang="scss">
@keyframes spin{
    0%{transform: rotate(0deg);}
    100%{transform: rotate(360deg);}
}
.g-button {
  font-size: var(--font-size);
  height: var(--button-height);
  padding: 0 1em;
  border-radius: var(--border-radius);
  border: 1px solid var(--border-color);
  background: var(--button-bg);
  display: inline-flex; //转为弹性盒模型
  justify-content: center;
  align-items: center;
  vertical-align: middle;
  &:hover {
    border-color: var(--border-color-hover);
  }
  &:active {
    background-color: var(--button-active-bg);
  }
  &:focus {
    outline: none;
  }
  > .content {
    order: 2;
  }
  > .icon {
    order: 1;
    margin-right: 0.1em;
  }
  &.icon-right {
    > .content {
      order: 1;
    }
    > .icon {
      order: 2;
      margin-right: 0;
      margin-left: 0.1em;
    }
  }
  .loading{
      animation: spin 1s infinite linear;
  }
}
</style>