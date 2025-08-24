<template>
  <footer class="w-full text-white py-8 mb-10 flex flex-col gap-6">
    <div class="border-b border-gray-500 pb-4 mb-4">
      <img src="/imgs/animew-logo.webp" alt="ANIMEW logo" class="logo" />
    </div>
    <div class="flex items-center gap-20">
      <h3 class="font-bold text-2xl">A - Z LIST</h3>
      <p class="font-medium text-base">
        Tìm anime theo ký tự Alphabet từ A - Z
      </p>
    </div>
    <div class="flex flex-wrap gap-2">
      <NuxtLink
        v-for="letter in alphabet"
        :key="letter"
        :to="`/az-list/${letter === '#' ? 'other' : letter}`"
        class="px-2 py-1 font-bold cursor-pointer rounded bg-[#4d4c5a] hover:bg-white/60 duration-300"
      >
        {{ letter }}
      </NuxtLink>
    </div>
    <div class="flex gap-10">
      <NuxtLink
        to="#"
        variant="secondary"
        class="text-white/80 hover:text-white"
        >Terms of Service</NuxtLink
      >
      <NuxtLink
        to="#"
        variant="secondary "
        class="text-white/80 hover:text-white"
        >DMCA</NuxtLink
      >
      <NuxtLink
        to="#"
        variant="secondary"
        class="text-white/80 hover:text-[#f53c9b] duration-300"
        >Contact</NuxtLink
      >
    </div>
    <div class="text-gray-500 text-sm font-bold">
      <p>
        Chúng tôi không lưu trữ bất kỳ dữ liệu nào trên website, toàn bộ điều sử
        dụng bên thứ ba
      </p>
      <p>© ANIMEW.ORG. All rights reserved.</p>
    </div>
  </footer>
</template>

<script setup>
// Định nghĩa danh sách chữ cái A-Z
const alphabet = [
  "All",
  "#",
  "0-9",
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
</script>
