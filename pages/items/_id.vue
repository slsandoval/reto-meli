<template>
	<div class="container">
		<Breadcrumb :items="breadcrumbs" />
		<ProductDetail :product="product" />
	</div>
</template>

<script>
import Breadcrumb from '~/components/Breadcrumb'
import ProductDetail from '~/components/ProductDetail'
import { getDetail } from '~/endpoints/detail'

export default {
	name: 'Detail',
	components: {
		Breadcrumb,
		ProductDetail,
	},
	data() {
		return {
			id: '',
			responseAPI: '',
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
	watch: {
		'$route.params' : {
			handler() {
				this.id = this.$route.params.id
				this.launchGetDetail()
			},
			deep: true,
			immediate: true,
		},
	},
	methods: {
		async launchGetDetail() {
			this.responseAPI = await getDetail(this.id)
		},
	},
}
</script>
