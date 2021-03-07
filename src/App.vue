<template>
	<div>
		<o-code-collapse :code="code">
			<icon type="right"></icon>
			sdfadfafadsfadsfad
		</o-code-collapse>
	</div>
</template>
<script>
import OCodeCollapse from './components/other/CodeCollapse'
import Icon from './components/general/Icon'

export default {
	components: {
		OCodeCollapse,
		Icon
	},
	data() {
		return {
			code: `	<div class="wrap">
		<!-- <div id="codeView" >
			
		</div> -->
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
	</div>`
		}
	},
}


</script>