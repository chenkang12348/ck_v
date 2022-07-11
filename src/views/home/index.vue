<script setup lang="ts">
import { ref } from "vue";
const value = ref(new Date());
</script>

<template>
	<!-- v-waterMarker="{ text: 'Watermark Direct', textColor: 'rgba(180, 180, 180, 0.6)' }" -->
	<div class="main-wrap" v-waterMarker="{ text: 'Watermark Direct' }">
		<el-calendar v-model="value">
			<!-- <template #dateCell="{ data }">
				<p :class="data.isSelected ? 'is-selected' : ''">
					{{ data.day.split("-").slice(1).join("-") }}
					{{ data.isSelected ? "✔️" : "" }}
				</p>
			</template> -->
		</el-calendar>
	</div>
</template>

<style lang="scss" scoped>
// .is-selected {
// 	color: #1989fa;
// }
.el-calendar {
	background: transparent;
}
</style>
