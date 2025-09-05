<script setup lang="ts">
import { ref, computed } from "vue";
import TopAnime from "~/components/TopAnime.vue";
import { useCategories } from "~/composables/useCategories";

const animes = useCategories();

const categories = [
  { name: "Action", color: "text-green-300/70", slug: "action" },
  { name: "Adult Cast", color: "text-orange-300/70", slug: "adult-cast" },
  { name: "Anthropomorph", color: "text-red-300/70", slug: "anthropomorph" },
  { name: "Avant Garde", color: "text-purple-300/70", slug: "avant-garde" },
  { name: "Adventure", color: "text-blue-300/70", slug: "adventure" },
  { name: "Award Winning", color: "text-pink-300/70", slug: "award-winning" },
  { name: "Boys Love", color: "text-green-300/70", slug: "boys-love" },
  { name: "CGDCT", color: "text-lime-300/70", slug: "cgdct" },
  { name: "Childcare", color: "text-yellow-300/70", slug: "childcare" },
  { name: "Comedy", color: "text-red-300/70", slug: "comedy" },
  { name: "Combat Sports", color: "text-pink-300/70", slug: "combat-sports" },
  { name: "Crossdressing", color: "text-sky-300/70", slug: "crossdressing" },
  { name: "Delinquents", color: "text-blue-300/70", slug: "delinquents" },
  { name: "Detective", color: "text-yellow-100/70", slug: "detective" },
  { name: "Drama", color: "text-green-300/70", slug: "drama" },
  { name: "Ecchi", color: "text-lime-300/70", slug: "ecchi" },
  { name: "Educational", color: "text-red-300/70", slug: "educational" },
  { name: "Erotica", color: "text-blue-300/70", slug: "erotica" },
  { name: "Fantasy", color: "text-pink-300/70", slug: "fantasy" },
  { name: "Gag Humor", color: "text-sky-300/70", slug: "gag-humor" },
  { name: "Girls Love", color: "text-green-300/70", slug: "girls-love" },
  { name: "Gore", color: "text-lime-300/70", slug: "gore" },
  { name: "Gourmet", color: "text-yellow-300/70", slug: "gourmet" },
  { name: "Harem", color: "text-red-300/70", slug: "harem" },
];

const showAll = ref(false);
// computed để chọn danh sách hiển thị
const displayedCategories = computed(() => {
  return showAll.value ? categories : categories.slice(0, 12);
});
// toggle hiển thị
const toggleShow = () => {
  showAll.value = !showAll.value;
};
</script>

<template>
  <div class="">
    <h2 class="text-pink-300 font-bold text-2xl mb-3">Thể loại</h2>
    <div class="bg-[#2a293b] p-6 rounded-lg">
      <div class="grid grid-cols-2 gap-3">
        <NuxtLink
          v-for="(cat, index) in displayedCategories"
          :key="index"
          :to="`/the-loai/${cat.name.toLowerCase().replace(/ /g, '-')}`"
          :class="`${cat.color} text-base font-bold white-space-nowrap cursor-pointer py-2 hover:underline`"
        >
          {{ cat.name }}
        </NuxtLink>
      </div>

      <div class="mt-4">
        <button
          @click="toggleShow"
          class="w-full py-2 bg-gray-500/50 text-white font-semibold rounded-md hover:bg-gray-500 transition cursor-pointer"
        >
          {{ showAll ? "Thu gọn" : "Xem thêm" }}
        </button>
      </div>
    </div>
  </div>
  <!-- Top -->
  <TopAnime :showTabs="true" title="Top 10" />
</template>
