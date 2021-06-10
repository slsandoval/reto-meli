<template>
	<div>
		<Breadcrumb :items="breadcrumbs" />
	</div>
</template>

<script>
import Breadcrumb from '~/components/Breadcrumb'

export default {
	name: 'Items',
	components: {
		Breadcrumb,
	},
	data() {
		return {
			breadcrumbs: [
				{ text: 'Electronica', href: '' },
				{ text: 'Celulares', href: '' },
				{ text: 'Iphone', href: '' },
			],
		}
	},
}
</script>
