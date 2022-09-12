import '@/bootstrap';

import { createApp } from 'vue';
import App from '@/App.vue';
import router from '@/router';
import store from '@/store';
import VueHighlightJS from 'vue3-highlightjs';
import 'highlight.js/styles/nord.css';

createApp(App).use(router).use(store).use(VueHighlightJS).mount('#app');
