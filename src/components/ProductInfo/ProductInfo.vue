<script setup>
import { useRoute, useRouter } from 'vue-router'
import { useProducts } from '@/stores/products.js'
import { ref, computed } from 'vue'
import { toast } from 'vue3-toastify'
import 'vue3-toastify/dist/index.css'

const { params } = useRoute()
const router = useRouter()
const productsStore = useProducts()

const productId = params.id
const product = computed(() => productsStore.cards?.products?.find(p => p.id == productId))

const quantity = ref(1)

const price = computed(() => (product.value.price * quantity.value).toFixed(2))
const discountPercentage = computed(() => 
  (product.value.discountPercentage + (quantity.value - 1) * 0.5).toFixed(1))

const incrQuantity = () => { quantity.value++ }
const decrQuantity = () => { if (quantity.value > 1) quantity.value-- }

const clickBuy = () => {
  toast(`Вы купили ${quantity.value} товаров по цене $${price.value} с ${discountPercentage.value}% скидкой`, {
    autoClose: 2000,
    type: "success",
    position: "top-center",
    pauseOnHover: false
  })

  setTimeout(() => {
    router.push({
      path: '/basket',
      query: { id: product.value.id, quantity: quantity.value }
    })
  }, 2500)
}
</script>

<template>
  <section class="py-24">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" v-if="product">
      <div class="grid grid-cols-1 lg:grid-cols-2">
        <div class="w-full h-full lg:mx-auto mx-0">
          <img
            v-lazy="product.images[0]"
            :alt="product.title"
            class="rounded-xl border max-h-[400px] w-full object-contain"
          />
        </div>

        <div class="flex justify-center items-center">
          <div class="pro-detail w-full max-lg:max-w-[608px] lg:pl-8 xl:pl-16 max-lg:mx-auto max-lg:mt-8">
            <div class="flex items-center justify-between gap-6 mb-6">
              <div class="text">
                <h2 class="font-bold text-4xl leading-10 text-gray-900 mb-5">
                  {{ product.title }}
                </h2>
                <p class="mb-5 font-medium text-md leading-6 text-gray-500">
                  {{ product.description }}
                </p>
                <p class="font-medium text-md uppercase text-indigo-600">
                  {{ product.category }}
                </p>
              </div>
            </div>

            <div class="flex flex-col min-[400px]:flex-row mb-10 gap-y-3">
              <div class="flex items-center">
                <h5 class="font-semibold text-2xl leading-9 text-gray-900">
                  $ {{ price }}
                </h5>
                <span class="ml-3 font-semibold text-lg text-red-600">
                  {{ discountPercentage }}% off
                </span>
              </div>
              
              <svg
                class="mx-5 max-[400px]:hidden"
                xmlns="http://www.w3.org/2000/svg"
                width="2"
                height="36"
                viewBox="0 0 2 36"
                fill="none"
              >
                <path d="M1 0V36" stroke="#d6d2d2" />
              </svg>
              
              <div class="flex w-16 items-center gap-1 rounded-md bg-amber-400 py-1.5 px-2">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_12657_16865)">
                    <path
                      d="M8.10326 2.26718C8.47008 1.52393 9.52992 1.52394 9.89674 2.26718L11.4124 5.33818C11.558 5.63332 11.8396 5.83789 12.1653 5.88522L15.5543 6.37768C16.3746 6.49686 16.7021 7.50483 16.1086 8.08337L13.6562 10.4738C13.4205 10.7035 13.313 11.0345 13.3686 11.3589L13.9475 14.7343C14.0877 15.5512 13.2302 16.1742 12.4966 15.7885L9.46534 14.1948C9.17402 14.0417 8.82598 14.0417 8.53466 14.1948L5.5034 15.7885C4.76978 16.1742 3.91235 15.5512 4.05246 14.7343L4.63137 11.3589C4.68701 11.0345 4.57946 10.7035 4.34378 10.4738L1.89144 8.08337C1.29792 7.50483 1.62543 6.49686 2.44565 6.37768L5.8347 5.88522C6.16041 5.83789 6.44197 5.63332 6.58764 5.33818L8.10326 2.26718Z"
                      fill="white"
                    />
                  </g>
                  <g clip-path="url(#clip1_12657_16865)">
                    <path
                      d="M8.10326 2.26718C8.47008 1.52393 9.52992 1.52394 9.89674 2.26718L11.4124 5.33818C11.558 5.63332 11.8396 5.83789 12.1653 5.88522L15.5543 6.37768C16.3746 6.49686 16.7021 7.50483 16.1086 8.08337L13.6562 10.4738C13.4205 10.7035 13.313 11.0345 13.3686 11.3589L13.9475 14.7343C14.0877 15.5512 13.2302 16.1742 12.4966 15.7885L9.46534 14.1948C9.17402 14.0417 8.82598 14.0417 8.53466 14.1948L5.5034 15.7885C4.76978 16.1742 3.91235 15.5512 4.05246 14.7343L4.63137 11.3589C4.68701 11.0345 4.57946 10.7035 4.34378 10.4738L1.89144 8.08337C1.29792 7.50483 1.62543 6.49686 2.44565 6.37768L5.8347 5.88522C6.16041 5.83789 6.44197 5.63332 6.58764 5.33818L8.10326 2.26718Z"
                      fill="white"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_12657_16865">
                      <rect width="18" height="18" fill="white" />
                    </clipPath>
                    <clipPath id="clip1_12657_16865">
                      <rect width="18" height="18" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                <span class="text-md font-medium text-white">
                  {{ product.rating }}
                </span>
              </div>
            </div>

						<div class="flex items-center flex-col sm:flex-row gap-5">
							<div class="flex items-center justify-center border border-gray-400 rounded-full">
								<button 
									@click="decrQuantity" 
									class="group py-[12px] px-3 w-full border-r border-gray-400 rounded-l-full h-full flex items-center justify-center bg-white shadow-sm shadow-transparent transition-all duration-300 hover:bg-gray-100"
								>
									<svg
										class="stroke-black group-hover:stroke-black"
										width="22"
										height="22"
										viewBox="0 0 22 22"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M16.5 11H5.5"
											stroke=""
											stroke-width="1.6"
											stroke-linecap="round"
										/>
										<path
											d="M16.5 11H5.5"
											stroke=""
											stroke-opacity="0.2"
											stroke-width="1.6"
											stroke-linecap="round"
										/>
										<path
											d="M16.5 11H5.5"
											stroke=""
											stroke-opacity="0.2"
											stroke-width="1.6"
											stroke-linecap="round"
										/>
									</svg>
								</button>
								<input
									type="text"
									class="font-semibold text-gray-900 text-lg py-2.5 px-2 w-full h-full bg-transparent text-center border-transparent"
									v-model="quantity"
								/>
								<button 
									@click="incrQuantity" 
									class="group py-[12px] px-3 w-full border-l border-gray-400 rounded-r-full h-full flex items-center justify-center bg-white shadow-sm shadow-transparent transition-all duration-300 hover:bg-gray-100"
								>
									<svg
										class="stroke-black group-hover:stroke-black"
										width="22"
										height="22"
										viewBox="0 0 22 22"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M11 5.5V16.5M16.5 11H5.5"
											stroke="#9CA3AF"
											stroke-width="1.6"
											stroke-linecap="round"
										/>
										<path
											d="M11 5.5V16.5M16.5 11H5.5"
											stroke="black"
											stroke-opacity="0.2"
											stroke-width="1.6"
											stroke-linecap="round"
										/>
										<path
											d="M11 5.5V16.5M16.5 11H5.5"
											stroke="black"
											stroke-opacity="0.2"
											stroke-width="1.6"
											stroke-linecap="round"
										/>
									</svg>
								</button>
							</div>

							<button 
								@click="clickBuy" 
								class="py-3 px-5 rounded-full bg-indigo-600 text-white font-semibold text-lg w-full flex items-center justify-center shadow-sm shadow-transparent transition-all duration-300 hover:shadow-indigo-300 hover:bg-indigo-700"
							>
								Купить
							</button>
						</div>
          </div>
        </div>
      </div>
    </div>

    <div class="text-center py-10 px-4 sm:px-6 lg:px-8" v-else>
      <h2 class="block text-7xl font-bold text-gray-800 sm:text-9xl">404</h2>
      <p class="mt-3 text-gray-600 text-lg">Продукт не найден.</p>
      <div class="mt-5 flex flex-col justify-center items-center gap-2 sm:flex-row sm:gap-3">
        <a 
          href="/"
          class="w-full sm:w-auto py-1.5 px-3 sm:py-3 sm:px-4 text-md font-medium rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition duration-300" 
        >
          Назад к товаром
        </a>
      </div>
    </div>
  </section>
</template>
