import { AUTHOR as author } from '~/transforms/author'

export function detailTransform(data) {
	const item = {
		id: data.id,
		title: data.title,
		price: {
			currency: data.currency_id,
			amount: data.price,
			decimals: 0,
		},
		// picture: data.pictures[0].url,
		condition: data.condition,
		free_shipping: data.shipping.free_shipping,
		sold_quantity: data.sold_quantity,
		description: data.description,
	}

	return {
		author,
		item,
	}
}

export function descriptionTransform(data) {
	return {
		description: data.plain_text,
	}
}