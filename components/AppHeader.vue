<template>
  <header>
		<div class="container">
			<Logo />
			<Search />
		</div>
  </header>
</template>

<script>
import Logo from '~/components/Logo.vue'
import Search from '~/components/Search.vue'

export default {
	name: 'AppHeader',
	components: {
		Logo,
		Search,
	},
}
</script>

<style lang="scss" scoped>
@import '~assets/scss/constants.scss';

header {
	width: 100%;
	background: $yellow;
}

.container {
	display: grid;
	grid-template-columns: 90px 1fr;
	grid-template-rows: 40px;
	padding: $ml-space-half-x 0;
}
</style>
