<template>
	<div class="item">
		<o-popover class="popover">
			<template v-slot:content>
				<div>
					这是一段内容,这是一段内容。
				</div>
			</template>
			<button>点我</button>
		</o-popover>
		<o-popover class="popover" position="bottom">
			<template v-slot:content>
				<div>
					这是一段内容,这是一段内容。
				</div>
			</template>
			<button>点我</button>
		</o-popover>
		<o-popover class="popover" position="left">
			<template v-slot:content>
				<div>
					这是一段内容,这是一段内容。
				</div>
			</template>
			<button>点我</button>
		</o-popover>
		<o-popover class="popover" position="right" trigger='hover'>
			<template v-slot:content>
				<div>
					这是一段内容,这是一段内容。
				</div>
			</template>
			<button>点我</button>
		</o-popover>
	</div>
</template>

<script>
import OPopover from './components/other/Popover'

export default {
	name: 'App',
	components: {
		OPopover,
	},
}
</script>

<style lang="scss" scoped>
.item {
	.popover {
		margin: 100px 100px 0 100px;
	}

}
</style>
