<template>
	<div class="container">
		<div class="loader">✻</div>
	</div>
</template>

<script>
export default {
	name: 'Loader',
}
</script>

<style lang="scss" scoped>
.container {
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 2rem;
}

@keyframes rotating {
	from {
		transform: rotate(0deg);
	}

	to {
		transform: rotate(360deg);
	}
}

.loader {
	animation: rotating 3s linear infinite;
	font-size: 3rem;
}
</style>
