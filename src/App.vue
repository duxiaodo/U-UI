<template>
	<div id="app">
		<button @click="handleClick">点我</button>
		<o-toast position="top-right" :autoClose="2000"> </o-toast>
	</div>
</template>

<script>
import oToast from './components/other/Toast'

export default {
	name: 'App',
	components: {
		oToast,
	},
	data() {
		return {
			propOptions: {
				icon: 'info',
				title: '提示！',
				content: '<h3>注意！</h3>这是一条APP来的告警！',
				useHtml: true,
				closeOptions: {
					delay: 0,
					callback() {
						console.log('APP Callback....')
					}
				}
			},
		}
	},
	methods: {
		handleClick() {
			this.$toast(this.propOptions)
		},
		log() {
			console.log('loog')
		},
	},
}
</script>

<style lang="scss">
</style>
