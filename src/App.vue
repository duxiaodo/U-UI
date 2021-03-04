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
			<o-button :icon="'search'">搜索</o-button>
			<o-button :icon="'upload'" position="right">上传</o-button>
			<o-button :icon="'info'"></o-button>
			<o-button :icon="'success'"></o-button>
		</div>

		<div>
			<o-button size="large" :round="5">圆角按钮</o-button>
			<o-button size="normal" :round="10">圆角按钮</o-button>
			<o-button size="small" :round="15">圆角按钮</o-button>
		</div>

		<div>
			<o-button :icon="'download'" iconPosition="right" :loading="true"
				>加载中</o-button
			>
		</div>
		<div>
			<o-button-group>
				<o-button icon="left" position="left">上一页</o-button
				><o-button icon="right" position="right">下一页</o-button>
			</o-button-group>
			<o-button-group>
				<o-button icon="delete" position="left"></o-button
				><o-button icon="update" position="right"></o-button
				><o-button icon="share" position="left"></o-button>
			</o-button-group>
		</div>
		<div>
			<h4>基础用法</h4>
			<o-input></o-input>
		</div>
		<div>
			<h4>disabled</h4>
			<o-input disabled></o-input>
		</div>
		<div>
			<h4>readonly</h4>
			<o-input readonly></o-input>
		</div>
		<div>
			<h4>带 icon 的输入框</h4>
			<o-input
				prefix-icon="update"
				class="item"
				v-model="searchText"
				@input="handleInput"
			></o-input>
			<o-input suffix-icon="info"></o-input>
		</div>
						<o-row class="item">
			<o-col class="bg-blue">col-12</o-col>
			<o-col class="bg-gray">col-12</o-col>
		</o-row>
		<o-row class="item">
			<o-col :span="10" class="bg-blue">col-10</o-col>
			<o-col :span="14" class="bg-gray">col-14</o-col>
		</o-row>
		<o-row class="item">
			<o-col :span="2" class="bg-blue">col-2</o-col>
			<o-col :span="4" class="bg-gray">col-4</o-col>
			<o-col :span="6" class="bg-blue">col-6</o-col>
			<o-col :span="12" class="bg-gray">col-12</o-col>
		</o-row>

		<h3>分栏间隔</h3>
		<o-row class="item" :gutter="20">
			<o-col class="bg-blue">col-12</o-col>
			<o-col class="bg-gray">col-12</o-col>
		</o-row>
		<o-row class="item" :gutter="40">
			<o-col :span="10" class="bg-blue">col-10</o-col>
			<o-col :span="14" class="bg-gray">col-14</o-col>
		</o-row>

		<h3>响应式</h3>
        <o-row class="item">
			<o-col class="bg-blue"  :xs="20" :sm="10" :md="5" >col-12 </o-col>
			<o-col class="bg-gray">col-12</o-col>
		</o-row>
        <o-row class="item">
			<o-col class="bg-blue" :span="8" :xs="20" :sm="10" :md="5"> col-12 </o-col>
			<o-col class="bg-gray" :span="16">col-12</o-col>
		</o-row>
	</div>
</template>
<script>
import OButton from './components/general/Button'
import OButtonGroup from './components/general/ButtonGroup'
import OInput from './components/form/Input'
import ORow from './components/layout/Row'
import OCol from './components/layout/Col'

export default {
	components: {
		OButton,
		OButtonGroup,
		OInput,
		ORow,
		OCol
	},
	data() {
		return {
			searchText: 'v-model',
		}
	},
	methods: {
		handleInput() {
			console.log(this.searchText)
		},
	},
}
</script>
<style lang="scss" scoped>
button {
	margin-right: 20px;
	margin-bottom: 20px;
}

$blue: #0092ff;
$gray: #d3dce6;

#app {
	border: 1px solid #f40;
}

.item {
	margin-bottom: 10px;

	.bg-blue {
		background: $blue;
	}

	.bg-gray {
		background: $gray;
	}
}
</style>