<template>
	<view class="card-box">
		<!-- 封面图 -->
		<view class="img-box">
			<u-lazy-load :image="cardData.imgUrl" img-mode="widthFix"></u-lazy-load>
		</view>
		<!-- 摘要 -->
		<text class="text">我是测试文字我是测试文字我是测试文字我是测试文字我是测试文字</text>
		<!-- 用户区域 -->
		<view class="user">
			<u-avatar :src="cardData.imgUrl" :size="50"></u-avatar>
			<text class="user-name">大象吃蚊子</text>
			<u-icon label="111" size="30" name="heart"></u-icon>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			cardData: {
				type: Object,
				default: () => {
					return {}
				}
			}
		},
		data() {
			return {

			}
		}
	}
</script>

<style lang="scss" scoped>
	.card-box {
		width: 170px;
		min-height: 300rpx;
		overflow: hidden;
		border-radius: 20rpx;
		border: 1px solid $u-form-item-border-color;
		margin-bottom: 20rpx;

		.img-box {
			max-height: 430rpx;
			overflow: hidden;
		}

		.text {
			padding: 10rpx 20rpx;
			margin: 20rpx 0;
			height: 90rpx;
			overflow: hidden;
			-webkit-line-clamp: 2;
			text-overflow: ellipsis;
			display: -webkit-box;
			-webkit-box-orient: vertical;
			font-size: 28rpx;
			font-weight: 500;
		}
		.user {
			padding: 10rpx 20rpx;
			display: flex;
			align-items: center;
			justify-content: space-between;
			.user-name {
				font-size: 20rpx;
				color: $u-type-info;
				right: 20rpx;
			}
		}
	}
</style>
