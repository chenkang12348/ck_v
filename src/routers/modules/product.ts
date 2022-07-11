import { RouteRecordRaw } from "vue-router";

// 产品咨询

const homeRoute: RouteRecordRaw[] = [
	{
		path: "/product",
		component: () => import("@/layout/index.vue"),
		redirect: "/product/index",
		children: [
			{
				path: "index",
				name: "product",
				component: () => import("@/views/product/index.vue"),
				meta: {
					title: "办理保函",
					key: "product"
				}
			}
		]
	}
];

export default homeRoute;
