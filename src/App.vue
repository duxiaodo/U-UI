<template>
	<div class="item">
		<o-tabs activeName="third">
			<o-tab-pane label="用户管理" name="first">用户管理。。。。。。</o-tab-pane>
			<o-tab-pane label="配置管理" name="second">配置费理。。。。。。</o-tab-pane>
			<o-tab-pane label="角色管理" name="third">角色管理。。。。。。</o-tab-pane>
			<o-tab-pane label="定时任务补偿" name="fourth">定时任务。。。。。。</o-tab-pane>
		</o-tabs>
	</div>
</template>

<script>
import OTabs from './components/other/Tabs'
import OTabPane from './components/other/TabPane'

export default {
	name: 'App',
	components: {
		OTabs,
		OTabPane
	},
}
</script>

<style lang="scss" scoped>
.item {
	button {
		background-color: #409eff;
		padding: 10px 20px;
		outline: none;
		border: none;
		color: #fff;
		border-radius: 5px;
		margin-right: 20px;
	}
}
</style>
