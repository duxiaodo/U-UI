<template>
    <div class="o-container" :class="{'aside': aside}">
        <slot></slot>
    </div>
</template>
<script>
export default {
    name: 'o-container',
    data() {
        return {
            aside: false
        }
    },
    mounted() {
        this.$children.forEach(ele => {
            if (ele.$options.name === 'o-aside') {
                this.aside = true
            }
        })
    }
}
</script>
<style scoped lang="scss">
.o-container {
    display: flex;
    flex-direction: column;
    flex: 1 1;
    height: 400px;
}
.aside {
    flex-direction: row;
}
</style>