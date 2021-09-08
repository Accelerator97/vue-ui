<template>
    <div class="g-content">
        <slot />
    </div>
</template>

<script>
export default {
    name:"gulu-content"

}
</script>

<style lang="scss">
.g-content{
    flex-grow: 1; //占满剩余空间

}
    
</style>