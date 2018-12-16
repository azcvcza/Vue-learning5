<template>
	<div>
		<div class="row mt-2">
			<div class="col form-group">
				<select name id class="form-control" v-on:change="changePageSize">
					<option value="4">4 page</option>
					<option value="8">8 page</option>
					<option value="12">12 page</option>
				</select>
			</div>
			<div class="text-right" col>
				<div class="btn-group mx-2">
					<button
						v-for="i in pageNumbers"
						v-bind:key="i"
						v-bind:class="{'btn-primary':i==currentPage}"
						class="btn btn-secpmdary"
						v-on:click="setCurrentPage(i)"
					>{{i}}</button>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	import { mapState, mapGetters, mapMutations } from "vuex";
	export default {
		computed: {
			...mapState(["currentPage"]),
			...mapGetters(["pageCount"]),
			pageNumbers() {
				console.log("in PageControl.vue, pageCount:", this.pageCount);
				return [...Array(this.pageCount + 1).keys()].slice(1);
			}
		},
		methods: {
			...mapMutations(["setCurrentPage", "setPageSize"]),
			changePageSize($event) {
				this.setPageSize(Number($event.target.value));
			}
		}
	};
</script>
