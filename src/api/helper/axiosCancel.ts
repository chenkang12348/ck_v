// 清除axios请求
import axios, { AxiosRequestConfig, Canceler } from "axios";

import { isFunction } from "@/utils/isFun";

import qs from "qs";
// 用于存储每个请求标识和取消函数
let pendingMap = new Map<string, Canceler>();
// 参数序列化
export const getPendingUrl = (config: AxiosRequestConfig) => {
	return [config.method, config.url, qs.stringify(config.data), qs.stringify(config.params)].join("&");
};

export class AxiosCanceler {
	// 标记请求
	addPending(config: AxiosRequestConfig) {
		// 移除之前
		this.removePending(config);
		const url = getPendingUrl(config);
		config.cancelToken =
			config.cancelToken ||
			new axios.CancelToken(cancel => {
				if (!pendingMap.has(url)) {
					pendingMap.set(url, cancel);
				}
			});
	}
	// 移除请求
	removePending(config: AxiosRequestConfig) {
		const url = getPendingUrl(config);
		if (pendingMap.has(url)) {
			const cancel = pendingMap.get(url);
			cancel && cancel();
			pendingMap.delete(url);
		}
	}
	// 清空所有请求
	removeAllPending() {
		pendingMap.forEach(cancel => {
			cancel && isFunction(cancel) && cancel();
		});
		pendingMap.clear();
	}
	// 重置标识
	resetPending() {
		pendingMap = new Map<string, Canceler>();
	}
}
