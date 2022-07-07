import type { AxiosRequestConfig, AxiosResponse, AxiosError } from "axios";

export interface RequestInterceptors {
	// 请求拦截
	requestFun?: (config: AxiosRequestConfig) => AxiosRequestConfig;
	requestError?: (error: AxiosError) => AxiosError;
	// 响应拦截
	responseFun?: (config: AxiosResponse) => AxiosResponse;
	responseError?: (error: AxiosError) => AxiosError;
}
// 取消请求
export interface CancelRequestSource {
	[key: string]: () => void;
}
// 自定义传入的参数
export interface RequestConfig extends AxiosRequestConfig {
	interceptors?: RequestInterceptors;
}
// 默认响应数据
export interface Response {
	data?: any;
	[key: string]: any;
}
// 请求参数类型
export interface ReqType<T> extends RequestConfig {
	data?: T;
}

// 响应数据类型
export interface ResType<T = any> {
	data: T;
	[key: string]: any;
}
