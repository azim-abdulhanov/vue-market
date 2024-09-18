<script setup>
import { onMounted, computed } from 'vue'
import { useRoute } from 'vue-router'
import { useProducts } from '@/stores/products.js'

const route = useRoute()
const productsStore = useProducts()

const productId = route.query.id
const quantity = route.query.quantity || 1

const productInfo = computed(() => {
	return productsStore.cards?.products?.find(product => product.id == productId)
})

onMounted(async () => {
	if (!productsStore.cards?.products) {
		await productsStore.getProducts()
	}
})
</script>

<template>
	<section class="py-24 px-8">
    <div v-if="productInfo">
      <h2 class="text-2xl font-bold text-gray-900 md:text-4xl text-center mb-8">
        Истории покупок
      </h2>
      <div class="mx-auto max-w-6xl p-6 border rounded-lg">
        <div class="flex flex-col lg:flex-row lg:items-center md:justify-between">
          <div class="flex flex-col lg:flex-row lg:items-center">
            <img 
              v-lazy="productInfo.images[0]" 
              :alt="productInfo.title" 
              class="h-36 w-36 object-contain mx-auto"
            />
            <div class="flex flex-col max-w-lg gap-y-2 ml-2">
              <h3 class="text-lg font-semibold text-gray-800 mt-3">
                {{ productInfo.title }}
              </h3>
              <p class="text-sm font-medium text-gray-600 mb-3">
                {{ productInfo.description }}
              </p>
            </div>
          </div>
          <p class="text-md font-semibold text-gray-800">
            количество: {{ quantity }}
          </p>
          <p class="text-md font-semibold text-gray-800">
            цена: ${{ (productInfo.price * quantity).toFixed(2) }}
          </p>
        </div>
      </div>
    </div>

    <div class="flex items-center justify-center" v-else>
      <div class="flex flex-col items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="200"
          height="200"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#1f2937"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="lucide lucide-shopping-cart"
        >
          <circle cx="8" cy="21" r="1" />
          <circle cx="19" cy="21" r="1" />
          <path
            d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"
          />
        </svg>
        <h3 class="text-3xl font-bold text-center mt-4 text-gray-800 sm:text-5xl">
          Покупок нет
        </h3>
      </div>
    </div>
  </section>
</template>
