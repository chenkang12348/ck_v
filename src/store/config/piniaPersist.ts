import { PersistedStateOptions } from "pinia-plugin-persistedstate";

// pinia 持久化参数配置

const piniaPersistConfig = (key: string, paths: string[]) => {
	const persist: PersistedStateOptions = {
		key,
		storage: window.localStorage,
		// storage: window.sessionStorage,
		paths
	};
	return persist;
};

export default piniaPersistConfig;
