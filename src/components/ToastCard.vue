<template>
  <div class="space-y-3">
    <!-- Toast -->
    <div
      class="top-20 left-52 fixed max-w-xs font-Poppins bg-green-500 text-sm text-white rounded-xl shadow-lg"
    >
      <div id="" class="flex p-4">
        {{ message_toast }}

        <div class="ms-auto">
          <button
            type="button"
            class="inline-flex shrink-0 justify-center items-center size-5 rounded-lg text-white hover:text-white opacity-50 hover:opacity-100 focus:outline-none focus:opacity-100"
            
            @click="$emit('dismissToast')"
          >
            <span class="sr-only">Close</span>
            <svg
              class="shrink-0 size-4"
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
              <path d="M18 6 6 18"></path>
              <path d="m6 6 12 12"></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
    <!-- End Toast -->
  </div>
</template>

<script>
export default {
    props: {
        message_toast: String,
    }
};
</script>

<style lang="scss" scoped></style>
