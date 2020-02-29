<template>
	<view class="content">
		<!-- 搜索框 -->
		<view>
			<search></search>
		</view>
		<!-- 轮播图 -->
		<view class="swiper_main">
			<swiper class="swiper" :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval" :duration="duration">
				<swiper-item>
					<view class="swiper-item uni-bg-red">A</view>
				</swiper-item>
				<swiper-item>
					<view class="swiper-item uni-bg-green">B</view>
				</swiper-item>
				<swiper-item>
					<view class="swiper-item uni-bg-blue">C</view>
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

		},
		methods: {

		},
		components: {
			search
		}
	}
</script>

<style lang="less" scoped>

</style>
