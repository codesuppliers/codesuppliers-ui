<template>
  <div class="flex flex-col divide-y divide-gray-600 space-y-4">
    <div class="flex flex-col pt-4 space-y-2">
      <div
        class="flex items-center space-x-2 cursor-pointer"
        @click="svgIconShow = !svgIconShow"
      >
        <h2 class="font-bold">SvgIcon</h2>
        <SvgIcon name="IconLogo" />
        <div class="grow"></div>
        <SvgIcon
          name="IconArrowDown"
          class="transition-all"
          :class="svgIconShow ? 'rotate-180' : ''"
        />
      </div>
      <div v-if="svgIconShow">
        <SvgIconUI />
      </div>
    </div>
    <div class="flex flex-col pt-4 space-y-2">
      <h2 class="font-bold">TextField</h2>
    </div>
    <div class="flex flex-col pt-4 space-y-2">
      <h2 class="font-bold">TextArea</h2>
    </div>
    <div class="flex flex-col pt-4 space-y-2">
      <h2 class="font-bold">DropDown</h2>
    </div>
    <div class="flex flex-col pt-4 space-y-2">
      <h2 class="font-bold">FileUpload</h2>
    </div>
    <div class="flex flex-col pt-4 space-y-2">
      <h2 class="font-bold">Button</h2>
    </div>
  </div>
</template>

<script>
import SvgIcon from '@/components/SvgIcon.vue';
import SvgIconUI from '@/components/uikit/SvgIconUI.vue';

export default {
  name: 'Home',
  components: {
    SvgIcon,
    SvgIconUI,
  },

  data() {
    return {
      svgIconShow: false,
    };
  },
};
</script>
