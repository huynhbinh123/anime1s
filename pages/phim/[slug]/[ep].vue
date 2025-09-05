<script setup lang="ts">
import { ref, computed, watch } from "vue";
import { useCategories, useMovieList } from "~/composables/useCategories";
import { useRouter, useRoute } from "vue-router";

const route = useRoute();
const router = useRouter();
const slug = route.params.slug as string;
const ep = route.params.ep as string;

const categories = useCategories();
const movieList = useMovieList();

// Lấy anime
const anime =
  categories.find((item) => item.slug === slug) ||
  movieList.find((item) => item.slug === slug);

if (!anime) {
  throw createError({ statusCode: 404, statusMessage: "Anime not found" });
}

// Tập hiện tại
const epNumber = ref(
  ep
    ? parseInt(ep.split("tap-")[1])
    : parseInt(anime.ep?.split("/tap-")[1] || "1")
);

// Số tập / nhóm
const groupSize = 101;
const totalEpisodes = (anime as any).epTotal
  ? Number((anime as any).epTotal)
  : anime.ep
  ? Number(anime.ep.split("/tap-")[1] || "1")
  : 1;

// Tạo các nhóm tập
const episodeGroups = Array.from(
  { length: Math.ceil(totalEpisodes / groupSize) },
  (_, i) => {
    const start = i * groupSize + 1;
    const end = Math.min((i + 1) * groupSize, totalEpisodes);
    return { start, end };
  }
);

// Selected group (khởi tạo)
const selectedGroup = ref(
  episodeGroups.find(
    (g) => epNumber.value >= g.start && epNumber.value <= g.end
  ) ?? episodeGroups[0]
);

// Khi epNumber thay đổi => cập nhật nhóm tự động
watch(epNumber, (newEp) => {
  selectedGroup.value =
    episodeGroups.find((g) => newEp >= g.start && newEp <= g.end) ??
    episodeGroups[0];
});

// Video source
const videoSrc = ref(
  (anime as any).epVideo || `/videos/tap-${epNumber.value}.mp4`
);

// Next / Prev episode (cập nhật nhóm luôn)
function goNextEpisode() {
  if (epNumber.value < totalEpisodes) {
    epNumber.value++;
    videoSrc.value = `/videos/tap-${epNumber.value}.mp4`;
    router.push(`/phim/${slug}/tap-${epNumber.value}`);
    // cập nhật nhóm ngay lập tức
    selectedGroup.value =
      episodeGroups.find(
        (g) => epNumber.value >= g.start && epNumber.value <= g.end
      ) ?? episodeGroups[0];
  }
}

function goPrevEpisode() {
  if (epNumber.value > 1) {
    epNumber.value--;
    videoSrc.value = `/videos/tap-${epNumber.value}.mp4`;
    router.push(`/phim/${slug}/tap-${epNumber.value}`);
    // cập nhật nhóm ngay lập tức
    selectedGroup.value =
      episodeGroups.find(
        (g) => epNumber.value >= g.start && epNumber.value <= g.end
      ) ?? episodeGroups[0];
  }
}

// Search episode
const searchEpisode = ref("");

// Expand video
const isExpanded = ref(false);
function toggleExpand() {
  isExpanded.value = !isExpanded.value;
}

// Dark mode
const isDark = ref(false);
const toggleDark = () => (isDark.value = !isDark.value);
</script>

<template>
  <div
    class="w-full min-h-screen bg-gradient-to-br from-gray-900 to-gray-600 text-white mt-20"
  >
    <div class="h-auto w-full">
      <!-- Overlay Tắt đèn -->
      <transition name="fade">
        <div
          v-if="isDark"
          class="fixed inset-0 bg-black/90 z-40"
          @click="toggleDark"
        ></div>
      </transition>

      <div class="flex flex-col">
        <!-- Breadcrumb -->
        <div
          class="text-base font-bold flex items-center gap-2 text-white mb-2"
        >
          <NuxtLink to="/" class="hover:text-[#ffbade] flex gap-1">
            <UIcon name="typcn:home" size="20" />
            <span>Home</span>
          </NuxtLink>
          <span>•</span>
          <NuxtLink :to="`/the-loai/${anime.tags[0].toLowerCase()}`"
            >TV</NuxtLink
          >
          <span>•</span>
          <NuxtLink :to="`/the-loai/${anime.tags[0].toLowerCase()}`">{{
            anime.tags[0]
          }}</NuxtLink>
          <span>•</span>
          <NuxtLink :to="anime.slug" class="text-[#ffbade]">{{
            anime.title
          }}</NuxtLink>
        </div>

        <!-- Content -->
        <div class="flex w-full p-2 gap-2">
          <!-- Danh sách tập -->
          <VideoEpisodeList
            :episodeGroups="episodeGroups"
            :selectedGroup="selectedGroup"
            :searchEpisode="searchEpisode"
            :epNumber="epNumber"
            :animeSlug="anime.slug"
            @update:selectedGroup="selectedGroup = $event"
            @update:searchEpisode="searchEpisode = $event"
          />

          <!-- Cột video + chi tiết -->
          <div
            class="flex-1 flex flex-col bg-black rounded-lg shadow-lg overflow-hidden z-50 transition-all duration-500 ease-in-out"
            :style="{ width: isExpanded ? '1404px' : '958px' }"
          >
            <transition name="fade" mode="out-in">
              <video :key="videoSrc" class="w-full h-[653px]" controls autoplay>
                <source :src="videoSrc" type="video/mp4" />
              </video>
            </transition>

            <!-- Controls -->
            <div class="flex-none flex justify-between p-4 bg-black/80">
              <div class="flex items-center gap-1">
                <button
                  @click="toggleExpand"
                  class="flex items-center gap-1 w-[100px] cursor-pointer"
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
                <button
                  @click="toggleDark"
                  class="flex items-center gap-1 cursor-pointer"
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
                <div
                  class="flex items-center gap-1 cursor-pointer hover:text-[#ffbade]"
                  @click="goPrevEpisode"
                >
                  <UIcon name="zondicons:step-backward" size="20" />
                  <span>Tập trước</span>
                </div>
                <div
                  class="flex items-center gap-1 cursor-pointer hover:text-[#ffbade]"
                  @click="goNextEpisode"
                >
                  <span>Tập sau</span>
                  <UIcon name="material-symbols:skip-next" size="20" />
                </div>
              </div>
            </div>

            <!-- Video server + related -->
            <div :class="isDark ? 'bg-black/90 duration-500 opacity-5' : ''">
              <VideoServerSelector :epNumber="epNumber" />
              <VideoRelatedAnime :animeList="animeNewAdded" />
            </div>
          </div>

          <!-- Cột phải: Thông tin anime -->
          <transition name="slide-fade">
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
                  <p class="text-base text-[#ffbade]">{{ anime.name }}</p>

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
  </div>
  <!-- comment + top -->
  <div class="flex gap-4 mt-6">
    <!-- Bình luận -->
    <div class="col-span-6 mt-10">
      <VideoComments  />
      <!-- đề xuất anime -->
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

    <!-- Thịnh Hành -->
    <div class="col-span-2">
      <TopAnime :showTabs="false" title="Thịnh Hành" />
    </div>
  </div>
</template>

<style>
/* Fade overlay */
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
/* CSS cho slide + fade */
.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all 0.3s ease;
}
.slide-fade-enter-from,
.slide-fade-leave-to {
  opacity: 0;
  transform: translateX(20px);
}
.slide-fade-enter-to,
.slide-fade-leave-from {
  opacity: 1;
  transform: translateX(0);
}
</style>
