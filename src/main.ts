import { createApp } from 'vue'
import App from './App.vue'
import router from './router';
import NavBar from '@/components/navBar.vue';

import { IonicVue } from '@ionic/vue';

/* Core CSS required for Ionic components to work properly */
import '@ionic/vue/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/vue/css/normalize.css';
import '@ionic/vue/css/structure.css';
import '@ionic/vue/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/vue/css/padding.css';
import '@ionic/vue/css/float-elements.css';
import '@ionic/vue/css/text-alignment.css';
import '@ionic/vue/css/text-transformation.css';
import '@ionic/vue/css/flex-utils.css';
import '@ionic/vue/css/display.css';

/* Theme variables */
import './theme/variables.css';




// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyAXJYl2LrQq7BKDglng0JOtTtk_cvm3KT0",
//   authDomain: "mero-vue-signup.firebaseapp.com",
//   projectId: "mero-vue-signup",
//   storageBucket: "mero-vue-signup.appspot.com",
//   messagingSenderId: "590359992792",
//   appId: "1:590359992792:web:92d99ca6e95a71fef57aad",
//   measurementId: "G-LB548EQ641"
// };

// initializeApp(firebaseConfig);

const app = createApp(App)
  .use(IonicVue)
  .use(router);

app.component("nav-bar", NavBar);

router.isReady().then(() => {
  app.mount('#app');
});