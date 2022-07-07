<script setup lang="ts">
import ErrorComp from "./components/errorComp.vue";
</script>

<template>
	<ErrorComp>
		<template #bgImage>
			<img src="@/assets/images/404.png" class="not-img" alt="404" />
		</template>
		<template #title>
			<h2>404</h2>
			<h4>访问页面不存在~🤷‍♂️🤷‍♀️</h4>
		</template>
	</ErrorComp>
</template>

<style lang="scss" scoped>
@import "./index.scss";
</style>
