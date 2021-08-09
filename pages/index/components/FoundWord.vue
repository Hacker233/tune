<template>
	<view class="found-box">
		<view class="left">
			<image-card v-for="(item,index) in cardList" :key="index" :cardData="item"></image-card>
		</view>
		<view class="right">
			<image-card v-for="(item,index) in cardList2" :key="index" :cardData="item"></image-card>
		</view>
	</view>
</template>

<script>
	import ImageCard from '@/components/ImageCard/ImageCard.vue';
	export default {
		data() {
			return {
				cardList: [{
					imgUrl: '../../static/testImg/1.png'
				}, {
					imgUrl: '../../static/testImg/2.jpg'
				}, {
					imgUrl: '../../static/testImg/3.png'
				}, {
					imgUrl: '../../static/testImg/5.png'
				}, {
					imgUrl: '../../static/testImg/4.jpg'
				}, {
					imgUrl: '../../static/testImg/6.jpg'
				}],
				cardList2: [{
					imgUrl: '../../static/testImg/2.jpg'
				}, {
					imgUrl: '../../static/testImg/1.png'
				}, {
					imgUrl: '../../static/testImg/3.png'
				}, {
					imgUrl: '../../static/testImg/6.jpg'
				}, {
					imgUrl: '../../static/testImg/4.jpg'
				}, {
					imgUrl: '../../static/testImg/5.png'
				}]
			}
		},
		components: {
			ImageCard
		}
	}
</script>

<style lang="scss" scoped>
	.found-box {
		display: flex;
		justify-content: space-around;
	}
</style>
