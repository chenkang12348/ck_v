import { RouteRecordRaw } from "vue-router";

//错误页面模块

const ErrorRouter: RouteRecordRaw[] = [
	{
		path: "/403",
		name: "403",
		component: () => import("@/components/ErrorMessage/403.vue"),
		meta: {
			title: "403页面",
			key: "403",
			keepAlive: false
		}
	},
	{
		path: "/404",
		name: "404",
		component: () => import("@/components/ErrorMessage/404.vue"),
		meta: {
			title: "404页面",
			key: "404",
			keepAlive: false
		}
	},
	{
		path: "/500",
		name: "500",
		component: () => import("@/components/ErrorMessage/500.vue"),
		meta: {
			title: "500页面",
			key: "500",
			keepAlive: false
		}
	}
];

export default ErrorRouter;
