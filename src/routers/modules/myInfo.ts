import { RouteRecordRaw } from "vue-router";

// 我的信息

const homeRoute: RouteRecordRaw[] = [
	{
		path: "/myInfo",
		component: () => import("@/layout/index.vue"),
		redirect: "/myInfo/index",
		children: [
			{
				path: "index",
				name: "myInfo",
				component: () => import("@/views/myInfo/index.vue"),
				meta: {
					title: "我的信息",
					key: "myInfo"
				}
			}
		]
	}
];

export default homeRoute;
