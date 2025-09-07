<template>
  <ul class="space-y-4">
    <li
      v-for="item in items"
      :key="item.slug"
      class="flex space-x-4 items-start border-b border-gray-700 pb-4"
    >
      <div class="relative group">
        <img
          :src="item.image"
          :alt="item.title"
          class="w-[60px] h-[76px] object-cover rounded-md flex-shrink-0 relative cursor-pointer"
        />

        <!-- overlay hover -->
        <div v-for="(anime, i) in animeNewAdded" :key="i">
          <AnimeOverlay :item="anime" />
        </div>
      </div>
      <div>
        <NuxtLink :to="`/phim/${item.slug}`">
          <h3
            class="text-white font-bold text-md line-clamp-1 hover:text-pink-300 cursor-pointer"
          >
            {{ item.title }}
          </h3></NuxtLink
        >

        <p class="text-gray-300 text-sm line-clamp-1 mt-1">
          {{ item.name }}
        </p>
        <div class="mt-2 flex items-center space-x-2">
          <span
            class="px-1 py-0.5 rounded text-sm text-black font-semibold bg-[#b0e3af]"
          >
            {{ item.ccNumber }}
          </span>
          <span class="inline-block w-1 h-1 bg-gray-600 rounded-full"></span>
          <span class="text-gray-400 text-sm font-semibold">{{
            item.type
          }}</span>
        </div>
      </div>
    </li>
    <NuxtLink
      class="text-[#AAAAAA] font-bold leading-none hover:text-white cursor-pointer"
      :to="`${slug}`"
    >
      Xem Thêm
    </NuxtLink>
  </ul>
</template>

<script setup lang="ts">
import { defineProps } from "vue";

export interface AnimeItem {
  title: string;
  name: string;
  number: string;
  ccNumber: number;
  type: string;
  image: string;
  slug: string;
  ep?: string;
  view?: string;
  tags?: string[];
  description?: string;
}

const props = defineProps<{
  items: AnimeItem[];
  slug?: string;
}>();

const animeNewAdded = [
  {
    title: "Jidou Hanbaiki ni Umarekawatta Ore wa...",
    name: "Reborn as a Vending Machine, I Now Wander the...",
    number: "11",
    ccNumber: 6,
    type: "TV",
    image: "/imgs/movie22.webp",
    slug: "jidou-hanbaiki",
    ep: "/phim/jidou-hanbaiki/tap-1211",
    view: "0",
    tags: ["isekai", "fantasy", "comedy"],
    description:
      "Những cuộc phiêu lưu mới của máy bán hàng tự động ở thế giới kỳ lạ.",
  },
  {
    title: "Jidou Hanbaiki ni Umarekawatta Ore wa...",
    name: "Reborn as a Vending Machine, I Now Wander the...",
    number: "01",
    ccNumber: 6,
    type: "TV",
    image: "/imgs/movie22.webp",
    slug: "jidou-hanbaiki",
    ep: "/phim/jidou-hanbaiki/tap-1201",
    view: "0",
    tags: ["isekai", "fantasy", "comedy"],
    description:
      "Một người đàn ông bị tái sinh thành máy bán hàng tự động ở thế giới khác và bắt đầu cuộc phiêu lưu kỳ lạ cùng những người bạn mới.",
  },
  {
    title: "Kanojo, Okarishimasu 4th Season",
    name: "Rent-a-Girlfriend Season 4",
    number: "02",
    ccNumber: 7,
    type: "TV",
    image: "/imgs/movie22.webp",
    slug: "kanojo-okarishimasu-4",
    ep: "/phim/kanojo-okarishimasu-4/tap-1202",
    view: "0",
    tags: ["romance", "comedy", "drama"],
    description:
      "Tiếp tục câu chuyện tình cảm hài hước giữa Kazuya và các cô bạn gái thuê trong mùa thứ 4.",
  },
  {
    title: "Meitantei Conan",
    name: "Thám Tử Lừng Danh Conan",
    number: "03",
    ccNumber: 1140,
    type: "TV",
    image: "/imgs/movie22.webp",
    slug: "meitantei-conan",
    ep: "/phim/meitantei-conan/tap-1140",
    view: "0",
    tags: ["detective", "mystery", "shounen"],
    description:
      "Cậu thám tử nhí Conan tiếp tục phá giải những vụ án bí ẩn và truy tìm tổ chức Áo Đen.",
  },
  {
    title: "Jidou Hanbaiki ni Umarekawatta Ore wa...",
    name: "Reborn as a Vending Machine, I Now Wander the...",
    number: "11",
    ccNumber: 6,
    type: "TV",
    image: "/imgs/movie22.webp",
    slug: "jidou-hanbaiki",
    ep: "/phim/jidou-hanbaiki/tap-1211",
    view: "0",
    tags: ["isekai", "fantasy", "comedy"],
    description:
      "Những cuộc phiêu lưu mới của máy bán hàng tự động ở thế giới kỳ lạ.",
  },
  {
    title: "Jidou Hanbaiki ni Umarekawatta Ore wa...",
    name: "Reborn as a Vending Machine, I Now Wander the...",
    number: "01",
    ccNumber: 6,
    type: "TV",
    image: "/imgs/movie22.webp",
    slug: "jidou-hanbaiki",
    ep: "/phim/jidou-hanbaiki/tap-1201",
    view: "0",
    tags: ["isekai", "fantasy", "comedy"],
    description:
      "Một người đàn ông bị tái sinh thành máy bán hàng tự động ở thế giới khác và bắt đầu cuộc phiêu lưu kỳ lạ cùng những người bạn mới.",
  },
  {
    title: "Kanojo, Okarishimasu 4th Season",
    name: "Rent-a-Girlfriend Season 4",
    number: "02",
    ccNumber: 7,
    type: "TV",
    image: "/imgs/movie22.webp",
    slug: "kanojo-okarishimasu-4",
    ep: "/phim/kanojo-okarishimasu-4/tap-1202",
    view: "0",
    tags: ["romance", "comedy", "drama"],
    description:
      "Tiếp tục câu chuyện tình cảm hài hước giữa Kazuya và các cô bạn gái thuê trong mùa thứ 4.",
  },
  {
    title: "Meitantei Conan",
    name: "Thám Tử Lừng Danh Conan",
    number: "03",
    ccNumber: 1140,
    type: "TV",
    image: "/imgs/movie22.webp",
    slug: "meitantei-conan",
    ep: "/phim/meitantei-conan/tap-1140",
    view: "0",
    tags: ["detective", "mystery", "shounen"],
    description:
      "Cậu thám tử nhí Conan tiếp tục phá giải những vụ án bí ẩn và truy tìm tổ chức Áo Đen.",
  },
  {
    title: "Jidou Hanbaiki ni Umarekawatta Ore wa...",
    name: "Reborn as a Vending Machine, I Now Wander the...",
    number: "11",
    ccNumber: 6,
    type: "TV",
    image: "/imgs/movie22.webp",
    slug: "jidou-hanbaiki",
    ep: "/phim/jidou-hanbaiki/tap-1211",
    view: "0",
    tags: ["isekai", "fantasy", "comedy"],
    description:
      "Những cuộc phiêu lưu mới của máy bán hàng tự động ở thế giới kỳ lạ.",
  },
  {
    title: "Jidou Hanbaiki ni Umarekawatta Ore wa...",
    name: "Reborn as a Vending Machine, I Now Wander the...",
    number: "01",
    ccNumber: 6,
    type: "TV",
    image: "/imgs/movie22.webp",
    slug: "jidou-hanbaiki",
    ep: "/phim/jidou-hanbaiki/tap-1201",
    view: "0",
    tags: ["isekai", "fantasy", "comedy"],
    description:
      "Một người đàn ông bị tái sinh thành máy bán hàng tự động ở thế giới khác và bắt đầu cuộc phiêu lưu kỳ lạ cùng những người bạn mới.",
  },
  {
    title: "Kanojo, Okarishimasu 4th Season",
    name: "Rent-a-Girlfriend Season 4",
    number: "02",
    ccNumber: 7,
    type: "TV",
    image: "/imgs/movie22.webp",
    slug: "kanojo-okarishimasu-4",
    ep: "/phim/kanojo-okarishimasu-4/tap-1202",
    view: "0",
    tags: ["romance", "comedy", "drama"],
    description:
      "Tiếp tục câu chuyện tình cảm hài hước giữa Kazuya và các cô bạn gái thuê trong mùa thứ 4.",
  },
  {
    title: "Meitantei Conan",
    name: "Thám Tử Lừng Danh Conan",
    number: "03",
    ccNumber: 1140,
    type: "TV",
    image: "/imgs/movie22.webp",
    slug: "meitantei-conan",
    ep: "/phim/meitantei-conan/tap-1140",
    view: "0",
    tags: ["detective", "mystery", "shounen"],
    description:
      "Cậu thám tử nhí Conan tiếp tục phá giải những vụ án bí ẩn và truy tìm tổ chức Áo Đen.",
  },
  {
    title: "Mikadono Sanshimai wa Angai, Choroi.",
    name: "Đối Phó Với Chị Em Nhà Mikadono Thật Dễ Dàng",
    number: "04",
    ccNumber: 7,
    type: "TV",
    image: "/imgs/movie22.webp",
    slug: "mikadono-sanshimai",
    ep: "/phim/mikadono-sanshimai/tap-1204",
    view: "0",
    tags: ["comedy", "romance", "school"],
    description:
      "Cuộc sống học đường hài hước xoay quanh ba chị em nhà Mikadono và những tình huống dở khóc dở cười.",
  },
  {
    title: "Sakamoto Days Part 2",
    name: "SAKAMOTO DAYS Cour 2",
    number: "05",
    ccNumber: 6,
    type: "TV",
    image: "/imgs/movie22.webp",
    slug: "sakamoto-days-part-2",
    ep: "/phim/sakamoto-days-part-2/tap-1205",
    view: "0",
    tags: ["action", "comedy", "shounen"],
    description:
      "Sakamoto, sát thủ huyền thoại, tiếp tục bảo vệ gia đình và cửa hàng của mình khỏi những kẻ săn đuổi.",
  },
  {
    title: "Jidou Hanbaiki ni Umarekawatta Ore wa...",
    name: "Reborn as a Vending Machine, I Now Wander the...",
    number: "06",
    ccNumber: 6,
    type: "TV",
    image: "/imgs/movie22.webp",
    slug: "jidou-hanbaiki",
    ep: "/phim/jidou-hanbaiki/tap-1206",
    view: "0",
    tags: ["isekai", "fantasy", "comedy"],
    description:
      "Máy bán hàng tự động tiếp tục khám phá thế giới mới và giúp đỡ những người xung quanh.",
  },
  {
    title: "Kanojo, Okarishimasu 4th Season",
    name: "Rent-a-Girlfriend Season 4",
    number: "07",
    ccNumber: 7,
    type: "TV",
    image: "/imgs/movie22.webp",
    slug: "kanojo-okarishimasu-4",
    ep: "/phim/kanojo-okarishimasu-4/tap-1207",
    view: "0",
    tags: ["romance", "comedy", "drama"],
    description:
      "Những rắc rối tình cảm mới xuất hiện khi Kazuya tiếp tục thuê bạn gái.",
  },
  {
    title: "Meitantei Conan",
    name: "Thám Tử Lừng Danh Conan",
    number: "08",
    ccNumber: 1140,
    type: "TV",
    image: "/imgs/movie22.webp",
    slug: "meitantei-conan",
    ep: "/phim/meitantei-conan/tap-1140",
    view: "0",
    tags: ["detective", "mystery", "shounen"],
    description:
      "Conan đối mặt với những vụ án hóc búa và những âm mưu nguy hiểm.",
  },
  {
    title: "Mikadono Sanshimai wa Angai, Choroi.",
    name: "Đối Phó Với Chị Em Nhà Mikadono Thật Dễ Dàng",
    number: "09",
    ccNumber: 7,
    type: "TV",
    image: "/imgs/movie22.webp",
    slug: "mikadono-sanshimai",
    ep: "/phim/mikadono-sanshimai/tap-1209",
    view: "0",
    tags: ["comedy", "romance", "school"],
    description:
      "Những câu chuyện hài hước về cuộc sống thường ngày của ba chị em nhà Mikadono.",
  },
  {
    title: "Sakamoto Days Part 2",
    name: "SAKAMOTO DAYS Cour 2",
    number: "10",
    ccNumber: 6,
    type: "TV",
    image: "/imgs/movie22.webp",
    slug: "sakamoto-days-part-2",
    ep: "/phim/sakamoto-days-part-2/tap-1210",
    view: "0",
    tags: ["action", "comedy", "shounen"],
    description:
      "Sakamoto tiếp tục đối đầu với những sát thủ mới và bảo vệ cuộc sống bình yên.",
  },
  {
    title: "Jidou Hanbaiki ni Umarekawatta Ore wa...",
    name: "Reborn as a Vending Machine, I Now Wander the...",
    number: "11",
    ccNumber: 6,
    type: "TV",
    image: "/imgs/movie22.webp",
    slug: "jidou-hanbaiki",
    ep: "/phim/jidou-hanbaiki/tap-1211",
    view: "0",
    tags: ["isekai", "fantasy", "comedy"],
    description:
      "Những cuộc phiêu lưu mới của máy bán hàng tự động ở thế giới kỳ lạ.",
  },
  {
    title: "Kanojo, Okarishimasu 4th Season",
    name: "Rent-a-Girlfriend Season 4",
    number: "12",
    ccNumber: 7,
    type: "TV",
    image: "/imgs/movie22.webp",
    slug: "kanojo-okarishimasu-4",
    ep: "/phim/kanojo-okarishimasu-4/tap-1212",
    view: "0",
    tags: ["romance", "comedy", "drama"],
    description:
      "Kazuya và các cô gái tiếp tục vướng vào những tình huống dở khóc dở cười.",
  },
  {
    title: "Meitantei Conan",
    name: "Thám Tử Lừng Danh Conan",
    number: "13",
    ccNumber: 1140,
    type: "TV",
    image: "/imgs/movie22.webp",
    slug: "meitantei-conan",
    ep: "/phim/meitantei-conan/tap-1140",
    view: "0",
    tags: ["detective", "mystery", "shounen"],
    description:
      "Conan tiếp tục hành trình phá án và tìm kiếm thân phận thật sự.",
  },
  {
    title: "Mikadono Sanshimai wa Angai, Choroi.",
    name: "Đối Phó Với Chị Em Nhà Mikadono Thật Dễ Dàng",
    number: "14",
    ccNumber: 7,
    type: "TV",
    image: "/imgs/movie22.webp",
    slug: "mikadono-sanshimai",
    ep: "/phim/mikadono-sanshimai/tap-1214",
    view: "0",
    tags: ["comedy", "romance", "school"],
    description:
      "Những tình huống hài hước và lãng mạn giữa các thành viên nhà Mikadono.",
  },
  {
    title: "Sakamoto Days Part 2",
    name: "SAKAMOTO DAYS Cour 2",
    number: "15",
    ccNumber: 6,
    type: "TV",
    image: "/imgs/movie22.webp",
    slug: "sakamoto-days-part-2",
    ep: "/phim/sakamoto-days-part-2/tap-1215",
    view: "0",
    tags: ["action", "comedy", "shounen"],
    description:
      "Sakamoto tiếp tục bảo vệ gia đình và cửa hàng khỏi những mối nguy hiểm mới.",
  },
];

const { items, slug } = props;
</script>

<style></style>
