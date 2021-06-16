import { BASE_URL } from '~/endpoints/constants'
import { searchTransform } from '~/transforms/search'

export async function search(query) {
	const response = await fetch(`${BASE_URL}/sites/MLA/search?q=:${query}`, {
		method: 'GET',
	})
	const data = await response.json()
	return searchTransform(data)
	// if (response.status === 200 & )
}