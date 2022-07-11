<script setup lang="ts"></script>

<template>
	<el-carousel height="120px" :interval="4000" type="card">
		<el-carousel-item v-for="item in 3" :key="item">
			<h3 class="small justify-center" text="2xl">{{ item }}</h3>
		</el-carousel-item>
	</el-carousel>
</template>

<style lang="scss" scoped>
.el-carousel__item h3 {
	color: #475669;
	// opacity: 0.75;
	line-height: 120px;
	margin: 0;
	text-align: center;
}

.el-carousel__item:nth-child(2n) {
	background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
	background-color: #d3dce6;
}
</style>
