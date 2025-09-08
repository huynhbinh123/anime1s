<template>
  <!-- Thông báo tập -->
  <div
    class="flex lg:flex-row flex-col bg-[#201F31] text-white rounded-md w-full"
  >
    <!-- Thông báo -->
    <div
      class="flex flex-col lg:items-start items-center lg:bg-pink-300 bg-[#14131f] lg:text-black text-white p-2 rounded-l-md lg:w-[270px] w-full"
    >
      <p class="text-base font-semibold">Bạn đang xem</p>
      <p class="text-lg font-bold lg:text-black text-[#ffbade]">
        Tập {{ epNumber }}
      </p>
      <p class="text-sm">Nếu bạn không xem được vui lòng chọn server khác!</p>
    </div>

    <!-- Chọn server -->
    <div class="flex flex-col items-start gap-4 text-nowrap flex-nowrap w-full">
      <div class="flex lg:justify-start justify-center gap-2 pt-2 flex-wrap">
        <div class="flex justify-start items-center gap-2 px-4 mt-2">
          <UIcon name="bx:bxs-server" size="20" class="text-pink-200"></UIcon>
          SUB:
        </div>
        <div class="flex gap-2">
          <button
            class="bg-gray-700 text-white px-4 py-1 rounded-md hover:bg-pink-200 cursor-pointer hover:text-black transition"
          >
            HD - 01
          </button>
          <button
            class="bg-gray-700 text-white px-4 py-1 rounded-md hover:bg-pink-200 cursor-pointer hover:text-black transition"
          >
            HD - 02
          </button>
          <button
            class="bg-gray-700 text-white px-4 py-1 rounded-md hover:bg-pink-200 cursor-pointer hover:text-black transition"
          >
            HD - 03
          </button>
          <button
            class="bg-gray-700 text-white px-4 py-1 rounded-md hover:bg-pink-200 cursor-pointer hover:text-black transition"
          >
            HD - 04
          </button>
        </div>
      </div>
      <!-- Báo lỗi -->
      <div
        class="flex items-center gap-1 p-2 pl-4 bg-blue-900/30 text-blue-400 w-full"
      >
        <UIcon name="ic:twotone-info" size="20" class="text-blue-400"></UIcon>
        Báo lỗi phim
        <NuxtLink to="#" class="hover:underline text-pink-300 font-bold">
          tại đây
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
const props = defineProps<{
  epNumber: number;
}>();
</script>
