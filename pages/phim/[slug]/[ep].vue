<script setup lang="ts">
import { ref, watch } from "vue";
import { useRouter, useRoute } from "vue-router";

const route = useRoute();
const router = useRouter();
const slug = route.params.slug as string;
const ep = route.params.ep as string;

const categories = [
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
      "Câu chuyện về Monkey D. Luffy và hành trình trở thành Vua Hải Tặc trên biển cả, khám phá kho báu One Piece.",
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

// Không cần video source

// Next / Prev episode (cập nhật nhóm luôn)
function goNextEpisode() {
  if (epNumber.value < totalEpisodes) {
    epNumber.value++;
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
        <div class="flex lg:flex-row flex-col w-full p-2 gap-2">
          <div class="flex flex-1 lg:flex-row flex-col-reverse">
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
              class="flex-1 flex flex-col bg-black mb-4 rounded-lg shadow-lg overflow-hidden z-50 transition-all duration-500 ease-in-out"
              :style="{
                width: isExpanded ? '1404px lg:block' : '958px hidden',
              }"
            >
              <transition name="fade" mode="out-in">
                <div
                  class="lg:w-full w-[430px] lg:h-[653px] h-[199px] bg-black"
                ></div>
              </transition>

              <!-- Controls -->
              <div class="flex-none flex justify-between p-4 bg-black/80">
                <div class="flex items-center gap-1">
                  <button
                    @click="toggleExpand"
                    class="lg:flex hidden items-center gap-1 w-[100px] cursor-pointer"
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
                    <span class="lg:block hidden">Tập trước</span>
                  </div>
                  <div
                    class="flex items-center gap-1 cursor-pointer hover:text-[#ffbade]"
                    @click="goNextEpisode"
                  >
                    <span class="lg:block hidden">Tập sau</span>
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
          </div>
          <!-- Cột phải: Thông tin anime -->
          <transition name="slide-fade">
            <div v-if="!isExpanded" class="lg:w-[450px] w-full flex-shrink-0">
              <div class="flex flex-col gap-6">
                <div class="flex flex-col lg:items-start items-center">
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
  <div class="flex lg:flex-row flex-col gap-4 mt-6">
    <!-- Bình luận -->
    <div class="lg:col-span-6 flex flex-col mt-10">
      <VideoComments />
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
    <div class="lg:col-span-2">
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
