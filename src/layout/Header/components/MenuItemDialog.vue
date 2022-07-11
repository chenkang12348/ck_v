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

defineProps({ title: { type: String, required: true } });
defineExpose({
	isShowDialog
});
</script>

<template>
	<el-dialog v-model="data.dialogVisible" :title="title" width="500px">
		<span>保函检查</span>
		<template #footer>
			<span class="dialog-footer">
				<el-button @click="data.dialogVisible = false">取消</el-button>
				<el-button type="primary" @click="data.dialogVisible = false">确认</el-button>
			</span>
		</template>
	</el-dialog>
</template>

<style lang="scss" scoped></style>
