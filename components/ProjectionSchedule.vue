<template>
  <div class="w-full flex flex-col lg:justify-between justify-center">
    <!-- Header -->
    <div class="flex lg:justify-between justify-center items-center">
      <h2 class="lg:flex hidden text-pink-300 font-bold text-2xl mb-4">
        Lịch Chiếu Anime
      </h2>
      <div class="flex items-center gap-2">
        <span
          class="bg-gray-200 text-black p-3 rounded-md text-lg font-medium whitespace-nowrap"
        >
          {{ currentTime }}
        </span>
      </div>
    </div>

    <!-- Tabs -->
    <div class="grid grid-cols-7 gap-1 mb-4 items-center justify-between">
      <UButton
        v-for="(day, index) in days"
        :key="index"
        @click="activeDay = index"
        :class="[
          'rounded-md text-lg font-bold mt-4 transition cursor-pointer flex justify-center',
          activeDay === index
            ? 'bg-pink-300 text-black'
            : 'bg-[#3a3949] text-white hover:bg-[#4a4959]',
        ]"
      >
        {{ day }}
      </UButton>
    </div>

    <!-- List Anime -->
    <div class="flex flex-col divide-y divide-gray-600">
      <NuxtLink
        :to="anime.slug"
        v-for="(anime, i) in visibleList"
        :key="i"
        class="flex justify-between items-center py-3 hover:bg-gray-700 rounded-lg transition cursor-pointer mt-2"
      >
        <div class="flex items-center gap-4">
          <span class="text-gray-400 text-lg font-bold w-20 text-center">{{
            anime.time
          }}</span>
          <span class="text-white text-lg font-bold line-clamp-1">{{
            anime.title
          }}</span>
        </div>
        <span class="text-white text-base px-2 whitespace-nowrap">
          {{ anime.episodes }}</span
        >
      </NuxtLink>

      <!-- Chỉ hiện khi > 6 -->
      <div
        v-if="schedule[activeDay].length > 6"
        class="text-white font-bold text-lg mt-2 cursor-pointer hover:text-pink-300"
        @click="toggleExpand(activeDay)"
      >
        {{ expandedDay === activeDay ? "Thu gọn" : "Xem thêm" }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, ref } from "vue";

// Danh sách các ngày
const days = [
  "Thứ hai",
  "Thứ ba",
  "Thứ tư",
  "Thứ năm",
  "Thứ sáu",
  "Thứ bảy",
  "Chủ Nhật",
];

// Active tab
const activeDay = ref(new Date().getDay() - 1); // getDay() trả về 0-6 (0=CN)
if (activeDay.value < 0) activeDay.value = 6;

// Fake dữ liệu lịch chiếu
const schedule = [
  [
    {
      time: "01:00",
      title: "KataInaka no Ossan, Kensei ni Naru",
      episodes: "Tập 13",
      slug: "/phim/katainaka-no-ossan-kensei-ni-naru-tap-13",
    },
    {
      time: "15:30",
      title: "Mashin Souzou Wataru",
      episodes: "Tập 13",
      slug: "/phim/mashin-souzou-wataru",
    },
  ],
  [
    {
      time: "16:00",
      title: "Tsue to Tsurugi no Wistoria",
      episodes: "Tập 13",
      slug: "/phim/tsue-to-tsurugi-no-wistoria",
    },
    {
      time: "20:30",
      title: "Dungeon ni Deai wo Motomeru...",
      episodes: "Tập 13",
      slug: "/phim/dungeon-ni-deai-wo-motomeru",
    },
  ],
  [
    {
      time: "21:30",
      title: "Youkai Gakkou no Sensei Hajimemashita!",
      episodes: "Tập 13",

      slug: "/phim/youkai-gakkou-no-sensei-hajimemashita",
    },
  ],
  [
    {
      time: "21:30",
      title: "100 cô bạn gái yêu bạn...",
      episodes: "Tập 13",
      slug: "/phim/100-co-ban-gai-yeu-ban",
    },
  ],
  [
    {
      time: "16:00",
      title: "Tsue to Tsurugi no Wistoria",
      episodes: "Tập 13",
      slug: "/phim/tsue-to-tsurugi-no-wistoria",
    },
    {
      time: "20:30",
      title: "Dungeon ni Deai wo Motomeru...",
      episodes: "Tập 13",
      slug: "/phim/dungeon-ni-deai-wo-motomeru",
    },
  ],
  [], // Thứ bảy
  [
    {
      time: "16:00",
      title: "Tsue to Tsurugi no Wistoria",
      episodes: "Tập 13",
      slug: "/phim/tsue-to-tsurugi-no-wistoria",
    },

    {
      time: "20:30",
      title: "Dungeon ni Deai wo Motomeru...",
      episodes: "Tập 13",
      slug: "/phim/dungeon-ni-deai-wo-motomeru",
    },
    {
      time: "16:00",
      title: "Tsue to Tsurugi no Wistoria",
      episodes: "Tập 13",
      slug: "/phim/tsue-to-tsurugi-no-wistoria",
    },
    {
      time: "20:30",
      title: "Dungeon ni Deai wo Motomeru...",

      episodes: "Tập 13",
      slug: "/phim/dungeon-ni-deai-wo-motomeru",
    },
    {
      time: "16:00",
      title: "Tsue to Tsurugi no Wistoria",
      episodes: "Tập 13",
      slug: "/phim/tsue-to-tsurugi-no-wistoria",
    },
    {
      time: "20:30",
      title: "Dungeon ni Deai wo Motomeru...",
      episodes: "Tập 13",
      slug: "/phim/dungeon-ni-deai-wo-motomeru",
    },
    {
      time: "16:00",
      title: "Tsue to Tsurugi no Wistoria",
      episodes: "Tập 13",
      slug: "/phim/tsue-to-tsurugi-no-wistoria",
    },
    {
      time: "20:30",
      title: "Dungeon ni Deai wo Motomeru...",

      episodes: "Tập 13",
      slug: "/phim/dungeon-ni-deai-wo-motomeru",
    },
    { time: "16:00", title: "Tsue to Tsurugi no Wistoria", episodes: "Tập 13" },
    {
      time: "20:30",
      title: "Dungeon ni Deai wo Motomeru...",
      episodes: "Tập 13",
      slug: "/phim/dungeon-ni-deai-wo-motomeru-tap-13",
    },
  ],
];

// Đồng hồ thời gian thực
const currentTime = ref("");
let timer: any;

const updateClock = () => {
  const now = new Date();
  currentTime.value =
    now.toLocaleString("vi-VN", {
      hour12: false,
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    }) + " Việt Nam";
};

onMounted(() => {
  updateClock();
  timer = setInterval(updateClock, 1000);
});

onUnmounted(() => {
  clearInterval(timer);
});

const expandedDay = ref<number | null>(null);

// Danh sách hiển thị tùy theo trạng thái mở rộng
const visibleList = computed(() => {
  const day = activeDay.value;
  const list = schedule[day] || [];
  return expandedDay.value === day ? list : list.slice(0, 6);
});

// Đổi tab thì thu gọn lại
watch(activeDay, () => {
  expandedDay.value = null;
});

const toggleExpand = (day: number) => {
  expandedDay.value = expandedDay.value === day ? null : day;
};
</script>
