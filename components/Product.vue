<template>
	<div class="container">
		<article v-for="item in products" :key="item.id">
			<NuxtLink :to="`/items/${ item.id }`" class="product-img">
				<picture>
					<img :src="item.image" :alt="item.title" />
				</picture>
			</NuxtLink> 
			<div class="product-info">
				<NuxtLink :to="`/items/${ item.id }`" class="product-price">
					{{ item.price }}
				</NuxtLink> 
				<h4>{{ item.title }}</h4>
				<div class="product-description">{{ item.description}}</div>
			</div>
		</article>
	</div>
</template>
	
<script>
export default {
	name: 'Product',
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

$img-width: 180px;
$img-heigth: 180px;

article {
	display: flex;
	padding: $ml-space-1-x;
	background: white;

	.product-img {
		width: $img-width;
		height: $img-heigth;
		margin-right: $ml-space-1-x;
		overflow: hidden;
		// padding: $ml-space-1-x;

		img {
			width: 100%;
			height: 100%;
			border-radius: $ml-space-quarter-x;
			object-fit: cover;
		}
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
