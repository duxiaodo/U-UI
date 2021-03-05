<template>
    <div class="o-main">
        <slot></slot>
    </div>
</template>
<script>
export default {
    name: 'o-main',
}
</script>
<style scoped lang="scss">
.o-main {
    flex-grow: 1;
    background-color: #7dbcea;
}
</style>