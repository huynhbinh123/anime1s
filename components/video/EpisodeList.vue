<script setup lang="ts">
import { ref, computed, watch, toRef } from "vue";
import { NuxtLink } from "#components";

const props = defineProps<{
  episodeGroups: { start: number; end: number }[];
  selectedGroup: { start: number; end: number };
  searchEpisode: string;
  epNumber: number;
  animeSlug: string;
}>();

const emit = defineEmits<{
  (e: "update:selectedGroup", group: { start: number; end: number }): void;
  (e: "update:searchEpisode", value: string): void;
}>();

const showDropdown = ref(false);
const dropdownRef = ref<HTMLElement | null>(null);

const toggleDropdown = () => (showDropdown.value = !showDropdown.value);

// Reactive selectedGroup
const selectedGroupRef = toRef(props, "selectedGroup");

const localSearch = ref(props.searchEpisode);
watch(localSearch, (val) => emit("update:searchEpisode", val));

const filteredEpisodes = computed(() => {
  const allEpisodes = Array.from(
    { length: props.episodeGroups[props.episodeGroups.length - 1].end },
    (_, i) => i + 1
  );

  if (!props.searchEpisode) {
    const start = selectedGroupRef.value.start;
    const end = selectedGroupRef.value.end;
    return allEpisodes.filter((ep) => ep >= start && ep <= end);
  }

  return allEpisodes.filter((ep) =>
    ep.toString().includes(props.searchEpisode)
  );
});

function selectGroup(group: { start: number; end: number }) {
  emit("update:selectedGroup", group);
  emit("update:searchEpisode", "");
  showDropdown.value = false;
}

// Click outside để ẩn dropdown
function handleClickOutside(event: MouseEvent) {
  if (!dropdownRef.value) return;
  if (!(dropdownRef.value as HTMLElement).contains(event.target as Node)) {
    showDropdown.value = false;
  }
}

onMounted(() => document.addEventListener("click", handleClickOutside));
onBeforeUnmount(() =>
  document.removeEventListener("click", handleClickOutside)
);
</script>

<template>
  <div ref="dropdownRef" class="rounded-lg relative lg:w-[294px] w-full">
    <h3 class="font-bold text-white mb-2">Danh sách tập</h3>

    <div class="flex items-center justify-between mb-3 gap-1 cursor-pointer">
      <div @click="toggleDropdown" class="flex items-center gap-1">
        <UIcon name="material-symbols:lists-rounded" size="20" />
        <span class="text-sm whitespace-nowrap">
          Tập: {{ selectedGroupRef.start }} - {{ selectedGroupRef.end }}
        </span>
        <UIcon name="material-symbols:arrow-drop-down" size="20" />
      </div>

      <UInput placeholder="Tìm tập..." class="w-full" v-model="localSearch" />
    </div>

    <!-- Dropdown nhóm -->
    <div
      v-show="showDropdown"
      class="w-[160px] absolute p-1 pr-3 bg-white rounded-lg shadow-lg flex flex-col justify-center items-center z-20"
    >
      <button
        v-for="(group, index) in props.episodeGroups"
        :key="index"
        class="p-2 m-1 text-black bg-gray-200 rounded hover:bg-pink-300 transition w-full text-left text-sm font-semibold cursor-pointer"
        @click="() => selectGroup(group)"
      >
        Tập: {{ group.start }} - {{ group.end }}
      </button>
    </div>

    <!-- Các tập -->
    <div
      class="grid grid-cols-5 gap-2 lg:w-[294px] w-full overflow-y-auto mt-3"
    >
      <NuxtLink
        v-for="num in filteredEpisodes"
        :key="num"
        :to="`/phim/${props.animeSlug}/tap-${num}`"
        class="h-[28px] px-4 py-1 text-sm flex justify-center items-center text-white bg-gray-700 rounded hover:bg-pink-300 hover:text-black transition"
        :class="props.epNumber === num ? 'bg-pink-300 text-black' : ''"
      >
        {{ num }}
      </NuxtLink>
    </div>
  </div>
</template>
