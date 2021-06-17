import { BASE_URL } from '~/endpoints/constants'
import { getDescription } from '~/endpoints/description'
import { getCategoriesById } from '~/endpoints/categories'
import { detailTransform } from '~/transforms/detail'

export async function getDetail(id) {
	try {
		const response = await fetch(`${BASE_URL}/items/${id}`, {
			method: 'GET',
		})
		const data = await response.json()
		if (response.status === 200 && Object.keys(data).length) {
			const description = await getDescription(id)
			const categories = await getCategoriesById(data.category_id)
			
			return { data: detailTransform(data, description, categories), error: false  }
		} else {
			throw new Error('No se encontró información')
		}
	} catch (error) {
		return { data: null, error }
	}
}
