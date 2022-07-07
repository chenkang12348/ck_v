import { RouteRecordRaw } from "vue-router";

// 首页模块

const homeRoute: RouteRecordRaw[] = [
	{
		path: "/home",
		component: () => import("@/views/login/index.vue"),
		meta: {
			title: "首页",
			key: "home"
		}
	}
];

export default homeRoute;
