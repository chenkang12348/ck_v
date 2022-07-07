import { createPinia } from "pinia";
// 数据持久化 https://seb-l.github.io/pinia-plugin-persist/#vue3
//pinia 持久化插件
import piniaPluginPersistedstate from "pinia-plugin-persistedstate";

const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);
export default pinia;
