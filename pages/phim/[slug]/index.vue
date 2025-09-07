<script setup lang="ts">
const anime = {
  title: "One Piece",
  type: "HD",
  name: "Vua Hải Tặc",
  rank: "#1 Rank",
  ccNumber: "13",
  view: "24",
  image: "/imgs/rank1.webp",
  description:
    "Câu chuyện về Monkey D. Luffy và hành trình trở thành Vua Hải Tặc trên biển cả, khám phá kho báu One Piece.",
  ep: "/phim/one-piece/tap-1201",
  epNumber: "1201",
  slug: "one-piece",
  tags: ["Action", "Adventure", "Fantasy", "Shounen"],
};
// Giả sử animeNewAdded đã có dữ liệu từ API
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
</script>

<template>
  <div class="bg-gradient-to-br from-gray-900 to-gray-600 text-white mt-17">
    <!-- movie -->
    <div class="max-w-8xl px-6 py-12 flex gap-10">
      <!-- Cột trái -->
      <div class="flex-1 flex flex-col gap-2 ml-40">
        <div class="flex flex-col">
          <!-- Breadcrumb -->
          <div class="text-base font-bold flex items-center gap-2 text-white">
            <NuxtLink to="/" class="hover:text-[#ffbade] flex gap-1">
              <UIcon name="typcn:home" size="20"></UIcon>
              <span>Home</span>
            </NuxtLink>
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
        </div>

        <!-- Thông tin chính + Poster -->
        <div class="flex justify-start gap-12">
          <!-- Poster -->
          <div class="w-[180px] h-[225px] mt-2 flex-shrink-0">
            <img
              :src="anime.image"
              :alt="anime.title"
              class="rounded-lg shadow-lg h-full w-full object-cover"
            />
          </div>
          <div class="flex flex-col gap-2">
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
                <UIcon
                  name="tabler:badge-cc-filled"
                  size="20"
                  class="bg-black"
                />
                <span>{{ anime.ccNumber }}</span>
              </span>
              <span
                class="bg-[#ffbade] text-black px-1 py-1 rounded text-sm font-bold"
              >
                HD
              </span>
            </div>

            <!-- Buttons -->
            <div class="flex items-center gap-4 mt-4">
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
            <p
              class="text-gray-300 leading-relaxed max-w-2xl line-clamp-3 mt-2"
            >
              {{ anime.description }}
            </p>
          </div>
        </div>
      </div>

      <!-- Cột phải -->
      <div class="w-[260px] flex-shrink-0 border-l border-gray-700 pl-6">
        <p class="mb-2">
          <span class="font-semibold text-white">Tập:</span>
          {{ anime.epNumber }}
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
              class="px-3 py-1 border border-gray-500 border-dashed rounded-lg text-sm text-gray-300 hover:text-pink-300 hover:border-pink-300 transition"
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
