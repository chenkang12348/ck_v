import { createApp } from "vue";
import App from "./App.vue";
// 引入路由
import router from "@/routers/index";
// 引入pinia
import pinia from "@/store/index";
// element plus
import ElementPlus from "element-plus";
// element css
import "element-plus/dist/index.css";
// 引入全局样式
import "@/styles/reset.scss";
import "@/styles/common.scss";
createApp(App).use(router).use(pinia).use(ElementPlus).mount("#app");
