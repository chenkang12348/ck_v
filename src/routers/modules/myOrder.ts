import { RouteRecordRaw } from "vue-router";

// 我的订单

const homeRoute: RouteRecordRaw[] = [
	{
		path: "/myOrder",
		component: () => import("@/layout/index.vue"),
		redirect: "/myOrder/index",
		children: [
			{
				path: "index",
				name: "myOrder",
				component: () => import("@/views/myOrder/index.vue"),
				meta: {
					title: "我的订单",
					key: "myOrder"
				}
			}
		]
	}
];

export default homeRoute;
