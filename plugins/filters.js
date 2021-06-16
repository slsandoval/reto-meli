import Vue from 'vue'

Vue.filter(
	'currency', ({ currency, decimals, amount }) => {
		const options = {
			style: 'currency',
			currency,
			maximumFractionDigits: decimals,
		}
		return new Intl.NumberFormat('es-AR', options).format(amount)
	},
)