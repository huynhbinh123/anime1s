<!-- pages/index.vue -->
<template>
  <div class="flex flex-col text-white mt-[80px]">
    <ListMovie />

    <div class="mt-10">
      <Prevailing />
    </div>

    <div class="mt-10">
      <div class="py-6 text-white">
        <div class="grid grid-cols-4 gap-8">
          <section>
            <h2 class="text-pink-300 font-bold text-xl mb-4">Phim Mới Thêm</h2>
            <AnimeList
              :items="animeNewAdded.slice(0, 5)"
              slug="phim-moi-them"
            />
          </section>

          <section>
            <h2 class="text-pink-300 font-bold text-xl mb-4">
              Phim Mới Cập Nhật
            </h2>
            <AnimeList
              :items="animeRecentlyUpdated.slice(0, 5)"
              slug="phim-moi-cap-nhat"
            />
          </section>

          <section>
            <h2 class="text-pink-300 font-bold text-xl mb-4">Movie Mới</h2>

            <AnimeList :items="movieNew.slice(0, 5)" slug="moive-moi" />
          </section>

          <section>
            <h2 class="text-pink-300 font-bold text-xl mb-4">Vừa Bình Luận</h2>
            <Comment />
          </section>
        </div>
      </div>
    </div>
    <!-- content -->
    <div class="mt-10">
      <div class="py-6 text-white">
        <div class="grid grid-cols-8 gap-8">
          <div class="col-span-6">
            <Movie
              :items="animeNewAdded.slice(0, 12)"
              :isShow="true"
              title="Phim Mới Cập Nhật"
              slug="phim-moi-cap-nhat"
            />
            <!-- co gi moi  -->
            <Movie
              :items="animeNewAdded.slice(0, 12)"
              :isShow="true"
              title="Có Gì Mới"
              slug="co-gi-moi"
              class="mt-10"
            />

            <ProjectionSchedule class="mt-10" />
          </div>
          <div class="col-span-2">
            <CategoryList />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {
  animeNewAdded,
  animeRecentlyUpdated,
  movieNew,
} from "~/composables/animeData";
</script>
