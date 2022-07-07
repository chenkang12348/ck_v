// 全局通用方法
// 深拷贝
export const deepCopy = <T>(obj: any): T => {
	let newObj: any;
	try {
		newObj = obj.push ? [] : {};
	} catch {
		newObj = {};
	}
	for (let key in obj) {
		if (typeof obj[key] === "object") {
			newObj[key] = deepCopy(obj[key]);
		} else {
			newObj[key] = obj[key];
		}
	}
	return newObj;
};
