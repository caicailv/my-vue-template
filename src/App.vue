
<script>
export default {
	data() {
		return {
      aaa:'啊哈啊'
    };
	},
	render(h){
		return h("div",{
			attrs:{
				id:'att2',
			}
		},this.aaa)
	}
};
</script>