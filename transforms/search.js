import { AUTHOR as author } from '~/transforms/author'

export function searchTransform(data) {
	const categories = mapCategories(data.filters)

	const items = data.results.map((item) => {
		return {
			id: item.id,
			title: item.title || '',
			price: {
				currency: item.currency_id || '',
				amount: item.price || 0,
				decimals: item.decimals || 0,
			},
			picture: item.thumbnail || '',
			condition: item.condition || '',
			free_shipping: item.shipping.free_shipping || false,
		}
	})

	return {
		author,
		categories,
		items,
	}
}

function mapCategories(categories) {
	if (!categories.length) {
		return []
	}

	const category = categories?.find(({ id }) => id === 'category') || {}
	return category?.values[0]?.path_from_root || []
}