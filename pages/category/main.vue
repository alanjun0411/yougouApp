<template>
	<view class="category">
		<!-- 搜索框 -->
		<view class="searchs">
			<search></search>
		</view>
		<!--目录-->
		<view class="content">
			<view class="content_left">
				<view class="content_left_one" :class="selectID === i ? 'select_one' : ''" v-for="(v, i) in categories" :key="i"
				 @click="selectOne(i)">
					<view class="content_left_one_title">
						<text>{{v.cat_name}}</text>
					</view>
				</view>
			</view>
			<view class="content_right">
				<view class="content_right_top">
					<navigator url="">
						<image src="https://api-hmugo-web.itheima.net/pyg/pic_floor03_2@2x.png"></image>
					</navigator>
				</view>
				<view class="content_right_content">
					<view class="content_right_content_scroll" v-if="categories.length !== 0">
						<scroll-view :scroll-top="scrollTop" scroll-y="true" class="scroll-Y" style="height: 100%;" @scroll="scroll">
							<view class="content_right_content_one" v-for="(v, i) in categories[selectID].children" :key="i" :id="i">
								<view class="content_right_content_one_title">
									<text>/</text>
									<text class="content_right_content_one_title_name">{{v.cat_name}}</text>
									<text>/</text>
								</view>
								<view class="content_right_content_one_content">
									<view class="content_right_content_one_content_one" v-for="(item, index) in v.children" :key="index">
										<navigator url="">
											<image :src="item.cat_icon" mode="aspectFill"></image>
											<view class="content_right_content_one_content_one_title">
												<text>{{item.cat_name}}</text>
											</view>
										</navigator>
									</view>
								</view>
							</view>
						</scroll-view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import search from "../../components/search.vue"
	export default {
		data() {
			return {
				//分页数据
				categories: [],
				//目录选中id
				selectID: 0,
				scrollTop: 0,
				old: {
					scrollTop: 0
				}
			};
		},
		onLoad() {
			// 获取分类数据
			uni.ajax({
				url: "/categories",
			}).then((res) => {
				this.categories = res.data.message
				console.log(this.categories)
			})
		},
		methods: {
			selectOne(data) {
				this.goTop()
				this.selectID = data
			},
			scroll: function(e) {
				this.old.scrollTop = e.detail.scrollTop
			},
			goTop: function(e) {
				this.scrollTop = this.old.scrollTop
				this.$nextTick(function() {
					this.scrollTop = 0
				})
			}
		},
		components: {
			search
		}
	}
</script>

<style lang="less" scoped>
	.content {
		display: flex;
		position: fixed;
		top: 50px;
		bottom: 0;
		width: 100%;
		overflow: hidden;

		.content_left {
			width: 30%;
			height: 100%;
			background-color: #f4f4f5;
			overflow: auto;

			.content_left_one {
				padding: 20rpx 0;
				padding-left: 5rpx;
				color: #333;
				box-sizing: border-box;

				.content_left_one_title {
					padding: 10rpx 0;
					font-size: 35rpx;
					text-align: center;
					border-left: 3px solid #f4f4f5;
					box-sizing: border-box;
				}

			}

			.select_one {
				background-color: #FFFFFF;
				color: #fa3554;

				.content_left_one_title {
					border-left-color: #fa3554;
				}
			}
		}
		
		.content_right {
			flex: 1;
			height: 100%;

			.content_right_top {
				position: relative;
				z-index: 2;
				padding: 20rpx;
				padding-bottom: 0;
				box-sizing: border-box;

				image {
					width: 100%;
					height: 180rpx;
				}
			}

			.content_right_content {
				position: fixed;
				top: 50px;
				bottom: 0;
				width: 70%;
				padding: 220rpx 20rpx 0;
				box-sizing: border-box;

				.content_right_content_scroll {
					width: 100%;
					height: 100%;

					.content_right_content_one {
						.content_right_content_one_title {
							color: #ccc;
							text-align: center;
							font-size: 35rpx;
							padding: 20rpx 0;

							.content_right_content_one_title_name {
								margin: 0 15rpx;
								color: #000;
							}
						}

						.content_right_content_one_content {
							display: flex;
							flex-wrap: wrap;

							.content_right_content_one_content_one {
								text-align: center;
								width: 120rpx;
								margin: 0 21rpx 10rpx;

								image {
									width: 100%;
									height: 120rpx;
								}

								.content_right_content_one_content_one_title {
									font-size: 25rpx;
									width: 100%;
									overflow: hidden;
									white-space: nowrap;
									text-overflow: ellipsis;
								}
							}
						}
					}
				}
			}
		}
	}
</style>
