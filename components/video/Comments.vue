<template>
  <div class="flex-1 bg-[#2a293b] p-4">
    <h2 class="text-pink-300 text-2xl font-bold mb-4">Bình luận</h2>

    <!-- Form đăng nhập / bình luận -->
    <div ref="commentBox" class="flex items-start gap-3 mb-8 relative">
      <img src="" class="w-10 h-10 rounded-full" alt="avatar" />
      <textarea
        v-model="newComment"
        @input="autoResize($event)"
        @focus="showActions = true"
        class="flex-1 bg-[#21202b] rounded-lg p-3 text-white resize-none"
        placeholder="Vui lòng đăng nhập"
        rows="1"
      ></textarea>
      <transition name="fade">
        <div v-if="showActions" class="flex gap-2 absolute top-14 right-0">
          <button
            class="px-4 rounded hover:opacity-90 cursor-pointer text-white"
            @click="closeActions"
          >
            Đóng
          </button>
          <button
            class="bg-pink-300 px-4 text-black cursor-pointer font-bold rounded hover:opacity-90"
            @click="submitComment"
          >
            Bình luận
          </button>
        </div>
      </transition>
    </div>

    <!-- Danh sách bình luận -->
    <div class="space-y-6">
      <div
        v-for="(comment, index) in visibleComments"
        :key="index"
        class="flex flex-col gap-2"
      >
        <div class="flex gap-3">
          <img
            :src="comment.avatar"
            class="w-10 h-10 rounded-full"
            alt="avatar"
          />
          <div class="flex-1">
            <div class="flex items-center gap-2 text-white">
              <span class="font-bold" :class="comment.userColor">{{
                comment.user
              }}</span>
              <span class="text-gray-400 text-sm">{{ comment.time }}</span>
            </div>
            <p class="text-gray-200 max-w-[1127px] whitespace-wrap break-words">
              {{ comment.text }}
            </p>

            <!-- Nút hành động -->
            <div class="flex gap-4 mt-1 text-gray-400 text-sm">
              <!-- Trả lời -->
              <div
                class="flex items-center gap-2 hover:text-pink-300 cursor-pointer"
                @click="toggleReply(index)"
              >
                <UIcon name="octicon:reply" size="20"></UIcon>
                <span>Trả lời</span>
              </div>

              <!-- Like -->
              <div class="flex items-center gap-2" @click="toggleLike(index)">
                <UIcon
                  name="typcn:thumbs-up"
                  size="20"
                  :class="[
                    'cursor-pointer',
                    comment.liked ? 'text-pink-300' : 'hover:text-pink-300',
                  ]"
                ></UIcon>
                <span>{{ comment.likes }}</span>
              </div>
            </div>
            <!-- Form trả lời -->
            <transition name="fade">
              <div
                v-if="comment.showReply"
                class="mt-3 flex gap-2 relative"
                :class="`reply-box-${comment.user}`"
              >
                <textarea
                  v-model="comment.replyText"
                  @focus="comment.showReplyActions = true"
                  @input="autoResize($event)"
                  class="flex-1 bg-[#21202b] rounded-lg p-2 text-white resize-none overflow-hidden"
                  placeholder="Viết trả lời..."
                  rows="1"
                ></textarea>
                <transition name="fade">
                  <div
                    v-if="comment.showReplyActions"
                    class="flex gap-2 absolute top-12 right-0"
                  >
                    <button
                      class="px-4 rounded hover:opacity-90 cursor-pointer text-white"
                      @click="
                        comment.showReply = false;
                        comment.showReplyActions = false;
                      "
                    >
                      Đóng
                    </button>
                    <button
                      class="bg-pink-300 px-4 text-black cursor-pointer font-bold rounded hover:opacity-90"
                      @click="submitReply(index)"
                    >
                      Bình luận
                    </button>
                  </div>
                </transition>
              </div>
            </transition>

            <!-- Danh sách trả lời -->
            <div v-if="comment.replies.length" class="mt-3 ml-8 space-y-2">
              <div
                v-for="(reply, rIndex) in comment.replies"
                :key="rIndex"
                class="flex gap-2 max-w-[1167px]"
              >
                <img
                  :src="reply.avatar"
                  class="w-8 h-8 rounded-full"
                  alt="avatar"
                />
                <div>
                  <span class="font-bold text-green-400">{{ reply.user }}</span>
                  <span class="text-gray-400 text-sm ml-2">{{
                    reply.time
                  }}</span>
                  <p
                    class="max-w-[1127px] text-gray-200 whitespace-wrap break-words"
                  >
                    {{ reply.text }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Nút xem thêm -->
      <div v-if="visibleCount < comments.length" class="text-center mt-4">
        <p
          @click="loadMore"
          class="flex items-center rounded text-pink-300 hover:underline font-bold cursor-pointer"
        >
          <span> Xem thêm</span>
          <UIcon name="material-symbols:arrow-drop-down" size="20"></UIcon>
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

interface Reply {
  user: string;
  avatar: string;
  time: string;
  text: string;
}

interface Comment {
  user: string;
  avatar: string;
  userColor: string;
  time: string;
  text: string;
  likes: number;
  liked: boolean;
  showReply: boolean;
  replyText: string;
  replies: Reply[];
  showReplyActions?: boolean;
}

// Bình luận mẫu
const comments = ref<Comment[]>([
  {
    user: "Jhondang",
    avatar: "/avatar1.png",
    userColor: "text-pink-500",
    time: "hôm qua",
    text: "Phim hay quá",
    likes: 0,
    liked: false,
    showReply: false,
    replyText: "",
    replies: [],
  },
  {
    user: "DoTuanSOS",
    avatar: "/avatar2.png",
    userColor: "text-pink-500",
    time: "một tháng",
    text: "bị trùng 2 tập 1137 kìa",
    likes: 0,
    liked: false,
    showReply: false,
    replyText: "",
    replies: [],
  },
  {
    user: "talonezio",
    avatar: "/avatar3.png",
    userColor: "text-purple-500",
    time: "một tháng",
    text: "okok",
    likes: 0,
    liked: false,
    showReply: false,
    replyText: "",
    replies: [],
  },
  {
    user: "DoTuanSOS",
    avatar: "/avatar2.png",
    userColor: "text-pink-500",
    time: "một tháng",
    text: "bị trùng 2 tập 1137 kìa",
    likes: 0,
    liked: false,
    showReply: false,
    replyText: "",
    replies: [],
  },
  {
    user: "talonezio",
    avatar: "/avatar3.png",
    userColor: "text-purple-500",
    time: "một tháng",
    text: "okok",
    likes: 0,
    liked: false,
    showReply: false,
    replyText: "",
    replies: [],
  },
  {
    user: "DoTuanSOS",
    avatar: "/avatar2.png",
    userColor: "text-pink-500",
    time: "một tháng",
    text: "bị trùng 2 tập 1137 kìa",
    likes: 0,
    liked: false,
    showReply: false,
    replyText: "",
    replies: [],
  },
  {
    user: "talonezio",
    avatar: "/avatar3.png",
    userColor: "text-purple-500",
    time: "một tháng",
    text: "okok",
    likes: 0,
    liked: false,
    showReply: false,
    replyText: "",
    replies: [],
  },
  {
    user: "DoTuanSOS",
    avatar: "/avatar2.png",
    userColor: "text-pink-500",
    time: "một tháng",
    text: "bị trùng 2 tập 1137 kìa",
    likes: 0,
    liked: false,
    showReply: false,
    replyText: "",
    replies: [],
  },
  {
    user: "talonezio",
    avatar: "/avatar3.png",
    userColor: "text-purple-500",
    time: "một tháng",
    text: "okok",
    likes: 0,
    liked: false,
    showReply: false,
    replyText: "",
    replies: [],
  },
]);

// Nhập bình luận mới
const newComment = ref("");

const showActions = ref(false);
const commentBox = ref<HTMLElement | null>(null);

// Gửi bình luận mới
function submitComment() {
  if (!newComment.value.trim()) return;
  comments.value.unshift({
    user: "Bạn",
    avatar: "/default-avatar.png",
    userColor: "text-green-500",
    time: "vừa xong",
    text: newComment.value,
    likes: 0,
    liked: false,
    showReply: false,
    replyText: "",
    replies: [],
  });
  newComment.value = "";
  closeActions();
}

// Đóng actions + xóa nội dung
function closeActions() {
  showActions.value = false;
  newComment.value = ""; // 👈 nếu muốn clear luôn textarea
}

// Click outside để ẩn
function handleClickOutside(e: MouseEvent) {
  // Đóng form comment chính
  if (commentBox.value && !commentBox.value.contains(e.target as Node)) {
    closeActions();
  }

  // Đóng tất cả reply nếu click ra ngoài
  comments.value.forEach((c) => {
    if (c.showReply && c.showReplyActions) {
      const replyBox = document.querySelector(
        `.reply-box-${c.user}`
      ) as HTMLElement | null;

      if (replyBox && !replyBox.contains(e.target as Node)) {
        c.showReplyActions = false;
      }
    }
  });
}

onMounted(() => {
  document.addEventListener("click", handleClickOutside);
});

onBeforeUnmount(() => {
  document.removeEventListener("click", handleClickOutside);
});

// Toggle form trả lời
function toggleReply(index: number) {
  comments.value[index].showReply = !comments.value[index].showReply;
}

// Gửi reply
function submitReply(index: number) {
  const c = comments.value[index];
  if (!c.replyText.trim()) return;

  c.replies.push({
    user: "Bạn",
    avatar: "/default-avatar.png",
    time: "vừa xong",
    text: c.replyText,
  });

  c.replyText = "";
  c.showReply = false;
}

// Toggle like
function toggleLike(index: number) {
  const c = comments.value[index];
  if (c.liked) {
    c.likes--;
  } else {
    c.likes++;
  }
  c.liked = !c.liked;
}

// giãn comment
function autoResize(e: Event) {
  const target = e.target as HTMLTextAreaElement;
  target.style.height = "auto"; // reset chiều cao
  target.style.height = target.scrollHeight + "px"; // set theo nội dung
}

const visibleCount = ref(4); // số bình luận hiển thị ban đầu

// computed để lấy số bình luận hiển thị
const visibleComments = computed(() => {
  return comments.value.slice(0, visibleCount.value);
});

// Hàm bấm nút xem thêm
function loadMore() {
  visibleCount.value += 4;
}
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(-5px);
}
.fade-enter-to,
.fade-leave-from {
  opacity: 1;
  transform: translateY(0);
}
</style>
