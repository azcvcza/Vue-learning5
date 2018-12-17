<template>
	<div class="container-fluid">
		<div class="row">
			<div class="col bg-dark text-white">
				<a href class="navbar-brand">SPORTS STORE</a>
			</div>
		</div>
		<div class="row">
			<div class="col mt-2">
				<h2 class="text-center">Your Cart</h2>
				<table class="table table-bordered table-striped p-2">
					<thead>
						<tr>
							<th>数量</th>
							<th>产品</th>
							<th class="text-right">价格</th>
							<th class="text-right">总数</th>
						</tr>
					</thead>
					<tbody>
						<tr v-if="lines.length==0">
							<td class="text-center" colspan="4">购物车为空</td>
						</tr>
						<CartLine
							v-for="line in lines"
							v-bind:key="line.product.id"
							v-bind:line="line"
							v-on:remove="remove"
							v-on:quantity="handleQuantity(line,$event)"
						></CartLine>
					</tbody>
					<tfoot v-if="lines.length>0">
						<tr>
							<td class="text-right" colspan="3">总数:</td>
							<td class="text-right">{{totalPrice | currency}}</td>
						</tr>
					</tfoot>
				</table>
			</div>
		</div>
		<div class="row">
			<div class="col">
				<div class="text-center">
					<router-link to="/" class="btn btn-secondary m-1">继续购物</router-link>
					<router-link to="/checkout" v-bind:disabled="lines.length==0" class="btn btn-primary m-1">Checkout</router-link>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
import {mapState,mapMutations,mapGetters} from "vuex";
import CartLine from "./ShoppingCartLine";
export default {
		components:{CartLine},
		computed:{
			...mapState({lines:state=>state.cart.lines}),
			...mapGetters({totalPrice:"cart/totalPrice"})
		},
		methods:{
			...mapMutations({
				change:"cart/changeQuantity",
				remove:"cart/removeProduct"
			}),
			handleQuantityChange(line,$event){
				this.change({line,quantity:$event})
			}
		},
		filters: {
        currency(value) {
            return new Intl.NumberFormat("en-US",
                { style: "currency", currency: "USD" }).format(value);
        }
		},
}
</script>
