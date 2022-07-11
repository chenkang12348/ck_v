import { RouteRecordRaw } from "vue-router";
// 索赔受理
const homeRoute: RouteRecordRaw[] = [
	{
		path: "/drawback",
		component: () => import("@/layout/index.vue"),
		redirect: "/drawback/index",
		children: [
			{
				path: "index",
				name: "drawback",
				component: () => import("@/views/drawback/index.vue"),
				meta: {
					title: "索赔",
					key: "drawback"
				}
			}
		]
	}
];

export default homeRoute;
