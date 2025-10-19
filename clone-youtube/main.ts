import { createApp } from 'vue';
import '@app/css/main.css';
import '@mdi/font/css/materialdesignicons.css';
import App from '@app/App.vue';
import { createPinia } from 'pinia';
import { router } from '@app/provider/router/index';
import 'vuetify/styles';
import { createVuetify } from 'vuetify';

const vuetify = createVuetify();
const pinia = createPinia();
const app = createApp(App);

app.use(pinia).use(vuetify).use(router).mount('#app');
