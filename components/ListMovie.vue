<template>
  <!-- Slider Ảnh -->
  <UCarousel
    v-model:page="page"
    dots
    loop
    v-slot="{ item }"
    :items="movieList"
    :ui="{ item: 'basis-full' }"
    class="w-full mx-auto"
  >
    <div class="relative">
      <div class="grid grid-cols-3">
        <!-- Phần Thông Tin đè lên slider -->
        <div class="col-span-1 w-full h-full flex items-center z-20">
          <div class="text-white lg:w-[800px] w-[330px]">
            <span class="text-[#ffbade] lg:text-lg text-sm font-bold rounded">
              {{ item.rank }}
            </span>
            <h1 class="lg:text-5xl text-2xl font-bold mb-4">
              {{ item.title }}
            </h1>
            <div class="flex items-center gap-4 mb-4">
              <span class="rounded flex mt-0.5 items-center gap-1"
                ><UIcon
                  name="material-symbols:play-arrow-rounded"
                  size="20"
                  class="bg-white"
                />
                TV</span
              >

              <span class="px-3 py-1 rounded">{{ item.view }} </span>
              <div
                class="p-1 rounded bg-[#b0e3af] lg:text-xs text-sm font-bold text-black flex items-center"
              >
                <UIcon
                  name="tabler:badge-cc-filled"
                  size="15"
                  class="bg-black"
                />
                <span class="ml-1">{{ item.ccNumber }}</span>
              </div>
              <span
                class="p-1 text-black font-bold text-sm rounded bg-[#7ecaec]"
              >
                HD
              </span>
            </div>
            <p class="hidden lg:block text-lg mb-6 !line-clamp-3">
              {{ item.description }}
            </p>

            <div class="flex items-center space-x-4">
              <div
                class="bg-[#ffbade] flex items-center hover:bg-[#f1c3db] transition cursor-pointer rounded-3xl px-2 py-1 gap-1"
              >
                <UIcon
                  name="material-symbols:play-circle-rounded"
                  size="25"
                  class="bg-black"
                />
                <NuxtLink :to="item.ep"
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
                <NuxtLink :to="`/phim/${item.slug}`"
                  ><UButton
                    class="text-white bg-gray-500 rounded-3xl cursor-pointer"
                    >Thông tin</UButton
                  ></NuxtLink
                >
              </div>
            </div>
          </div>
        </div>
        <div class="relative col-span-2">
          <img
            :src="item.image"
            class="w-full lg:h-[460px] h-[320px] object-cover rounded-lg brightness-110"
            style="
              -webkit-mask-image: linear-gradient(
                  270deg,
                  transparent 0%,
                  rgba(32, 31, 49, 1) 10%,
                  transparent 100%
                ),
                linear-gradient(
                  180deg,
                  transparent 0%,
                  rgba(32, 31, 49, 1) 10%,
                  transparent 100%
                );
              -webkit-mask-repeat: no-repeat;
              -webkit-mask-composite: source-in;
              mask-image: linear-gradient(
                  270deg,
                  transparent 0%,
                  rgba(32, 31, 49, 1) 10%,
                  transparent 100%
                ),
                linear-gradient(
                  180deg,
                  transparent 0%,
                  rgba(32, 31, 49, 1) 10%,
                  transparent 100%
                );
              mask-repeat: no-repeat;
              mask-composite: intersect;
            "
          />
          <!-- <div class="flex flex-col gap-2 absolute bottom-2 right-4">
            <div
              class="px-3 py-2 w-[48px] h-[40px] bg-[#ffffff1a] rounded-lg cursor-pointer hover:bg-[#ffbade] hover:text-black"
              @click="prevSlide"
            >
              <UIcon name="material-symbols:arrow-left-alt" size="26"></UIcon>
            </div>
            <div
              class="px-3 py-2 w-[48px] h-[40px] bg-[#ffffff1a] rounded-lg cursor-pointer hover:bg-[#ffbade] hover:text-black"
              @click="nextSlide"
            >
              <UIcon name="material-symbols:arrow-right-alt" size="26"></UIcon>
            </div>
          </div> -->
        </div>
      </div>
    </div>
  </UCarousel>
</template>

<script lang="ts" setup>
import { ref } from "vue";

const page = ref(0);

const nextSlide = () => {
  page.value = (page.value + 1) % movieList.length;
};

const prevSlide = () => {
  page.value = (page.value - 1 + movieList.length) % movieList.length;
};

const movieList = [
  {
    title: "One Piece",
    type: "HD",
    name: "Vua Hải Tặc",
    rank: "#1 Rank",
    ccNumber: "13",
    view: "24",
    image: "/imgs/rank1.webp",
    description:
      "Câu chuyện về Monkey D. Luffy và hành trình trở thành Vua Hải Tặc trên biển cả,hành trình trở thành Vua Hải Tặc trên biển cả,hành trình trở thành Vua Hải Tặc trên biển cả,hành trình trở thành Vua Hải Tặc trên biển cả, hành trình trở thành Vua Hải Tặc trên biển cả, khám phá kho báu One Piece.Câu chuyện về Monkey D. Luffy và hành trình trở thành Vua Hải Tặc trên biển cả, khám phá kho báu One Piece.Câu chuyện về Monkey D. Lu",
    ep: "/phim/one-piece/tap-1201",
    slug: "one-piece",
    tags: ["Action", "Adventure", "Fantasy", "Shounen"],
  },
  {
    title: "Dandadan",
    type: "HD",
    rank: "#2 Rank",
    ccNumber: "13",
    view: "23",
    image: "/imgs/rank2.webp",
    description:
      "Dandadan là bộ anime với những trận chiến siêu nhiên và hài hước giữa các nhân vật học sinh.",
    ep: "/phim/dandadan/tap-1202",
    slug: "dandadan",
    tags: ["Action", "Comedy", "Supernatural", "Romance"],
  },
  {
    title: "Attack on Titan",
    type: "HD",
    rank: "#3 Rank",
    ccNumber: "12",
    view: "22",
    image: "/imgs/rank3.webp",
    description:
      "Attack on Titan kể về cuộc chiến sinh tồn của con người chống lại những người khổng lồ Titan tấn công thế giới.",
    ep: "/phim/attack-on-titan/tap-1203",
    slug: "attack-on-titan",
    tags: ["Action", "Drama", "Fantasy", "Military"],
  },
  {
    title: "Demon Slayer",
    type: "HD",
    rank: "#4 Rank",
    ccNumber: "12",
    view: "24",
    image: "/imgs/rank4.webp",
    description:
      "Demon Slayer theo chân Tanjiro Kamado trong hành trình diệt quỷ cứu em gái và bảo vệ thế giới loài người.",
    ep: "/phim/demon-slayer/tap-1204",
    slug: "demon-slayer",
    tags: ["Action", "Supernatural", "Drama", "Shounen"],
  },
  {
    title: "My Hero Academia",
    type: "HD",
    rank: "#5 Rank",
    ccNumber: "12",
    view: "24",
    image: "/imgs/rank5.webp",
    description:
      "My Hero Academia là câu chuyện về Izuku Midoriya và các học sinh trường Anh Hùng trong việc luyện tập và chiến đấu.",
    ep: "/phim/my-hero-academia/tap-1205",
    slug: "my-hero-academia",
    tags: ["Action", "School", "Super Power", "Shounen"],
  },
  {
    title: "Jujutsu Kaisen",
    type: "HD",
    rank: "#6 Rank",
    ccNumber: "15",
    view: "24",
    image: "/imgs/rank6.webp",
    description:
      "Jujutsu Kaisen kể về Yuji Itadori chiến đấu chống lại lời nguyền và bảo vệ thế giới khỏi quỷ dữ.",
    ep: "/phim/jujutsu-kaisen/tap-1206",
    slug: "jujutsu-kaisen",
    tags: ["Action", "Supernatural", "Dark Fantasy"],
  },
  {
    title: "Fullmetal Alchemist",
    type: "HD",
    rank: "#7 Rank",
    ccNumber: "12",
    view: "24",
    image: "/imgs/rank7.webp",
    description:
      "Fullmetal Alchemist kể về anh em Edward và Alphonse Elric trong hành trình tìm kiếm Hòn đá Triết gia để phục hồi cơ thể.",
    ep: "/phim/fullmetal-alchemist/tap-1207",
    slug: "fullmetal-alchemist",
    tags: ["Action", "Adventure", "Drama", "Fantasy"],
  },
  {
    title: "Death Note",
    type: "HD",
    rank: "#8 Rank",
    ccNumber: "12",
    view: "24",
    image: "/imgs/rank8.webp",
    description:
      "Death Note kể về Light Yagami phát hiện quyển sổ tử thần và cuộc chiến trí tuệ chống lại thám tử L.",
    ep: "/phim/death-note/tap-1208",
    slug: "death-note",
    tags: ["Psychological", "Thriller", "Supernatural"],
  },
];
</script>

<style scoped></style>
