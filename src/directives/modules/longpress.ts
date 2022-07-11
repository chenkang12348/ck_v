// 长按

import { Directive, DirectiveBinding, handleError } from "vue";

const longPress: Directive = {
	mounted(el: HTMLElement, binding: DirectiveBinding) {
		if (typeof binding.value !== "function") {
			throw "callback must be a function";
		}
		// 定义变量
		let pressTimer: any = null;
		// 创建定时器
		const start = (e: any) => {
			if (e.button) {
				if (e.type === "click" && e.button !== 0) return;
			}
			if (!pressTimer) {
				pressTimer = setTimeout(() => {
					handler(e);
				}, 1000);
			}
		};
		// 取消定时器
		const cancel = () => {
			if (pressTimer) {
				clearTimeout(pressTimer);
				pressTimer = null;
			}
		};
		// 运行函数
		const handler = (e: MouseEvent | TouchEvent) => {
			binding.value(e);
		};
		// 添加事件监听
		el.addEventListener("mousedown", start); //鼠标事件
		el.addEventListener("touchstart", start); //触摸事件
		// 取消定时器
		el.addEventListener("click", cancel);
		el.addEventListener("mouseout", cancel);
		el.addEventListener("touchend", cancel);
		el.addEventListener("touchcancel", cancel);
	}
};

export default longPress;
