import { RouteRecordRaw } from "vue-router";

// 首页模块

const homeRoute: RouteRecordRaw[] = [
	{
		path: "/home",
		component: () => import("@/layout/index.vue"),
		redirect: "/home/index",
		children: [
			{
				path: "index",
				name: "home",
				component: () => import("@/views/home/index.vue"),
				meta: {
					title: "首页",
					key: "home"
				}
			}
		]
	}
];

export default homeRoute;
