<template>
  <div
    class="w-full h-[84px] flex items-center justify-between py-2 fixed top-0 left-0 z-30 backdrop-blur-lg bg-[#181a2c]/70 px-20"
  >
    <!-- content header -->
    <div class="flex items-center justify-center gap-4">
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
          <div class="h-full bg-[#181a2c] text-white p-4">
            <!-- nút close -->
            <div
              class="flex items-center gap-2 py-1 cursor-pointer hover:text-[#ffbade] transition"
              @click="isOpen = false"
            >
              <UIcon name="ic:baseline-keyboard-arrow-left" size="20" />
              <span class="font-bold text-base">Close Menu</span>
            </div>

            <!-- community -->
            <div
              class="flex items-center justify-center bg-[#32354e] mt-6 p-2 rounded-3xl gap-2"
            >
              <UIcon
                name="jam:messages-f"
                size="26"
                class="cursor-pointer bg-[#ffbade]"
              />
              <NuxtLink
                to="/community/board"
                class="font-semibold text-sm hover:text-[#ffbade]"
                >Community</NuxtLink
              >
            </div>

            <!-- nav list -->
            <div class="flex flex-col gap-2">
              <ul>
                <li
                  v-for="i in list"
                  class="py-4 rounded hover:text-[#ffbade] font-bold border-b border-gray-100 cursor-pointer w-full"
                >
                  <NuxtLink :to="i.to">{{ i.name }}</NuxtLink>
                </li>

                <div class="grid grid-cols-2 gap-1 mt-4">
                  <NuxtLink
                    v-for="(cat, index) in categories"
                    :key="index"
                    :to="`/the-loai/${cat.name
                      .toLowerCase()
                      .replace(/ /g, '-')}`"
                    :class="`${cat.color} text-sm font-bold cursor-pointer py-2 hover:underline`"
                  >
                    {{ cat.name }}
                  </NuxtLink>
                </div>
              </ul>
            </div>
          </div>
        </template>
      </USlideover>
      <NuxtLink to="/">
        <img
          src="/imgs/animew-logo.webp"
          alt="logo"
          width="160"
          class="cursor-pointer"
        />
      </NuxtLink>

      <div
        class="flex items-center justify-between gap-2 border rounded bg-white px-2 w-[298px] h-[40px]"
      >
        <input
          placeholder="Tìm anime ..."
          class="text-black/60 flex items-center text-lg font-semibold outline-none"
        />
        <UIcon name="i-lucide-search" size="20" class="text-black" />
      </div>
      <div class="flex flex-col items-center justify-center">
        <UIcon
          name="lets-icons:sort-random"
          size="26"
          class="cursor-pointer bg-[#ffbade]"
        />
        <span class="font-semibold text-sm">Random</span>
      </div>
      <div class="flex flex-col items-center justify-center">
        <UIcon
          name="jam:messages-f"
          size="26"
          class="cursor-pointer bg-[#ffbade]"
        />
        <span class="font-semibold text-sm">Community</span>
      </div>
    </div>
    <div>
      <UButton>
        <span
          class="font-bold text-base text-black rounded px-4 py-2 cursor-pointer bg-[#ffbade]"
          >Login</span
        >
      </UButton>
    </div>
  </div>
</template>

<script lang="ts" setup>
const isOpen = ref(false);

const list = [
  { name: "Trang chủ", to: "/trang-chu" },
  { name: "Phim lẻ", to: "/phim-le" },
  { name: "Phim bộ", to: "/phim-bo" },
  { name: "Lịch Chiếu anime", to: "/lich-chieu" },
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
