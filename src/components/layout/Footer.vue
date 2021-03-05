<template>
    <div class="o-footer">
        <slot></slot>
    </div>
</template>
<script>
export default {
    name: 'o-footer',
}
</script>
<style scoped lang="scss">
.o-footer {
    height: 100px;
    line-height: 100px;
    background-color: #108ee9;
}
</style>