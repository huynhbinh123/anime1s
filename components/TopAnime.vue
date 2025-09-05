<script setup lang="ts">
import { ref } from "vue";
import { useCategories } from "~/composables/useCategories";

const props = defineProps<{
  showTabs?: boolean;
  title?: string;
}>();

const animes = useCategories();

const tabs = ["Today", "Week", "Month"];
const activeTab = ref("Today");
</script>

<template>
  <div class="mt-10 mb-4">
    <!-- Header -->
    <div class="flex justify-between items-center">
      <h2 class="text-pink-300 font-bold text-2xl mb-3">{{ title }}</h2>

      <!-- Tabs -->
      <div v-if="props.showTabs" class="flex">
        <div class="flex space-x-4 bg-[#2a293b] rounded-lg">
          <span
            v-for="tab in tabs"
            :key="tab"
            @click="activeTab = tab"
            class="text-base font-semibold flex items-center justify-center gap-1 cursor-pointer px-2 py-1 rounded-lg transition"
            :class="activeTab === tab ? 'bg-pink-300 text-black' : 'text-white'"
          >
            {{ tab }}
          </span>
        </div>
      </div>
    </div>

    <!-- Content -->
    <div class="bg-[#2a293b] p-4 rounded-lg mt-2">
      <div class="flex flex-col gap-4">
        <div
          v-for="(item, index) in animes.slice(0, 10)"
          :key="item.slug"
          class="flex items-center gap-3 p-2 hover:bg-gray-700 rounded-lg transition"
        >
          <!-- Number -->
          <span
            class="text-2xl font-bold text-right"
            :class="
              index < 3
                ? 'text-white border-b-4 border-pink-200'
                : 'text-gray-400'
            "
          >
            {{ String(item.number).padStart(2, "0") }}
          </span>

          <!-- Image -->
          <NuxtLink
            :to="`/phim/${item.slug}`"
            class="w-14 h-20 overflow-hidden rounded-md flex-shrink-0"
          >
            <img
              :src="item.image"
              :alt="item.title"
              class="w-full h-full object-cover"
            />
          </NuxtLink>

          <!-- Info -->
          <div class="flex flex-col">
            <NuxtLink
              :to="`/phim/${item.slug}`"
              class="font-bold text-white leading-tight hover:text-pink-300"
            >
              {{ item.title }}
            </NuxtLink>
            <NuxtLink
              :to="`/phim/${item.slug}`"
              class="text-sm text-gray-400 font-semibold truncate line-clamp-1 max-w-[260px]"
            >
              {{ item.description }}
            </NuxtLink>
            <div
              class="flex items-center gap-1 text-gray-400 font-semibold text-sm"
            >
              <UIcon name="mdi:eye" />
              <span>{{ item.view }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
