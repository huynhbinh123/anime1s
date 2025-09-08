<template>
  <div class="min-h-screen text-white flex flex-col mt-[80px]">
    <!-- Main -->
    <main class="flex flex-col justify-center items-center flex-1">
      <!-- Header -->
      <div class="w-full flex flex-col gap-10 text-center">
        <h1 class="text-3xl font-bold">Hi, huynhbinh12345</h1>
        <div class="mt-3 flex justify-center space-x-8 text-base font-bold">
          <div
            v-for="item in userProfile"
            class="hover:text-pink-300 cursor-pointer"
          >
            <UIcon :name="item.icon" size="20"></UIcon>
            <NuxtLink :to="item.link" class="flex items-center gap-2">
              {{ item.title }}
            </NuxtLink>
          </div>
        </div>
      </div>

      <div
        class="bg-[#2f2f3f] p-8 rounded-lg shadow-md flex flex-col lg:flex-row gap-6 w-full max-w-[600px] mt-10"
      >
        <!-- Left Form -->
        <div class="flex-1">
          <h2 class="text-2xl font-bold mb-6 flex items-center gap-2">
            <span class="text-3xl">🐱</span> Chỉnh sửa thông tin
          </h2>

          <!-- Email -->
          <div class="mb-4">
            <label class="block text-sm text-gray-300 mb-1"
              >Địa chỉ Email</label
            >
            <input
              type="email"
              value="huyhoang8203@gmail.com"
              class="w-full px-4 py-2 rounded-md bg-gray-100 text-black"
              readonly
            />
          </div>

          <!-- Username -->
          <div class="mb-4">
            <label class="block text-sm text-gray-300 mb-1"
              >Tên người dùng</label
            >
            <input
              type="text"
              v-model="userForm.username"
              class="w-full px-4 py-2 rounded-md bg-gray-100 text-black"
            />
          </div>

          <!-- Date -->
          <div class="mb-4">
            <label class="block text-sm text-gray-300 mb-1"
              >Ngày tham gia</label
            >
            <input
              type="text"
              value="01-02-2025"
              class="w-full px-4 py-2 rounded-md bg-[#3a3a4d] text-gray-300"
              readonly
            />
          </div>

          <!-- Change Password -->
          <div
            class="mb-6 flex items-center gap-2 cursor-pointer text-gray-300 hover:text-white"
            @click="isShowPassChange = !isShowPassChange"
          >
            <UIcon name="material-symbols:passkey" size="20"></UIcon>
            <span>Đổi mật khẩu</span>
          </div>

          <!-- mật khẩu hiện tại -->
          <div v-if="isShowPassChange">
            <div class="mb-4 relative">
              <label class="text-sm text-gray-300 mb-1"
                >Mật khẩu hiện tại</label
              >
              <input
                :type="showPassword.current ? 'text' : 'password'"
                v-model="userForm.currentPassword"
                placeholder="Mật khẩu hiện tại"
                class="w-full px-4 py-2 rounded-md bg-gray-100 text-black"
              />
              <span
                class="absolute top-9 z-40 text-black right-2 cursor-pointer hover:text-gray-500"
                @click="showPassword.current = !showPassword.current"
              >
                <UIcon
                  :name="showPassword.current ? 'mdi:eye-off' : 'mdi:eye'"
                  size="20"
                ></UIcon>
              </span>
            </div>

            <div class="mb-4 relative">
              <label class="block text-sm text-gray-300 mb-1"
                >Mật khẩu mới</label
              >
              <input
                :type="showPassword.new ? 'text' : 'password'"
                v-model="userForm.newPassword"
                placeholder="Mật khẩu mới"
                class="w-full px-4 py-2 rounded-md bg-gray-100 text-black"
              />
              <span
                class="absolute top-9 z-40 text-black right-2 cursor-pointer hover:text-gray-500"
                @click="showPassword.new = !showPassword.new"
              >
                <UIcon
                  :name="showPassword.current ? 'mdi:eye-off' : 'mdi:eye'"
                  size="20"
                ></UIcon>
              </span>
            </div>

            <div class="mb-4 relative">
              <label class="block text-sm text-gray-300 mb-1"
                >Nhập lại mật khẩu</label
              >
              <input
                :type="showPassword.new ? 'text' : 'password'"
                v-model="userForm.confirmPassword"
                placeholder="Nhập lại mật khẩu mới"
                class="w-full px-4 py-2 rounded-md bg-gray-100 text-black"
              />
              <span
                class="absolute top-9 z-40 text-black right-2 cursor-pointer hover:text-gray-500"
                @click="showPassword.new = !showPassword.new"
              >
                <UIcon
                  :name="showPassword.current ? 'mdi:eye-off' : 'mdi:eye'"
                  size="20"
                ></UIcon>
              </span>
            </div>
          </div>
          <!-- Save Button -->
          <button
            @click="submitForm"
            class="w-full py-3 bg-pink-300 cursor-pointer hover:bg-[#ffbade] text-black font-semibold rounded-md"
          >
            Save
          </button>
        </div>

        <!-- Avatar -->
        <div class="flex flex-col items-center justify-center">
          <div class="relative">
            <UAvatar
              src="https://github.com/benjamincanac.png"
              class="w-[80px] h-[80px] cursor-pointer"
            />
            <button
              class="absolute bottom-0 right-0 bg-white flex items-center rounded-2xl p-1"
            >
              <UIcon
                name="material-symbols:edit-rounded"
                size="20"
                class="text-black cursor-pointer hover:scale-100"
              ></UIcon>
            </button>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup>
const userForm = reactive({
  username: "huynhbinh12345",
  email: "huyhoang8203@gmail.com",
  newPassword: "",
  confirmPassword: "",
  currentPassword: "",
});

// Menu profile
const userProfile = [
  {
    icon: "material-symbols:account-circle",
    title: "Tài khoản",
    link: "/user/profile",
  },
  {
    icon: "ic:sharp-history",
    title: "Lịch sử xem phim",
    link: "/user/history",
  },
  { icon: "ic:sharp-settings", title: "Cài đặt", link: "/user/settings" },
];

// Trạng thái ẩn/hiện mật khẩu
const showPassword = reactive({
  current: false,
  new: false,
  confirm: false,
});
const isShowPassChange = ref(false);

async function submitForm() {
  if (
    userForm.newPassword &&
    userForm.newPassword !== userForm.confirmPassword
  ) {
    alert("Mật khẩu mới không trùng khớp!");
    return;
  }

  // Gom dữ liệu gửi backend
  const payload = {
    username: userForm.username,
    email: userForm.email,
    currentPassword: userForm.currentPassword,
    newPassword: userForm.newPassword,
  };

  console.log("Payload gửi backend:", payload);

  // Gọi API (ví dụ dùng useFetch)
  const { data, error } = await useFetch("/api/user/update", {
    method: "POST",
    body: payload,
  });

  if (error.value) {
    console.error(error.value);
    alert("Cập nhật thất bại!");
  } else {
    alert("Cập nhật thành công!");
  }
}
</script>
