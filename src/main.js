import { createApp } from 'vue';
import App from './App.vue';
import router from './Router/index';
import store from './Store/index';
import pinDirectives from './Shared/Pin-Directives';

createApp(App)
  .use(router)
  .use(store)
  .directive('pin', pinDirectives)
  .mount('#app');
