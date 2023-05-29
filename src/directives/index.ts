// vue 自定义指令

import { App } from "vue";

import debounce from "./modules/debounce";
import throttle from "./modules/throttle";
import copy from "./modules/copy";
// import longPress from "./modules/longPress";
import draggable from "./modules/draggable";
import waterMarker from "./modules/waterMarker";
const directivesList: any = {
	debounce,
	throttle,
	copy,
	// longPress,
	draggable,
	waterMarker
};

const directives = {
	install: (app: App<Element>) => {
		Object.keys(directivesList).forEach(key => {
			// 注册自定义指令
			app.directive(key, directivesList[key]);
		});
	}
};

export default directives;
