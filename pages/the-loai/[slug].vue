<template>
  <div class="flex gap-4">
    <!-- Bình luận -->
    <div class="col-span-6 flex flex-col justify-center items-center gap-10">
      <!-- Thể Loại anime -->
      <Movie
        :items="
          animeNewAdded.slice(0, 24).map((item) => ({
            ...item,
            type: item.type === 'TV' ? 'TV' : 'MOVIE',
          }))
        "
        :title="`Thể loại ${name}`"
        slug="phim-moi-cap-nhat"
      />
      <UPagination v-model:page="page" active-color="neutral" :total="100" />
    </div>

    <!-- Thịnh Hành -->
    <div class="col-span-2 pt-20">
      <CategoryList />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useRoute } from "vue-router";
const page = ref(1);
const route = useRoute();
const slug = route.params.slug as string;

// Chuyển slug (kebab-case) thành tên hiển thị
// ví dụ: "boys-love" -> "Boys Love"
const name = computed(() =>
  slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ")
);
</script>
