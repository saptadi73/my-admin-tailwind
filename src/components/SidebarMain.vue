<template>
  <div>
    <!-- SideBar -->
    <div
      id="sidebar"
      class="z-10 bg-gradient-to-r font-Poppins from-purple-200 to-slate-100 pl-3 h-[100vh] w-14 transition-transform duration-500 relative"
    >
      <span
        id="panah"
        class="material-icons rotate-180 transition-transform duration-500 cursor-pointer bg-purple-700 text-white border border-purple-800 rounded-full absolute -right-3 top-9"
        :onclick="openSideBar"
      >
        arrow_back
      </span>
      <div
        class="flex items-center bg-gradient-to-r from-purple-200 to-white rounded-r-lg"
      >
        <img src="../assets/logo_rukun.png" class="w-10 h-10 animate-spin" />
        <h1
          id="title1"
          class="font-Poppins hidden ml-5 text-2xl"
          v-if="(isiSideBar = true)"
        >
          <span class="font-bold text-[#ca13c5]">IURAN</span
          ><span class="font-semibold text-[#2b94f1]">WARGA</span>
        </h1>
      </div>
      <div
        class="mt-8 ml-3 overflow-hidden flex items-center hover:bg-slate-100 active:border-l-2 active:border-blue-800 cursor-pointer"
      >
        <div class="material-icons text-[#e52bf1]">dashboard</div>
        <span class="ml-5 text-blue-600" v-if="(isiSideBar = true)"
          >Dashboard</span
        >
      </div>

      <!-- menu Profile -->
      <div
        class="flex items-center cursor-pointer ml-3 mt-4 hover:bg-slate-100"
      >
        <div class="material-icons text-[#e52bf1]" :onclick="openSideBar">
          <span class="material-symbols-outlined">
            settings_accessibility
          </span>
        </div>
        <div
          v-if="(isiSideBar = true)"
          id="menu_profile"
          data-dropdown-toggle="sub_menu_profile"
          class="overflow-hidden ml-3 flex items-center active:border-l-2 active:border-blue-800 cursor-pointer"
        >
          <div class="flex justify-between items-center w-40">
            <span class="ml-2 text-blue-600">Profile</span
            ><span class="material-icons text-blue-600 right-2"
              >arrow_drop_down</span
            >
          </div>
        </div>
      </div>
      <ul
        id="sub_menu_profile"
        class="hidden z-10 overflow-hidden text-[#0824a1] bg-yellow-200 rounded-md"
        aria-labelledby="menu_profile"
      >
        <li class="hover:bg-slate-100 hover:font-semibold p-1 ml-2">
          <router-link to="/profile/input">Profile RT/RW</router-link>
        </li>
        <li class="hover:bg-slate-100 hover:font-semibold p-1 ml-2">
          <router-link to="/profile/input/polygon">Isi Map Wilayah</router-link>
        </li>
        <li class="hover:bg-slate-100 hover:font-semibold p-1 ml-2">
          <router-link to="/profile/register/user">Pendaftaran User</router-link>
        </li>
      </ul>

      <!-- menu Warga -->
      <div
        class="flex items-center cursor-pointer ml-3 mt-4 hover:bg-slate-100"
      >
        <div class="material-icons text-[#e52bf1]" :onclick="openSideBar">
          group
        </div>
        <div
          v-if="(isiSideBar = true)"
          id="menu_warga"
          data-dropdown-toggle="sub_menu_warga"
          class="overflow-hidden ml-3 flex items-center active:border-l-2 active:border-blue-800 cursor-pointer"
        >
          <div class="flex justify-between items-center w-40">
            <span class="ml-2 text-blue-600">Warga</span
            ><span class="material-icons text-blue-600 right-2"
              >arrow_drop_down</span
            >
          </div>
        </div>
      </div>
      <ul
        id="sub_menu_warga"
        class="hidden z-10 overflow-hidden text-[#0824a1] bg-yellow-200 rounded-md"
        aria-labelledby="menu_warga"
      >
        
        <li class="hover:bg-slate-100 hover:font-semibold p-1 ml-2">
          <router-link to="/warga/input/blok">Isi Blok/No. Baru</router-link>
        </li>
        <li class="hover:bg-slate-100 hover:font-semibold p-1 ml-2">
          <a href="#">Daftar KK</a>
        </li>
        <li class="hover:bg-slate-100 hover:font-semibold p-1 ml-2">
          <router-link to="/warga/input/pekerjaan">Isi Jenis Pekerjaan</router-link>
        </li>
        <li class="hover:bg-slate-100 hover:font-semibold p-1 ml-2">
          <router-link to="/warga/input/status">Isi Status Warga</router-link>
        </li>
        <li class="hover:bg-slate-100 hover:font-semibold p-1 ml-2">
          <router-link to="/warga/input/warga">Register Warga Baru</router-link>
        </li>
      </ul>

      <!-- menu Iuran -->
      <div
        class="flex items-center cursor-pointer ml-3 mt-4 hover:bg-slate-100"
      >
        <div class="material-icons text-[#e52bf1]" :onclick="openSideBar">
          <span class="material-symbols-outlined"> savings </span>
        </div>
        <div
          v-if="(isiSideBar = true)"
          id="menu_iuran"
          data-dropdown-toggle="sub_menu_iuran"
          class="overflow-hidden ml-3 flex items-center active:border-l-2 active:border-blue-800 cursor-pointer"
        >
          <div class="flex justify-between items-center w-40">
            <span class="ml-2 text-blue-600">Iuran Warga</span
            ><span class="material-icons text-blue-600 right-2"
              >arrow_drop_down</span
            >
          </div>
        </div>
      </div>
      <ul
        id="sub_menu_iuran"
        class="hidden z-10 overflow-hidden text-[#0824a1] bg-yellow-200 rounded-md"
        aria-labelledby="menu_iuran"
      >
        <li class="hover:bg-slate-100 hover:font-semibold p-1 ml-2">
          <router-link to="/iuran/input/jenis">Tambah Jenis Iuran</router-link>
        </li>
        <li class="hover:bg-slate-100 hover:font-semibold p-1 ml-2">
          <a href="#">Warga Iuran</a>
        </li>
        <li class="hover:bg-slate-100 hover:font-semibold p-1 ml-2">
          <a href="#">Warga Belum Iuran</a>
        </li>
      </ul>

      <!-- menu Anggaran -->
      <div
        class="flex items-center cursor-pointer ml-3 mt-4 hover:bg-slate-100"
      >
        <div class="material-icons text-[#e52bf1]" :onclick="openSideBar">
          <span class="material-symbols-outlined"> account_balance </span>
        </div>
        <div
          v-if="(isiSideBar = true)"
          id="menu_anggaran"
          data-dropdown-toggle="sub_menu_anggaran"
          class="overflow-hidden ml-3 flex items-center active:border-l-2 active:border-blue-800 cursor-pointer"
        >
          <div class="flex justify-between items-center w-40">
            <span class="ml-2 text-blue-600">Anggaran</span
            ><span class="material-icons text-blue-600 right-2"
              >arrow_drop_down</span
            >
          </div>
        </div>
      </div>
      <ul
        id="sub_menu_anggaran"
        class="hidden z-10 overflow-hidden text-[#0824a1] bg-yellow-200 rounded-md"
        aria-labelledby="menu_anggaran"
      >
        <li class="hover:bg-slate-100 hover:font-semibold p-1 ml-2">
          <router-link to="/anggaran/input/type">Isi Jenis Anggaran</router-link>
        </li>
        <li class="hover:bg-slate-100 hover:font-semibold p-1 ml-2">
          <router-link to="/anggaran/input/anggaran">Isi Anggaran</router-link>
        </li>
        <li class="hover:bg-slate-100 hover:font-semibold p-1 ml-2">
          <a href="#">Laporan Anggaran</a>
        </li>
      </ul>
      

      
    </div>
    <!-- End of Sidebar -->
  </div>
</template>

<script>
import { RouterLink } from 'vue-router';

export default {
  data() {
    return {
      isiSideBar: true,
      rotasi: 0,
    };
  },

  methods: {
    openSideBar() {
      const sidebar = document.getElementById("sidebar");
      const panah = document.getElementById("panah");
      const title1 = document.getElementById("title1");

      if (this.isiSideBar) {
        sidebar.classList.remove("w-14");
        sidebar.classList.add("w-65");
        this.isiSideBar = false;
        panah.classList.remove("rotate-180");
        panah.classList.add("rotate-0");
        this.rotasi = 1;
        title1.classList.remove("hidden");
      } else {
        sidebar.classList.remove("w-65");
        sidebar.classList.add("w-14");
        this.isiSideBar = true;
        panah.classList.remove("rotate-0");
        panah.classList.add("rotate-180");
        title1.classList.add("hidden");
        this.rotasi = 1;
      }
    },
  },
};
</script>

<style lang="scss" scoped></style>
