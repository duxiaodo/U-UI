<template>
    <div class="o-collapse">
        <slot></slot>
    </div>
</template>
<script>
import Vue from 'vue'

export default {
    props: {
        activeName: {
            type: String,
            required: true
        },
        collapsed: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            eventBus: new Vue(),
        }
    },
    provide() {
        return {
            eventBus: this.eventBus
        }
    },
    mounted() {
        this.eventBus.$emit('collapse-change', this.activeName, this.collapsed)
    }
}
</script>
<style lang="scss" scoped>
.o-collapse {
    border-top: 1px solid #999;
}
</style>