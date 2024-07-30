import './assets/main.css';

import { createApp } from 'vue';
import { createPinia } from 'pinia';

import App from './App.vue';
import router from './router';

import microApp from '@micro-zoe/micro-app';
microApp.start({
  'disable-memory-router': true
});

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.mount('#app');
