import service from "../index";
import type { ResponseType } from "../interface/types";
// 登录
export const LoginApi = <D, T>(data: D) => {
	const response = service.post<ResponseType<T>>("/main/tranCentre/api/login", data);
	return response;
};
// 获取验证码
export const SendMsgCodeApi = <D, T>(params: D) => {
	return service.get<ResponseType<T>>("/main/tranCentre/api/sendMsgCode", { params });
};

// 退出
export const LogoutApi = <D, T = any>(params = {}) => {
	return service.get<ResponseType<T>>("/main/tranCentre/api/logout", { params });
};
