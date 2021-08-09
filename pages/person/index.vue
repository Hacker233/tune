<template>
	<view class="dynamic-wraper">
		我的
		<!-- 底部导航栏 -->
		<u-tabbar :list="$store.state.tabList" :mid-button="true" @change="changeNav"></u-tabbar>
	</view>
</template>

<script>
	export default {
		methods:{
			// 切换底部导航
			changeNav(index) {
				console.log(index);
			}
		}
	}
</script>

<style lang="scss" scoped>
	
</style>
