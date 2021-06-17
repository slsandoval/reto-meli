<template>
	<div>
		<AppHeader />
		<Nuxt />
	</div>
</template>

<script>
import AppHeader from '~/components/layout/AppHeader.vue'

export default {
	name: 'Layout',
	components: {
		AppHeader,
	},
}
</script>
