<template>
    <div class="g-row">
        <slot />
    </div>
</template>

<script>
export default {
    name:"gulu-row"
}
</script>

<style lang="scss">
.g-row{
    display: flex;
}
</style>