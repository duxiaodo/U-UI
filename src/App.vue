<template>
	<div>
		<p></p>
		<div>
			<o-button size="large">基础按钮</o-button>
			<o-button size="normal">基础按钮</o-button>

			<o-button size="samll">基础按钮</o-button>
		</div>
		<div>
			<o-button size="large" disabled>禁用状态</o-button>
			<o-button size="normal" disabled>禁用状态</o-button>
			<o-button size="samll" disabled>禁用状态</o-button>
		</div>

		<div>
			<o-button
				:icon="'search'"
				>搜索</o-button
			>
			<o-button
				:icon="'upload'"
				position="right"
				>上传</o-button
			>
			<o-button
				:icon="'info'"
				></o-button
			>
			<o-button
				:icon="'success'"
				></o-button
			>
		</div>

		<div>
			<o-button size="large" :round="5" >圆角按钮</o-button>
			<o-button size="normal" :round="10" >圆角按钮</o-button>
			<o-button size="small" :round="15" >圆角按钮</o-button>
		</div>

		<div>
			<o-button
				:icon="'download'"
				iconPosition="right"
				:loading="true"
				>加载中</o-button
			>
		</div>
	</div>
</template>
<script>
import OButton from './components/general/Button'

export default {
	components: {
		OButton,
	},
}
</script>
<style lang="scss" scoped>
button {
	margin-right: 20px;
	margin-bottom: 20px;
}
</style>