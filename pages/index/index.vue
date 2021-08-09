<template>
	<view class="home-wraper">
		<view class="tabs-wraper">
			<view class="tabs-box">
				<u-tabs ref="tabs" :list="tabs" :current="currentIndex" @change="changeTab" active-color="#212121"
					bar-height="20" gutter="0" height="100" inactive-color="#909399" bar-width="80" font-size="30"
					item-width="130" :active-item-style="activeItemStyle" :bar-style="barStyle" :is-scroll="true">
				</u-tabs>
			</view>
		</view>
		<!-- 关注组件 -->
		<FoucsPerson v-show="currentIndex === 0"></FoucsPerson>
		<!-- 发现组件 -->
		<found-word v-show="currentIndex === 1"></found-word>

		<!-- 底部导航栏 -->
		<u-tabbar v-model="current" :list="$store.state.tabList" :mid-button="true"></u-tabbar>
	</view>
</template>

<script>
	import FoundWord from './components/FoundWord.vue';
	import FoucsPerson from './components/FoucsPerson.vue';
	export default {
		data() {
			return {
				barStyle: {
					backgroundColor: "yellow"
				},
				activeItemStyle: {
					fontSize: "40rpx"
				},
				currentIndex: 1,
				current: 0,
				tabs: [{
					id: 1,
					name: '关注'
				}, {
					id: 2,
					name: '发现'
				}],
			};
		},
		components: {
			FoundWord,
			FoucsPerson
		},
		mounted() {
		},
		methods: {
			// 切换tab
			changeTab(index) {
				this.currentIndex = index;
			}
		}
	};
</script>
<style lang="scss" scoped>
	.home-wraper {
		padding: 130rpx 0 0 0;

		.tabs-wraper {
			position: fixed;
			top: 0;
			left: 0;
			width: 100%;
			z-index: 99;
			background-color: #fff;

			.tabs-box {
				width: 360rpx;
			}
		}
	}
</style>
