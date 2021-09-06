<template>
  <div class="g-col" :class="[`col-${span}`]">
    <slot />
  </div>
</template>

<script>
export default {
    name:"gulu-col",
    props:{
        span:{
            type:[Number,String]
        }
    }
}
</script>
<style lang="scss">
@use "sass:math";
.g-col {
  height: 100px;
  background: grey;
  width: 50%;
  border: 1px solid red;

  $class-prefix: col-;
  @for $n from 1 through 24 {
    &.#{$class-prefix}#{$n} {
      width: math.div($n,24) * 100%;
    }
  }
}
</style>