<template>
	<div>
		<div class="row">
			<div class="col bg-dark text-white">
				<a href class="navber-brand">SPORT(运动)</a>
				<CartSummary></CartSummary>
			</div>
		</div>
		<div class="row">
			<div class="col-3 bg-info p-2">
				<h4 class="text-white m-2">CATATORY</h4>
				<CategoryControls></CategoryControls>
			</div>
			<div class="col-9 bg-success p-2">
				 <router-view/>
				<h4 class="text-white m-2">PRODUCT</h4>
				<div class="col-9 p-2">
					<ProductList />
				</div>
			</div>
		</div>
	</div>
</template>
<script>
import ProductList from "./ProductList"
import CategoryControls from "./CategoryControls"
import CartSummary from "./CartSummary"
export default {
	components:{
		ProductList,
		CategoryControls,
		CartSummary
	}
}
</script>
