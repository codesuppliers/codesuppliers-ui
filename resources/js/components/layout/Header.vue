<template>
  <header class="flex my-4 divide-x divide-gray-600 space-x-4">
    <router-link to="/" class="flex items-center">
      <SvgIcon name="IconLogo" />
      <span class="text-2xl font-bold">Code</span>
      <span class="text-2xl font-bold text-sky-500">Suppliers</span>
      <div
        class="flex justify-center items-center rounded-lg border border-slate-300 ml-2 w-6 h-6 text-sm"
      >
        <span>UI</span>
      </div>
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
