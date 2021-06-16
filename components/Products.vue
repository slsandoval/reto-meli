<template>
	<div>
		<article v-for="item in products" :key="item.id">
			<NuxtLink :to="`/items/${ item.id }`" class="product-img">
				<picture>
					<img :src="item.picture" :alt="item.title" />
				</picture>
			</NuxtLink> 
			<div class="product-info">
				<NuxtLink :to="`/items/${ item.id }`" class="product-price">
					{{ item.price | currency }}
				</NuxtLink> 
				<h4>{{ item.title }}</h4>
				<div class="product-description">{{ item.description }}</div>
			</div>
		</article>
	</div>
</template>
	
<script>
export default {
	name: 'Products',
	props: {
		products: {
			type: Array,
			required: true,
		},
	},
}
</script>

<style lang="scss" scoped>
@import '~/assets/scss/constants.scss';

article {
	display: flex;
	padding: $ml-space-1-x;
	background: white;

	.product-img {
		width: $items-img-width;
		height: $items-img-heigth;
		margin-right: $ml-space-1-x;
		overflow: hidden;

		img {
			width: 100%;
			height: 100%;
			border-radius: $ml-space-quarter-x;
			object-fit: contain;
		}
	}

	.product-info {
		width: calc(100% - 180px);
	}

	.product-price {
		display: block;
		margin-bottom: $ml-space-2-x;
		font-size: $ml-title-text-s;
		text-decoration: none;
	}

	h4 {
		margin: 0;
		font-size: $ml-body-text-xl;
		font-weight: normal;
		line-height: 150%;
	}

	.product-description {
		font-size: $ml-body-text-xl;
	}
}
</style>
