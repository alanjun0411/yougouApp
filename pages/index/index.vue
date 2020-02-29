<template>
	<view class="content">
		<!-- 搜索框 -->
		<view>
			<search></search>
		</view>
		<!-- 轮播图 -->
		<view class="swiper_main">
			<swiper class="swiper" :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval" :duration="duration">
				<swiper-item v-for="(v,i) in background" :key="i">
					<navigator url="" class="navigator">
						<image :src="v.image_src" mode=""></image>
					</navigator>
				</swiper-item>
			</swiper>
		</view>
		<!-- 分类部分 -->
		<view class="catitems">
			<view v-for="(v, i) in catitems" :key="i">
				<navigator :url="v.navigator_url" :open-type="v.open_type">
					<image :src="v.image_src"></image>
				</navigator>
			</view>
		</view>
	</view>
</template>

<script>
	import search from "../../components/search.vue"
	export default {
		data() {
			return {
				// 轮播图数据
				background: [],
				indicatorDots: true,
				autoplay: true,
				interval: 2000,
				duration: 500,
				// 分类图标数据
				catitems: []
			}
		},
		onLoad() {
			// 获取轮播图数据
			uni.ajax({
				url:"/home/swiperdata",
			}).then((res)=>{
				this.background = res.data.message
			})
			// 获取分类图标数据
			uni.ajax({
				url:"/home/catitems",
			}).then((res)=>{
				console.log(res)
				this.catitems = res.data.message
			})
		},
		methods: {

		},
		components: {
			search
		}
	}
</script>

<style lang="less" scoped>
.swiper_main{
	height: 350rpx;
	.navigator{
		height: 100%;
	};
	image{
		width: 100%;
		height: 100%;
	}
}
.catitems{
	margin-top: -35rpx;
	margin-bottom: 20rpx;
	display: flex;
	justify-content: space-around;
	align-content: center;
	image{
		width: 128rpx;
		height: 140rpx;
	}
}
</style>
