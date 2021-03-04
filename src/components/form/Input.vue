<template>
	<div
		class="o-input"
		:class="{
			'suffix-icon': suffixIcon,
			'prefix-icon': prefixIcon,
		}"
	>
		<input
			:value="value"
			:type="type"
			:readonly="readonly"
			:disabled="disabled"
			:placeholder="placeholder"
			@input="$emit('input', $event.target.value)"
			@change="$emit('change', $event.target.value)"
			@blur="$emit('blur', $event.target.value)"
			@focus="$emit('focus', $event.target.value)"
		/>
		<icon
			:type="suffixIcon ? suffixIcon : prefixIcon"
			size="small"
			:style="{ color: '#999' }"
		></icon>
	</div>
</template>
<script>
import Icon from '../general/Icon';

export default {
  components: {
    Icon, 
  },
  props: {
    value: String,
    type: {
      type: String,
      default: 'text',
    },
    disabled: Boolean,
    placeholder: {
      type: String,
      default: '请输入内容。。。',
    },
    readonly: Boolean,
    'suffix-icon': String,
    'prefix-icon': String,
  },
  data() {
    return {};
  },
};
</script>
<style lang="scss" scoped>
$height: 32px;

.o-input {
	display: inline-flex;
	align-items: center;
	position: relative;
	height: $height;
	line-height: $height;

	input {
		font-size: 12px;
		height: inherit;
		line-height: inherit;
		padding: 0 10px;
		outline: none;
		color: #606266;
		cursor: pointer;
		border: 1px solid #dcdfe6;

		&:focus {
			border-color: #1989fa;
		}

		&:hover {
			box-shadow: 0 0 1px 0 #333;
		}

		&:disabled {
			cursor: not-allowed;
			box-shadow: none;
		}

		&:read-only {
			border-color: #999;
			box-shadow: none;
		}
	}
}

.suffix-icon {
	input {
		padding: 0 30px 0 10px;
	}

	i {
		position: absolute;
		right: 10px;
	}
}

.prefix-icon {
	input {
		padding: 0 10px 0 30px;
	}
	i {
		position: absolute;
		left: 10px;
	}
}
</style>
