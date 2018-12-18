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

				<div class="row-2 m-2">
					
					<button class="btn btn-block btn-warning" v-on:click="setShowSearch(true)">Search</button>
					<h4 class="m-2 text-white">Product</h4>
				</div>

				<div class="col-9 p-2">
					<Search></Search>
					<ProductList/>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	import ProductList from "./ProductList";
	import CategoryControls from "./CategoryControls";
	import CartSummary from "./CartSummary";
	import Search from "./Search";
	import { mapMutations } from "vuex";
	export default {
		components: {
			ProductList,
			CategoryControls,
			CartSummary,
			Search
		},
		methods: {
			...mapMutations(["setShowSearch"])
		}
	};
</script>
