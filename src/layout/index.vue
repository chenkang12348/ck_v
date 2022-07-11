<script setup lang="ts">
import Header from "./Header/index.vue";
import Footer from "./Footer/index.vue";
import Banner from "./Banner/index.vue";
import { useRouter, useRoute } from "vue-router";
import { reactive, onBeforeMount } from "vue";
interface DataType {
	compName: any;
}
const data = reactive<DataType>({
	compName: Banner
});
const router = useRouter();
const route = useRoute();
onBeforeMount(() => {
	// console.log(route.path);
	// /
	if (route.path.indexOf("") !== -1) data.compName = "";
});
</script>

<template>
	<el-container>
		<el-header>
			<Header>
				<template #banner>
					<component :is="Banner"></component>
				</template>
			</Header>
		</el-header>
		<el-main>
			<section class="main-box">
				<router-view> </router-view>
			</section>
		</el-main>
		<el-footer> <Footer></Footer> </el-footer>
	</el-container>
</template>

<style lang="scss" scoped>
.el-container {
	width: 100%;
	height: 100%;
	min-width: 970px;
	.el-header,
	.el-main,
	.el-footer {
		padding: 0;
		height: auto;
	}
	.main-box {
		height: 100%;
	}
}
</style>
