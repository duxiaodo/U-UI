<template>
    <div class="button-group">
        <slot></slot>
    </div>
</template>
<script>
export default {
  mounted() {
    this.$el.children.forEach((ele) => {
      if (ele.nodeName !== 'BUTTON') {
        console.warn(`ButtonGroup 的子元素应该全是baseButton组件，而你添加了:${ele.nodeName}`);
      }
    });
  },
};
</script>
<style scoped>
.button-group button {
    border-radius: 0;
}
.button-group :not(:first-child) {
    margin-left: -1px;
}
.button-group :first-child {
    border-top-left-radius: var(--border-radius);
    border-bottom-left-radius: var(--border-radius);
}
.button-group :last-child {
    border-top-right-radius: var(--border-radius);
    border-bottom-right-radius: var(--border-radius);
}
.button-group button:hover {
    position: relative;
    z-index: 1;
}
</style>
