<template>
	<div class="breadcrumb container">
		<a v-for="(item, index) in items" :key="index" href="">
			{{ item.text }}
		</a>
	</div>
</template>

<script>
export default {
	name: 'Breadcrumb',
	props: {
		items: {
			type: Array,
			require: true,
		},
	},
}
</script>

<style lang="scss" scoped>
@import '~assets/scss/constants.scss';

.breadcrumb {
	display: flex;
	align-items: center;
	justify-content: flex-start;
	padding: $ml-space-1-x 0;

	a {
		position: relative;
		text-decoration: none;
		color: $grey-darken-1;
		font-size: $ml-body-text-m;

		&:last-child {
			font-weight: bold;
		}

		&:not(:last-child) {
			margin-right: $ml-space-1-and-half-x;

			&::after {
				position: absolute;
				content: '\203A';
				right: -$ml-space-1-x;
			}
		}
	}
}
</style>