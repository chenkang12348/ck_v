import axios from "axios";
import type { AxiosInstance, AxiosRequestConfig, AxiosResponse, AxiosError } from "axios";
// loading
import { showFullScreenLoading, tryHideFullScreenLoading } from "./config/serviceLoading";
// 引入路由
import router from "@/routers/index";
// 引入ui组件
import { ElMessage } from "element-plus";
// axios 清除器
import { AxiosCanceler } from "./helper/axiosCancel";

const axiosCancel = new AxiosCanceler();
// 引入pinia
import { GlobalStore } from "@/store/modules/GlobalStore";
const globalStore = GlobalStore();
// axios配置
const config = {
	// 默认地址请求地址，可在 .env 开头文件中修改
	baseURL: import.meta.env.VITE_API_URL as string,
	// 设置超时时间（10s）
	timeout: 10000
};

//  loading 白名单
const isLoading = ["/login"];
// header特殊化名单
const isHeaderContentType = ["contractCreate", "payOffline"];

// 创建axios实例
const service: AxiosInstance = axios.create(config);
// 请求拦截器
service.interceptors.request.use(
	(config: AxiosRequestConfig) => {
		// 将当前请求添加到 pending 中
		axiosCancel.addPending(config);
		config.headers = config.headers || {};
		const { url, method } = config;
		// 是否开启loading
		if (isLoading.some(item => url?.indexOf(item) !== -1)) {
			showFullScreenLoading();
		}
		// headers配置
		if (isHeaderContentType.some(item => url?.indexOf(item) !== -1)) {
			config.headers["Content-Type"] = "application/x-www-form-urlencoded";
		}
		// get 请求配置
		if (method === "get") {
			config.params.t = new Date().getTime();
		}
		// token拦截
		const { token } = globalStore;
		if (token) {
			config.headers.accessToken = token;
		}

		return config;
	},
	(error: AxiosError) => {
		return Promise.reject(error);
	}
);
// 响应拦截器
service.interceptors.response.use(
	(response: AxiosResponse) => {
		// 关闭loading
		tryHideFullScreenLoading();
		//  在请求结束后，移除本次请求
		axiosCancel.removePending(config);
		const { data } = response;
		//全局错误拦截
		if (!data.status) {
			ElMessage.error(data.message || "未知错误");
			// 登录超时
			if (data.code === 401) {
				globalStore.setToken("");
				router.replace({
					path: "/login"
				});
			}
			return Promise.reject(new Error(data.message || "未知错误"));
		}
		return response;
	},
	(error: AxiosError) => {
		tryHideFullScreenLoading();
		return Promise.reject(error);
	}
);

export default service;
