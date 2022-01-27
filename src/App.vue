
<template>
	<div>
		<mycm></mycm>
		<div>
			<router-link to="/a"> to a </router-link>
		</div>
		<div>
			<router-link to="/b"> to b </router-link>
		</div>

		<router-view />
	</div>
</template>
<script>
import mycm from './components/mycm.vue';
export default {
	name: 'app',
	components: { mycm },
	data() {
		return {};
	},
	methods: {
		change() {},
	},
	created() {

	},
	mounted() {},
	beforeCreate() {},
};
</script>