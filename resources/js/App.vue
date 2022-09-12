<template>
  <div
    class="flex w-full min-h-screen justify-center text-slate-300 bg-slate-800"
  >
    <div class="container divide-y divide-gray-600">
      <Header />
      <router-view class="pt-4"></router-view>
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
