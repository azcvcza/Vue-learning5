<template>
	<div>
		<div class="container-fluid">
			<div class="row">
				<div class="col bg-dark text-white">
					<a href class="navbar-brand">Sports store</a>
				</div>
			</div>
		</div>
		<div class="m-2">
			<div class="form-group m-2">
				<label for>Name</label>
				<input type="text" v-model="name" class="form-control">
			</div>
		</div>
		<div class="text-center">
			<router-link to="/cart" class="btn btn-secondary m-1">后退</router-link>
			<button class="btn btn-primary m-1" v-on:click="submitOrder">放置订单</button>
		</div>
	</div>
</template>
<script>
export default {
	data:function(){
		return {
			name:null
		}
	},
	methods:{
		submitOrder(){
			console.log("submit success");
		}
	}
}
</script>
