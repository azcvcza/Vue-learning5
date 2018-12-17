<template>
	<tr>
		<td>
			<input
				type="number"
				style="width:5em"
				v-bind:value="qvalue"
				v:on:input="sendChangeEvent"
				class="form-control-sm"
			>
		</td>
		<td>{{line.product.name}}</td>
	<td class="text-right">{{line.product.price | currency}}</td>
	<td class="text-right">{{(line.quantity*line.product.price)| currency}}</td>
	<td class="text-center"><button class="btn btn-sm btn-danger" v-on:click="sendRemoveEvent">Remove</button></td>
	</tr>
	
	
</template>
<script>
export default {
	props:["line"],
	data:function(){
		return {
			qvalue:this.line.quantity
		}
	},
	methods:{
		sendChangeEvent($event){
			if($event.target.value>0){
				this.$emit("quantity",Number($event.target.value));
				this.qvalue = $event.target.value;
			}else{
				this.$emit("quantity",1);
				this.qvalue = 1;
				$event.target.vaule = this.qvalue;
			}
		},
		sendRemoveEvent(){
			this.$emit("remove",this.line);
		}
	}
}
</script>

