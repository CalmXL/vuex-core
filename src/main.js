import { createApp } from 'vue'
import App from './App.vue'

import store from '../src/store/index';

createApp(App).use(store).mount('#app');
