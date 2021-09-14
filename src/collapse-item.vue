<template>
  <div class="g-collapse-item">
    <div class="g-collapse-title" @click="toggle" :data-name="name">
      {{ title }}
    </div>
    <div class="g-collapse-content" v-if="open" >
      <slot></slot>
    </div>
  </div>
</template>

<script>

export default {
  name: "gulu-collapse-item",
  props: {
    title: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      open: false,
      single: false,
    };
  },
  inject: ["eventBus"],
  mounted() {
    // console.log(this.name)
    // console.log(this.title)
    this.eventBus &&
      this.eventBus.$on("update:selected", (names) => {
        //监听传递的子组件是否包含自己
        if (names.indexOf(this.name) >= 0) {
          //如果传递的子组件包含自己，则打开自己
          this.open = true;
        } else {
          //如果传递的子组件不包含自己，则关闭
          this.open = false;
        }
      });
  },
  methods: {
    toggle() {
      if (this.open) {
        this.eventBus &&
          this.eventBus.$emit("update:removeSelected", this.name);
        //点击的时候，如果自己已经被选中，通知父组件，自己将要被移除
      } else {
        this.eventBus && this.eventBus.$emit("update:addSelected", this.name);
        //点击的时候，如果自己没有选中，通知父组件，自己将要被添加
      }
    },
  },
};
</script>

<style lang="scss">
$grey: #ddd;
$border-radius: 4px;
.g-collapse-item {
  > .g-collapse-title {
    border: 1px solid $grey;
    margin-top: -1px; //使得item的边框与collapse的边框重合
    margin-left: -1px; //使得item的边框与collapse的边框重合
    margin-right: -1px; //使得item的边框与collapse的边框重合
    min-height: 32px;
    display: flex;
    align-items: center;
    padding: 0 8px;
  }
  &:first-child {
    > .g-collapse-title {
      border-top-left-radius: $border-radius;
      border-top-right-radius: $border-radius;
    }
  }
  &:last-child {
    > .g-collapse-title {
      border-bottom-left-radius: $border-radius;
      border-bottom-right-radius: $border-radius;
    }
  }
  > .g-collapse-content {
    padding: 0 8px;
  }
}
</style>