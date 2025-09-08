<template>
  <div class="min-h-screen text-white flex flex-col">
    <!-- Main -->
    <main class="flex flex-col justify-center items-center flex-1">
      <!-- Header -->
      <div class="w-full flex flex-col gap-10 text-center border-b">
        <h1 class="text-2xl font-bold">Hi, huynhbinh12345</h1>
        <nav class="mt-3 flex justify-center space-x-8 text-sm font-medium">
          <a href="#" class="flex items-center gap-2 hover:text-pink-400">
            Tài khoản
          </a>
          <a href="#" class="flex items-center gap-2 hover:text-pink-400">
            Tiếp tục xem
          </a>
          <a href="#" class="flex items-center gap-2 hover:text-pink-400">
            Tủ phim
          </a>
        </nav>
      </div>

      <div class="bg-[#2f2f3f] p-8 rounded-lg shadow-md flex gap-6 w-[600px]">
        <!-- Left Form -->
        <div class="flex-1">
          <h2 class="text-2xl font-bold mb-6 flex items-center gap-2">
            <span class="text-3xl">🐱</span> Chỉnh sửa thông tin
          </h2>

          <!-- Email -->
          <div class="mb-4">
            <label class="block text-sm mb-1">Địa chỉ Email</label>
            <input
              type="email"
              value="huyhoang8203@gmail.com"
              class="w-full px-4 py-2 rounded-md bg-gray-100 text-black"
              readonly
            />
          </div>

          <!-- Username -->
          <div class="mb-4">
            <label class="block text-sm mb-1">Tên người dùng</label>
            <input
              type="text"
              value="huynhbinh12345"
              class="w-full px-4 py-2 rounded-md bg-gray-100 text-black"
            />
          </div>

          <!-- Date -->
          <div class="mb-4">
            <label class="block text-sm mb-1">Ngày tham gia</label>
            <input
              type="text"
              value="01-02-2025"
              class="w-full px-4 py-2 rounded-md bg-[#3a3a4d] text-gray-300"
              readonly
            />
          </div>

          <!-- Change Password -->
          <div
            class="mb-6 flex items-center gap-2 cursor-pointer text-gray-300 hover:text-pink-400"
          >
            <span class="material-icons">vpn_key</span> Đổi mật khẩu
          </div>

          <!-- Save Button -->
          <button
            class="w-full py-3 bg-pink-400 hover:bg-pink-500 text-black font-semibold rounded-md"
          >
            Save
          </button>
        </div>

        <!-- Avatar -->
        <div class="flex flex-col items-center justify-center">
          <div class="relative">
            <img
              src=""
              alt="Avatar"
              class="w-24 h-24 rounded-full border-4 border-gray-600 object-cover"
            />
            <button
              class="absolute bottom-0 right-0 bg-white p-1 rounded-full shadow-md"
            >
              <span class="material-icons text-black text-sm">edit</span>
            </button>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup>
// chỉ để demo icon google material
// cài: npm install material-icons
</script>
