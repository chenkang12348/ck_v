<script setup lang="ts">
import ErrorComp from "./components/errorComp.vue";
</script>

<template>
	<ErrorComp>
		<template #bgImage>
			<img src="@/assets/images/500.png" class="not-img" alt="500" />
		</template>
		<template #title>
			<h2>500</h2>
			<h4>网络异常 ~🤦‍♂️🤦‍♀️</h4>
		</template>
	</ErrorComp>
</template>

<style lang="scss" scoped>
@import "./index.scss";
</style>
