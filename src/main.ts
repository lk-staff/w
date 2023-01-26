import { createApp } from 'vue';
import { createPinia } from 'pinia';
import Toast, { POSITION } from 'vue-toastification';
import App from '@/App.vue';
import router from '@/router';

import 'vue-toastification/dist/index.css';
import '@/assets/css/tailwind.css';

const app = createApp(App);
const pinia = createPinia();

app.use(pinia);
app.use(router);
app.use(Toast, {
  transition: 'Vue-Toastification__bounce',
  position: POSITION.TOP_RIGHT,
  timeout: 5000,
  icon: true,
  closeOnClick: true,
  closeButton: false,
  pauseOnHover: true,
  maxToasts: 10,
});

app.mount('#app');
