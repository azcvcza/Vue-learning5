<template>
	<div>
		<div v-for="p in products" v-bind:key="p.id" class="card m-1 p-1 bg-light">
			<h4>
				{{p.name}}
				<span class="badge badge-pill badge-primary float-right">{{p.price | currency}}</span>
			</h4>
			<div class="card-text bg-white p-1">{{p.description}}</div>
			
		</div>
		<PageControl></PageControl>
	</div>
</template>
<script>
import {mapState} from "vuex";
import {mapGetters} from "vuex";
import PageControl from "./PageControls";
export default {
	computed:{
		...mapGetters({products:"processedProducts"})
	},
	filters:{
		currency(value){
			return new Intl.NumberFormat("en-US",{style:"currency",currency:"USD"}).format(value);
		}
	},
	components:{
		PageControl
	}
}
</script>
