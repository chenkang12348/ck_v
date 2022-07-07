import { isObject } from "./isFun";

// 存储数据
export const setItem = (key: string, value: any) => {
	if (isObject(value)) {
		value = JSON.stringify(value);
	}
	window.localStorage.setItem(key, value);
};

// 获取数据
export const getItem = (key: string) => {
	const data = window.localStorage.getItem(key);
	try {
		if (data) return JSON.parse(data);
		else return null;
	} catch {
		return data;
	}
};

// 删除数据
export const removeItem = (key: string) => {
	window.localStorage.removeItem(key);
};
// 删除所有数据
export const removeAllItem = () => {
	window.localStorage.clear();
};
