<template>
  <header class="flex my-4 divide-x divide-gray-600 space-x-4">
    <router-link to="/" class="flex justify-center items-center">
      <SvgIcon name="IconLogo" />
      <span class="text-2xl font-bold">Code</span>
      <span class="text-2xl font-bold text-sky-500">Suppliers</span>
      <span
        class="flex justify-center items-center rounded-lg border border-slate-300 ml-2 text-xs aspect-square w-6"
      >
        UI
      </span>
    </router-link>
    <div></div>
  </header>
</template>

<script>
import SvgIcon from '@/components/SvgIcon.vue';

export default {
  name: 'Header',
  components: {
    SvgIcon,
  },
};
</script>
