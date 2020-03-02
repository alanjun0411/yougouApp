<template>
	<view id="search">
		<navigator url="/pages/searchs/searchs">
			<view class="content">
				<text class="iconfont icon-sousuo"></text>
				<text>搜索</text>
			</view>
		</navigator>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="less" scoped>
@import url("../common/style.css");
#search{
	background-color: #fd3150;
	padding: 10px;
	.content{
		color: #ccc;
		background-color: #FFFFFF;
		height: 30px;
		border-radius: 4px;
		text-align: center;
		line-height: 30px;
	}
}
</style>
