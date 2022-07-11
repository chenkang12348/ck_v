<script setup lang="ts" name="LoginFrom">
import { reactive, ref, onBeforeMount } from "vue";
// router
import { useRoute, useRouter } from "vue-router";
import { ElNotification } from "element-plus";
import type { FormInstance } from "element-plus";
import type { Login } from "../interface/index";
import { LoginApi, SendMsgCodeApi } from "@/api/modules/Login";
// icon
import { Key, Iphone } from "@element-plus/icons-vue";
// 自定校验规则
import { ElFromPhoneNumber, ElFromMsgCode } from "@/utils/validate";
// pinia
import { GlobalStore } from "@/store/modules/GlobalStore";
const globalStore = GlobalStore();
// props
const props = defineProps({ checked: { type: Boolean, default: true } });
// console.log(props.checked);
// route
const route = useRoute();
const router = useRouter();
// from ref
const ruleFormRef = ref<FormInstance>();
// data
const data = reactive<Login.DataType>({
	isLoading: false,
	ruleForm: {
		account: "",
		msgCode: ""
	},
	rules: {
		account: [
			{ required: true, message: "请输入手机号", trigger: "blur" },
			{ validator: ElFromPhoneNumber, message: "请输入正确的手机号", trigger: "blur" }
		],
		msgCode: [
			{ required: true, message: "请输入验证码", trigger: "blur" },
			{ validator: ElFromMsgCode, message: "请输入正确的验证码", trigger: "blur" }
		]
	},
	isGetMSC: false,
	msgCodeTime: 0
});
// 提交
const submitForm = async (formEl: FormInstance | undefined) => {
	try {
		if (!formEl) return;
		await formEl.validate();
		const { data: loginData } = await LoginApi<Login.FromData, string>(data.ruleForm);
		if (!loginData.data) throw "获取token失败";
		globalStore.setToken(loginData.data);
		router.replace({ path: "/home" });
	} catch (e) {
		console.log(e);
	}
};
// 重置
const resetForm = (formEl: FormInstance | undefined) => {
	if (!formEl) return;
	formEl.resetFields();
};
// 获取验证码
const getCode = async (formEl: FormInstance | undefined) => {
	const newTime = new Date().getTime();
	// data.isLoading = true;
	try {
		if (data.isGetMSC) {
			ElNotification({
				title: "温馨提示：",
				duration: 2000,
				message: "验证码五分钟内有效！",
				type: "info"
			});
			return;
		}
		if (!formEl) throw "DOM Element undefined";
		// 校验表单单个值
		await formEl.validateField("account", val => {
			if (!val) throw "校验失败";
		});
		// 暂时关闭接口
		// await SendMsgCodeApi<object, string | number>({ account: data.ruleForm.account });
		globalStore.setMsgCodeTime(newTime + 1000 * 60 * 5);
		data.isGetMSC = true;
		getMsgCodeTime(newTime);
		ElNotification({
			title: "提示：",
			duration: 2000,
			message: "验证码已通过短信推送，五分钟内有效！",
			type: "success"
		});
	} catch (e) {
		console.log(e);
	}
	// data.isLoading = false;
};
// 验证码方法
const getMsgCodeTime = (newTime: any) => {
	data.msgCodeTime = parseInt(String((globalStore.msgCodeTime - newTime) / 1000));
	let timer: any = null;
	if (timer) {
		clearInterval(timer);
	}
	timer = setInterval(() => {
		data.msgCodeTime--;
		globalStore.setMsgCodeTime(globalStore.msgCodeTime - 1000);
		if (data.msgCodeTime < 1) {
			clearInterval(timer);
			data.isGetMSC = false;
		}
	}, 1000);
};

onBeforeMount(() => {
	const newTime = new Date().getTime();
	data.isGetMSC = globalStore.msgCodeTime && newTime < globalStore.msgCodeTime;
	data.isGetMSC && getMsgCodeTime(newTime);
});
</script>

<template>
	<div class="from-wrap">
		<slot name="title"></slot>
		<el-form
			ref="ruleFormRef"
			:model="data.ruleForm"
			status-icon
			:rules="data.rules"
			label-width="80px"
			class="demo-ruleForm"
			label-position="left"
		>
			<el-form-item label="手机号:" prop="account">
				<el-input v-model="data.ruleForm.account" type="tel" autocomplete="off" :prefix-icon="Iphone" placeholder="请输入手机号">
					<template #append>
						<el-button :loading="data.isLoading" @click="getCode(ruleFormRef)" class="get-code-style">
							{{ data.isGetMSC ? data.msgCodeTime : "获取验证码" }}
						</el-button>
					</template>
				</el-input>
			</el-form-item>
			<el-form-item label="验证码:" prop="msgCode">
				<el-input v-model="data.ruleForm.msgCode" type="tel" autocomplete="off" :prefix-icon="Key" placeholder="请输入验证码" />
			</el-form-item>
			<el-form-item label-width="0">
				<el-button type="primary" @click="submitForm(ruleFormRef)" class="btn-style" :disabled="!props.checked">登录</el-button>
				<el-button @click="resetForm(ruleFormRef)" class="btn-style">重置</el-button>
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
.btn-style {
	flex: 1;
}
.get-code-style {
	width: 100px;
}
</style>
