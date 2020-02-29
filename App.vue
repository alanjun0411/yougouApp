<script>
	import ajax from "./utils/ajax.js"
	export default {
		onLaunch: function() {
			uni.ajax = ajax
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	/*每个页面公共css */
</style>
