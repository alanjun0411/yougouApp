<template>
	<view class="content">
		<!-- 搜索框 -->
		<view class="searchs">
			<search></search>
		</view>
		<!--空白占位-->
		<view class="kobai"></view>
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
		<!-- 楼层部分 -->
		<view class="floordata">
			<view v-for="(item,index) in floordata" :key="index" class="floordata_one">
				<view class="floordata_one_title">
					<image :src="item.floor_title.image_src"></image>
				</view>
				<view class="floordata_one_content">
					<view class="floordata_one_content_left">
						<navigator url="">
							<image :src="item.product_list[0].image_src" :style="'width:' + item.product_list[0].image_width + 'rpx;height:386rpx'"></image>
						</navigator>
					</view>
					<view class="floordata_one_content_right">
						<block v-for="(v,i) in item.product_list" :key="i">
							<navigator url="">
								<image :src="v.image_src" :style="'width:' + v.image_width + 'rpx;height:188rpx'" v-if="i>0"></image>
							</navigator>
						</block>
					</view>
				</view>
			</view>
			<view class="floordata_bottom" v-if="floordata.length !== 0">
				<text class="iconfont icon-weixiao- weixiao"></text>
				<text>我也是有底线的...</text>
			</view>
		</view>
		<!--回到顶部-->
		<view class="gotoTop" v-if="scrollTop" @click="gotoTop">
			<text class="iconfont icon-icon-test1 top_down"></text>
			<text class="toptitle">顶部</text>
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
				catitems: [],
				// 楼层数据
				floordata: [],
				// 顶部显示的条件
				scrollTop: false
			}
		},
		onPageScroll(e) {
			let scrollTop = e.scrollTop > 100 ? true : false
			if (scrollTop === this.scrollTop) return
			this.scrollTop = scrollTop
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
				this.catitems = res.data.message
			})
			// 获取楼层数据
			uni.ajax({
				url:"/home/floordata",
			}).then((res)=>{
				this.floordata = res.data.message
				console.log(this.floordata)
			})
		},
		methods: {
			gotoTop (e) {
				uni.pageScrollTo({
				    scrollTop: 0,
				    duration: 300
				});
			}
		},
		components: {
			search
		}
	}
</script>

<style lang="less" scoped>
@import url("../../common/style.css");
.searchs{
	position: fixed;
	top: 44px;
	width: 750rpx;
	z-index: 2;
}
.kobai{
	height: 50px;
}
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
.floordata_one_title{
	padding-top: 20rpx;
	background-color: #f4f4f5;
}
.floordata_one_title image{
	width: 100%;
	height: 60rpx;
}
.floordata_one_content{
	display: flex;
	padding: 20rpx;
	padding-bottom: 10rpx;
}
.floordata_one_content_right{
	flex: 1;
	height: 386rpx;
	display: flex;
	justify-content: space-around;
	flex-wrap: wrap;
	margin-left: 5rpx;;
}
.floordata_bottom{
	padding: 10px 0;
	font-size: 18px;
	background-color: #f4f4f5;
	text-align: center;
	color: #333;
}
.weixiao{
	margin-right: 5px;
}
.gotoTop{
	position: fixed;
	bottom: 120rpx;
	right: 30rpx;
	width: 100rpx;
	height: 100rpx;
	background-color: rgba(255,255,255,.7);
	font-size: 30rpx;
	color: #333;
	border-radius: 50%;
	.top_down{
		position: absolute;
		top: 10rpx;
		left: 50%;
		font-size: 40rpx;
		transform: translate(-50%);
	}
	.toptitle{
		position: absolute;
		top: 45rpx;
		left: 23rpx;
	}
}
</style>
