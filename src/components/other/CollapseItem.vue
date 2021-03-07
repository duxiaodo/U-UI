<template>
	<div class="o-collapse-item">
		<div class="o-title" @click="handleClick(name)">
			<span>{{ title }}</span>
			<icon type="right" :class="{ rotate: isShow }"></icon>
		</div>
		<div class="o-content" v-show="isShow" :class="{ show: isShow }">
			<slot></slot>
		</div>
	</div>
</template>
<script>
import Icon from '../general/Icon'

export default {
	components: {
		Icon,
	},
	props: {
		title: {
			type: String,
			required: true,
		},
		name: {
			type: String,
			required: true,
		},
	},
	data() {
		return {
			isShow: false,
			collapsed: false,
		}
	},
	inject: ['eventBus'],
	mounted() {
		this.eventBus.$on('collapse-change', (activeName, collapsed) => {
			this.collapsed = collapsed

			if (collapsed) {
				if (activeName === this.name) {
					this.isShow = !this.isShow
					// console.log('选中了', this.title)
				}
			} else {
				if (activeName === this.name) {
					this.isShow = !this.isShow
					// console.log('选中了', this.title)
				} else {
					this.isShow = false
				}
			}
		})
	},
	methods: {
		handleClick(name) {
			this.eventBus.$emit('collapse-change', name, this.collapsed)
        },
	},
}
</script>
<style lang="scss" scoped>
.o-collapse-item {
	.o-title {
		padding: 10px 20px;
		border: 1px solid #999;
		border-top: none;
		cursor: pointer;
		font-size: 14px;
		display: flex;
		justify-content: space-between;

		&:hover {
			background-color: #409eff;
			color: #fff;
		}
		
		i {
			transition: all 1s;
		}
		.rotate {
			transform: rotate(90deg);
		}
	}
	.o-content {
		border: 1px solid #999;
        padding: 10px;
		border-top: none;
		color: #666;
		font-size: 14px;
		overflow: hidden;
	}

	.show {
		animation: test 1s linear forwards;

        @keyframes test {
            0% {
                height: 0;
            }
            100% {
                height: 40px;
            }
        }
	}
}
</style>