<template>
  <div class="flex items-center gap-2 relative">
    <div class="lg:hidden block">
      <UIcon name="i-lucide-search" size="20" class="text-white font-bold" />
    </div>
    <div>
      <!-- 🔔 Icon thông báo -->
      <UIcon
        name="material-symbols:circle-notifications"
        @click="isNotifyOpen = !isNotifyOpen"
        ref="notifyRef"
        size="40"
        class="text-gray-300 cursor-pointer relative"
      />
      <div
        class="absolute bg-red-400 px-1 rounded-2xl top-0 right-9 text-white text-sm"
      >
        0
      </div>
    </div>

    <!-- 🔔 Panel thông báo -->
    <div
      v-if="isNotifyOpen"
      ref="notifyRef"
      class="absolute z-[60] w-[400px] lg:h-[500px] h-[800px] top-11 right-0 rounded-lg bg-[#19182D]"
    >
      <div
        class="w-full bg-[#26263B] p-2 px-5 flex justify-between py-4 gap-2 sticky top-0 z-10 text-[#ccc]"
      >
        <div class="flex items-center gap-2 hover:text-pink-300 cursor-pointer">
          <UIcon name="hugeicons:tick-02" size="20" />
          <button>Đánh dấu tất cả</button>
        </div>
        <div
          @click="isNotifyOpen = false"
          class="flex items-center cursor-pointer hover:text-white"
        >
          <button>Đóng</button>
          <UIcon name="material-symbols:close-small-outline" size="26" />
        </div>
      </div>

      <!-- Khi rỗng -->
      <div class="flex justify-center items-center h-full">
        <UIcon name="mdi:comment-alert" size="40" class="text-gray-400" />
      </div>
    </div>

    <!--  Avatar -->
    <UAvatar
      src="https://github.com/benjamincanac.png"
      class="cursor-pointer"
      @click="isProfile = !isProfile"
    />

    <!--  Dropdown Profile -->
    <div
      v-if="isProfile"
      ref="profileRef"
      class="absolute z-[60] w-[300px] overflow-y-auto top-12 right-0 bg-[#201f31f2] rounded-lg border border-white/60"
    >
      <div class="flex flex-col px-4 py-3 leading-6">
        <!-- User info -->
        <div class="flex flex-col mb-3">
          <span class="text-pink-400 text-[14px] font-bold">{{
            user.name
          }}</span>
          <span class="text-[14px] font-bold truncate w-full">
            {{ user.email }}
          </span>
        </div>

        <!-- Menu -->
        <div v-for="item in userProfile" :key="item.title" class="w-full">
          <NuxtLink :to="item.link">
            <div
              class="w-full text-[16px] font-poppins cursor-pointer group hover:text-pink hover:bg-[#4C4B5B] bg-[#ffffff1a] px-2 rounded-lg py-2 mb-2"
            >
              <div class="flex items-center gap-4">
                <UIcon :name="item.icon" size="22" />
                <p class="leading-6">{{ item.title }}</p>
              </div>
            </div>
          </NuxtLink>
        </div>

        <!-- Logout -->
        <div
          class="mt-6 flex justify-end gap-2 text-[16px] font-poppins cursor-pointer hover:text-pink-300"
        >
          <p class="font-semibold">Đăng xuất</p>
          <UIcon name="octicon:sign-out-16" size="20" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { onClickOutside } from "@vueuse/core";

const isNotifyOpen = ref(false);
const isProfile = ref(false);

const notifyRef = ref(null);
const profileRef = ref(null);

// Đóng khi click ra ngoài
onClickOutside(notifyRef, () => (isNotifyOpen.value = false));
onClickOutside(profileRef, () => (isProfile.value = false));

// User info
const user = {
  name: "noah",
  email: "noah@gmail.com",
};

// Menu profile
const userProfile = [
  {
    icon: "material-symbols:account-circle",
    title: "Tài khoản",
    link: "/user/profile",
  },
  {
    icon: "ic:sharp-history",
    title: "Lịch sử xem phim",
    link: "/user/history",
  },
  {
    icon: "ic:sharp-settings",
    title: "Cài đặt",
    link: "/user/settings",
  },
];
</script>
