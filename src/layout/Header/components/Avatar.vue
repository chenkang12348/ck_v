<script setup lang="ts">
import { reactive, ref } from "vue";
import { useRoute, useRouter } from "vue-router";
// 引入图片
import avatarImg from "@/assets/images/avatar.gif";
import PasswordDialog from "./PasswordDialog.vue";
import type { Headers } from "../interface/index";
import { LogoutApi } from "@/api/modules/login";
import { ElMessage, ElMessageBox } from "element-plus";
import { GlobalStore } from "@/store/modules/GlobalStore";
const globalStore = GlobalStore();
// 路由方法
const router = useRouter();
const PasswordDialogRef = ref<Headers.DialogExpose | null>(null);
const data = reactive<Headers.AvatarDataType>({
	circleUrl: avatarImg
});
// 修改密码
const ChangePassword = () => {
	PasswordDialogRef.value?.isShowDialog();
};
// 退出
const signOut = async () => {
	try {
		await ElMessageBox.confirm("您是否确认退出登录?", "退出", {
			confirmButtonText: "退出",
			cancelButtonText: "取消",
			type: "warning"
		});
		await LogoutApi();
		ElMessage({ type: "success", message: "退出登录成功！" });
		router.push({ path: "/login" });
		globalStore.setToken("");
	} catch (e) {
		console.log(e);
	}
};
</script>

<template>
	<el-dropdown>
		<el-avatar :size="50" :src="data.circleUrl" />
		<template #dropdown>
			<el-dropdown-menu>
				<el-dropdown-item> <el-button type="warning" @click="ChangePassword">修改密码</el-button></el-dropdown-item>
				<el-dropdown-item> <el-button type="danger" @click="signOut">退出</el-button></el-dropdown-item>
			</el-dropdown-menu>
		</template>
	</el-dropdown>
	<!-- 修改密码 -->
	<PasswordDialog ref="PasswordDialogRef"></PasswordDialog>
</template>

<style lang="scss" scoped>
.el-avatar {
	cursor: pointer;
}
</style>
