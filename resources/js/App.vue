<template>
  <div
    class="flex w-full min-h-screen justify-center text-slate-300 bg-slate-800"
  >
    <div
      class="divide-y divide-gray-600 container mx-auto px-4 md:px-20 flex flex-col min-h-screen w-full"
    >
      <Header />
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Header from '@/components/layout/Header.vue';

export default {
  name: 'App',
  components: {
    Header,
  },
};
</script>
