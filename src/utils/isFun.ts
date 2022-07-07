// 全局类型判断

const toTypeString = (val: any) => {
	return Object.prototype.toString.call(val).slice(8, -1).toLowerCase();
};

// 参数类型
export const isType = (val: any, type: string) => {
	return toTypeString(val) === type;
};

// 方法判断
export const isFunction = (val: any) => {
	return isType(val, "function");
};

// 对象判断
export const isObject = (val: any) => {
	return val !== null && isType(val, "object");
};
