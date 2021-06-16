import { BASE_URL } from '~/endpoints/constants'
import { searchTransform } from '~/transforms/search'

export async function search(query) {
	try {
		const response = await fetch(`${BASE_URL}/sites/MLA/search?q=:${query}`, {
			method: 'GET',
		})
		const data = await response.json()
		if (response.status === 200 && Object.keys(data).length) {
			return { data: searchTransform(data), error: false  }
		} else {
			throw new Error('No se encontró información')
		}
	} catch (error) {
		return { data: null, error }
	}
}