
<template>
	<div>
		<p>
			{{ msg.a }}
			{{ msg }}
		</p>
		<button @click="change">click</button>
		<mycm ref="r" :a="msg.a"></mycm>
	</div>
</template>
<script>
import mycm from './components/mycm.vue';
export default {
	data() {
		return {
			msg: {
				a: 2,
			},
		};
	},
	components: { mycm },
	computed: {},
	methods: {
		change() {},
	},
	created() {},
	mounted() {
		console.log('ref', this.$refs.r);
		setInterval(() => {
			this.msg.a++;
		}, 500);
	},
};
</script>