<script setup lang="ts">
// 国际化
import { ElConfigProvider } from "element-plus";
import zhCn from "element-plus/lib/locale/lang/zh-cn";
</script>

<template>
	<el-config-provider :locale="zhCn">
		<router-view></router-view>
	</el-config-provider>
</template>

<style></style>



<!-- <script setup lang="ts" name="index">
</script>

<template>
  <div class="index-wrap">
    首页
  </div>
</template>

<style lang="scss" scoped>
</style> -->