<template>
    <div class="g-popover">
        <slot name="slot"></slot>
        <slot></slot>
    </div>
</template>

<script>
export default {
    name:'gulu-popover'
}
</script>

<style lang="scss">
    .g-popover{
        display: inline-block;
        vertical-align: top;
    }
</style>