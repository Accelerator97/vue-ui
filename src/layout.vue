<template>
    <div class="g-layout" :class="layoutClass">
        <slot />
    </div>
</template>

<script>
export default {
    name:"gulu-layout",
    data(){
        return{
            layoutClass:{
                hasSider:false
            }
        }
    },
    mounted(){
        // console.log(this.$children[0].$options.name);
        this.$children.forEach((vm)=>{
            if(vm.$options.name === 'gulu-sider'){
                this.layoutClass.hasSider = true
            }
        })
    }

}
</script>
<style lang="scss">
.g-layout{
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    // border: 1px solid red;
    &.hasSider{
        flex-direction: row;
    }
}
    
</style>