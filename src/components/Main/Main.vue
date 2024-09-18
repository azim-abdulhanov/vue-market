<script setup>
import { ref, computed, onMounted } from 'vue'
import { useProducts } from '@/stores/products.js'
import Products from '@/components/Products/Products.vue'
import Pagination from '@/components/UI/Pagination.vue'

const productsStore = useProducts()

const selectedOpt = ref('По названию')

const sortOptions = {
  'По цене': 'price',
  'По названию': 'title',
  'По количеству': 'stock'
}

const selectValue = computed(() => sortOptions[selectedOpt.value])

const currentPage = ref(1)
const totalPage = ref(9)

const changePage = (newPage) => {
  currentPage.value = newPage
}

const sortedItems = computed(() => {
  const param = selectValue.value
  if (!productsStore.cards?.products) return []

  return productsStore.cards.products.slice().sort((a, b) => {
    if (param === 'title') {
      return a[param].localeCompare(b[param])
    }
    return b[param] - a[param]
  })
})

onMounted(() => {
  productsStore.getProducts()
})
</script>

<template>
  <main class='container'>
    <div class='flex flex-wrap items-center justify-between mt-10'>
      <div class="flex">
        <select 
          v-model='selectedOpt'  
          class='text-md sm:text-lg font-medium outline-none w-[239px] sm:w-full border border-gray-300 rounded-md py-2 px-3 cursor-pointer'
        >
          <option value='По названию'>По названию</option>
          <option value='По цене'>По цене</option>
          <option value='По количеству'>По количеству</option>
        </select>
      </div>
      <p class='text-md sm:text-lg font-medium outline-none rounded-md py-2 px-3 border border-gray-300'>
        Общее кол-во товаров - {{ productsStore.cards?.limit }}
      </p>
    </div>
    <div
      v-auto-animate
      class='grid gap-4 grid-cols-1 sm:grid-cols-2 md:mb-8 md:grid-cols-3 lg:grid-cols-4 py-20'
    >
      <Products
        v-for='(product, index) in sortedItems.slice((currentPage - 1) * 12, currentPage * 12)'
        :key='product.id'
        :product='product'
        :index='index'
      />
    </div>
    <div>
      <Pagination 
        :currentPage='currentPage' 
        :totalPage='totalPage' 
        @page='changePage' 
      />
    </div>
  </main>
</template>