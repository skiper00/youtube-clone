import { createApp } from 'vue';
import '@app/css/main.css';
import App from '@app/App.vue';
import { createPinia } from 'pinia';
import { router } from '@app/provider/router/index';

const pinia = createPinia();
const app = createApp(App);

app
.use(pinia)
.use(router)
.mount('#app');
