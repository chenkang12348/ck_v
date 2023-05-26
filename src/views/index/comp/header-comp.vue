<template>
	<div class="header-wrap">
		<!-- 环形线条 -->
		<span class="line"></span>
		<span class="line"></span>
		<span class="line"></span>
		<span class="line"></span>
		<div class="header-main">
			<div class="left">left</div>
			<div class="right">right</div>
		</div>
	</div>
</template>

<script setup></script>

<style lang="scss" scoped>
.header-wrap {
	height: 60px;
	// background: ;
	line-height: 60px;
	background: rgba(161, 161, 161, 0.1);
	backdrop-filter: blur(11px); //毛玻璃
	z-index: 999;
	position: sticky;
	overflow: hidden;
	.line {
		position: absolute;
	}
	.line:nth-child(1) {
		top: 0;
		left: 0;
		width: 100%;
		height: 3px;
		/* 加上渐变效果，方可形成拖尾效果 */
		background: linear-gradient(90deg, transparent, orange);
		animation: animate1 8s linear infinite;
		animation-delay: 2s;
	}
	@keyframes animate1 {
		0% {
			left: -100%;
		}

		50%,
		100% {
			left: 100%;
		}
	}
	.line:nth-child(2) {
		top: 0;
		right: 0;
		width: 3px;
		height: 100%;
		background: linear-gradient(180deg, transparent, red);
		animation: animate2 2s linear infinite;
		animation-delay: 12s;
	}
	@keyframes animate2 {
		0% {
			top: -100%;
		}

		50%,
		100% {
			top: 100%;
		}
	}
	.line:nth-child(3) {
		bottom: 0;
		right: 0;
		width: 100%;
		height: 3px;
		background: linear-gradient(270deg, transparent, green);
		animation: animate3 8s linear infinite;
		animation-delay: 18s;
	}
	@keyframes animate3 {
		0% {
			right: -100%;
		}

		50%,
		100% {
			right: 100%;
		}
	}
	.line:nth-child(4) {
		bottom: 0;
		left: 0;
		width: 3px;
		height: 100%;
		background: linear-gradient(360deg, transparent, gray);
		animation: animate4 4s linear infinite;
		animation-delay: 28s;
	}
	@keyframes animate4 {
		0% {
			bottom: -100%;
		}

		50%,
		100% {
			bottom: 100%;
		}
	}
	.header-main {
		margin: auto;
		width: 80%;
		height: 100%;
		min-width: 800px;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
}
</style>
