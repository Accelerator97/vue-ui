<template>
    <div class="g-tabs-item" @click="xxx" :class="classes">
        <slot></slot>
        <div class="g-tabs-line" ref="line"></div>
    </div>
</template>


 <script>
export default {
    name:'gulu-tabs-item',
    inject:['eventBus'],
    data(){
        return{
            active:false
        }
    },
    props:{
        disabled:{
            type:Boolean,
            default:false
        },
        name:{
            type:[String,Number],
            required:true
        }
    },
    computed:{
        classes(){
            return {
                active:this.active
            }
        }
    },
    created(){
        this.eventBus.$on('update:selected',(name)=>{
            if(name === this.name){
                this.active = true
            }else{
                this.active = false
            }
        })
    },
    methods:{
        xxx(){
            this.eventBus.$emit('update:selected',this.name)
        }
    }

}
</script>

<style lang="scss">
$tabs-blue:blue;
.g-tabs-item{
    padding: 0 1em;
    flex-shrink: 0;
    display: flex;
    align-items: center;
    height: 100%;
    cursor: pointer;
    &.active{
        background: red;
        color:$tabs-blue;
        font-weight: bold;
    }
}
</style>