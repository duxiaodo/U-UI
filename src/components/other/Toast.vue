<template>
	<div class="o-toast" :class="{ [position]: position }">
		<icon
			v-if="icon"
			:type="icon"
			size="normal"
			:style="{ margin: '0 10px 0 -10px' }"
		></icon>
		<div class="item">
			<div class="header">
				<span class="title">{{ title }}</span>
				<span @click="handleClose">
					<icon class="close" type="error" size="normal"></icon>
				</span>
			</div>
			<div class="content" v-if="useHtml" v-html="content"></div>
			<div class="content" v-else>{{ content }}</div>
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
		icon: String,
		title: {
			type: String,
			default: '提示',
		},
		content: {
			type: String,
			default: '这是一个提示信息。',
		},
		position: {
			type: String,
			default: 'top-center',
		},
		useHtml: {
			type: Boolean,
			default: false,
		},
		closeOptions: {
			type: Object,
			default() {
				return {
					delay: 2000,
					callback() {
						console.log('Toast Callback...')
					}
				}
			}
		}

	},
	methods: {
		handleClose() {
			this.$el.remove()
			this.$destroy()
			this.closeOptions.callback()
		},
	},
	mounted() {
		this.closeOptions.delay &&
			setTimeout(() => {
				this.$el.remove()
				this.$destroy()
			}, this.closeOptions.delay)
	},
}
</script>

<style scoped lang="scss">
.o-toast {
	display: flex;
	position: fixed;
	border-radius: 10px;
	box-sizing: border-box;
	box-shadow: 0 0 2px 0 #999;
	padding: 10px 20px;

	.item {
		width: 400px;

		.header {
			display: flex;
			justify-content: space-between;
			color: #000;
			margin-bottom: 10px;

			.title {
				font-weight: 1000;
				font-size: 16px;
			}
			.close {
				cursor: pointer;

				&:hover {
					color: #f40;
				}
			}
		}

		.content {
			color: #666;
		}
	}
}

.top-center {
	animation: TopCenter 1s linear forwards;
}
.bottom-center {
	animation: BottomCenter 1s linear forwards;
}
.top-left {
	animation: TopLeft 1s linear forwards;
}
.top-right {
	animation: TopRight 1s linear forwards;
}
.bottom-left {
	animation: BottomLeft 1s linear forwards;
}
.bottom-right {
	animation: BottomRight 1s linear forwards;
}
@keyframes TopCenter {
	0% {
		top: 0;
		left: 50%;
		transform: translate(-50%, 0);
	}
	100% {
		left: 50%;
		transform: translate(-50%, 0);
		top: 20px;
	}
}

@keyframes BottomCenter {
	0% {
		bottom: 0;
		left: 50%;
		transform: translate(-50%, 0);
	}
	100% {
		left: 50%;
		transform: translate(-50%, 0);
		bottom: 20px;
	}
}

@keyframes TopLeft {
	0% {
		top: 20px;
		left: -300px;
	}
	100% {
		top: 20px;
		left: 20px;
	}
}

@keyframes TopRight {
	0% {
		top: 20px;
		right: -500px;
	}
	100% {
		top: 20px;
		right: 20px;
	}
}

@keyframes BottomLeft {
	0% {
		bottom: 20px;
		left: -300px;
	}
	100% {
		bottom: 20px;
		left: 20px;
	}
}
@keyframes BottomRight {
	0% {
		bottom: 20px;
		right: -500px;
	}
	100% {
		bottom: 20px;
		right: 20px;
	}
}
</style>