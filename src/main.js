import { createApp } from 'vue';

import App from './App.vue';
import router from '@/router'; 
import '@mdi/font/css/materialdesignicons.css';
import { createVuetify } from 'vuetify';
import 'vuetify/dist/vuetify.css';
import Carousel from 'vue-carousel';




const app = createApp(App);

const vuetify = createVuetify();


app.use(Carousel)
app.use(router); 
app.use(vuetify);
app.mount('#app');