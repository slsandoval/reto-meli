<template>
	<footer>
		<div class="container">
			Reto ML -
			<a href="https://www.linkedin.com/in/lorena-sandoval-gonzalez/" target="_blank">
				@Lorena Sandoval
			</a>
		</div>
	</footer>
</template>

<script>
export default {
	name: 'Index',
}
</script>

<style lang="scss" scoped>
@import '~/assets/scss/constants.scss';

footer {
	position: fixed;
	bottom: 0;
	left: 0;
	width: 100%;
	background: $grey;
	padding: $ml-space-quarter-x;
	text-align: center;
	font-size: $ml-body-text-m;
}
</style>
