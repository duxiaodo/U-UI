<template>
	<div>
		<o-container class="item">
			<o-header>Header</o-header>
			<o-main>Main</o-main>
			<o-footer>Footer</o-footer>
		</o-container>

		<o-container class="item">
			<o-aside> Aside </o-aside>
			<o-container>
				<o-header>Header</o-header>
				<o-main>Main</o-main>
				<o-footer>Footer</o-footer>
			</o-container>
		</o-container>

		<o-container>
			<o-header>Header</o-header>
			<o-container>
				<o-aside>Aside</o-aside>
				<o-main>Main</o-main>
			</o-container>
			<o-footer>Footer</o-footer>
		</o-container>
	</div>
</template>
<script>
import OContainer from './components/layout/Container'
import OHeader from './components/layout/Header'
import OAside from './components/layout/Aside'
import OMain from './components/layout/Main'
import OFooter from './components/layout/Footer'

export default {
	components: {
		OContainer,
		OHeader,
		OAside,
		OMain,
		OFooter,
	},
	methods: {
		handleInput() {
			console.log(this.searchText)
		},
	},
}
</script>
<style lang="scss" scoped>
.item {
	margin-bottom: 20px;
}
</style>