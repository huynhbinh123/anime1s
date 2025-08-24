<!-- pages/index.vue -->
<template>
  <div class="flex flex-col text-white mt-[80px]">
    <ListMovie />

    <div class="mt-10">
      <Prevailing />
    </div>

    <div class="mt-10">
      <div class="py-6 text-white">
        <div class="grid grid-cols-4 gap-8">
          <section>
            <h2 class="text-pink-300 font-bold text-xl mb-4">Phim Mới Thêm</h2>
            <AnimeList
              :items="animeNewAdded.slice(0, 5)"
              slug="phim-moi-them"
            />
          </section>

          <section>
            <h2 class="text-pink-300 font-bold text-xl mb-4">
              Phim Mới Cập Nhật
            </h2>
            <AnimeList
              :items="animeRecentlyUpdated.slice(0, 5)"
              slug="phim-moi-cap-nhat"
            />
          </section>

          <section>
            <h2 class="text-pink-300 font-bold text-xl mb-4">Movie Mới</h2>
            <AnimeList :items="movieNew.slice(0, 5)" slug="moive-moi" />
          </section>

          <section>
            <h2 class="text-pink-300 font-bold text-xl mb-4">Vừa Bình Luận</h2>
            <Comment />
          </section>
        </div>
      </div>
    </div>
    <!-- content -->
    <div class="mt-10">
      <div class="py-6 text-white">
        <div class="grid grid-cols-8 gap-8">
          <div class="col-span-6">
            <Movie
              :items="animeNewAdded.slice(0, 12)"
              title="Phim Mới Cập Nhật"
              slug="phim-moi-cap-nhat"
            />
            <!-- co gi moi  -->

            <Movie
              :items="animeNewAdded.slice(0, 12)"
              title="Có Gì Mới"
              slug="co-gi-moi"
              class="mt-10"
            />

            <ProjectionSchedule class="mt-10" />
          </div>
          <div class="col-span-2">
            <CategoryList />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const animeNewAdded = ref([
  {
    title: "Jidou Hanbaiki ni Umarekawatta Ore wa...",
    englishTitle: "Reborn as a Vending Machine, I Now Wander the...",
    episode: 6,
    type: "TV",
    image: "/imgs/movie22.webp",
    slug: "jidou-hanbaiki",
    view: "0",
  },
  {
    title: "Kanojo, Okarishimasu 4th Season",
    englishTitle: "Rent-a-Girlfriend Season 4",
    episode: 7,
    type: "TV",
    image: "/imgs/movie22.webp",
    slug: "kanojo-okarishimasu-4",
    view: "0",
  },
  {
    title: "Meitantei Conan",
    englishTitle: "Thám Tử Lừng Danh Conan",
    episode: 1140,
    type: "TV",
    image: "/imgs/movie22.webp",
    slug: "meitantei-conan",
    view: "0",
  },
  {
    title: "Mikadono Sanshimai wa Angai, Choroi.",
    englishTitle: "Đối Phó Với Chị Em Nhà Mikadono Thật Dễ Dàng",
    episode: 7,
    type: "TV",
    image: "/imgs/movie22.webp",
    slug: "mikadono-sanshimai",
    view: "0",
  },
  {
    title: "Sakamoto Days Part 2",
    englishTitle: "SAKAMOTO DAYS Cour 2",
    episode: 6,
    type: "TV",
    image: "/imgs/movie22.webp",
    slug: "sakamoto-days-part-2",
    view: "0",
  },
  {
    title: "Jidou Hanbaiki ni Umarekawatta Ore wa...",
    englishTitle: "Reborn as a Vending Machine, I Now Wander the...",
    episode: 6,
    type: "TV",
    image: "/imgs/movie22.webp",
    slug: "jidou-hanbaiki",
    view: "0",
  },
  {
    title: "Kanojo, Okarishimasu 4th Season",
    englishTitle: "Rent-a-Girlfriend Season 4",
    episode: 7,
    type: "TV",
    image: "/imgs/movie22.webp",
    slug: "kanojo-okarishimasu-4",
    view: "0",
  },
  {
    title: "Meitantei Conan",
    englishTitle: "Thám Tử Lừng Danh Conan",
    episode: 1140,
    type: "TV",
    image: "/imgs/movie22.webp",
    slug: "meitantei-conan",
    view: "0",
  },
  {
    title: "Mikadono Sanshimai wa Angai, Choroi.",
    englishTitle: "Đối Phó Với Chị Em Nhà Mikadono Thật Dễ Dàng",
    episode: 7,
    type: "TV",
    image: "/imgs/movie22.webp",
    slug: "mikadono-sanshimai",
    view: "0",
  },
  {
    title: "Sakamoto Days Part 2",
    englishTitle: "SAKAMOTO DAYS Cour 2",
    episode: 6,
    type: "TV",
    image: "/imgs/movie22.webp",
    slug: "sakamoto-days-part-2",
    view: "0",
  },
  {
    title: "Kanojo, Okarishimasu 4th Season",
    englishTitle: "Rent-a-Girlfriend Season 4",
    episode: 7,
    type: "TV",
    image: "/imgs/movie22.webp",
    slug: "kanojo-okarishimasu-4",
    view: "0",
  },
  {
    title: "Meitantei Conan",
    englishTitle: "Thám Tử Lừng Danh Conan",
    episode: 1140,
    type: "TV",
    image: "/imgs/movie22.webp",
    slug: "meitantei-conan",
    view: "0",
  },
  {
    title: "Mikadono Sanshimai wa Angai, Choroi.",
    englishTitle: "Đối Phó Với Chị Em Nhà Mikadono Thật Dễ Dàng",
    episode: 7,
    type: "TV",
    image: "/imgs/movie22.webp",
    slug: "mikadono-sanshimai",
    view: "0",
  },
  {
    title: "Sakamoto Days Part 2",
    englishTitle: "SAKAMOTO DAYS Cour 2",
    episode: 6,
    type: "TV",
    image: "/imgs/movie22.webp",
    slug: "sakamoto-days-part-2",
    view: "0",
  },
  {
    title: "Jidou Hanbaiki ni Umarekawatta Ore wa...",
    englishTitle: "Reborn as a Vending Machine, I Now Wander the...",
    episode: 6,
    type: "TV",
    image: "/imgs/movie22.webp",
    slug: "jidou-hanbaiki",
    view: "0",
  },
  {
    title: "Kanojo, Okarishimasu 4th Season",
    englishTitle: "Rent-a-Girlfriend Season 4",
    episode: 7,
    type: "TV",
    image: "/imgs/movie22.webp",
    slug: "kanojo-okarishimasu-4",
    view: "0",
  },
  {
    title: "Meitantei Conan",
    englishTitle: "Thám Tử Lừng Danh Conan",
    episode: 1140,
    type: "TV",
    image: "/imgs/movie22.webp",
    slug: "meitantei-conan",
    view: "0",
  },
  {
    title: "Mikadono Sanshimai wa Angai, Choroi.",
    englishTitle: "Đối Phó Với Chị Em Nhà Mikadono Thật Dễ Dàng",
    episode: 7,
    type: "TV",
    image: "/imgs/movie22.webp",
    slug: "mikadono-sanshimai",
    view: "0",
  },
  {
    title: "Sakamoto Days Part 2",
    englishTitle: "SAKAMOTO DAYS Cour 2",
    episode: 6,
    type: "TV",
    image: "/imgs/movie22.webp",
    slug: "sakamoto-days-part-2",
    view: "0",
  },
]);

const animeRecentlyUpdated = ref([
  {
    title: "Grand Blue Season 2",
    englishTitle: "Cùng học bơi nào phần 2",
    episode: 6,
    type: "TV",
    image: "/imgs/movie22.webp",
    slug: "grand-blue-season-2",
  },
  {
    title: "Clevatess: Majuu no Ou to Akago to...",
    englishTitle: "Clevatess",
    episode: 7,
    type: "TV",
    image: "/imgs/movie22.webp",
    slug: "clevatess",
  },
  {
    title: "Jidou Hanbaiki ni Umarekawatta Ore wa...",
    englishTitle: "Reborn as a Vending Machine, I Now Wander the...",
    episode: 6,
    type: "TV",
    image: "/imgs/movie22.webp",
    slug: "jidou-hanbaiki",
  },
  {
    title: "Kakkou no Iinazuke Season 2",
    englishTitle: "Cặp Đôi Tư HỮ Phần 2",
    episode: 6,
    type: "TV",
    image: "/imgs/movie22.webp",
    slug: "kakkou-no-iinazuke-2",
  },
  {
    title: "Kanojo, Okarishimasu 4th Season",
    englishTitle: "Rent-a-Girlfriend Season 4",
    episode: 7,
    type: "TV",
    image: "/imgs/movie22.webp",
    slug: "kanojo-okarishimasu-4",
  },
]);

const movieNew = ref([
  {
    title: "Dragon Ball Z Movie 08: Moetsukiro!! Nessen...",
    englishTitle: "Bảy Viên Ngọc Rồng Z Broly – Siêu Saiyan Huyền Thoại",
    episode: 1,
    type: "MOVIE",
    image: "/imgs/movie22.webp",
    slug: "dragon-ball-z-movie-08",
  },
  {
    title: "Meitantei Conan Movie 09: Suihei Senjou no...",
    englishTitle: "Thám Tử Lừng Danh Conan Movie 09: Âm Mưu Trên...",
    episode: 2,
    type: "MOVIE",
    image: "/imgs/movie22.webp",
    slug: "conan-movie-09",
  },
  {
    title: "Shingeki no Kyojin Movie: Kanketsu-hen –...",
    englishTitle: "Đại Chiến Người Khổng Lồ: Lần Tấn Công Cuối Cùng",
    episode: 1,
    type: "MOVIE",
    image: "/imgs/movie22.webp",
    slug: "aot-final-movie",
  },
  {
    title: "Shika no Ou: Yuna to Yakusoku no Tabi",
    englishTitle: "The Deer King",
    episode: 1,
    type: "MOVIE",
    image: "/imgs/movie22.webp",
    slug: "deer-king",
  },
  {
    title: "Na Tra 2",
    englishTitle: "Nezha: Mo tong nao hai",
    episode: 1,
    type: "MOVIE",
    image: "/imgs/movie22.webp",
    slug: "na-tra-2",
  },
]);
</script>
