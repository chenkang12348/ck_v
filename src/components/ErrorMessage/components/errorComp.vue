<script setup lang="ts">
import { useRouter } from "vue-router";
const router = useRouter();
const handleBtn = () => {
	router.replace({ name: "home" });
};
</script>

<template>
	<div class="error-wrap flx-center">
		<slot name="bgImage"></slot>
		<div class="main-box">
			<slot name="title"></slot>
			<el-button type="primary" @click="handleBtn" class="btn-style">返回首页</el-button>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.error-wrap {
	width: 100%;
	height: 100%;
	background-color: #fff;
}
.btn-style {
	width: 100px;
	margin: auto;
	display: block;
}
</style>
