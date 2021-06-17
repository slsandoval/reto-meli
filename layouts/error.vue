<template>
	<div class="container">
		<h1 v-if="error.statusCode === 404">Parece que esta página no existe 🤔</h1>
		<h1 v-else>Ha ocurrido un error 😱</h1>
		<NuxtLink to="/">Ir a la página principal</NuxtLink>
	</div>
</template>

<script>
export default {
	name: 'ErrorPage',
	props: ['error'],
}
</script>

<style lang="scss" scoped>
@import '~assets/scss/constants.scss';

.container {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	padding: 2rem;
}

h1 {
	text-align: center;
	font-size: $ml-title-text-s;
	font-weight: normal;
}
</style>
