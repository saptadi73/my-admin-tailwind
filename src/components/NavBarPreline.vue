<template>
  <div>
    <header
      class="z-0 shadow-md relative flex flex-wrap sm:justify-start sm:flex-nowrap w-full bg-white text-sm py-3 dark:bg-neutral-800"
    >
      <nav
        class="max-w-[85rem] w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between"
      >
        <div class="flex items-center">
          <div>
            <a
              class="flex-none text-xl font-semibold dark:text-white focus:outline-none focus:opacity-80"
              href="#"
              aria-label="Brand"
            ><div class="flex justify-between items-center gap-1">
              <div>
                <img
                src="../assets/orang_peci.jpg"
                class="h-6 w-6 outline-1 ml-1 outline-black rounded-full"
              />
              </div>
              <div class="ml-2 text-slate-500 font-Roboto text-xs">Manajemen Keuangan Warga Lingkup RT/RW</div>
            </div>
              
            </a>
          </div>

          <div class="sm:hidden">
            <button
              type="button"
              class="hs-collapse-toggle relative size-7 flex justify-center items-center gap-x-2 rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-transparent dark:border-neutral-700 dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10"
              id="hs-navbar-example-collapse"
              aria-expanded="false"
              aria-controls="hs-navbar-example"
              aria-label="Toggle navigation"
              data-hs-collapse="#hs-navbar-example"
            >
              <svg
                class="hs-collapse-open:hidden shrink-0 size-4"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <line x1="3" x2="21" y1="6" y2="6" />
                <line x1="3" x2="21" y1="12" y2="12" />
                <line x1="3" x2="21" y1="18" y2="18" />
              </svg>
              <svg
                class="hs-collapse-open:block hidden shrink-0 size-4"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
              </svg>
              <span class="sr-only">Toggle navigation</span>
            </button>
          </div>
        </div>
        <div
          id="hs-navbar-example"
          class="hidden hs-collapse overflow-hidden transition-all duration-300 basis-full grow sm:block"
          aria-labelledby="hs-navbar-example-collapse"
        >
          <div
            class="flex flex-col gap-5 mt-5 sm:flex-row sm:items-center sm:justify-end sm:mt-0 sm:ps-5"
          >
            <a
              class="font-medium text-blue-500 focus:outline-none"
              href="/dashboard"
              aria-current="page"
              >Home</a
            >
            <a
              class="font-medium text-gray-600 hover:text-gray-400 focus:outline-none focus:text-gray-400 dark:text-neutral-400 dark:hover:text-neutral-500 dark:focus:text-neutral-500"
              href="/error/logout"
              >Logout</a
            >
            <a
              class="font-medium text-gray-600 hover:text-gray-400 focus:outline-none focus:text-gray-400 dark:text-neutral-400 dark:hover:text-neutral-500 dark:focus:text-neutral-500"
              href="/dashboard"
              >Dashboard</a
            >
            <a
              class="font-medium text-gray-600 hover:text-gray-400 focus:outline-none focus:text-gray-400 dark:text-neutral-400 dark:hover:text-neutral-500 dark:focus:text-neutral-500"
              href="/laporan"
              >Laporan</a
            >
          </div>
        </div>
      </nav>
    </header>
  </div>
</template>

<script>
import { ref } from 'vue';

const acces_token=ref("");
const refresh_token=ref("");
const email=ref("");
const level=ref("");

export default {
  methods: {
    
  }
};
</script>

<style lang="scss" scoped></style>
