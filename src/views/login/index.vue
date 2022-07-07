<script setup lang="ts" name="login">
import LoginFrom from "./components/LoginFrom.vue";
// const data = reactive<Login.DataType>({
// 	fromData: {
// 		account: "13111111111",
// 		msgCode: "0"
// 	}
// });
// const handleBtn = async () => {
// 	const { data: loginData } = await LoginApi<Login.FromData, Login.Res>(data.fromData);
// 	console.log(loginData);
// };
</script>

<template>
	<div class="login-wrap">
		<LoginFrom>
			<template #title>
				<h1 class="title">电子保函</h1>
			</template>
			<template #footer>
				<div class="footer-wrap">底部信息</div>
			</template>
		</LoginFrom>
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
	}
}
</style>
