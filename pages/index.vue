<!-- pages/index.vue -->
<template>
  <div class="flex flex-col text-white mt-[80px]">
    <ListMovie />

    <div class="mt-10">
      <Prevailing />
    </div>

    <div class="mt-10">
      <div class="py-6 text-white">
        <div class="grid lg:grid-cols-4 grid-cols-1 gap-8">
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
        <div class="flex flex-col lg:grid lg:grid-cols-8 gap-8">
          <div class="col-span-6 flex flex-col gap-10">
            <Movie
              :items="animeNewAdded.slice(0, 12)"
              :isShow="true"
              title="Tiếp tục xem"
              slug="user/histories"
            />
            <Movie
              :items="animeNewAdded.slice(0, 12)"
              :isShow="true"
              title="Phim Mới Cập Nhật"
              slug="phim-moi-cap-nhat"
            />
            <!-- co gi moi  -->
            <Movie
              :items="animeNewAdded.slice(0, 12)"
              :isShow="true"
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
