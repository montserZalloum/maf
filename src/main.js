import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import 'bootstrap/dist/css/bootstrap.min.css';
import '@/assets/style.css';
Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
