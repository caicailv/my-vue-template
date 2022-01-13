
<template>
	<div>
		<div id="example">
			<p>{{ name }}</p>
			<button @click="changeName">change</button>
			<button @click="changeName2">change last</button>
		</div>
	</div>
</template>
<script>
export default {
	data() {
		return {
			firstName: '黄',
			lastName: '一',
			useless: 0,
		};
	},
	methods: {
		changeName() {
			this.useless++;
			this.firstName = '张';
		},
		changeName2() {
			this.lastName = '二';
		},
	},
	watch:{
		firstName(){
			console.log('firstName');
		},
		useless:[
			()=>{
				console.log('a');
			},
			()=>{
				console.log('b');
			}
		]
	},
	computed: {
		name() {
			if (this.useless > 0) {
				return this.firstName + this.lastName;
			}
			return 'please click change';
		},
	},
	created() {
		// let i = 0;
		// setInterval(() => {
		// 	this.fullName = this.fullName + i;
		// 	i++
		// }, 1000);
		this.$forceUpdate()
	},
};
</script>