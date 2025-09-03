<template>
  <div class="relative">
    <!-- Slider Ảnh -->
    <Swiper
      :pagination="{ dynamicBullets: true }"
      :modules="modules"
      class="w-full h-[500px] rounded-lg"
      loop
      :navigation="{
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      }"
    >
      <SwiperSlide v-for="(item, i) in movieList" :key="i">
        <img
          :src="item.image"
          loop
          :alt="`Slide ${i + 1}`"
          class="w-full h-[500px] object-cover rounded-lg opacity-40"
        />

        <!-- Phần Thông Tin đè lên slider -->
        <div
          class="absolute top-16 left-12 w-full h-full flex items-center z-20"
        >
          <div class="text-white max-w-[50%]">
            <span class="text-[#ffbade] text-lg font-bold rounded">
              {{ item.rank }}
            </span>
            <h1 class="text-5xl font-bold mb-4">{{ item.title }}</h1>
            <div class="flex items-center gap-4 mb-4">
              <span class="rounded flex mt-0.5 items-center gap-1"
                ><UIcon
                  name="material-symbols:play-arrow-rounded"
                  size="20"
                  class="bg-white"
                />
                TV</span
              >

              <span class="px-3 py-1 rounded">{{ item.veiw }} </span>
              <div
                class="p-1 rounded bg-[#b0e3af] text-xs font-bold text-black flex items-center"
              >
                <UIcon
                  name="tabler:badge-cc-filled"
                  size="15"
                  class="bg-black"
                />
                <span class="ml-1">{{ item.ccNumber }}</span>
              </div>
              <span
                class="p-1 text-black font-bold text-xs rounded bg-[#7ecaec]"
              >
                HD
              </span>
            </div>
            <p class="text-lg mb-6 line-clamp-3">{{ item.description }}</p>

            <div class="flex items-center space-x-4">
              <div
                class="bg-[#ffbade] flex items-center hover:bg-[#f1c3db] transition cursor-pointer rounded-3xl px-2 py-1 gap-1"
              >
                <UIcon
                  name="material-symbols:play-circle-rounded"
                  size="25"
                  class="bg-black"
                />
                <NuxtLink :to="item.slugMovie"
                  ><UButton
                    class="text-black bg-[#ffbade] rounded-3xl cursor-pointer"
                    >Xem Anime</UButton
                  ></NuxtLink
                >
              </div>
              <div
                class="bg-gray-500 flex items-center transition cursor-pointer rounded-3xl px-2 py-1 gap-1"
              >
                <UIcon
                  name="pajamas:information"
                  size="25"
                  class="bg-[#ffbade]"
                />
                <NuxtLink :to="item.slugInfo"
                  ><UButton
                    class="text-white bg-gray-500 rounded-3xl cursor-pointer"
                    >Thông tin</UButton
                  ></NuxtLink
                >
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <!-- Nút Prev/Next -->
      <div class="swiper-button-prev !text-[#ffbade]"></div>
      <div class="swiper-button-next !text-[#ffbade]"></div>
    </Swiper>
  </div>
</template>
<script lang="ts" setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
const modules = [Pagination, Navigation];

const movieList = [
  {
    title: "One Piece",
    rank: "#1 Rank",
    ccNumber: "13",
    veiw: "24M",
    image: "/imgs/rank1.webp",
    description:
      "Câu chuyện về Monkey D. Luffy và hành trình trở thành Vua Hải Tặc trên biển cả, khám phá kho báu One Piece.Câu chuyện về Monkey D. Luffy và hành trình trở thành Vua Hải Tặc trên biển cả, khám phá kho báu One Piece.Câu chuyện về Monkey D. Luffy và hành trình trở thành Vua Hải Tặc trên biển cả, khám phá kho báu One Piece.Câu chuyện về Monkey D. Luffy và hành trình trở thành Vua Hải Tặc trên biển cả, khám phá kho báu One Piece.",
    slugMovie: "/phim/one-piece/tap-1201",
    slugInfo: "/phim/one-piece",
  },
  {
    title: "Dandadan",
    rank: "#2 Rank",
    ccNumber: "13",
    veiw: "23M",
    image: "/imgs/rank2.webp",
    description:
      "Dandadan là bộ anime với những trận chiến siêu nhiên và hài hước giữa các nhân vật học sinh.",
    slugMovie: "/phim/dandadan/tap-1202",
    slugInfo: "/phim/dandadan",
  },
  {
    title: "Attack on Titan",
    rank: "#3 Rank",
    ccNumber: "12",
    veiw: "22M",
    image: "/imgs/rank3.webp",
    description:
      "Attack on Titan kể về cuộc chiến sinh tồn của con người chống lại những người khổng lồ Titan tấn công thế giới.",
    slugMovie: "/phim/attack-on-titan/tap-1203",
    slugInfo: "/phim/attack-on-titan",
  },
  {
    title: "Demon Slayer",
    rank: "#4 Rank",
    ccNumber: "12",
    veiw: "24M",
    image: "/imgs/rank4.webp",
    description:
      "Demon Slayer theo chân Tanjiro Kamado trong hành trình diệt quỷ cứu em gái và bảo vệ thế giới loài người.",
    slugMovie: "/phim/demon-slayer/tap-1204",
    slugInfo: "/phim/demon-slayer",
  },
  {
    title: "My Hero Academia",
    rank: "#5 Rank",
    ccNumber: "12",
    veiw: "24M",
    image: "/imgs/rank5.webp",
    description:
      "My Hero Academia là câu chuyện về Izuku Midoriya và các học sinh trường Anh Hùng trong việc luyện tập và chiến đấu.",
    slugMovie: "/phim/my-hero-academia/tap-1205",
    slugInfo: "/phim/my-hero-academia",
  },
  {
    title: "Jujutsu Kaisen",
    rank: "#6 Rank",
    ccNumber: "15",
    veiw: "24M",
    image: "/imgs/rank6.webp",
    description:
      "Jujutsu Kaisen kể về Yuji Itadori chiến đấu chống lại lời nguyền và bảo vệ thế giới khỏi quỷ dữ.",
    slugMovie: "/phim/jujutsu-kaisen/tap-1206",
    slugInfo: "/phim/jujutsu-kaisen",
  },
  {
    title: "Fullmetal Alchemist",
    rank: "#7 Rank",
    ccNumber: "12",
    veiw: "24M",
    image: "/imgs/rank7.webp",
    description:
      "Fullmetal Alchemist kể về anh em Edward và Alphonse Elric trong hành trình tìm kiếm Hòn đá Triết gia để phục hồi cơ thể.",
    slugMovie: "/phim/fullmetal-alchemist/tap-1207",
    slugInfo: "/phim/fullmetal-alchemist",
  },
  {
    title: "Death Note",
    rank: "#8 Rank",
    ccNumber: "12",
    veiw: "24M",
    image: "/imgs/rank8.webp",
    description:
      "Death Note kể về Light Yagami phát hiện quyển sổ tử thần và cuộc chiến trí tuệ chống lại thám tử L.",
    slugMovie: "/phim/death-note/tap-1208",
    slugInfo: "/phim/death-note",
  },
];
</script>

<style scoped></style>
