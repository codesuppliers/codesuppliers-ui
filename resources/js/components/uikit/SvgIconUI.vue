<template>
  <pre v-highlightjs>
          <code class="javascript rounded-lg -mt-4 !p-4">{{svgIconImport}}</code>
        </pre>
  <pre v-highlightjs>
          <code class="html rounded-lg -mt-14 -mb-8 !p-4">{{svgIconUsage}}</code>
        </pre>
  <pre v-highlightjs>
          <code class="html rounded-lg -mt-6 -mb-8 !p-4">{{svgIconCode}}</code>
        </pre>
</template>

<script>
export default {
  name: 'SvgIconUI',
  data() {
    return {
      svgIconImport: `import SvgIcon from '@/components/SvgIcon.vue';`,
      svgIconCode: `<template>
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
      return defineAsyncComponent(() =>
        import(\`../../assets/icons/\${name}.vue\`)
      );
    },
  },
};
<\/script>`,
      svgIconUsage: `<SvgIcon name="IconLogo" />`,
    };
  },
};
</script>
