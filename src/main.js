import { createApp } from 'vue';
import App from './App.vue';
import router from './Router/index';
import store from './Store/index';
import pinDirectives from './Shared/Pin-Directives';
import currencyFilter from './Shared/Currency-fliter';

const app = createApp(App);

app.config.globalProperties.$filters = {
  currency: currencyFilter,
};

app.use(router)
  .use(store)
  .directive('pin', pinDirectives)
  .mount('#app');
