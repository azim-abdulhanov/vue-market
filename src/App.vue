<script setup>
import { onMounted, computed } from 'vue'
import { useProducts } from '@/stores/products.js'
import Navbar from '@/components/Navbar/Navbar.vue'
import Footer from '@/components/Footer/Footer.vue'
import Loader from '@/components/UI/Loader.vue'

const productsStore = useProducts()

onMounted(() => {
  if (!productsStore.cards?.products) {
    productsStore.getProducts()
  }
})

const cardList = computed(() => productsStore.cards?.products)
</script>

<template>
	<div v-if='cardList'>
    <Navbar />
    <router-view v-slot='{ Component }'>
      <transition name='fade' mode='out-in'>
        <component :is='Component' />
      </transition>
    </router-view>
    <Footer />
  </div>

  <Loader v-else />
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>


