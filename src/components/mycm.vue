<template>
	<div>子组件的值:nm {{ a }} <button @click="getA">getA</button></div>
</template>
<script>
export default {
	name: 'mycm',
	props: {
		a: Number,
	},
	data() {
		return {
			my: 'my',
		};
	}, 
	methods: {
		getA() {
			console.log(this.a);
		},
	},
};
</script>