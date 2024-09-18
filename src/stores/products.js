import { defineStore } from 'pinia'
import axios from 'axios'

export const useProducts = defineStore('products', {
  state: () => ({
    products: null
  }),
  actions: {
    async getProducts() {
      try {
        const url = `https://dummyjson.com/products?limit=100`
        const response = await axios.get(url)
        this.cards = response.data
      } catch (error) {
        console.log(error)
      }
    }
  }
})
