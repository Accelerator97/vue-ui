<template>
    <div class="g-toast">
        <slot />
    </div>
</template>

<script>
export default {
    name:'gulu-toast'
}
</script>

<style lang="scss">
$font-size:14px;
$toast-height:40px;
$toast-background:rgba(0,0,0,.75);
.g-toast{
    position: fixed;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    font-size: $font-size;
    height: $toast-height;
    line-height: 1.8;
    display: flex;
    align-items: center;
    background: $toast-background;
    box-shadow: 0px 0px 3px 0px rgba(0,0,0,.5);
    border-radius: 4px;
    color: white;
    padding: 0 16px;
}
    
</style>
