// 日期处理
import dayjs from "dayjs";

import "dayjs/locale/zh-cn"; // 导入本地化语言
// 具备计算相对时间的功能
import relativeTime from "dayjs/plugin/relativeTime";
// 使用插件。固定格式dayjs.extend(插件)
dayjs.extend(relativeTime);
dayjs.locale("zh-cn"); // 使用本地化语言

// 时间
export const fmtTime = (value: number | string): string => {
	return dayjs(value).format("YYYY-MM-DD HH:mm:ss");
};
// 日期
export const fmtDay = (value: number | string): string => {
	return dayjs(value).format("YYYY-MM-DD");
};
