<template>
	<div>
		<AppHeader />
		<Nuxt />
	</div>
</template>

<script>
import AppHeader from '~/components/AppHeader.vue'

export default {
	name: 'Layouts',
	components: {
		AppHeader,
	},
}
</script>

<style>
</style>
