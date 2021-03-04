<template>
	<div
		class="o-row"
		:style="{
			'justify-content': justify,
			'align-items': align
			}"
	>
		<slot></slot>
	</div>
</template>
<script>
export default {
	props: {
		gutter: Number,
		justify: String,
		align: String
	},
	mounted() {
		this.$children.forEach((ele, index) => {
            if (index !== this.$children.length - 1) {
                ele.$el.style.marginRight = this.gutter + 'px'
            }
		})
	},
}
</script>
<style lang="scss" scoped>
.o-row {
	display: flex;
}

</style>