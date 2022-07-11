// 拖拽

/**
 * 思路
 * 1. 设置需要拖拽的元素位absolute ,父元素 relative
 * 2. 鼠标按下时记录元素当前位置
 * 3. 鼠标移动时计算每次移动的距离
 * 4. 鼠标松开时完成拖拽
 * 使用
 *  在DOM上加上v-draggable 即可
 *  <div v-draggable></div>
 */

import type { Directive, DirectiveBinding } from "vue";

interface ElType extends HTMLElement {
	parentNode: any;
}

const draggable: Directive = {
	mounted(el: ElType) {
		el.style.cursor = "move";
		el.style.position = "absolute";
		// 鼠标按下时记录位置
		el.onmousedown = e => {
			let disX = e.pageX - el.offsetLeft;
			let disY = e.pageY - el.offsetTop;
			document.onmousemove = e => {
				// 移动后的位置
				let x = e.pageX - disX;
				let y = e.pageY - disY;
				//移动范围 父级元素的宽高
				let maxX = parseInt(window.getComputedStyle(el.parentNode).width) - parseInt(window.getComputedStyle(el).width);
				let maxY = parseInt(window.getComputedStyle(el.parentNode).height) - parseInt(window.getComputedStyle(el).height);
				// 范围限制
				if (x < 0) x = 0;
				else if (x > maxX) x = maxX;
				if (y < 0) y = 0;
				else if (y > maxY) y = maxY;

				el.style.left = x + "px";
				el.style.top = y + "px";
			};
			// 鼠标抬起 移除事件
			document.onmouseup = () => {
				document.onmousemove = document.onmouseup = null;
			};
		};
	}
};

export default draggable;
