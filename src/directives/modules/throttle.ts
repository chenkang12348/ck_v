// 节流
//n 秒内只运行一次，若在 n 秒内重复触发，只有一次生效

import type { Directive, DirectiveBinding } from "vue";

interface ElType extends HTMLElement {
	__handleClick__: () => any;
	disabled: boolean;
}
const throttle: Directive = {
	mounted(el: ElType, binding: DirectiveBinding) {
		if (typeof binding.value !== "function") {
			throw "callback must be a function";
		}
		let timer: NodeJS.Timeout | null = null;
		let delay: number = Number(binding.arg);
		if (!delay) delay = 5000;
		el.__handleClick__ = () => {
			if (timer) {
				clearTimeout(timer);
			}
			if (!el.disabled) {
				el.disabled = true;
				binding.value();
				timer = setTimeout(() => {
					el.disabled = false;
				}, delay);
			}
		};
		el.addEventListener("click", el.__handleClick__);
	},
	beforeUnmount(el: ElType) {
		el.removeEventListener("click", el.__handleClick__);
	}
};

export default throttle;
