<template>
  <div class="lg:flex hidden w-full">
    <section class="mt-8">
      <h2 class="text-pink-300 font-bold text-2xl mb-4">Thịnh Hành</h2>

      <div class="flex gap-14 w-full">
        <div
          v-for="anime in animes.slice(0, 8)"
          :key="anime.slug"
          class="flex flex-col items-center justify-center"
        >
          <NuxtLink
            :to="`/phim/${anime.slug}`"
            class="relative w-[170px] h-[220px]"
          >
            <img
              :src="anime.image"
              :alt="anime.title"
              class="w-full h-full object-cover rounded-md"
            />
            <div
              class="absolute bottom-10 left-0 text-white text-lg font-bold transform -rotate-90 origin-bottom-left whitespace-nowrap max-w-[150px] overflow-hidden text-ellipsis"
            >
              {{ anime.title }}
            </div>

            <span
              class="absolute bottom-0 -left-6 mt-2 text-pink-300 font-bold text-lg"
            >
              {{ anime.number }}
            </span>
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>

  <div class="lg:hidden flex flex-col w-full">
    <h2 class="text-pink-300 font-bold text-2xl mb-4">Thịnh Hành</h2>

    <UCarousel v-slot="{ item }" :items="animes" :ui="{ item: 'basis-1/3' }">
      <div class="relative w-full">
        <img
          :src="item.image"
          :alt="item.title"
          class="rounded-lg w-full h-56 object-cover"
        />
        <span
          class="absolute top-2 right-2 bg-pink-500 text-white font-bold text-sm px-2 py-1 rounded-md shadow"
        >
          {{ item.number }}
        </span>
      </div>
    </UCarousel>
  </div>
</template>

<script setup lang="ts">
interface Anime {
  title: string;
  number: string;
  slug: string;
  view: string;
}

const animes = [
  {
    title: "One Piece",
    type: "HD",
    name: "Vua Hải Tặc",
    number: "01",
    description:
      "One Piece là bộ anime huyền thoại kể về hành trình của Monkey D. Luffy – một cậu bé có ước mơ trở thành Vua Hải Tặc. Luffy cùng đồng đội của mình phiêu lưu trên đại dương để tìm kiếm kho báu One Piece mà Vua Hải Tặc Gol D. Roger để lại.",
    ccNumber: "13",
    image: "/imgs/01.webp",
    slug: "one-piece",
    ep: "/phim/one-piece/tap-1201",
    view: "12",
    tags: ["Action", "Adventure", "Fantasy", "Shounen"],
  },
  {
    title: "Kimetsu no Yaiba",
    type: "HD",
    name: "Thanh Gươm Diệt Quỷ",
    description:
      "Câu chuyện xoay quanh Kamado Tanjiro – một cậu bé tốt bụng có gia đình bị quỷ sát hại. Tanjiro cùng em gái Nezuko (bị biến thành quỷ) tham gia đội Diệt Quỷ để tìm cách chữa trị cho em và tiêu diệt quỷ dữ.",
    number: "02",
    ccNumber: "13",
    image: "/imgs/02.webp",
    slug: "kimetsu-no-yaiba",
    ep: "/phim/kimetsu-no-yaiba/tap-1202",
    view: "12",
    tags: ["Action", "Supernatural", "Drama", "Shounen"],
  },
  {
    title: "Boku no Hero Academia",
    type: "HD",
    name: "Học Viện Anh Hùng",
    description:
      "Trong một thế giới mà hầu hết mọi người đều có siêu năng lực gọi là 'Quirk', Izuku Midoriya – một cậu bé không có năng lực – vẫn nuôi ước mơ trở thành anh hùng. Cuộc đời cậu thay đổi khi gặp anh hùng số 1 All Might.",
    number: "03",
    ccNumber: "13",
    image: "/imgs/03.webp",
    slug: "boku-no-hero-a",
    ep: "/phim/boku-no-hero-a/tap-1203",
    view: "113",
    tags: ["Action", "School", "Super Power", "Shounen"],
  },
  {
    title: "Fairy Tail: 100 Years Quest",
    type: "HD",
    name: "Hội Pháp Sư",
    description:
      "Tiếp nối câu chuyện Fairy Tail, nhóm Natsu và Lucy bắt đầu nhiệm vụ 100 năm – thử thách khó khăn nhất mà chưa ai hoàn thành, đối mặt với những kẻ thù và bí ẩn mới.",
    number: "04",
    ccNumber: "13",
    image: "/imgs/04.webp",
    slug: "fairy-tail-100y",
    ep: "/phim/fairy-tail-100y/tap-1204",
    view: "13",
    tags: ["Action", "Adventure", "Magic", "Fantasy"],
  },
  {
    title: "Shinmai Ossan Boukensha",
    type: "HD",
    name: "Tân Binh Trung Niên",
    description:
      "Rick Gladiator, một người đàn ông trung niên quyết định trở thành mạo hiểm giả ở tuổi 30. Dù là lính mới, ông lại sở hữu sức mạnh áp đảo khiến mọi người kinh ngạc.",
    number: "05",
    ccNumber: "12",
    image: "/imgs/05.webp",
    slug: "shinmai-ossan",
    ep: "/phim/shinmai-ossan/tap-1205",
    view: "1212",
    tags: ["Adventure", "Fantasy"],
  },
  {
    title: "Shikanoko Nokonoko Koshitantan",
    type: "HD",
    name: "Công Chúa Hươu",
    description:
      "Câu chuyện hài hước xoay quanh cô bé có sừng hươu Shikanoko và những tình huống kỳ lạ trong cuộc sống thường ngày.",
    number: "06",
    ccNumber: "12",
    image: "/imgs/06.webp",
    slug: "shikanoko-nok",
    ep: "/phim/shikanoko-nok/tap-1206",
    view: "1223",
    tags: ["Comedy", "Slice of Life"],
  },
  {
    title: "Make Heroine ga Oosugiru!",
    type: "HD",
    name: "Quá Nhiều Nữ Chính",
    description:
      "Một cậu nam sinh bình thường bất ngờ bị cuốn vào câu chuyện với quá nhiều nữ chính bao quanh, dẫn đến hàng loạt tình huống dở khóc dở cười.",
    number: "07",
    ccNumber: "12",
    image: "/imgs/07.webp",
    slug: "make-heroine-g",
    ep: "/phim/make-heroine-g/tap-1207",
    view: "1212",
    tags: ["Comedy", "Romance", "School"],
  },
  {
    title: "Kaiju No. 8",
    type: "HD",
    name: "Quái Thú Số 8",
    description:
      "Kafka Hibino, một nhân viên vệ sinh dọn xác quái thú, vô tình bị nhiễm và trở thành một Kaiju. Tuy nhiên, anh vẫn quyết tâm gia nhập Đội Phòng Vệ để bảo vệ nhân loại.",
    number: "08",
    ccNumber: "15",
    image: "/imgs/08.webp",
    slug: "kaiju-8-gou",
    ep: "/phim/kaiju-8-gou/tap-1208",
    view: "1223",
    tags: ["Action", "Sci-Fi", "Military"],
  },
  {
    title: "Make Heroine ga Oosugiru! (Khác)",
    type: "HD",
    name: "Quá Nhiều Nữ Chính",
    description:
      "Một phiên bản khác của Make Heroine với nhiều tình tiết mới lạ và kịch tính hơn.",
    number: "09",
    ccNumber: "12",
    image: "/imgs/06.webp",
    slug: "make-heroine-g-alt",
    ep: "/phim/make-heroine-g-alt/tap-1209",
    view: "1212",
    tags: ["Comedy", "Romance"],
  },
  {
    title: "Kaiju No. 8 (Khác)",
    type: "HD",
    name: "Quái Thú Số 8",
    description:
      "Một câu chuyện phụ xoay quanh những trận chiến khác của Kafka Hibino trong thế giới Kaiju.",
    number: "10",
    ccNumber: "12",
    image: "/imgs/05.webp",
    slug: "kaiju-8-gou-alt",
    ep: "/phim/kaiju-8-gou-alt/tap-1210",
    view: "1223",
    tags: ["Action", "Sci-Fi"],
  },
];
</script>
