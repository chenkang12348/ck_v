// 复制
//  接收参数，string 类型

import type { Directive, DirectiveBinding } from "vue";

import { ElMessage } from "element-plus";

interface ElType extends HTMLElement {
	copyData: string | number;
	__handleClick__: any;
}

const copy: Directive = {
	mounted(el: ElType, binding: DirectiveBinding) {
		el.copyData = binding.value;
		el.addEventListener("click", handleClick);
	},
	updated(el: ElType, binding: DirectiveBinding) {
		el.copyData = binding.value;
	},
	beforeUnmount(el: ElType) {
		el.removeEventListener("click", el.__handleClick__);
	}
};

const handleClick = (e:any) => {
	const input = document.createElement("input");
	input.value = e.copyData.toLocaleString();
	document.body.appendChild(input);
	input.select();
	document.execCommand("Copy");
	document.body.removeChild(input);
	ElMessage({
		type: "success",
		message: "复制成功"
	});
};

export default copy;
