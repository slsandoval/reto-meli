<template>
	<div class="container">
		<Breadcrumb :items="breadcrumbs" />
		<Product :products="products" />
	</div>
</template>

<script>
import Breadcrumb from '~/components/Breadcrumb'
import Product from '~/components/Product'
import { search } from '~/endpoints/search'

export default {
	name: 'Items',
	components: {
		Breadcrumb,
		Product,
	},
	data() {
		return {
			query: '',
			responseAPI: '',
			breadcrumbs: [
				{ text: 'Electronica', href: '' },
				{ text: 'Celulares', href: '' },
				{ text: 'Iphone', href: '' },
			],
			products: [
				{ id: 1, 
					image: 'http://lorempixel.com/400/200', 
					price: 1900, 
					title: 'Aple touch1 5g 16gh Negro igual al nuevo', 
					description: 'Completo unico', 
					city: 'Bogota' },
				{ id: 2, 
					image: 'http://lorempixel.com/400/200', 
					price: 2000, 
					title: 'Aple touch2 5g 16gh Negro igual al nuevo', 
					description: 'Completo unico', 
					city: 'manga' },
				{ id: 3, 
					image: 'http://lorempixel.com/400/200', 
					price: 2100, 
					title: 'Aple touch3 5g 16gh Negro igual al nuevo', 
					description: 'Completo unico', 
					city: 'cali' },
				{ id: 4, 
					image: 'http://lorempixel.com/400/200', 
					price: 2200, 
					title: 'Aple touch45g 16gh Negro igual al nuevo', 
					description: 'Completo unico', 
					city: 'medell' },
			],
		}
	},
	watch: {
		'$route.query.search' : {
			handler() {
				this.query = this.$route.query.search
				this.launchSearch()
			},
			deep: true,
			immediate: true,
		},
	},
	methods: {
		async launchSearch() {
			this.responseAPI = await search(this.query)
		},
	},
}
</script>
