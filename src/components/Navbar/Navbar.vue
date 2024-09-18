<script setup>
import { ref } from 'vue'

const links = ref([
	{ name: 'Новинки', link: '/' },
	{ name: 'Категории', link: '/categories' },
])

const isMenuOpen = ref(false)

const toggleMenu = () => {
	isMenuOpen.value = !isMenuOpen.value
}
</script>

<template>
	<nav class="bg-slate-700 sticky w-full text-white z-20 py-5 top-0">
		<div class="container flex flex-wrap items-center justify-between mx-auto">
			<router-link to="/" class="flex items-center space-x-2.5 rtl:space-x-reverse">
				<img
					src="https://flowbite.com/docs/images/logo.svg"
					class="h-8"
					alt="logo"
				/>
				<span class="text-2xl font-semibold">
					VueShop
				</span>
			</router-link>
			<div class="flex md:order-2 space-x-2 md:space-x-0 rtl:space-x-reverse">
				<router-link
					:to="'/basket'"
					class="inline-flex items-center w-9 h-9 justify-center text-white rounded-md hover:bg-white hover:text-gray-700 transition-all duration-300"
				>	
					<svg
						xmlns='http://www.w3.org/2000/svg'
						width='24'
						height='24'
						viewBox='0 0 24 24'
						fill='none'
						stroke='currentColor'
						stroke-width='2'
						stroke-linecap='round'
						stroke-linejoin='round'
						class='lucide lucide-shopping-cart'
					>
						<circle cx='8' cy='21' r='1' />
						<circle cx='19' cy='21' r='1' />
						<path d='M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12' />
					</svg>
				</router-link>

				<div class="md:hidden">
					<button
						@click="toggleMenu"
						class="inline-flex items-center w-9 h-9 justify-center text-white rounded-md hover:bg-white hover:text-gray-700 transition-all duration-300"
					>						
						<svg
							v-if="!isMenuOpen"
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="24"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"
						>
							<line x1="3" x2="21" y1="6" y2="6" />
							<line x1="3" x2="21" y1="12" y2="12" />
							<line x1="3" x2="21" y1="18" y2="18" />
						</svg>
						<svg
							v-else
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="24"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"
						>
							<path d="M18 6 6 18" />
							<path d="m6 6 12 12" />
						</svg>
					</button>
				</div>
			</div>
			<div
				:class="['items-center justify-between w-full md:flex md:w-auto md:order-1 transition-all duration-300', isMenuOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0']"
				class="overflow-hidden md:overflow-visible md:max-h-0 md:opacity-100 md:transition-none"
			>
				<ul class="flex flex-col p-5 md:p-0 mt-5 font-medium border border-slate-200 rounded-lg bg-slate-700 md:bg-transparent gap-y-2 md:gap-x-8 md:flex-row md:mt-0 md:border-0">
					<li v-for="link in links" :key="link.name">
						<router-link
							:to="link.link"
							class="block text-white md:hover:text-blue-500 transition duration-300 hover:bg-blue-500 md:hover:bg-transparent rounded-md py-2 px-3 md:p-0"
						>
							{{ link.name }}
						</router-link>
					</li>
				</ul>
			</div>
		</div>
	</nav>
</template>