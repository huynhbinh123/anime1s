<template>
  <div
    class="w-full h-[84px] flex items-center justify-between py-2 fixed top-0 left-0 z-30 backdrop-blur-lg bg-[#181a2c]/70 px-20"
  >
    <!-- content header -->
    <div class="flex items-center justify-center gap-4">
      <UIcon
        name="material-symbols:menu-rounded"
        size="30"
        class="cursor-pointer"
      />
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
          name="hugeicons:message-multiple-02"
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
import { UContainer } from "#components";
</script>

<style></style>
