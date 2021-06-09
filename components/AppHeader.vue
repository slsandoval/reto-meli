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
	height: 60px;
	background: $yellow;
	padding: $ml-space-half-x 0;
}

.container {
	display: flex;
	justify-content: center;
	align-content: center;
}
</style>
