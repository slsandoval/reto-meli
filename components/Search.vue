<template>
	<!-- <div> -->
		<input type="text" tabindex="1" placeholder="Nunca dejes de buscar">
	<!-- </div> -->
</template>

<script>
export default {
	name: 'Search',
}
</script>

<style lang="scss" scoped>
@import '~assets/scss/constants.scss';

input {
	width: calc(100% - 100px);
	padding-left: $ml-space-1-x;
	border-radius: $ml-space-quarter-x;
	border: none;
	font-size: $ml-body-text-xl;

	&:hover,
	&:focus {
		// border: 1px solid $grey-lighten;
		box-shadow: 0 0 3px 0;
		outline: none;
	}
}
</style>
