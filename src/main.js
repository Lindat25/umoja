import { createApp } from 'vue';
import App from './App.vue';
import router from '@/router'; 
import '@mdi/font/css/materialdesignicons.css';
import { createVuetify } from 'vuetify'; // Import createVuetify from 'vuetify'
import 'vuetify/dist/vuetify.css';
import Carousel from 'vue-carousel';
//import 'bootstrap/dist/css/bootstrap.css';

const app = createApp(App);

app.use(router);
app.use(Carousel);

const vuetify = createVuetify(); // Use createVuetify to create Vuetify instance

app.use(vuetify);
app.mount('#app');