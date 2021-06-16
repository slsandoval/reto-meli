<template>
	<div class="container">
		<Loader v-if="loading" />
		<template v-else-if="products.length">
			<Breadcrumb :items="breadcrumbs" />
			<Products :products="products" />
		</template>
		<NotInfo v-else />
	</div>
</template>

<script>
import Loader from '~/components/Loader'
import Breadcrumb from '~/components/Breadcrumb'
import Products from '~/components/Products'
import NotInfo from '~/components/NotInfo'
import { search } from '~/endpoints/search'

const ITEMS_TO_SHOW = 4

export default {
	name: 'Items',
	components: {
		Loader,
		Breadcrumb,
		Products,
		NotInfo,
	},
	data() {
		return {
			query: '',
			loading: true,
			breadcrumbs: [],
			products: [],
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
			const { data, error } = await search(this.query)
			if (!error && data) {
				this.products = data.items.slice(0, ITEMS_TO_SHOW)
				this.breadcrumbs = data.categories
			}

			this.loading = false
		},
	},
}
</script>
