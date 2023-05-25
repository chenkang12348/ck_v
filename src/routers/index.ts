import router from "@/routers/router";
import NProgress from "@/config/nprogress";

import { AxiosCanceler } from "@/api/helper/axiosCancel";
const axiosCancel = new AxiosCanceler();
// pinia
import pinia from "@/store/index";
import { GlobalStore } from "@/store/modules/GlobalStore";
const globalStore = GlobalStore(pinia); //这里一定要把 pinia传入进去

// 路由白名单
const routerWhiteList = ["/login", "/",'/index'];
// 路由拦截
router.beforeEach((to, from, next) => {
	// 开启进度条
	NProgress.start();
	// 路由跳转之前，清除所有请求
	axiosCancel.removeAllPending();

	// 路由白名单
	if (routerWhiteList.includes(to.path)) {
		NProgress.done();
		return next();
	}
	// 判断token
	// const { token } = globalStore;
	// if (!token) {
	// 	NProgress.done();
	// 	return next({ path: "/login" });
	// }

	next();
});

router.afterEach((to, from) => {
	// to and from are both route objects.
	NProgress.done();
});

export default router;
