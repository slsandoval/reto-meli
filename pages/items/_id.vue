<template>
	<div class="container">
		<Breadcrumb :items="breadcrumbs" />
		<ProductDetail :product="product" />
	</div>
</template>

<script>
import Breadcrumb from '~/components/Breadcrumb'
import ProductDetail from '~/components/ProductDetail'

export default {
	name: 'Detail',
	components: {
		Breadcrumb,
		ProductDetail,
	},
	data() {
		return {
			breadcrumbs: [
				{ text: 'Electronica', href: '' },
				{ text: 'Celulares', href: '' },
				{ text: 'Iphone', href: '' },
			],
			product: { 
				id: 1, 
				image: 'http://lorempixel.com/400/200', 
				price: 1900, 
				title: 'Aple touch1 5g 16gh Negro igual al nuevo', 
				description: 'Completo unico', 
				city: 'Bogota',
				status: 'Nuevo',
				stock: '234 vendidos',
			},
		}
	},
}
</script>
