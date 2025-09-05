<template>
  <div class="text-white w-full mx-auto my-8 px-4">
    <h2 class="text-lg font-semibold mb-4">Xem anime cùng season của anime:</h2>
    <div class="grid lg:grid-cols-6 grid-cols-2 gap-2">
      <div
        v-for="(anime, i) in animeList.slice(0, 12)"
        :key="i"
        class="relative rounded-md overflow-hidden shadow-md group cursor-pointer"
      >
        <!-- Hình nền -->
        <img
          :src="anime.image"
          alt="anime thumbnail"
          class="w-full h-[72px] object-cover transition duration-300 group-hover:scale-105"
        />

        <!-- Overlay -->
        <NuxtLink :to="`/phim/${anime.slug}`">
          <div
            class="absolute inset-0 bg-black/70 flex items-center justify-center p-2"
          >
            <p
              class="text-sm font-medium text-center group-hover:text-pink-400 transition"
            >
              {{ anime.title }}
            </p>
          </div>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  animeList: {
    type: Array,
    required: true,
  },
});
</script>
