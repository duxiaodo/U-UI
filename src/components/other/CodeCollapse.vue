<template>
	<div class="wrap">
		<div class="o-components">
			<slot></slot>
		</div>
		<collapse>
			<div class="container" v-show="isActive" v-highlight>
				<pre><code v-text="code"></code></pre>
			</div>
		</collapse>
		<div
			@click="isActive = !isActive"
			:class="{ show: isActive, button: true }"
		>
			<icon
				:type="isActive ? 'up-fill' : 'down-fill'"
				size="normal"
			></icon>
		</div>
	</div>
</template>
<script>
import Icon from '../general/Icon'
import collapse from './collapsedown.js'

export default {
	data() {
		return {
			isActive: false,
		}
	},
	props: {
		code: String,
	},
	components: {
		collapse,
		Icon,
	},
}
</script>
<style lang="scss" scoped>
.wrap {
	box-shadow: 0 0 1px 0 #ccc;
	border: 1px solid #dedede;

	.o-components {
		border-bottom: 1px solid #ccc;
		padding: 10px;
	}
    .container {
        pre {
            padding: 20px;
            margin: 0;
			border-radius: 0;
        }
    }

	.button {
		height: 40px;
		line-height: 40px;
		background-color: #fff;
		border: none;
		cursor: pointer;
		text-align: center;
		width: 100%;

		&:hover {
			background-color: #fafafa;
		}
		&:hover i {
			color: #409eff;
		}
	}

	.show {
		border-top: 1px solid #ccc;
	}


}
</style>