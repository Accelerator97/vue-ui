<template>
    <div class="g-tabs-item">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name:'gulu-tabs-item',
    props:{
        disabled:{
            type:Boolean,
            default:false
        }
    }
}
</script>

<style lang="scss">
</style>