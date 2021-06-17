<template>
	<div class="container">
		<div class="not-info">No encontramos información relacionada 😟</div>
	</div>
</template>

<script>
export default {
	name: 'NotInfo',
}
</script>

<style lang="scss" scoped>
@import '~assets/scss/constants.scss';

.container {
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 2rem;
}

.not-info {
	text-align: center;
	font-size: $ml-title-text-s;
}
</style>
