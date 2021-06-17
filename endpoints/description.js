import { BASE_URL } from '~/endpoints/constants'
import { descriptionTransform } from '~/transforms/description'

export async function getDescription(productId) {
	try {
		const response = await fetch(`${BASE_URL}/items/${productId}/description`, {
			method: 'GET',
		})
		const data = await response.json()
		return descriptionTransform(data)
	} catch (error) {
		return ''
	}
}
