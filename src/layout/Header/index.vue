<script setup lang="ts">
import { reactive, onBeforeMount, ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import type { Headers } from "./interface/index";
import Avatar from "./components/Avatar.vue";
import MenuItemDialog from "./components/MenuItemDialog.vue";
const route = useRoute();
const router = useRouter();
const data = reactive<Headers.DataType>({
	activeIndex: "",
	isRouter: true,
	title: "",
	menuItemList: [
		{ index: "2-1", label: "建设银行" },
		{ index: "2-2", label: "华商银行" },
		{ index: "2-3", label: "商报检查" },
		{ index: "2-4", label: "太平保险保单检查" }
	]
});
const MenuItemDialogRef = ref<Headers.DialogExpose | null>(null);
onBeforeMount(() => {
	data.activeIndex = route.path;
});
const handleSelect = (key: string, keyPath: string[], item: any) => {
	data.activeIndex = key;
	if (key.indexOf("2") < 0) router.push({ path: key });
	else {
		data.title = data.menuItemList.find(item => item.index === key)?.label || "";
		MenuItemDialogRef.value?.isShowDialog();
	}
};
</script>

<template>
	<div>
		<header>
			<div class="main">
				<el-menu :default-active="data.activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
					<el-menu-item index="/home/index">首页</el-menu-item>
					<el-menu-item index="/myOrder/index">我的订单</el-menu-item>
					<el-menu-item index="/placeOrder/index">办理保函</el-menu-item>
					<el-sub-menu index="2">
						<template #title>保函检查</template>
						<el-menu-item :index="item.index" v-for="item in data.menuItemList" :key="item.index">{{ item.label }}</el-menu-item>
					</el-sub-menu>
					<el-menu-item index="/drawback/index">索赔受理</el-menu-item>
					<el-menu-item index="/myInfo/index">我的信息</el-menu-item>
					<el-menu-item index="/help/index">帮助中心</el-menu-item>
					<el-menu-item index="/product/index">产品咨询</el-menu-item>
				</el-menu>
			</div>
			<div class="left">
				<Avatar></Avatar>
			</div>
		</header>
		<slot name="banner"></slot>
	</div>
	<!-- 弹框 -->
	<MenuItemDialog ref="MenuItemDialogRef" :title="data.title"></MenuItemDialog>
</template>

<style lang="scss" scoped>
header {
	position: relative;
	height: 60px;
	.main {
		margin: auto;
		width: 80%;
		height: 100%;
		.el-menu {
			border: none;
			height: 100%;
			font-size: 24px;
			.el-menu-item {
				font-size: 16px;
				border: none;
			}
			:deep(.el-sub-menu__title) {
				font-size: 16px;
				border: none;
			}
			.is-active {
				background-color: #ecf5ff;
			}
		}

		// .#ecf5ff
	}
	.left {
		position: absolute;
		top: 0;
		right: 0;
		height: 100%;
		margin-right: 10%;
		display: flex;
		align-items: center;
	}
}
</style>
