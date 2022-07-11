<script setup lang="ts" name="ServiceAgreement">
// import { defineProps, defineEmits } from "vue";
// interface DataType {
// 	dialogVisible: boolean;
// }
// const data = reactive<DataType>({
// 	dialogVisible: false
// });
defineProps({ dialogVisible: { type: Boolean, default: false } });
const emit = defineEmits(["updateDialogVisible"]);

const closeDialog = () => {
	emit("updateDialogVisible");
};
</script>

<template>
	<el-dialog v-model="dialogVisible" title="服务协议" width="50%" @close="closeDialog">
		<!-- main -->
		<div>
			Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi aliquid atque, quis repellat voluptatem illo! Eligendi
			corporis quam et, quo maiores, recusandae at consectetur veniam tenetur magnam consequuntur tempora nulla?
		</div>
		<!-- footer -->
		<template #footer>
			<span class="dialog-footer">
				<el-button type="primary" @click="closeDialog">已阅</el-button>
			</span>
		</template>
	</el-dialog>
</template>

<style lang="scss" scoped></style>
