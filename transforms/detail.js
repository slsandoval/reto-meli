import { AUTHOR as author } from '~/transforms/author'

export function detailTransform(data, description, categories) {
	const item = {
		id: data.id,
		title: data.title || '',
		price: {
			currency: data.currency_id || '',
			amount: data.price || 0,
			decimals: data.decimals || 0,
		},
		picture: data.thumbnail || '',
		condition: data.condition || '',
		free_shipping: data.shipping.free_shipping || false,
		sold_quantity: data.sold_quantity || 0,
		description: description || data.description || '',
	}

	return {
		author,
		categories,
		item,
	}
}
