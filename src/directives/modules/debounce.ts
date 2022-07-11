// 防抖
//n 秒后在执行该事件，若在 n 秒内被重复触发，则重新计时

import type { Directive, DirectiveBinding } from "vue";

interface ElType extends HTMLElement {
	__handleClick__: () => any;
}

const debounce: Directive = {
	// 挂载创建事件
	mounted(el: ElType, binding: DirectiveBinding) {
		if (typeof binding.value !== "function") {
			throw "callback must be a function";
		}
		let delay: number = Number(binding.arg);
		if (!delay) delay = 5000;
		let timer: NodeJS.Timeout | null = null;
		el.__handleClick__ = () => {
			if (timer) {
				clearInterval(timer);
			}
			timer = setTimeout(() => {
				binding.value();
			}, delay);
		};
		el.addEventListener("click", el.__handleClick__);
	},
	// 卸载移除事件
	beforeUnmount(el: ElType) {
		el.removeEventListener("click", el.__handleClick__);
	}
};

export default debounce;
