import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const store = new Vuex.Store({
	state: {
		tabList: [{
				iconPath: "home",
				selectedIconPath: "home-fill",
				isDot: true,
				customIcon: false,
				pagePath: '/pages/index/index',
			},
			{
				iconPath: "https://cdn.uviewui.com/uview/common/min_button.png",
				selectedIconPath: "https://cdn.uviewui.com/uview/common/min_button_select.png",
				midButton: true,
				customIcon: true,
				pagePath: '/pages/index/index',
			},
			{
				iconPath: "account",
				selectedIconPath: "account-fill",
				isDot: false,
				customIcon: false,
				pagePath: '/pages/person/index',
			},
		],
	},
	mutations: {},
	actions: {}
})
export default store
