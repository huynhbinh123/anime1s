<template>
  <div class="flex flex-col w-full">
    <section class="mt-8">
      <h2 class="text-pink-300 font-bold text-2xl mb-4">Thịnh Hành</h2>

      <!-- Grid 8 cột -->
      <div class="grid grid-cols-8 gap-4 w-full">
        <div
          v-for="anime in animes.splice(0, 8)"
          :key="anime.slug"
          class="flex flex-col items-center justify-center"
        >
          <NuxtLink
            :to="`/phim/${anime.slug}`"
            class="relative w-[170px] h-[220px]"
          >
            <img
              :src="anime.img"
              :alt="anime.title"
              class="w-full h-full object-cover rounded-md"
            />
            <div
              class="absolute bottom-10 left-0 text-white text-lg font-bold transform -rotate-90 origin-bottom-left whitespace-nowrap max-w-[150px] overflow-hidden text-ellipsis"
            >
              {{ anime.title }}
            </div>

            <span
              class="absolute bottom-0 -left-6 mt-2 text-pink-300 font-bold text-lg"
            >
              {{ anime.number }}
            </span>
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { useCategories } from "~/composables/useCategories";

interface Anime {
  title: string;
  number: string;
  slug: string;
  view: string;
}

const animes = useCategories();
</script>
