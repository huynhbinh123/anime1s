<template>
  <div
    class="absolute top-1/2 left-1/2 z-50 w-[288px] h-[244px] backdrop-blur-lg bg-[#51506499] text-white rounded p-4 opacity-0 scale-0 origin-top-left transition-all duration-400 ease-out group-hover:opacity-100 group-hover:scale-100 flex flex-col justify-between"
  >
    <h3 class="text-lg font-bold mb-2 text-[#ffbade] line-clamp-2">
      {{ item.title }}
    </h3>
    <div class="mt-2 flex items-center justify-center space-x-2">
      <span
        class="px-2 rounded bg-[#b0e3af] text-sm font-bold text-black flex items-center justify-center gap-1"
      >
        <UIcon name="tabler:badge-cc-filled" size="15" class="bg-black" />
        {{ item.ccNumber }}
      </span>
      <span class="px-2 text-black font-bold text-sm rounded bg-[#7ecaec]">
        HD
      </span>
      <span class="text-sm bg-[#ffbade] font-bold text-black px-2 rounded">
        {{ item.type }}
      </span>
    </div>
    <p
      class="text-[12px] font-sans mb-4 leading-5 text-[#ccc] line-clamp-3 break-words mt-2"
    >
      {{ item.title }}
    </p>
    <div class="min-w-full flex justify-start gap-2 items-center">
      <NuxtLink :to="`/phim/${item.slug}`">
        <div
          class="text-black/90 bg-[#ffbade] rounded cursor-pointer p-1.5 w-[200px] flex items-center justify-center gap-1"
        >
          <UIcon name="material-symbols:play-arrow-rounded" size="30" />
          <span class="text-base font-bold">Xem Ngay</span>
        </div>
      </NuxtLink>
      <UButton
        class="cursor-pointer bg-white rounded-3xl flex items-center justify-center p-0.5"
      >
        <UIcon
          name="material-symbols:add-2-rounded"
          size="30"
          class="bg-black font-bold"
        />
      </UButton>
    </div>
  </div>
</template>

<script setup lang="ts">
export interface AnimeItem {
  title: string;
  name: string;
  number: string;
  ccNumber: number;
  type: string;
  image: string;
  slug: string;
  ep?: string;
  view?: string;
  tags?: string[];
  description?: string;
}

defineProps<{
  item: AnimeItem;
}>();
</script>
