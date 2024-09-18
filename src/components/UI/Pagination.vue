<script setup>
defineProps(['currentPage', 'totalPage'])
</script>

<template>
	<div class="flex flex-col items-center mb-10">
		<div class="flex items-center">
			<button
				@click="$emit('page', currentPage - 1)" 
				:disabled="currentPage == 1" 
				class="p-3 inline-flex justify-center items-center gap-x-2 rounded-lg text-gray-900 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none transition-all duration-300" 
			>
				<svg class="w-3.5 h-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
					<path d="m15 18-6-6 6-6"></path>
				</svg>
			</button>
			<div class="flex items-center gap-x-1">
				<span class="flex justify-center items-center font-medium text-gray-500 py-3 pl-2 text-md">
					{{ currentPage }}
				</span>
				<span class="flex justify-center items-center text-gray-500 mx-2 text-md">
					of
				</span>
				<span class="flex justify-center items-center font-medium text-gray-500 py-3 pr-2 text-md">
				 {{ totalPage }}
				</span>
			</div>
			<button
				@click="$emit('page', currentPage + 1)" 
				:disabled="currentPage == 9" 
				class="p-3 inline-flex justify-center items-center gap-x-2 rounded-lg text-gray-900 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none transition-all duration-300" 
			>
				<svg class="w-3.5 h-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
					<path d="m9 18 6-6-6-6"></path>
				</svg>
			</button>
		</div>
	</div>
</template>
