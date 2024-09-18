<script setup>
import { defineProps } from 'vue'

defineProps({
  product: Object,
  index: Number
})
</script>

<template>
  <section class="flex flex-col w-full p-4 lg:p-5 max-w-xs bg-white border relative rounded-lg shadow-md hover:border-slate-400 hover:shadow-lg transition-all duration-300">
    <router-link :to="{ name: 'productsInfo', params: { id: product.id } }">
      <div class="h-60 w-full">
        <img 
          v-lazy="product.images[0]" 
          :alt="product.title" 
          class="flex mx-auto h-full object-contain"
        />
      </div>

      <div class="mt-2">
        <h2 class="text-xl font-semibold text-gray-900 line-clamp-1">
          {{ product.title }}
        </h2>
        <p class="font-medium my-3 text-gray-500 line-clamp-2">
          {{ product.description }}
        </p>

        <div class="flex items-center gap-2">
          <div class="flex items-center">
            <svg class="h-4 w-4 text-yellow-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
              <path d="M13.8 4.2a2 2 0 0 0-3.6 0L8.4 8.4l-4.6.3a2 2 0 0 0-1.1 3.5l3.5 3-1 4.4c-.5 1.7 1.4 3 2.9 2.1l3.9-2.3 3.9 2.3c1.5 1 3.4-.4 3-2.1l-1-4.4 3.4-3a2 2 0 0 0-1.1-3.5l-4.6-.3-1.8-4.2Z" />
            </svg>

            <svg class="h-4 w-4 text-yellow-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
              <path d="M13.8 4.2a2 2 0 0 0-3.6 0L8.4 8.4l-4.6.3a2 2 0 0 0-1.1 3.5l3.5 3-1 4.4c-.5 1.7 1.4 3 2.9 2.1l3.9-2.3 3.9 2.3c1.5 1 3.4-.4 3-2.1l-1-4.4 3.4-3a2 2 0 0 0-1.1-3.5l-4.6-.3-1.8-4.2Z" />
            </svg>

            <svg class="h-4 w-4 text-yellow-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
              <path d="M13.8 4.2a2 2 0 0 0-3.6 0L8.4 8.4l-4.6.3a2 2 0 0 0-1.1 3.5l3.5 3-1 4.4c-.5 1.7 1.4 3 2.9 2.1l3.9-2.3 3.9 2.3c1.5 1 3.4-.4 3-2.1l-1-4.4 3.4-3a2 2 0 0 0-1.1-3.5l-4.6-.3-1.8-4.2Z" />
            </svg>

            <svg class="h-4 w-4 text-yellow-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
              <path d="M13.8 4.2a2 2 0 0 0-3.6 0L8.4 8.4l-4.6.3a2 2 0 0 0-1.1 3.5l3.5 3-1 4.4c-.5 1.7 1.4 3 2.9 2.1l3.9-2.3 3.9 2.3c1.5 1 3.4-.4 3-2.1l-1-4.4 3.4-3a2 2 0 0 0-1.1-3.5l-4.6-.3-1.8-4.2Z" />
            </svg>

            <svg class="h-4 w-4 text-yellow-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
              <path d="M13.8 4.2a2 2 0 0 0-3.6 0L8.4 8.4l-4.6.3a2 2 0 0 0-1.1 3.5l3.5 3-1 4.4c-.5 1.7 1.4 3 2.9 2.1l3.9-2.3 3.9 2.3c1.5 1 3.4-.4 3-2.1l-1-4.4 3.4-3a2 2 0 0 0-1.1-3.5l-4.6-.3-1.8-4.2Z" />
            </svg>
          </div>

          <p class="text-sm font-medium text-gray-900">{{ product.rating }}</p>
          <p class="text-sm font-medium text-gray-500">({{ product.stock }})</p>
        </div>

        <div class="mt-4 flex items-center justify-between gap-2 lg:gap-4">
          <p class="text-lg md:text-xl lg:text-2xl font-extrabold leading-tight text-gray-900">${{ product.price }}</p>
          <span 
            v-if="Math.floor(product.discountPercentage)"
            class="rounded bg-red-100 text-sm font-medium p-2 text-red-600" 
          >
            Up to {{ Math.floor(product.discountPercentage) }}% off
          </span>
        </div>
      </div>
    </router-link>
  </section>
</template>
