<script setup lang="ts" name="login">
import LoginFrom from "./components/LoginFrom.vue";
import { reactive } from "vue";
import { BellFilled } from "@element-plus/icons-vue";
import ServiceAgreement from "./components/ServiceAgreement.vue";
interface DataType {
	checked: boolean;
	showDialog: boolean;
	options: any;
}
const data = reactive<DataType>({
	checked: true,
	showDialog: false,
	options: {
		time: 1000
	}
});
// 展示服务协议
const showSLA = () => {
	data.showDialog = true;
};
const updateDialogVisible = () => {
	data.checked = true;
	data.showDialog = false;
};

// 防抖
const debounceClick = () => {
	console.log("节流");
};
</script>

<template>
	<div class="login-wrap">
		<LoginFrom :checked="data.checked">
			<!-- <template #title>
				<h1 class="title">登录</h1>
			</template> -->
			<template #footer>
				<div class="footer-wrap">
					<!-- <div class="checkbox flx-align-center">
						<el-checkbox v-model="data.checked" label="我已阅读并同意" />
						<el-checkbox-group @change="showSLA">
							<el-checkbox-button>《服务协议》</el-checkbox-button>
						</el-checkbox-group>
					</div> -->
					<!-- <el-alert type="info" :closable="false">
						<template #title>
							<el-icon color="#e6a23c" class="icon-style" size="14px"><BellFilled /></el-icon>
							<span
								>办理履约保函、预付款保函、农民工工资保函、质量保修保函等保函业务的，可致电<span class="phoneNumber"
									>400-800-6836</span
								>进行咨询</span
							>
						</template>
					</el-alert> -->
				</div>
			</template>
		</LoginFrom>
		<ServiceAgreement :dialogVisible="data.showDialog" @updateDialogVisible="updateDialogVisible" />
	</div>
</template>

<style lang="scss" scoped>
.login-wrap {
	width: 100%;
	height: 100%;
	min-width: 500px;
	min-height: 500px;
	background-color: #eee;
	background-image: url("@/assets/images/login_bg.svg");
	background-position: top left;
	background-size: 100% 100%;
	background-repeat: no-repeat;
	overflow: hidden;
	.title {
		text-align: center;
		font-size: 24px;
		font-weight: bold;
		color: #333;
		padding-bottom: 20px;
	}
	.footer-wrap {
		margin-top: 20px;
		.checkbox {
			color: var(--el-checkbox-checked-text-color);
			font-size: 14px;
			.label-text {
				vertical-align: middle;
				margin-left: 5px;
			}
		}
	}
}

.phoneNumber {
	color: #d9001b;
	font-weight: bold;
}
.icon-style {
	vertical-align: text-bottom;
	margin: 0 2px;
}
// vue3 废弃这种写法
// ::v-deep .el-checkbox-button__inner {
// }
// v3 新写法
:deep(.el-checkbox-button__inner) {
	padding: 0;
	border: none !important;
	color: #ec9921;
}
</style>
