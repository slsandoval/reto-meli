import { BASE_URL } from '~/endpoints/constants'
import { categoriesTransform } from '~/transforms/categories'

export async function getCategoriesById(categoryId) {
	if (!categoryId) {
		return []
	}

	try {
		const response = await fetch(`${BASE_URL}/categories/${categoryId}`, {
			method: 'GET',
		})
		const data = await response.json()
		return categoriesTransform(data)
	} catch (error) {
		return []
	}
}