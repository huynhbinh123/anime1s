<template>
  <div class="relative">
    <!-- Slider Ảnh -->
    <Swiper
      :pagination="{ dynamicBullets: true }"
      :modules="modules"
      class="w-full h-[500px] rounded-lg"
      loop
      :navigation="{
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      }"
    >
      <SwiperSlide v-for="(item, i) in movieList" :key="i">
        <img
          :src="item.image"
          loop
          :alt="`Slide ${i + 1}`"
          class="w-full h-[500px] object-cover rounded-lg opacity-40"
        />

        <!-- Phần Thông Tin đè lên slider -->
        <div
          class="absolute top-16 left-12 w-full h-full flex items-center z-20"
        >
          <div class="text-white max-w-[50%]">
            <span class="text-[#ffbade] text-lg font-bold rounded">
              {{ item.rank }}
            </span>
            <h1 class="text-5xl font-bold mb-4">{{ item.title }}</h1>
            <div class="flex items-center gap-4 mb-4">
              <span class="rounded flex mt-0.5 items-center gap-1"
                ><UIcon
                  name="material-symbols:play-arrow-rounded"
                  size="20"
                  class="bg-white"
                />
                TV</span
              >

              <span class="px-3 py-1 rounded">{{ item.view }} </span>
              <div
                class="p-1 rounded bg-[#b0e3af] text-xs font-bold text-black flex items-center"
              >
                <UIcon
                  name="tabler:badge-cc-filled"
                  size="15"
                  class="bg-black"
                />
                <span class="ml-1">{{ item.ccNumber }}</span>
              </div>
              <span
                class="p-1 text-black font-bold text-xs rounded bg-[#7ecaec]"
              >
                HD
              </span>
            </div>
            <p class="text-lg mb-6 line-clamp-3">{{ item.description }}</p>

            <div class="flex items-center space-x-4">
              <div
                class="bg-[#ffbade] flex items-center hover:bg-[#f1c3db] transition cursor-pointer rounded-3xl px-2 py-1 gap-1"
              >
                <UIcon
                  name="material-symbols:play-circle-rounded"
                  size="25"
                  class="bg-black"
                />
                <NuxtLink :to="item.ep"
                  ><UButton
                    class="text-black bg-[#ffbade] rounded-3xl cursor-pointer"
                    >Xem Anime</UButton
                  ></NuxtLink
                >
              </div>
              <div
                class="bg-gray-500 flex items-center transition cursor-pointer rounded-3xl px-2 py-1 gap-1"
              >
                <UIcon
                  name="pajamas:information"
                  size="25"
                  class="bg-[#ffbade]"
                />
                <NuxtLink :to="`/phim/${item.slug}`"
                  ><UButton
                    class="text-white bg-gray-500 rounded-3xl cursor-pointer"
                    >Thông tin</UButton
                  ></NuxtLink
                >
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <!-- Nút Prev/Next -->
      <div class="swiper-button-prev !text-[#ffbade]"></div>
      <div class="swiper-button-next !text-[#ffbade]"></div>
    </Swiper>
  </div>
</template>
<script lang="ts" setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
import { useMovieList } from "~/composables/useCategories";

const movieList = useMovieList();
const modules = [Pagination, Navigation];
</script>

<style scoped></style>
