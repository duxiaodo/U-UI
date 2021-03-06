<template>
	<div class="o-popover">
		<div
			@mouseenter="flag = false"
			@mouseleave="contentLeave"
			v-if="isShow"
			:class="{
				'popover-content': true,
				['popover-content-' + position]: position,
			}"
		>
			<slot name="content"></slot>
		</div>
		<div
			@click.stop="buttonClick"
			@mouseenter="buttonEnter"
			@mouseleave="buttonLeave"
		>
			<slot></slot>
		</div>
	</div>
</template>
<script>
export default {
	data() {
		return {
			isShow: false,
			flag: true,
		}
	},
	props: {
		position: {
			type: String,
			default: 'top',
		},
		trigger: {
			type: String,
			default: 'click',
			validator(prop) {
				return ['click', 'hover'].includes(prop)
			},
		},
	},
	methods: {
		buttonClick(e) {
			this.isShow = !this.isShow
			let popoverClick = () => {
				this.flag && (this.isShow = false)
				document.removeEventListener('click', popoverClick)
			}
			document.addEventListener('click', popoverClick)
		},
		buttonEnter() {
			if (this.trigger === 'hover') {
				this.isShow = true
			}
		},
		buttonLeave() {
			if (this.trigger === 'hover') {
				setTimeout(() => {
					this.flag && (this.isShow = false)
				}, 200)
			}
		},
		contentLeave() {
			if (this.trigger === 'hover') {
				this.isShow = false
				this.flag = true
			} else {
				this.flag = true
			}
		},
	},
}
</script>
<style lang="scss" scoped>
$border-color: #999;

.o-popover {
	position: relative;
	display: inline-block;
	font-size: 14px;
	color: $border-color;

	.popover-content {
		position: absolute;
		padding: 10px 20px;
		width: 200px;
		border: 1px solid $border-color;
		filter: drop-shadow(0 1px 1px rgba(0, 0, 0, 0.5));
		background-color: #fff;
		border-radius: 4px;

		&::after {
			position: absolute;
			content: '';
			width: 0;
			height: 0;
			border: 10px solid $border-color;
		}

		&::before {
			position: absolute;
			z-index: 100;
			content: '';
			width: 0;
			height: 0;
			border: 10px solid #fff;
		}
	}

	.popover-content-top {
		top: -15px;
		transform: translate(0, -100%);

		&::after {
			transform: translateY(50%);
			border-left-color: transparent;
			border-right-color: transparent;
			border-bottom-color: transparent;
		}
		&::before {
			bottom: -18px;
			border-left-color: transparent;
			border-right-color: transparent;
			border-bottom-color: transparent;
		}
	}

	.popover-content-bottom {
		top: 15px;
		transform: translate(0, 50%);

		&::after {
			top: -20px;
			border-top-color: transparent;
			border-left-color: transparent;
			border-right-color: transparent;
		}
		&::before {
			top: -18px;
			border-top-color: transparent;
			border-left-color: transparent;
			border-right-color: transparent;
		}
	}

	.popover-content-left {
		left: -15px;
		transform: translate(-100%, 0);

		&::after {
			right: -20px;
			top: 10px;
			border-top-color: transparent;
			border-right-color: transparent;
			border-bottom-color: transparent;
		}
		&::before {
			right: -18px;
			border-top-color: transparent;
			border-right-color: transparent;
			border-bottom-color: transparent;
		}
	}
	.popover-content-right {
		left: 86px;

		&::after {
			top: 10px;
			left: -20px;
			border-top-color: transparent;
			border-left-color: transparent;
			border-bottom-color: transparent;
		}
		&::before {
			top: 10px;
			left: -18px;
			border-top-color: transparent;
			border-left-color: transparent;
			border-bottom-color: transparent;
		}
	}
	button {
		background-color: #409eff;
		padding: 10px 20px;
		outline: none;
		border: none;
		color: #fff;
	}
}
</style>