<template>
  <ul class="space-y-4">
    <li
      v-for="item in items"
      :key="item.slug"
      class="flex space-x-4 items-start border-b border-gray-700 pb-4"
    >
      <div class="relative group">
        <img
          :src="item.image"
          :alt="item.title"
          class="w-[60px] h-[76px] object-cover rounded-md flex-shrink-0 relative cursor-pointer"
        />

        <!-- overlay hover -->
        <AnimeOverlay :item="item" />
      </div>
      <div>
        <NuxtLink :to="item.slug">
          <h3
            class="text-white font-bold text-md line-clamp-1 hover:text-pink-300 cursor-pointer"
          >
            {{ item.title }}
          </h3></NuxtLink
        >

        <p class="text-gray-300 text-sm line-clamp-1 mt-1">
          {{ item.englishTitle }}
        </p>
        <div class="mt-2 flex items-center space-x-2">
          <span
            class="px-1 py-0.5 rounded text-sm text-black font-semibold bg-[#b0e3af]"
          >
            {{ item.episode }}
          </span>
          <span class="inline-block w-1 h-1 bg-gray-600 rounded-full"></span>
          <span class="text-gray-400 text-sm font-semibold">{{
            item.type
          }}</span>
        </div>
      </div>
    </li>
    <NuxtLink
      class="text-[#AAAAAA] font-bold leading-none hover:text-white cursor-pointer"
      :to="`${slug}`"
    >
      Xem Thêm
    </NuxtLink>
  </ul>
</template>

<script setup lang="ts">
import { defineProps } from "vue";

interface AnimeItem {
  title: string;
  englishTitle: string;
  episode: number;
  type: "TV" | "MOVIE";
  image: string;
  slug: string;
  view: string;
}

const props = defineProps<{
  items: AnimeItem[];
  slug?: string;
}>();

const { items, slug } = props;
</script>

<style></style>
