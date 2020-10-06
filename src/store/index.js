import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		products: [],
		search: null,
		beers: [],
		// searchValue: ''
	},
	mutations: {
		set_products: (state, products) => {
			state.products = products
		},
		// set_search_value: (state, value) => {
		// 	state.searchValue = value
		// }
	},
	actions: {
		get_products_from_api({commit}) {
			return axios('https://api.punkapi.com/v2/beers?page=2&per_page=12', {
				method: "GET"
			})
			.then((products) => {
				commit('set_products', products.data)
			return products
			})
			.catch((error) => {
				console.log(error)
				return error
			})
		}, 
		// get_search_value({commit}, value) {
		// 	commit('set_search_value', value)
		// }
	},
	getters: {
		products(state) {
			return state.products
		},
		// search_Value(state) {
		// 	return state.searchValue
		// }

	},
	modules: {
	}
})
