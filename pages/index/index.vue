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
				duration: 500
			}
		},
		onLoad() {
			uni.ajax({
				url:"/home/swiperdata",
			}).then((res)=>{
				this.background = res.data.message
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
</style>
