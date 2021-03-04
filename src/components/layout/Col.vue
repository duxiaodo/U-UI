<template>
	<div
		:class="{
			['o-col-' + span]: span,
			['o-col-offset-' + offset]: offset,
			['o-col-lg-' + lg]: lg,
			['o-col-md-' + md]: md,
			['o-col-sm-' + sm]: sm,
            ['o-col-xs-' + xs]: xs,
		}"
	>
		<slot></slot>
	</div>
</template>
<script>
export default {
	props: {
		span: {
			type: Number,
			default: 12,
		},
		offset: Number,
		lg: Number,
		md: Number,
		sm: Number,
		xs: Number,
	},
}
</script>
<style lang="scss" scoped>
[class*='col'] {
	height: 100px;
    line-height: 100px;
	text-align: center;
}

@for $n from 1 to 24 {
	.o-col-#{$n} {
		width: ($n / 24) * 100%;
	}

	.o-col-offset-#{$n} {
		margin-left: ($n / 24) * 100%;
	}
}


@media (max-width: 1900px) {
	@for $n from 1 to 24 {
		.o-col-lg-#{$n} {
			width: ($n / 24) * 100%;
		}
	}
}

@media (max-width: 1200px) {
	@for $n from 1 to 24 {
		.o-col-md-#{$n} {
			width: ($n / 24) * 100%;
		}
	}
}

@media (max-width: 992px) {
	@for $n from 1 to 24 {
		.o-col-sm-#{$n} {
			width: ($n / 24) * 100%;
		}
	}
}

@media (max-width: 768px) {
	@for $n from 1 to 24 {
		.o-col-xs-#{$n} {
			width: ($n / 24) * 100%;
		}
	}
}

</style>