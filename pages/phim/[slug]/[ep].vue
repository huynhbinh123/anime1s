<style>
/* Fade cho overlay tắt đèn */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.7s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
.fade-enter-to,
.fade-leave-from {
  opacity: 1;
}

/* Animation cho cột phải */
.fade-slide-enter-active,
.fade-slide-leave-active {
  transition: all 0.3s ease;
}
.fade-slide-enter-from,
.fade-slide-leave-to {
  opacity: 0;
  transform: translateX(20px);
}
.fade-slide-enter-to,
.fade-slide-leave-from {
  opacity: 1;
  transform: translateX(0);
}
</style>
<script setup lang="ts">
import { ref, computed } from "vue";
import { useCategories, useMovieList } from "~/composables/useCategories";

const route = useRoute();
const slug = route.params.slug as string;
const ep = route.params.ep as string;

const categories = useCategories();
const movieList = useMovieList();

// Tìm anime
const anime =
  categories.find((item) => item.slug === slug) ||
  movieList.find((item) => item.slug === slug);

if (!anime) {
  throw createError({
    statusCode: 404,
    statusMessage: "Anime not found",
  });
}

// Lấy số tập hiện tại
const epNumber = ep
  ? parseInt(ep.split("tap-")[1])
  : parseInt(anime.ep?.split("/tap-")[1] || "1");

// Dropdown show/ẩn
const showEpisodeList = ref(false);
const toggleEpisodeList = () =>
  (showEpisodeList.value = !showEpisodeList.value);

// Số tập mỗi nhóm
const groupSize = 101;

// Tạo các nhóm
const totalEpisodes = (anime as any).epTotal
  ? Number((anime as any).epTotal)
  : anime.ep
  ? Number(anime.ep.split("/tap-")[1] || "1")
  : 1;

const episodeGroups = Array.from(
  { length: Math.ceil(totalEpisodes / groupSize) },
  (_, i) => {
    const start = i * groupSize + 1;
    let end = (i + 1) * groupSize;
    if (end > totalEpisodes) end = totalEpisodes;
    return { start, end };
  }
);

// Nhóm đang chọn
const selectedGroup = ref(episodeGroups[episodeGroups.length - 1]); // mặc định nhóm cuối (tập lớn)

// Các tập trong nhóm
const episodesInGroup = computed(() => {
  const start = selectedGroup.value.start;
  const end = selectedGroup.value.end;
  return Array.from({ length: end - start + 1 }, (_, i) => start + i).reverse();
});

// Tạo toàn bộ tập của anime
const allEpisodes = computed(() => {
  return Array.from({ length: totalEpisodes }, (_, i) => i + 1).reverse();
});

// Chọn nhóm
const selectGroup = (group: { start: number; end: number }) => {
  selectedGroup.value = group;
};

// Input tìm tập
const searchEpisode = ref("");

// Lọc tập
const filteredEpisodes = computed(() => {
  if (!searchEpisode.value) {
    return episodesInGroup.value; // nếu rỗng, hiển thị nhóm
  }
  return allEpisodes.value.filter((ep) =>
    ep.toString().includes(searchEpisode.value)
  );
});

const isExpanded = ref(false);

function toggleExpand() {
  isExpanded.value = !isExpanded.value;
}

// Tắt đèn overlay
const isDark = ref(false);
const toggleDark = () => (isDark.value = !isDark.value);
</script>

<template>
  <div
    class="w-full h-screen bg-gradient-to-br from-gray-900 to-gray-600 text-white"
  >
    <!-- Overlay Tắt đèn -->
    <transition name="fade">
      <div
        v-if="isDark"
        class="fixed inset-0 bg-black/90 z-40"
        @click="toggleDark"
      ></div>
    </transition>
    <div class="flex flex-col h-full">
      <!-- Breadcrumb -->
      <div class="text-base font-bold flex items-center gap-2 text-white">
        <NuxtLink to="/" class="hover:text-[#ffbade] flex gap-1">
          <UIcon name="typcn:home" size="20" />
          <span>Home</span>
        </NuxtLink>
        <span>•</span>
        <NuxtLink :to="`/the-loai/${anime.tags[0].toLowerCase()}`">TV</NuxtLink>
        <span>•</span>
        <NuxtLink :to="`/the-loai/${anime.tags[0].toLowerCase()}`">{{
          anime.tags[0]
        }}</NuxtLink>
        <span>•</span>
        <NuxtLink :to="anime.slug" class="text-pink-300">{{
          anime.title
        }}</NuxtLink>
      </div>

      <!-- content -->
      <div class="flex w-full h-full p-2 gap-2">
        <!-- Cột trái: Video + danh sách tập -->
        <div class="flex-1 flex w-full">
          <!-- Danh sách tập -->
          <div class="bg-[#1f1e2d] p-3 rounded-lg relative">
            <h3 class="font-bold text-white">Danh sách tập</h3>
            <div class="flex items-center mb-3 gap-2 cursor-pointer">
              <div @click="toggleEpisodeList" class="flex items-center gap-2">
                <UIcon name="material-symbols:lists-rounded" size="20" />
                <span
                  >Tập: {{ selectedGroup.start }} -
                  {{ selectedGroup.end }}</span
                >
                <UIcon name="material-symbols:arrow-drop-down" size="20" />
              </div>

              <UInput
                placeholder="Tìm tập..."
                class="flex-1"
                v-model="searchEpisode"
              />
            </div>

            <!-- Dropdown nhóm -->
            <div
              v-show="showEpisodeList"
              class="w-[160px] absolute p-1 pr-3 bg-white rounded-lg shadow-lg flex flex-col justify-center items-center z-20"
            >
              <button
                v-for="(group, index) in episodeGroups"
                :key="index"
                class="p-2 m-1 text-black bg-gray-200 rounded hover:bg-pink-300 transition w-full text-left text-sm font-semibold cursor-pointer"
                @click="
                  selectGroup(group);
                  showEpisodeList = false;
                  searchEpisode = '';
                "
              >
                Tập: {{ group.start }} - {{ group.end }}
              </button>
            </div>

            <!-- Các tập -->
            <div
              class="flex flex-wrap gap-2 w-[294px] overflow-y-auto mt-3 justify-start items-start"
            >
              <NuxtLink
                v-for="num in filteredEpisodes"
                :key="num"
                :to="`/phim/${anime.slug}/tap-${num}`"
                class="w-[48px] h-[28px] px-4 py-1 text-sm text-white bg-gray-700 rounded hover:bg-pink-300 hover:text-black transition flex justify-center items-center"
                :class="epNumber == num ? 'bg-pink-300 text-black' : ''"
              >
                <span>{{ num }}</span>
              </NuxtLink>
            </div>
          </div>

          <!-- Video player -->
          <div
            class="relative w-full flex-1 bg-black rounded-lg shadow-lg overflow-hidden z-50 mt-20"
          >
            <video controls autoplay class="w-full object-cover z-50">
              <source
                :src="(anime as any).epVideo || '/videos/sample.mp4'"
                type="video/mp4"
              />
            </video>
            <!-- phu -->
            <div class="flex justify-between p-4 z-50">
              <div class="flex items-center gap-1">
                <!-- Nút Mở rộng / Thu gọn -->
                <button
                  class="flex items-center gap-1 cursor-pointer w-[100px]"
                  @click="toggleExpand"
                >
                  <UIcon
                    :name="
                      isExpanded
                        ? 'material-symbols:zoom-in-map-rounded'
                        : 'material-symbols:zoom-out-map-rounded'
                    "
                    size="20"
                  />
                  <span>{{ isExpanded ? "Thu gọn" : "Mở Rộng" }}</span>
                </button>

                <!-- Nút Tắt đèn -->
                <button
                  class="flex items-center gap-1 cursor-pointer"
                  @click="toggleDark"
                >
                  <UIcon
                    name="lets-icons:lamp-fill"
                    size="20"
                    :class="isDark ? 'text-yellow-500' : 'text-white'"
                  />
                  <span :class="isDark ? 'text-yellow-500' : 'text-white'">
                    {{ isDark ? "Bật đèn" : "Tắt đèn" }}
                  </span>
                </button>
              </div>

              <div class="flex items-center gap-3">
                <div class="flex items-center gap-1">
                  <UIcon name="zondicons:step-backward" size="20" />
                  <span>Tập sau</span>
                </div>
                <div class="flex items-center gap-1">
                  <span>Tập trước</span>
                  <UIcon name="material-symbols:skip-next" size="20" />
                </div>
              </div>
            </div>
            <!--  -->
            <VideoServerSelector />

            <VideoRelatedAnime :animeList="animeNewAdded" />
          </div>
        </div>

        <!-- Cột phải: Thông tin anime -->
        <transition name="fade-slide">
          <div v-if="!isExpanded" class="w-[450px] flex-shrink-0">
            <div class="flex flex-col gap-6">
              <div class="flex flex-col">
                <!-- Poster -->
                <div class="w-[127px] h-[177px] mt-2 flex-shrink-0">
                  <img
                    :src="anime.image"
                    :alt="anime.title"
                    class="rounded-lg shadow-lg h-full w-full object-cover"
                  />
                </div>
                <!-- Title -->
                <NuxtLink :to="anime.slug" class="text-2xl font-bold">{{
                  anime.title
                }}</NuxtLink>
                <p class="text-base text-pink-300">{{ anime.name }}</p>

                <!-- Badge + info -->
                <div class="flex items-center gap-2">
                  <span
                    class="bg-[#b0e3af] text-black flex items-center px-2 py-1 rounded text-sm font-bold"
                  >
                    <UIcon
                      name="tabler:badge-cc-filled"
                      size="20"
                      class="bg-black"
                    />
                    <span>{{ anime.ccNumber }}</span>
                  </span>
                  <span
                    class="py-1.5 px-2 text-black font-bold text-xs rounded bg-[#7ecaec]"
                    >HD</span
                  >
                  <span
                    class="py-1.5 px-2 text-black font-bold text-xs rounded bg-[#ffbade]"
                    >TV</span
                  >
                  <NuxtLink :to="`/phim/${anime.slug}`">
                    <UIcon
                      name="pajamas:information"
                      size="25"
                      class="bg-gray-400 mt-1"
                    />
                  </NuxtLink>
                </div>

                <p class="text-white font-bold text-base line-clamp-5">
                  {{ anime.description }}
                </p>
              </div>
            </div>
          </div>
        </transition>
      </div>
    </div>
  </div>
</template>
