<script setup>
import { onMounted } from 'vue'
import { useCategories } from '@/stores/categories.js'

const categoriesStore = useCategories()

onMounted(() => {
  categoriesStore.getCategories()
})
</script>

<template>
	<section class="py-24 px-8">
		<div v-if="categoriesStore.categories" class="mx-auto max-w-6xl">
			<h2 class="text-2xl font-bold text-gray-900 md:text-4xl text-center mb-8">
				Категория товаров
			</h2>
			<div class="rounded-lg border border-gray-200 bg-white px-5 py-3 mb-8 hover:bg-gray-100 transition-all duration-200">
				<h3 class="text-3xl font-semibold">All products: {{ categoriesStore.categories.length }}</h3>
			</div>
			<div class="flex flex-col gap-2">
				<div
					v-for="(category, idx) in categoriesStore.categories"
					:key="category"
					class="flex items-center gap-3 rounded-lg border border-gray-200 bg-white px-5 py-3 hover:bg-gray-100 transition-all duration-200"
				>
					<h2 class="text-xl font-semibold text-gray-900">
						{{ idx + 1 }}) {{ category }}:
					</h2>
					<p class="text-xl font-semibold text-gray-900">{{ category.length }}</p>
				</div>
			</div>
		</div>

		<Loader v-else />
	</section>
</template>
