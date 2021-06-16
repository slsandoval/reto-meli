import { AUTHOR as author } from '~/transforms/author'

export function searchTransform(data) {
	const categories = data.filters.map((item) => {
		return item.values.map((value) => value.name)
	})

	const items = data.results.map((item) => {
		return {
			id: item.id,
			title: item.title,
			price: {
				currency: item.currency_id,
				amount: item.price,
				decimals: 0,
			},
			picture: '',
			condition: item.condition,
			free_shipping: item.shipping.free_shipping,
		}
	})

	return {
		author,
		categories,
		items,
	}
}
