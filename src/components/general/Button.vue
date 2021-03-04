<template>
	<button class="o-button" @click="handleClick" :class="{ [size]: size }" :disabled="disabled"
	:style="{'border-radius': round + 'px'}"
	>
		<icon
			v-if="icon"
			class="o-icon"
			:class="[
				position,
				{
					loading: isLoading,
					'i-loading': isLoading,
					['i-' + icon]: !isLoading,
				},
			]"
		></icon>
		<div class="content">
			<slot></slot>
		</div>
	</button>
</template>
<script>
import icon from './Icon';

export default {
  components: {
    icon,
  },
  props: {
    icon: String,
    position: {
      type: String,
      default: 'left',
      validator(prop) {
        return !(prop === 'left' && prop === 'right');
      },
    },
    loading: {
      type: Boolean,
      default: false,
    },
    size: {
      type: String,
      default: 'normal',
    },
    disabled: Boolean,
    round: Number,
  },
  data() {
    return {
      isLoading: '',
    };
  },
  mounted() {
    this.isLoading = this.loading;
  },
  methods: {
    handleClick() {
      if (this.loading) {
        this.isLoading = !this.isLoading;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
/* border */
$border-color-hover: #666;
$border-color: #409eff;
$box-shadow-color: rgba(0, 0, 0, 0.5);

/* button */
$button-active-bg: #eee;
$button-bg: #409eff;
$button-color: #fff;

/* size */
.large {
	padding: 8px 16px;
}
.normal {
	padding: 5px 10px;
}
.small {
	padding: 3px 5px;
}

@keyframes loading {
	0% {
		transform: rotate(0);
	}
	100% {
		transform: rotate(360deg);
	}
}

.o-button {
	border: 1px solid $border-color;
	background: $button-bg;
	vertical-align: middle;
	display: inline-flex;
	align-items: center;
	color: $button-color;
	font-size: 14px;

	&:hover {
		opacity: 0.5;
	}

	&:active {
		background-color: $button-active-bg;
	}

	&:focus {
		outline: none;
	}

	&[disabled] {
		cursor: not-allowed;
		opacity: 0.5;
	}

	.o-icon {
		color: #fff;
		font-weight: 800;
	}

	.left {
		order: 0;

		.content {
			order: 1;
		}
	}

	.right {
		order: 1;
		margin-left: 0.3em;
		margin-right: 0;

		.content {
			order: 0;
		}
	}

	.loading {
		animation: loading 2s linear infinite;
	}
}
</style>
