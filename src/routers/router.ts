import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";

// 导入所有router
const meatRouters = import.meta.globEager("./modules/*.ts");
// 处理路由
const routerArray: RouteRecordRaw[] = [];
Object.keys(meatRouters).forEach(key => {
	Object.keys(meatRouters[key]).forEach(childKey => {
		routerArray.push(...meatRouters[key][childKey]);
	});
});

// 路由
const routes: RouteRecordRaw[] = [
	{ path: "/", redirect: { name: "login" } },
	{
		path: "/login",
		name: "login",
		component: () => import("@/views/login/index.vue"),
		meta: {
			title: "登录页",
			key: "login"
		}
	},
	...routerArray,
	// 找不到页面重定向到404
	{ path: "/:pathMatch(.*)", redirect: { name: "404" } }
];

const router = createRouter({
	history: createWebHashHistory(),
	routes,
	// 切换页面，滚动到最顶部
	scrollBehavior: () => ({ left: 0, top: 0 })
});

export default router;
