<template>
	<div class="o-tab-pane" v-if="isChoose" :name="name">
		<slot></slot>
	</div>
</template>
<script>
export default {
	props: {
		label: {
			type: String,
			required: true,
		},
		name: String,
	},
	data() {
		return {
			isChoose: true,
		}
	},
	inject: ['eventBus'],
	mounted() {
		// console.log('pane 订阅了label-selected事件。')
		this.eventBus.$on('label-selected', this.handleSelected)
	},
	methods: {
		handleSelected(name) {
			if (this.name === name) {
				// console.log(`pane：${this.name}，被选中了。`)
				this.isChoose = true
			} else {
				this.isChoose = false
			}
		},
	},
}
</script>
<style lang="scss" scoped>
.o-tab-pane {
	padding: 10px;
}
</style>