<template>
  <div
    class="w-full z-100 h-[84px] flex items-center justify-between py-2 fixed top-0 left-0 backdrop-blur-lg bg-[#181a2c]/70 lg:px-20 px-4"
  >
    <!-- content header -->
    <div class="flex items-center justify-center gap-4">
      <!-- Nút menu mobile -->
      <USlideover
        v-model:open="isOpen"
        side="left"
        :ui="{ content: 'max-w-[300px] w-[300px]' }"
      >
        <UIcon
          name="material-symbols:menu-rounded"
          size="30"
          class="cursor-pointer"
          @click="isOpen = true"
        />

        <template #content>
          <!-- nội dung menu mobile -->
          <div class="h-full bg-[#181a2c] text-white p-4 overflow-y-auto">
            <!-- nút close -->
            <div
              class="flex items-center gap-2 py-1 cursor-pointer hover:text-[#ffbade] transition"
              @click="isOpen = false"
            >
              <UIcon name="ic:baseline-keyboard-arrow-left" size="20" />
              <span class="font-bold text-base">Đóng</span>
            </div>

            <!-- community -->
            <div
              class="flex items-center justify-center bg-[#32354e] mt-6 p-2 rounded-3xl gap-2"
            >
              <UIcon
                name="ic:outline-ondemand-video"
                size="26"
                class="cursor-pointer bg-[#ffbade]"
              />
              <NuxtLink
                to="/danh-sach-phim"
                class="font-semibold text-sm hover:text-[#ffbade]"
                >Danh sách phim</NuxtLink
              >
            </div>

            <!-- nav list -->
            <ul class="flex flex-col gap-2 mt-4">
              <li
                v-for="i in list"
                :key="i.to"
                class="py-4 rounded hover:text-[#ffbade] font-bold border-b border-gray-100 cursor-pointer w-full"
              >
                <NuxtLink :to="i.to">{{ i.name }}</NuxtLink>
              </li>
            </ul>

            <!-- categories -->
            <div class="grid grid-cols-2 gap-1 mt-4">
              <NuxtLink
                v-for="(cat, index) in categories"
                :key="index"
                :to="`/the-loai/${cat.name.toLowerCase().replace(/ /g, '-')}`"
                :class="`${cat.color} text-sm font-bold cursor-pointer py-2 hover:underline`"
              >
                {{ cat.name }}
              </NuxtLink>
            </div>
          </div>
        </template>
      </USlideover>

      <!-- Logo -->
      <NuxtLink to="/">
        <img
          src="/imgs/animew-logo.webp"
          alt="logo"
          width="140"
          class="cursor-pointer"
        />
      </NuxtLink>

      <!-- Search desktop -->
      <div
        class="lg:flex hidden items-center justify-between gap-2 border rounded bg-white px-2 w-[298px] h-[40px]"
      >
        <input
          placeholder="Tìm anime ..."
          class="text-black/60 flex-1 text-lg font-semibold outline-none"
        />
        <UIcon name="i-lucide-search" size="20" class="text-black" />
      </div>

      <!-- icon desktop -->
      <div class="lg:flex hidden flex-col items-center justify-center">
        <UIcon
          name="lets-icons:sort-random"
          size="26"
          class="cursor-pointer bg-[#ffbade]"
        />
        <span class="font-semibold text-sm">Ngẫu nhiên</span>
      </div>
      <NuxtLink
        to="/danh-sach-phim"
        class="lg:flex hidden flex-col items-center justify-center"
      >
        <UIcon
          name="ic:outline-ondemand-video"
          size="26"
          class="cursor-pointer bg-[#ffbade]"
        />
        <span class="font-semibold text-sm">Danh sách phim</span>
      </NuxtLink>
    </div>

    <!-- đăng nhập và user -->
    <AppUserLogin />
  </div>
</template>

<script lang="ts" setup>
const isOpen = ref(false);

const list = [
  { name: "Trang chủ", to: "/trang-chu" },
  { name: "Phim lẻ", to: "/danh-sach-phim" },
  { name: "Phim bộ", to: "/danh-sach-phim" },
  { name: "Thể loại", to: "/the-loai" },
];
const categories = [
  { name: "Action", color: "text-green-300/70" },
  { name: "Adult Cast", color: "text-orange-300/70" },
  { name: "Anthropomorph", color: "text-red-300/70" },
  { name: "Avant Garde", color: "text-purple-300/70" },
  { name: "Adventure", color: "text-blue-300/70" },
  { name: "Award Winning", color: "text-pink-300/70" },
  { name: "Boys Love", color: "text-green-300/70" },
  { name: "CGDCT", color: "text-lime-300/70" },
  { name: "Childcare", color: "text-yellow-300/70" },
  { name: "Comedy", color: "text-red-300/70" },
  { name: "Combat Sports", color: "text-pink-300/70" },
  { name: "Crossdressing", color: "text-sky-300/70" },
  { name: "Delinquents", color: "text-blue-300/70" },
  { name: "Detective", color: "text-yellow-100/70" },
  { name: "Drama", color: "text-green-300/70" },
  { name: "Ecchi", color: "text-lime-300/70" },
  { name: "Educational", color: "text-red-300/70" },
  { name: "Erotica", color: "text-blue-300/70" },
  { name: "Fantasy", color: "text-pink-300/70" },
  { name: "Gag Humor", color: "text-sky-300/70" },
  { name: "Girls Love", color: "text-green-300/70" },
  { name: "Gore", color: "text-lime-300/70" },
  { name: "Gourmet", color: "text-yellow-300/70" },
  { name: "Harem", color: "text-red-300/70" },
];
</script>

<style></style>
