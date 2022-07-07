import { defineStore } from "pinia";
import { getItem } from "@/utils/storage";
import piniaPersistConfig from "../config/piniaPersist";
// defineStore 调用后返回一个函数，调用该函数获得 Store 实体
export const GlobalStore = defineStore({
	// id: 必须的，在所有 Store 中唯一
	id: "GlobalStore",
	// state: 返回对象的函数
	state: () => ({
		token: "",
		userInfo: "",
		msgCodeTime: "",
		test: "test"
	}),
	// 修改
	getters: {
		updateToken: state => {
			return (state.test = state.test.toUpperCase());
		}
	},
	// 异步
	actions: {
		setToken(val: string) {
			this.token = val;
		},
		setMsgCodeTime(val: any) {
			this.msgCodeTime = val;
		}
	},
	persist: piniaPersistConfig("GlobalStore", ["token", "msgCodeTime"])
	// 开启数据缓存
	// persist: {
	// 	enabled: true,
	// 	strategies: [
	// 		{
	// 			key: "GlobalStore", // 自定义key
	// 			storage: window.localStorage, //存放位置由 sessionStorage 改为 localStorage。
	// 			paths: ["token", "msgCodeTime"] //持久化部分 state
	// 		}
	// 	]
	// }
});
