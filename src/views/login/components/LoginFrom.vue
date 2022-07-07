<script setup lang="ts">
import { reactive, ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import type { FormInstance } from "element-plus";
import type { Login } from "../interface/index";
import { LoginApi } from "@/api/modules/Login";
import { Key, Iphone } from "@element-plus/icons-vue";
import { GlobalStore } from "@/store/modules/GlobalStore";
const globalStore = GlobalStore();
const data = reactive<Login.DataType>({
	ruleForm: {
		account: "",
		msgCode: ""
	},
	rules: {}
});
const ruleFormRef = ref<FormInstance>();

const submitForm = async (formEl: FormInstance | undefined) => {
	globalStore.token = "test";
	try {
		if (!formEl) return;
		await formEl.validate();
		const { data: tokenData } = await LoginApi<Login.FromData, Login.Res>(data.ruleForm);
		console.log(tokenData);
	} catch (e) {
		console.log(e);
	}
};
const resetForm = (formEl: FormInstance | undefined) => {
	if (!formEl) return;
	formEl.resetFields();
};
</script>

<template>
	<div class="from-wrap">
		<slot name="title"></slot>

		<el-form ref="ruleFormRef" :model="data.ruleForm" status-icon :rules="data.rules" label-width="80px" class="demo-ruleForm">
			<el-form-item label="手机号:" prop="account">
				<el-input v-model="data.ruleForm.account" type="tel" autocomplete="off" :prefix-icon="Iphone" placeholder="请输入手机号">
					<template #append>
						<el-button> 获取验证码 </el-button>
					</template>
				</el-input>
			</el-form-item>
			<el-form-item label="验证码:" prop="msgCode">
				<el-input v-model="data.ruleForm.msgCode" type="tel" autocomplete="off" :prefix-icon="Key" placeholder="请输入验证码" />
			</el-form-item>
			<el-form-item>
				<el-button type="primary" @click="submitForm(ruleFormRef)">登录</el-button>
				<el-button @click="resetForm(ruleFormRef)">重置</el-button>
			</el-form-item>
		</el-form>
		<slot name="footer"></slot>
	</div>
</template>

<style lang="scss" scoped>
.from-wrap {
	width: 460px;
	margin: 30vh auto;
	padding: 20px;
	background-color: #fff;
	border-radius: 20px;
}
</style>
