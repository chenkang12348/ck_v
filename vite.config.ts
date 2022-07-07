import { defineConfig, loadEnv, ConfigEnv, UserConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import VueSetupExtend from "vite-plugin-vue-setup-extend";
import viteCompression from "vite-plugin-compression";
import vueJsx from "@vitejs/plugin-vue-jsx";
import importToCDN from "vite-plugin-cdn-import";
import { resolve } from "path";
// element-plus 按需引入
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";
// https://vitejs.dev/config/

export default defineConfig(({ mode }: ConfigEnv): UserConfig => {
	const env = loadEnv(mode, __dirname);
	return {
		plugins: [
			// vue
			vue(),
			// name 可以写在 script 标签上
			VueSetupExtend(),
			//  vite 可以使用 jsx/tsx 语法
			vueJsx(),
			//  cdn 引入（vue、element-plus）
			importToCDN({
				modules: [
					// vue按需引入会导致依赖vue的插件出现问题(列如:pinia/vuex)
					// {
					// 	name: "vue",
					// 	var: "Vue",
					// 	path: "https://unpkg.com/vue@next"
					// },
					// 使用cdn引入element-plus时,开发环境还是需要在main.js中引入element-plus,可以不用引入css
					// {
					// 	name: "element-plus",
					// 	var: "ElementPlus",
					// 	path: "https://unpkg.com/element-plus",
					// 	css: "https://unpkg.com/element-plus/dist/index.css"
					// }
				]
			}),
			// gzip compress
			env.VITE_BUILD_GZIP === "true" &&
				viteCompression({
					verbose: true,
					disable: false,
					threshold: 10240,
					algorithm: "gzip",
					ext: ".gz"
				}),
			AutoImport({
				resolvers: [ElementPlusResolver()]
			}),
			Components({
				resolvers: [ElementPlusResolver()]
			})
		],
		server: {
			host: "localhost", // 服务器主机名，如果允许外部访问，可设置为"0.0.0.0"
			port: Number(env.VITE_PORT),
			open: env.VITE_OPEN === "true",
			cors: true,
			proxy: {
				"/main": {
					target: env.VITE_API_URL,
					changeOrigin: true
				},
				"/test": {
					target: env.VITE_API_URL,
					changeOrigin: true
				}
			}
		},
		resolve: {
			alias: {
				"@": resolve(__dirname, "./src")
			}
		}
	};
});
