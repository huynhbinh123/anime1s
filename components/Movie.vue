<template>
  <div>
    <div class="flex justify-between items-center mb-4">
      <h1 class="text-pink-300 font-bold text-2xl">{{ title }}</h1>
      <NuxtLink
        :to="`/${slug}`"
        class="text-sm text-gray-400 flex items-center justify-center gap-1 cursor-pointer hover:text-white"
      >
        <span class="">Xem thêm</span>
        <UIcon name="material-symbols:chevron-right" size="18" class="mt-0.5" />
      </NuxtLink>
    </div>
    <ul class="grid grid-cols-6 gap-4">
      <li
        v-for="item in items"
        :key="item.slug"
        class="flex flex-col cursor-pointer"
      >
        <div class="relative group">
          <img
            :src="item.image"
            :alt="item.title"
            class="w-[200px] h-[280px] object-cover rounded-md cursor-pointer transition duration-300 hover:opacity-30"
          />

          <!-- overlay hover -->
          <AnimeOverlay :item="item" />

          <div class="mt-2 flex items-center justify-center space-x-2">
            <UIcon
              name="material-symbols:play-arrow"
              size="70"
              class="text-white absolute inset-0 m-auto opacity-0 group-hover:opacity-100 transition duration-300"
            />
            <span
              class="px-2 rounded bg-[#b0e3af] text-sm font-bold text-black flex items-center justify-center gap-1 absolute top-1 -right-1"
            >
              <UIcon name="tabler:badge-cc-filled" size="15" class="bg-black" />
              {{ item.episode }}
            </span>
            <span
              class="px-2 text-black font-bold text-sm rounded bg-[#ffbade] absolute top-1 left-1"
            >
              HD
            </span>
            <span
              class="text-white text-sm rounded bg-black/80 absolute bottom-3 right-1 px-3 py-1 flex items-center justify-center gap-1"
            >
              {{ item.view }}
              <UIcon
                name="ic:outline-remove-red-eye"
                size="20"
                class="bg-white"
              />
            </span>
          </div>
        </div>
        <p
          class="mt-2 text-lg text-white font-bold text-start line-clamp-1 overflow-hidden"
        >
          {{ item.title }}
        </p>
        <p
          class="mt-2 text-sm text-gray-300 text-start line-clamp-1 overflow-hidden"
        >
          {{ item.englishTitle }}
        </p>
      </li>
    </ul>
  </div>
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
  title: string;
  items: AnimeItem[];
  slug: string;
}>();
</script>
