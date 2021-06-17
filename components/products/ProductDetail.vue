<template>
	<main>
		<div class="product-detail">
			<picture class="product-img">
				<img :src="product.picture" :alt="product.title" />
			</picture>
			<div class="product-description">
				<h4>Descripción del producto</h4>
				<p>{{ product.description }}</p>
			</div>
		</div> 
		<div class="product-info">
			<div class="status">
				{{ status }} - {{ soldQuantity }} 
			</div>
			<h1>{{ product.title }}</h1>
			<div class="product-price">
				{{ product.price | currency }}
			</div> 
			<button type="button">Comprar</button>
		</div>
	</main>
</template>
	
<script>
export default {
	name: 'ProductDetail',
	props: {
		product: {
			type: Object,
			required: true,
		},
	},
	computed: {
		status() {
			const statusMapper = {
				new: 'Nuevo',
				used: 'Usado',
			}
			return statusMapper[this.product.condition] || this.product.condition
		},
		soldQuantity() {
			return `${this.product.sold_quantity} vendidos`
		},
	},
}
</script>

<style lang="scss" scoped>
@import '~/assets/scss/constants.scss';

main {
	display: flex;
	align-items: flex-start;
	margin-bottom: $ml-space-2-x;
	background: white;
	border-radius: $ml-space-quarter-x $ml-space-quarter-x 0 0;

	.product-detail {
		width: $detail-img-width;

		.product-img {
			img {
				width: $detail-img-width;
				height: $detail-img-heigth;
				border-radius: $ml-space-quarter-x;
				object-fit: cover;
			}
		}

		.product-description {
			padding: $ml-space-2-x;

			h4 {
				font-size: $ml-title-text-m;
				margin-top: 0;
				margin-bottom: $ml-space-2-x;
			}

			p {
				font-size: $ml-body-text-l;
				line-height: 125%;
			}
		}
	}

	.product-info {
		margin: 0 $ml-space-1-x;

		.status {
			margin-top: $ml-space-2-x;
			margin-bottom: $ml-space-1-x;
			font-size: $ml-body-text-m;
		}

		h1 {
			margin-bottom: $ml-space-2-x;
			font-size: $ml-title-text-s;
			font-weight: bold;
			line-height: 150%;
		}

		.product-price {
			margin-bottom: $ml-space-2-x;
			font-size: $ml-title-text-xl;
		}

		button {
			width: calc(100% - 32px);
			height: $ml-space-3-x;
			background: $blue;
			border: none;
			border-radius: $ml-space-quarter-x;
			color: white;
			font-size: $ml-body-text-l;
			transition: background 0.2s;
			cursor: pointer;

			&:hover {
				background: #2968c8;
			}
		}
	}
}
</style>
	