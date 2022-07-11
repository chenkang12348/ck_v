import { RouteRecordRaw } from "vue-router";

// 办理保函

const homeRoute: RouteRecordRaw[] = [
	{
		path: "/placeOrder",
		component: () => import("@/layout/index.vue"),
		redirect: "/placeOrder/index",
		children: [
			{
				path: "index",
				name: "placeOrder",
				component: () => import("@/views/placeOrder/index.vue"),
				meta: {
					title: "办理保函",
					key: "placeOrder"
				}
			}
		]
	}
];

export default homeRoute;
