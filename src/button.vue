<template>
  <button class="g-button" :class="{[`icon-${position}`]: true}">
    <svg v-if="icon" class="icon" aria-hidden="true">
      <use :xlink:href="`#icon-${icon}`"></use>
    </svg>
    <div class="content">
      <slot />
    </div>
  </button>
</template>

<script>
export default {
  props: ["icon", "position"],
};
</script>

<style lang="scss">
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
  > .content{
      order: 2;
  }
  >.icon{
      order: 1;
      margin-right: .1em;
  }
  &.icon-right{
      >.content{
          order: 1;
      }
      >.icon{
          order: 2;
          margin-right: .1em;
          margin-left: 0
      }
  }
}
</style>