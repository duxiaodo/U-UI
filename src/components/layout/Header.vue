<template>
    <div class="o-header" :style="{height: '100px'}">
        <slot></slot>
    </div>
</template>
<script>
export default {
    name: 'o-header',
}
</script>
<style scoped lang="scss">
.o-header {
    height: 100px;
    line-height: 100px;
    background-color: #108ee9;
}
</style>