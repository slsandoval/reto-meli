import { BASE_URL } from '~/endpoints/constants'
import { detailTransform } from '~/transforms/detail'

export async function getDetail(id) {
	const response = await fetch(`${BASE_URL}/items/${id}`, {
		method: 'GET',
	})
	const data = await response.json()
	return detailTransform(data)
	// if (response.status === 200 & )
}