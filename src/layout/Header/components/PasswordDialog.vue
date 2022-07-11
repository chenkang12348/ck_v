<script setup lang="ts">
import { reactive } from "vue";
interface DataType {
	dialogVisible: boolean;
}
const data = reactive<DataType>({
	dialogVisible: false
});

const isShowDialog = () => {
	data.dialogVisible = !data.dialogVisible;
};

defineExpose({
	isShowDialog
});
</script>

<template>
	<el-dialog v-model="data.dialogVisible" title="修改密码" width="500px">
		<span>This is Password</span>
		<template #footer>
			<span class="dialog-footer">
				<el-button @click="data.dialogVisible = false">取消</el-button>
				<el-button type="primary" @click="data.dialogVisible = false">确认</el-button>
			</span>
		</template>
	</el-dialog>
</template>

<style lang="scss" scoped></style>
