import { createApp } from "vue";
import "./style/reset.css";
import "./style/index.css";
import App from "./App.vue";
import router from "./router";
import "@/assets/iconfont/iconfont.css";

createApp(App).use(router).mount("#app");
