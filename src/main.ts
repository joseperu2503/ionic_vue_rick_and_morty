import { createApp } from 'vue'
import App from './App.vue'
import router from './router';
import './style.css'
import { createPinia } from 'pinia'

import { IonicVue } from '@ionic/vue';

/* Core CSS required for Ionic components to work properly */
import '@ionic/vue/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/vue/css/normalize.css';
import '@ionic/vue/css/structure.css';

/* Optional CSS utils that can be commented out */
import '@ionic/vue/css/padding.css';
import '@ionic/vue/css/float-elements.css';
import '@ionic/vue/css/text-alignment.css';
import '@ionic/vue/css/text-transformation.css';
import '@ionic/vue/css/flex-utils.css';
import '@ionic/vue/css/display.css';

/* Theme variables */
import './theme/variables.css';
import Layout from './components/shared/Layout.vue';
import { Icon } from '@iconify/vue';

const pinia = createPinia()

const app = createApp(App)
  .use(pinia)
  .use(IonicVue)
  .component('Layout', Layout)
  .component('Icon', Icon)
  .use(router);

router.isReady().then(() => {
  app.mount('#app');
});
