<script>
	import ajax from "./utils/ajax.js"
	export default {
		onLaunch: function() {
			uni.ajax = ajax
		},
		onShow: function() {
		},
		onHide: function() {
		}
	}
</script>

<style>
	/*每个页面公共css */
</style>
