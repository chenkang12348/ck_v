<script setup lang="ts">
import ErrorComp from "./components/errorComp.vue";
</script>

<template>
	<ErrorComp>
		<template #bgImage>
			<img src="@/assets/images/403.png" class="not-img" alt="403" />
		</template>
		<template #title>
			<h2>403</h2>
			<h4>暂无访问权限~🙅‍♂️🙅‍♀️</h4>
		</template>
	</ErrorComp>
</template>

<style lang="scss" scoped>
@import "./index.scss";
</style>
