import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const store = new Vuex.Store({
	state: {
		tabList: [{
				iconPath: "home",
				selectedIconPath: "home-fill",
				text: '首页',
				count: 2,
				isDot: true,
				customIcon: false,
				pagePath: '/pages/index/index'
			},
			{
				iconPath: "https://cdn.uviewui.com/uview/common/min_button.png",
				selectedIconPath: "https://cdn.uviewui.com/uview/common/min_button_select.png",
				text: '发布',
				midButton: true,
				customIcon: false,
			},
			{
				iconPath: "account",
				selectedIconPath: "account-fill",
				text: '我的',
				count: 23,
				isDot: false,
				customIcon: false,
				pagePath: '/pages/person/index'
			},
		],
	},
	mutations: {},
	actions: {}
})
export default store
