import { defineStore } from 'pinia'
import axios from 'axios'

export const useCategories = defineStore('categories', {
	state: () => ({
		categories: null
	}),
	actions: {
		async getCategories() {
			try {
				const url = 'https://dummyjson.com/products/category-list'
				const response = await axios.get(url)
				this.categories = response.data
			} catch (error) {
				console.log(error)
			}
		}
	}
})
