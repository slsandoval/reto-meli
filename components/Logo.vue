<template>
	<picture>
		<img src="~/assets/imgs/Logo_ML@2x.png" alt="logo mercado libre">
	</picture>
</template>

<script>

export default {
	name: 'Logo',
}
</script>

<style lang="scss" scoped>
picture {
	width: 100%;
	text-align: left;

	img {
		height: 100%;
		object-fit: contain;
	}
}
</style>
