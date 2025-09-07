<template>
  <div class="w-full lg:h-full h-[570px] overflow-hidden relative">
    <transition-group name="slide-up" tag="div" class="absolute w-full">
      <div
        v-for="item in visibleComments"
        :key="item.id"
        class="flex gap-2 py-2 border-t border-gray-700"
      >
        <!-- Avatar -->
        <img
          :src="item.avatar"
          alt="avatar"
          class="w-10 h-10 rounded-full flex-shrink-0"
        />

        <!-- Nội dung -->
        <div>
          <p class="font-bold text-pink-400">{{ item.anime }}</p>
          <p class="text-sm text-gray-300">{{ item.user }} · {{ item.time }}</p>
          <p class="text-gray-200">{{ item.text }}</p>
        </div>
      </div>
    </transition-group>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";

interface Comment {
  id: number;
  user: string;
  time: string;
  text: string;
  anime: string;
  avatar: string;
}

const comments = ref<Comment[]>([
  {
    id: 1,
    user: "DoTuanSOS",
    time: "18 ngày",
    text: "cố gắng ra tập mới nhanh hơn xíu nữa là ok nhé, tôi thích web",
    anime: "One Piece",
    avatar: "https://i.pravatar.cc/100?img=1",
  },
  {
    id: 2,
    user: "Duckuni704",
    time: "21 ngày",
    text: "Web lỗi à. Có xem dc film đâu",
    anime: "100-man no Inochi no Ue ni Ore wa",
    avatar: "https://i.pravatar.cc/100?img=2",
  },
  {
    id: 3,
    user: "DoTuanSOS",
    time: "18 ngày",
    text: "cố gắng ra tập mới nhanh hơn xíu nữa là ok nhé, tôi thích web",
    anime: "One Piece",
    avatar: "https://i.pravatar.cc/100?img=3",
  },
  {
    id: 4,
    user: "Duckuni704",
    time: "21 ngày",
    text: "Web lỗi à. Có xem dc film đâu",
    anime: "100-man no Inochi no Ue ni Ore wa",
    avatar: "https://i.pravatar.cc/100?img=4",
  },
  {
    id: 5,
    user: "DoTuanSOS",
    time: "18 ngày",
    text: "cố gắng ra tập mới nhanh hơn xíu nữa là ok nhé, tôi thích web",
    anime: "One Piece",
    avatar: "https://i.pravatar.cc/100?img=5",
  },
  {
    id: 6,
    user: "Duckuni704",
    time: "21 ngày",
    text: "Web lỗi à. Có xem dc film đâu",
    anime: "100-man no Inochi no Ue ni Ore wa",
    avatar: "https://i.pravatar.cc/100?img=6",
  },
  {
    id: 7,
    user: "AnotherUser",
    time: "1 ngày",
    text: "Web ngon nghẻ rồi nha!",
    anime: "Naruto",
    avatar: "https://i.pravatar.cc/100?img=7",
  },
]);

// Index để biết phần tử tiếp theo cần đưa vào
let nextIndex = 6;

// Luôn chứa 6 comment hiển thị
const visibleComments = ref<Comment[]>(comments.value.slice(0, 6));

onMounted(() => {
  setInterval(() => {
    // Xoá 1 cái đầu
    visibleComments.value.shift();

    // Thêm cái tiếp theo vào cuối
    visibleComments.value.push(comments.value[nextIndex]);

    // Tăng index (loop vô hạn)
    nextIndex = (nextIndex + 1) % comments.value.length;
  }, 3000);
});
</script>

<style scoped>
.slide-up-enter-active,
.slide-up-leave-active {
  transition: transform 0.6s ease, opacity 0.6s ease;
}
.slide-up-enter-from {
  transform: translateY(20px);
  opacity: 0;
}
.slide-up-leave-to {
  transform: translateY(-20px);
  opacity: 0;
}
</style>
