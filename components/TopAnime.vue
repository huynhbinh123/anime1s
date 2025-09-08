<script setup lang="ts">
import { ref } from "vue";

const props = defineProps<{
  showTabs?: boolean;
  title?: string;
}>();

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

const tabs = ["Today", "Week", "Month"];
const activeTab = ref("Today");
</script>

<template>
  <div class="mt-10 mb-4">
    <!-- Header -->
    <div class="flex justify-between items-center">
      <h2 class="text-pink-300 font-bold text-2xl mb-3">{{ title }}</h2>

      <!-- Tabs -->
      <div v-if="props.showTabs" class="flex">
        <div class="flex space-x-4 bg-[#2a293b] rounded-lg">
          <span
            v-for="tab in tabs"
            :key="tab"
            @click="activeTab = tab"
            class="text-base font-semibold flex items-center justify-center gap-1 cursor-pointer px-2 py-1 rounded-lg transition"
            :class="activeTab === tab ? 'bg-pink-300 text-black' : 'text-white'"
          >
            {{ tab }}
          </span>
        </div>
      </div>
    </div>

    <!-- Content -->
    <div class="bg-[#2a293b] p-4 rounded-lg mt-2">
      <div class="flex flex-col gap-4">
        <div
          v-for="(item, index) in animes.slice(0, 10)"
          :key="item.slug"
          class="flex items-center gap-3 p-2 hover:bg-gray-700 rounded-lg overflow-hidden transition"
        >
          <!-- Number -->
          <span
            class="text-2xl font-bold text-right"
            :class="
              index < 3
                ? 'text-white border-b-4 border-pink-200'
                : 'text-gray-400'
            "
          >
            {{ String(item.number).padStart(2, "0") }}
          </span>

          <!-- Image -->
          <NuxtLink
            :to="`/phim/${item.slug}`"
            class="w-14 h-20 overflow-hidden rounded-md flex-shrink-0"
          >
            <img
              :src="item.image"
              :alt="item.title"
              class="w-full h-full object-cover"
            />
          </NuxtLink>

          <!-- Info -->
          <div class="flex flex-col">
            <NuxtLink
              :to="`/phim/${item.slug}`"
              class="font-bold text-white leading-tight hover:text-pink-300"
            >
              {{ item.title }}
            </NuxtLink>
            <NuxtLink
              :to="`/phim/${item.slug}`"
              class="text-sm text-gray-400 font-semibold truncate line-clamp-1 max-w-[260px]"
            >
              {{ item.description }}
            </NuxtLink>
            <div
              class="flex items-center gap-1 text-gray-400 font-semibold text-sm"
            >
              <UIcon name="mdi:eye" />
              <span>{{ item.view }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
