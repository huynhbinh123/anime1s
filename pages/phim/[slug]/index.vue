<script setup lang="ts">
import { useCategories, useMovieList } from "~/composables/useCategories";
import { animeNewAdded } from "~/composables/animeData";

const route = useRoute();
const slug = route.params.slug as string;

const categories = useCategories();
const movieList = useMovieList();

const anime =
  categories.find((item) => item.slug === slug) ||
  movieList.find((item) => item.slug === slug);

if (!anime) {
  throw createError({
    statusCode: 404,
    statusMessage: "Anime not found",
  });
}

// trích số tập từ ep (ví dụ /phim/one-piece/tap-1201 => 1201)
const epNumber = anime.ep ? anime.ep.split("/tap-")[1] || "" : "";
</script>

<template>
  <div class="bg-gradient-to-br from-gray-900 to-gray-600 text-white mt-17">
    <!-- movie -->
    <div class="max-w-8xl px-6 py-12 flex gap-10">
      <!-- Cột trái -->
      <div class="flex-1 flex gap-6 ml-40">
        <div class="flex flex-col">
          <!-- Breadcrumb -->
          <div class="text-base font-bold flex items-center gap-2 text-white">
            <NuxtLink to="/" class="hover:text-[#ffbade] flex gap-1"
              ><UIcon name="typcn:home" size="20"></UIcon>
              <span>Home</span></NuxtLink
            >
            <span>•</span>
            <NuxtLink :to="`/the-loai/${anime.tags[0].toLowerCase()}`"
              >TV</NuxtLink
            >
            <span>•</span>
            <NuxtLink :to="`/the-loai/${anime.tags[0].toLowerCase()}`">
              {{ anime.tags[0] }}
            </NuxtLink>
            <div v-if="anime.tags.length"></div>
            <span>•</span>

            <NuxtLink :to="anime.slug" class="text-pink-300">{{
              anime.title
            }}</NuxtLink>
          </div>
          <!-- Poster -->
          <div class="w-[180px] h-[225px] mt-2 flex-shrink-0">
            <img
              :src="anime.image"
              :alt="anime.title"
              class="rounded-lg shadow-lg h-full w-full object-cover"
            />
          </div>
        </div>

        <!-- Thông tin chính -->
        <div class="flex flex-col justify-start gap-4 mt-10">
          <!-- Title -->
          <NuxtLink :to="anime.slug" class="text-4xl font-bold">{{
            anime.title
          }}</NuxtLink>
          <p class="text-lg text-gray-300">{{ anime.name }}</p>

          <!-- Badge -->
          <div class="flex items-center gap-2">
            <span
              class="bg-[#b0e3af] text-black flex items-center px-1 py-1 rounded text-sm font-bold"
            >
              <UIcon name="tabler:badge-cc-filled" size="20" class="bg-black" />
              <span>{{ anime.ccNumber }}</span>
            </span>
            <span
              class="bg-[#ffbade] text-black px-1 py-1 rounded text-sm font-bold"
            >
              HD
            </span>
          </div>

          <!-- Buttons -->
          <div class="flex items-center gap-4">
            <NuxtLink
              :to="anime.ep"
              class="bg-[#ffbade] text-black font-semibold px-6 py-2 rounded-full shadow-md flex items-center gap-2 hover:bg-pink-300 transition"
            >
              <UIcon name="mdi:play" size="26" /> Xem ngay
            </NuxtLink>
            <NuxtLink
              :to="anime.ep"
              class="bg-white text-black font-semibold px-6 py-2 rounded-full shadow-md flex items-center gap-2 hover:bg-gray-300"
            >
              <UIcon name="mdi:plus" size="26" /> Sưu Tập
            </NuxtLink>
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
          <span class="font-semibold text-white">Tập:</span>
          {{ epNumber }}
        </p>
        <p class="mb-2">
          <span class="font-semibold text-white">Quốc gia:</span> Nhật Bản
        </p>
        <p class="mb-4">
          <span class="font-semibold text-white">Lượt xem:</span>
          {{ anime.view }}
        </p>

        <div class="border-y border-gray-500 py-2">
          <p class="font-semibold text-white mb-2">Thể loại:</p>
          <div class="flex flex-wrap gap-2">
            <NuxtLink
              v-for="tag in anime.tags"
              :key="tag"
              :to="`/the-loai/${tag.toLowerCase()}`"
              class="px-3 py-1 border border-gray-500 rounded-lg text-sm text-gray-300 hover:text-pink-300 hover:border-pink-300 transition"
            >
              {{ tag }}
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- đề xuất -->
  <div class="grid grid-cols-8 gap-8">
    <div class="col-span-6 mt-11">
      <Movie
        :items="
          animeNewAdded.slice(0, 12).map((item) => ({
            ...item,
            type: item.type === 'TV' ? 'TV' : 'MOVIE',
          }))
        "
        title="Đề Xuất Anime"
        slug="phim-moi-cap-nhat"
      />
    </div>
    <div class="col-span-2">
      <TopAnime :showTabs="false" title="Thịnh Hành" />
    </div>
  </div>
</template>
