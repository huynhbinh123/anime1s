<script setup lang="ts">
import { ref, computed } from "vue";
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
  <!-- top -->
  <div class="mt-10 mb-4">
    <!--  -->
    <div class="flex justify-between items-center">
      <h2 class="text-pink-300 font-bold text-2xl mb-3">Top 10</h2>
      <div class="flex">
        <div class="flex space-x-4 bg-[#2a293b] rounded-lg">
          <span
            v-for="tab in tabs"
            :key="tab"
            @click="activeTab = tab"
            class="text-base font-semibold flex items-center justify-center gap-1 cursor-pointer px-2 py-1 rounded-lg transition ducation-300"
            :class="activeTab === tab ? 'bg-pink-300 text-black' : 'text-white'"
          >
            {{ tab }}
          </span>
        </div>

        <!-- Nội dung theo tab -->
        <div class="mt-4 text-white">
          <div v-if="activeTab === 'Today'"></div>
          <div v-else-if="activeTab === 'Week'"></div>
          <div v-else></div>
        </div>
      </div>
    </div>
    <!-- content -->
    <div class="bg-[#2a293b] p-4 rounded-lg mt-2">
      <div class="flex flex-col gap-4">
        <div
          v-for="(item, index) in animes.slice(0, 10)"
          :key="item.slug"
          class="flex items-center gap-3 p-2 hover:bg-gray-700 rounded-lg transition"
        >
          <!-- Number -->
          <span
            class="text-2xl font-bold text-right"
            :class="
              index < 3
                ? 'text-white border-b-4 border-pink-200'
                : 'text-gray-400'
            "
          >
            {{ String(item.number).padStart(2, "0") }}
          </span>

          <!-- Image -->
          <NuxtLink
            :to="item.slug"
            class="w-14 h-20 overflow-hidden rounded-md flex-shrink-0"
          >
            <img
              :src="item.img"
              :alt="item.title"
              class="w-full h-full object-cover"
            />
          </NuxtLink>

          <!-- Info -->
          <div class="flex flex-col">
            <NuxtLink
              :to="item.slug"
              class="font-bold text-white leading-tight hover:text-pink-300"
            >
              {{ item.title }}
            </NuxtLink>
            <NuxtLink
              :to="item.slug"
              class="text-sm text-gray-400 font-semibold truncate line-clamp-1 max-w-[270px]"
            >
              {{ item.description }}
            </NuxtLink>
            <div
              class="flex items-center gap-1 text-gray-400 font-semibold text-sm"
            >
              <UIcon name="mdi:eye" />
              <span>{{ item.view }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Trending Post -->
    <div>
      <!-- Header -->
      <div class="flex justify-between items-center mt-10 mb-4">
        <h2 class="text-pink-300 font-bold text-2xl mb-3">Trending Post</h2>
        <NuxtLink
          to="/community/board"
          class="text-sm text-gray-400 flex items-center justify-center gap-1 cursor-pointer hover:text-white"
        >
          Xem thêm
        </NuxtLink>
      </div>

      <!-- List Post -->
      <div class="flex flex-col gap-4">
        <div
          v-for="(post, i) in posts"
          :key="i"
          class="bg-[#2a293b] p-4 rounded-lg"
        >
          <!-- Tag + Time + Comment -->
          <div class="flex items-center gap-2 text-sm text-gray-400 mb-2">
            <span class="text-yellow-400 font-semibold">#{{ post.tag }}</span>
            <span>• {{ post.time }}</span>
            <div class="flex items-center gap-1 ml-auto">
              <UIcon name="mdi:comment-outline" size="16" />
              <span>{{ post.comments }}</span>
            </div>
          </div>

          <!-- Title -->
          <h3
            class="text-lg font-bold text-white mb-1 hover:text-pink-300 cursor-pointer"
          >
            {{ post.title }}
          </h3>

          <!-- Description -->
          <p class="text-sm text-gray-400 line-clamp-2">
            {{ post.description }}
          </p>

          <!-- Author -->
          <div class="flex items-center gap-2 mt-3">
            <img
              :src="post.avatar"
              alt="avatar"
              class="w-6 h-6 rounded-full object-cover"
            />
            <span class="text-sm text-gray-300">{{ post.author }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
