<script setup lang="ts">
import { ref, reactive } from "vue";
import type { TabsPaneContext } from "element-plus";
import type { MyOrder } from "./interface/index";

const data = reactive<MyOrder.IDataType>({
	activeName: "1",
	formInline: {
		user: "",
		region: ""
	}
});
const handleClick = (tab: TabsPaneContext, event: Event) => {
	console.log(tab, event);
};
const onSubmit = () => {
	console.log("submit!");
};
</script>

<template>
	<div class="wrap">
		<header class="header-box flx-center">
			<el-tabs v-model="data.activeName" class="demo-tabs" @tab-click="handleClick">
				<el-tab-pane label="我的订单" name="1"></el-tab-pane>
				<el-tab-pane label="待支付" name="2"></el-tab-pane>
				<el-tab-pane label="未出函" name="3"></el-tab-pane>
				<el-tab-pane label="已出函" name="4"></el-tab-pane>
				<el-tab-pane label="退款" name="5"></el-tab-pane>
				<el-tab-pane label="已取消" name="6"></el-tab-pane>
			</el-tabs>
			<el-form :inline="true" :model="data.formInline" class="demo-form-inline">
				<el-form-item>
					<el-input v-model="data.formInline.user" placeholder="订单编号/项目编号/项目名称" class="code-style" />
				</el-form-item>
				<el-form-item>
					<el-select v-model="data.formInline.region" placeholder="保函类型" class="type-style">
						<el-option label="Zone one" value="shanghai" />
						<el-option label="Zone two" value="beijing" />
					</el-select>
				</el-form-item>
				<el-form-item>
					<el-input v-model="data.formInline.user" placeholder="Approved by" />
				</el-form-item>
				<el-form-item>
					<el-button type="primary" @click="onSubmit">查询</el-button>
					<el-button type="primary" @click="onSubmit">办理保函</el-button>
				</el-form-item>
			</el-form>
		</header>
		<main class="main-box">
			<div class="content-box"></div>
		</main>
	</div>
</template>

<style lang="scss" scoped>
.wrap {
	height: 100%;
	// overflow: hidden;
	.header-box {
		width: 100%;
		height: 80px;
		background-color: #fff;
		box-sizing: border-box;
		display: flex;
		align-items: center;
		filter: drop-shadow(2px 4px 6px rgba(0, 0, 0, 0.3));
		:deep(.el-tabs__nav-wrap::after) {
			display: none;
		}
		:deep(.el-tabs__header) {
			margin: 0;
		}
		:deep(.el-tabs__item) {
			height: 80px;
			line-height: 80px;
		}
	}
	.demo-form-inline {
		margin-left: 100px;
		.el-form-item {
			margin: 0 10px;
		}
		.type-style {
			width: 120px;
		}
		.code-style {
			width: 230px;
		}
	}

	.main-box {
		width: 80%;
		height: calc(100% - 80px);
		margin: auto;
		overflow: auto;
		box-sizing: border-box;

		background-color: #008c8c;
		padding: 20px;
		.content-box {
			background-color: #ccc;
			height: 500px;
		}
	}
}
</style>
