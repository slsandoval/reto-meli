<template>
	<form class="search" @submit.prevent="search">
		<input v-model="query" type="text" tabindex="1" placeholder="Nunca dejes de buscar">
		<button type="submit" tabindex="2" @click.once="search">
			<img src="~/assets/imgs/ic_Search@2x.png" alt="buscar">
		</button>
	</form>
</template>

<script>
export default {
	name: 'Search',
	data() {
		return {
			query: '',
		}
	},
	methods: {
		search() {
			if (this.query) {
				this.$router.push(`/items?search=${this.query}`)
			}
		},
	},
}
</script>

<style lang="scss" scoped>
@import '~assets/scss/constants.scss';

.search {
	position: relative;
	width: 100%;
	height: 100%;

	input {
		width: 100%;
		height: 100%;
		padding-left: $ml-space-1-x;
		border-radius: $ml-space-quarter-x;
		border: none;
		font-size: $ml-body-text-xl;

		&:hover,
		&:focus {
			box-shadow: 0 0 3px 0;
			outline: none;
		}
	}

	button {
		position: absolute;
		top: 0;
		bottom: 0;
		right: 0;
		border: none;
		padding: $ml-space-half-x + 2px;

		img {
			height: 100%;
		}
	}
}
</style>
