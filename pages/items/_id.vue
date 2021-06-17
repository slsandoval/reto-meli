<template>
	<div class="container">
		<Loader v-if="loading" />
		<template v-else-if="product">
			<Breadcrumb :items="breadcrumbs" />
			<ProductDetail :product="product" />
		</template>
		<NotInfo v-else />
	</div>
</template>

<script>
import Loader from '~/components/layout/Loader'
import Breadcrumb from '~/components/layout/Breadcrumb'
import NotInfo from '~/components/layout/NotInfo'
import ProductDetail from '~/components/products/ProductDetail'
import { getDetail } from '~/endpoints/detail'

export default {
	name: 'Detail',
	components: {
		Loader,
		Breadcrumb,
		ProductDetail,
		NotInfo,
	},
	data() {
		return {
			id: '',
			loading: true,
			breadcrumbs: [],
			product: undefined,
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
			const { data, error } = await getDetail(this.id)
			if (!error && data) {
				this.product = data.item
				this.breadcrumbs = data.categories
			}

			this.loading = false
		},
	},
}
</script>
