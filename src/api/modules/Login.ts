import service from "../index";
export const LoginApi = async <D, T>(data: D) => {
	const response = await service.post<T>("/main/tranCentre/api/login", data);
	return response;
};
