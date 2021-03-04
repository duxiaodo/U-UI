<template>
	<i
		class="icon"
		:class="{
			['i-' + type]: type,
			[size]: size,
		}"
	></i>
</template>
<script>
export default {
  props: {
    type: String,
    size: {
      type: String,
      default: 'small',
    },
  },
};
</script>
<style lang="scss" scoped>
/* size */
.large {
	font-size: 40px;
}
.normal {
	font-size: 24px;
}
.small {
	font-size: 16px;
}

@font-face {
	font-family: 'icon';
	src: url('//at.alicdn.com/t/font_2390327_482unqx58hb.eot?t=1614652210349'); /* IE9 */
	src: url('//at.alicdn.com/t/font_2390327_482unqx58hb.eot?t=1614652210349#iefix')
			format('embedded-opentype'),
		/* IE6-IE8 */
			url('data:application/x-font-woff2;charset=utf-8;base64,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')
			format('woff2'),
		url('//at.alicdn.com/t/font_2390327_482unqx58hb.woff?t=1614652210349')
			format('woff'),
		url('//at.alicdn.com/t/font_2390327_482unqx58hb.ttf?t=1614652210349')
			format('truetype'),
		/* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
			url('//at.alicdn.com/t/font_2390327_482unqx58hb.svg?t=1614652210349#icon')
			format('svg'); /* iOS 4.1- */
}

.icon {
	font-family: 'icon' !important;
	font-style: normal;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
}

.i-close-fill:before {
	content: '\e651';
}

.i-help-fill:before {
	content: '\e655';
}

.i-warning-fill:before {
	content: '\e656';
}

.i-like-fill:before {
	content: '\e657';
}

.i-star-fill:before {
	content: '\e658';
}

.i-left-fill:before {
	content: '\e65b';
}

.i-right-fill:before {
	content: '\e65c';
}

.i-up-fill:before {
	content: '\e65d';
}

.i-down-fill:before {
	content: '\e65e';
}

.i-github-fill:before {
	content: '\e65f';
}

.i-quit:before {
	content: '\e60e';
}

.i-search:before {
	content: '\e60f';
}

.i-upload:before {
	content: '\e610';
}

.i-delete:before {
	content: '\e611';
}

.i-reset:before {
	content: '\e613';
}

.i-time:before {
	content: '\e616';
}

.i-argee:before {
	content: '\e617';
}

.i-update:before {
	content: '\e618';
}

.i-copy:before {
	content: '\e619';
}

.i-share:before {
	content: '\e61a';
}

.i-calendar:before {
	content: '\e61b';
}

.i-more:before {
	content: '\e61d';
}

.i-select:before {
	content: '\e61f';
}

.i-info:before {
	content: '\e8a2';
}

.i-warning:before {
	content: '\e697';
}

.i-error:before {
	content: '\e6c6';
}

.i-success:before {
	content: '\e600';
}

.i-loading:before {
	content: '\e68e';
}

.i-download:before {
	content: '\e650';
}

.i-down:before {
	content: '\e6af';
}

.i-settings:before {
	content: '\e604';
}

.i-like:before {
	content: '\e603';
}

.i-left:before {
	content: '\fd11';
}

.i-right:before {
	content: '\fd12';
}

.i-up:before {
	content: '\fd13';
}
</style>
