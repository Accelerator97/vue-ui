<template>
  <div class="g-tabs-item" @click="onClick" :class="classes" :data-name="name">
    <slot></slot>
  </div>
</template>


 <script>
export default {
  name: "gulu-tabs-item",
  inject: ["eventBus"],
  data() {
    return {
      active: false,
    };
  },
  props: {
    disabled: {
      type: Boolean,
      default: false,
    },
    name: {
      type: [String, Number],
      required: true,
    },
  },
  computed: {
    classes() {
      return {
        active: this.active,
        disabled: this.disabled, //动态绑定样式
      };
    },
  },
  created() {
    if (this.eventBus) {
      this.eventBus.$on("update:selected", (name) => {
         if(this.name === name ){
            return this.active = true
          }else{
            return this.active = false
          }
      });
    }
  },
  methods: {
    onClick() {
      if (this.disabled) {
        return;
      } //存在disabled直接退出
      this.eventBus && this.eventBus.$emit("update:selected", this.name, this);
      this.$emit('click',this)
    },
  },
};
</script>

<style lang="scss">
$tabs-blue: blue;
$disable-text-color: #ddd;
.g-tabs-item {
  padding: 0 1em;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  height: 100%;
  cursor: pointer;
  &.active {
    color: $tabs-blue;
    font-weight: bold;
  }
  &.disabled {
    //添加disabled对应样式
    color: $disable-text-color;
    cursor: not-allowed;
  }
}
</style>