<script setup lang="ts">
import { useCategories } from "~/composables/useCategories";

// lấy param từ route
const route = useRoute();
const slug = route.params.slug as string;

// lấy danh sách anime
const categories = useCategories();

// tìm anime theo slug
const anime = categories.find((item) => item.slug === slug);

if (!anime) {
  throw createError({
    statusCode: 404,
    statusMessage: "Anime not found",
  });
}
</script>

<template>
  <div class="bg-gradient-to-br from-gray-900 to-gray-800 text-white mt-17">
    <div class="max-w-7xl mx-auto px-6 py-12 flex gap-10">
      <!-- Cột trái -->
      <div class="flex-1 flex gap-6">
        <!-- Poster -->
        <div class="w-[180px] flex-shrink-0">
          <img
            :src="anime.img"
            :alt="anime.title"
            class="rounded-lg shadow-lg"
          />
        </div>

        <!-- Thông tin chính -->
        <div class="flex flex-col justify-start gap-4">
          <!-- Breadcrumb -->
          <div class="text-sm flex items-center gap-2 text-white">
            <NuxtLink to="/" class="hover:text-[#ffbade] flex gap-1"
              ><UIcon name="typcn:home" size="20"></UIcon>
              <span>Home</span></NuxtLink
            >
            <span>•</span>
            <NuxtLink to="/tv" class="hover:text-[#ffbade]">TV</NuxtLink>
            <span>•</span>
            <span class="text-pink-300">{{ anime.title }}</span>
          </div>

          <!-- Title -->
          <h1 class="text-4xl font-bold">{{ anime.title }}</h1>
          <p class="text-lg text-gray-300">{{ anime.name }}</p>

          <!-- Badge -->
          <div class="flex items-center gap-2">
            <span
              class="bg-green-500 text-black px-2 py-1 rounded text-sm font-semibold"
            >
              {{ anime.number }}
            </span>
            <span
              class="bg-[#ffbade] text-black px-2 py-1 rounded text-sm font-semibold"
            >
              HD
            </span>
          </div>

          <!-- Buttons -->
          <div class="flex items-center gap-4">
            <button
              class="bg-[#ffbade] text-black font-semibold px-6 py-2 rounded-full shadow-md flex items-center gap-2"
            >
              <UIcon name="mdi:play" size="26" /> Xem ngay
            </button>
            <button
              class="bg-white text-black font-semibold px-6 py-2 rounded-full shadow-md flex items-center gap-2 hover:bg-gray-100"
            >
              <UIcon name="mdi:plus" size="26" /> Sưu Tập
            </button>
          </div>

          <!-- Description -->
          <p class="text-gray-300 leading-relaxed max-w-2xl line-clamp-3">
            {{ anime.description }}
          </p>
        </div>
      </div>

      <!-- Cột phải -->
      <div class="w-[260px] flex-shrink-0 border-l border-gray-700 pl-6">
        <p class="mb-2">
          <span class="font-semibold text-white">Tập:</span> {{ anime.number }}
        </p>
        <p class="mb-2">
          <span class="font-semibold text-white">Quốc gia:</span> Nhật Bản
        </p>
        <p class="mb-4">
          <span class="font-semibold text-white">Lượt xem:</span>
          {{ anime.view }}
        </p>

        <div>
          <p class="font-semibold text-white mb-2">Thể loại:</p>
          <div class="flex flex-wrap gap-2">
            <span
              v-for="tag in ['Action', 'Adventure', 'Fantasy', 'Shounen']"
              :key="tag"
              class="px-3 py-1 border border-gray-500 rounded-lg text-sm text-gray-300"
            >
              {{ tag }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
