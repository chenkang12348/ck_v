import { RouteRecordRaw } from "vue-router";

// 帮助中心

const homeRoute: RouteRecordRaw[] = [
	{
		path: "/help",
		component: () => import("@/layout/index.vue"),
		redirect: "/help/index",
		children: [
			{
				path: "index",
				name: "help",
				component: () => import("@/views/help/index.vue"),
				meta: {
					title: "帮助中心",
					key: "help"
				}
			}
		]
	}
];

export default homeRoute;
