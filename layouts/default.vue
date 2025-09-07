<template>
  <div
    class="flex flex-col min-h-screen text-white font-sans bg-[#201f31] relative lg:px-20 px-2"
  >
    <AppHeader />
    <main class="flex-grow pt-[16px]">
      <slot />
    </main>
    <AppFooter />
  </div>
</template>

<script lang="ts" setup></script>

<style></style>
