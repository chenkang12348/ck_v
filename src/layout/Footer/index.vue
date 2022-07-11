<script setup lang="ts">
import { ElNotification } from "element-plus";
const goLink = () => {
	ElNotification({
		title: "Tips：",
		duration: 2000,
		message: "This is a reminder",
		type: "info"
	});
};
</script>

<template>
	<div class="footer-wrap flx-center">
		<p class="text">客服热线 400-8006836 (工作时间：工作日8:30-12:00,13:30-17:30)</p>
		<p class="btn" @click="goLink">深圳市融锋科技有限公司提供技术支持</p>
	</div>
</template>

<style lang="scss" scoped>
.footer-wrap {
	height: 50px;
	font-size: 14px;
	background: #333;
	color: #ddd;
	.text {
		margin-right: 60px;
	}
	.btn {
		cursor: pointer;
	}
	.btn:hover {
		color: slategrey;
	}
}
</style>
