<script setup lang="ts" name="index">
import { useRoute, useRouter } from "vue-router";
import { onBeforeMount } from "vue";
import headerComp from "./comp/header-comp.vue";
const route = useRoute();
const router = useRouter();
</script>

<template>
	<div class="index-wrap">
		<header-comp></header-comp>
	</div>
</template>

<style lang="scss" scoped>
.index-wrap {
	width: 100%;
	height: 100%;
	position: relative;
	background-color: #eee;
	background-image: url("@/assets/images/login_bg.svg");
	background-position: center;
	background-size: 100% 100%;
	background-repeat: no-repeat;
}
</style>
