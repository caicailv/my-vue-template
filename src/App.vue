
<template>
	<div>
		<p>
			{{ msg.a }}
			{{msg}}
		</p>
		<button @click="change">click</button>
	</div>
</template>
<script>
export default {
	data() {
		return {
			msg: {
				a: 2,
			},
		};
	},

	computed: {},
	methods: {
		change() {
			this.msg.a = 4;
			this.msg.b = 2
			
		},
	},
	created() {},
};
</script>