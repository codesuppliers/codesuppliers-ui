<template>
  <div class="flex flex-col divide-y divide-gray-600 space-y-4">
    <div class="flex flex-col pt-4 space-y-2">
      <h2 class="font-bold">SvgIcon</h2>
      <div class="flex items-center">
        <SvgIcon name="IconLogo" />
        <SvgIcon name="IconCodeBracket" />
      </div>
      <pre v-highlightjs>
        <code class="html rounded-lg -mt-4">{{svgIconCode}}</code>
      </pre>
      <pre v-highlightjs>
        <code class="javascript rounded-lg -mt-14">{{svgIconImport}}</code>
      </pre>
      <pre v-highlightjs>
        <code class="html rounded-lg -mt-14 -mb-8">{{svgIconUsage}}</code>
      </pre>
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

export default {
  name: 'Home',
  components: {
    SvgIcon,
  },

  data() {
    return {
      svgIconImport: `  import SvgIcon from '@/components/SvgIcon.vue';`,
      svgIconCode: `  <template>
    <component :is="dynamicComponent" />
  </template>

  <script>
  import { defineAsyncComponent } from 'vue';

  export default {
    props: {
      name: {
        type: String,
        required: true,
      },
    },

    computed: {
      dynamicComponent() {
        const name = this.name;

        return defineAsyncComponent(() => import('../assets/icons/${name}.vue'));
      },
    },
  };
  <\/script>`,
      svgIconUsage: ` <SvgIcon name="IconLogo" />`,
    };
  },
};
</script>
