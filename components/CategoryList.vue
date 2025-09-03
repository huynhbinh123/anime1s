<script setup lang="ts">
import { ref, computed } from "vue";
import TopAnime from "~/components/TopAnime.vue";
import { useCategories } from "~/composables/useCategories";

const animes = useCategories();

const categories = [
  { name: "Action", color: "text-green-300/70" },
  { name: "Adult Cast", color: "text-orange-300/70" },
  { name: "Anthropomorph", color: "text-red-300/70" },
  { name: "Avant Garde", color: "text-purple-300/70" },
  { name: "Adventure", color: "text-blue-300/70" },
  { name: "Award Winning", color: "text-pink-300/70" },
  { name: "Boys Love", color: "text-green-300/70" },
  { name: "CGDCT", color: "text-lime-300/70" },
  { name: "Childcare", color: "text-yellow-300/70" },
  { name: "Comedy", color: "text-red-300/70" },
  { name: "Combat Sports", color: "text-pink-300/70" },
  { name: "Crossdressing", color: "text-sky-300/70" },
  { name: "Delinquents", color: "text-blue-300/70" },
  { name: "Detective", color: "text-yellow-100/70" },
  { name: "Drama", color: "text-green-300/70" },
  { name: "Ecchi", color: "text-lime-300/70" },
  { name: "Educational", color: "text-red-300/70" },
  { name: "Erotica", color: "text-blue-300/70" },
  { name: "Fantasy", color: "text-pink-300/70" },
  { name: "Gag Humor", color: "text-sky-300/70" },
  { name: "Girls Love", color: "text-green-300/70" },
  { name: "Gore", color: "text-lime-300/70" },
  { name: "Gourmet", color: "text-yellow-300/70" },
  { name: "Harem", color: "text-red-300/70" },
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

const tabs = ["Today", "Week", "Month"];
const activeTab = ref("Today"); // mặc định Today

// comments
const posts = [
  {
    tag: "Hỏi đáp",
    time: "6 tháng",
    comments: 1,
    title: "Liệu Loki có gia nhập bằng Luffy ?",
    description:
      "Theo mọi người liệu Luffy có gia nhập bằng hải tặc của Luffy không, nếu mà gia nhập thì băng Luffy quá mạnh",
    author: "ANIMEW",
    avatar: "https://i.pravatar.cc/40?img=1",
  },
  {
    tag: "Hỏi đáp",
    time: "4 tháng",
    comments: 1,
    title: "Cộng đồng của website",
    description: "Cho em hỏi mình có discord cộng đồng hay gì đó không ạ?",
    author: "Tuấn Thiện",
    avatar: "https://i.pravatar.cc/40?img=2",
  },
  {
    tag: "Chung",
    time: "3 tháng",
    comments: 1,
    title: "Web này bị lỗi phần tìm kiếm à?",
    description:
      "Web này phần tìm kiếm bị lỗi à. Tìm tên anime xong kick vô chả hiện cái gì",
    author: "DONV",
    avatar: "https://i.pravatar.cc/40?img=3",
  },
];
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
