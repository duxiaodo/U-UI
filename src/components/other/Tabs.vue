<template>
	<div class="o-tabs">
		<div class="o-tab-head">
			<span
				v-for="(item, i) in labelList"
				:key="'label' + i"
				:class="{
                    'o-tab-label': true,
                    'o-tab-active': item.name == chooseName
                }"
				@click="chooseLabel(item.name)"
				:name="item.name"

				>{{ item.label }}</span
			>
		</div>
		<slot></slot>
	</div>
</template>
<script>
import Vue from 'vue'
export default {
	props: {
		activeName: {
			type: String,
			required: true,
		},
	},
	data() {
		return {
			labelList: [],
            eventBus: new Vue(),
            chooseName: ''
		}
	},
	provide() {
		return {
			eventBus: this.eventBus,
		}
	},
	mounted() {
        this.chooseName = this.activeName
		this.$children.forEach((ele) => {
			let label = {
				label: ele.$options.propsData.label,
				name: ele.$options.propsData.name,
			}
			this.labelList.push(label)
		})

		this.eventBus.$emit('label-selected', this.chooseName)
	},
	methods: {
		chooseLabel(name) {
			// console.log(name, '发布了label-selected事件。')
            this.eventBus.$emit('label-selected', name)
            this.$emit('label-selected', name)
            this.chooseName = name
		},
	},
}
</script>
<style lang="scss" scoped>
.o-tabs {
	padding: 0 20px;

	.o-tab-head {
		border-bottom: 2px solid #ccc;
		display: flex;

		.o-tab-label {
			margin-right: 40px;
			padding: 10px 0;
			font-weight: 800;
			color: #333;
			font-size: 14px;
			cursor: pointer;
            margin-bottom: -2px;

			&:hover {
				color: #409eff;
			}
		}
        .o-tab-active {
            color: #409eff;
            border-bottom: 2px solid #409eff;
        }
	}
}
</style>