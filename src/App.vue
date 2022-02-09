
<template>
	<div>
		<div>a:{{ a }}</div>
		<div>b:{{ b }}</div>
	</div>
</template>
<script>
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex';
export default {
	name: 'app',
	data() {
		return {};
	},
	computed: {
		...mapState(['a', 'b']),
	},
	methods: {
		...mapMutations()
	},
	created() {},
	mounted() {},
	beforeCreate() {},
};
</script>