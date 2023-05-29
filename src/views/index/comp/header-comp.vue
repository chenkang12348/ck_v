<template>
	<div class="header-wrap">
		<!-- 环形线条 -->
		<span class="line"></span>
		<span class="line"></span>
		<span class="line"></span>
		<span class="line"></span>
		<!--  -->
		<div class="header-main">
			<div class="left">
				<div class="music">
					<span></span>
					<span></span>
					<span></span>
					<span></span>
					<span></span>
					<span></span>
					<span></span>
					<span></span>
					<span></span>
				</div>
				<h1 class="tips-bg">'Hello,World!'</h1>
				<h1 class="tips-text">欢迎光临呐，各位访客们。</h1>
			</div>
			<div class="right">
					<div class="time"></div>
			</div>
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
		animation-delay: 0s;
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
		animation: animate2 8s linear infinite;
		animation-delay: 2s;
		top: -100%;
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
		animation-delay: 4s;
		right: -100%;
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
		animation: animate4 8s linear infinite;
		animation-delay: 6s;
		bottom: -100%;
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
		.left {
			display: flex;
			align-items: center;
			.tips-text {
				display: inline-block;
				// 多少个字符就多少em
				width: 13em;
				white-space: nowrap;
				overflow: hidden;
				border-right: 1px solid #000;
				animation: typingWords 5s steps(13) infinite, cursor 0.5s steps(1) infinite;
				height: 30px;
				line-height: 30px;
				font-weight: bold;
			}
		}
		@keyframes typingWords {
			0% {
				width: 0;
			}
		}

		@keyframes cursor {
			50% {
				border-color: transparent;
			}
		}
		.tips-bg {
			margin: 0 20px;
			display: inline-block;
			height: 30px;
			line-height: 30px;
			font-weight: bold;
			background: -webkit-linear-gradient(
				135deg,
				#0eaf6d,
				#ff6ac6 25%,
				#147b96 50%,
				#e6d205 55%,
				#2cc4e0 60%,
				#8b2ce0 80%,
				#ff6384 95%,
				#08dfb4
			);
			/* 文字颜色填充设置为透明 */
			-webkit-text-fill-color: transparent;
			/* 背景裁剪，即让文字使用背景色 */
			-webkit-background-clip: text;
			/* 背景图放大一下，看着柔和一些 */
			-webkit-background-size: 200% 100%;
			/* 应用动画flowCss 12秒速度 无限循环 线性匀速动画*/
			-webkit-animation: flowCss 5s infinite linear;
		}
		.tips-bg:hover {
			-webkit-animation: flowCss 2s infinite linear;
		}
		@-webkit-keyframes flowCss {
			0% {
				/* 移动背景位置 */
				background-position: 0 0;
			}

			100% {
				background-position: -400% 0;
			}
		}
		.music {
			height: 50px;
			width: 170px;
			display: flex;
			span {
				width: 6px;
				border-radius: 18px;
				margin-right: 6px;
				display: inline-block;
			}
			span:nth-child(1) {
				/* 时间递增，参差不齐的效果 */
				animation: bar1 2s 0.2s infinite linear;
				background: #f677b0;
			}
			span:nth-child(2) {
				animation: bar2 2s 0.4s infinite linear;
				background: #df7ff2;
			}
			span:nth-child(3) {
				animation: bar3 2s 0.6s infinite linear;
				background: #8c7ff2;
			}
			span:nth-child(4) {
				animation: bar4 2s 0.8s infinite linear;
				background: #7fd0f2;
			}
			span:nth-child(5) {
				animation: bar5 2s 1s infinite linear;
				background: #7ff2d3;
			}
			span:nth-child(6) {
				animation: bar6 2s 1.2s infinite linear;
				background: #7ff2a0;
			}
			span:nth-child(7) {
				animation: bar7 2s 1.4s infinite linear;
				background: #adf27f;
			}
			span:nth-child(8) {
				animation: bar8 2s 1.6s infinite linear;
				background: #e7f27f;
			}
			span:nth-child(9) {
				animation: bar9 2s 1.8s infinite linear;
				background: #ecaa64;
			}
			@keyframes bar1 {
				0% {
					margin-top: 25%;
					height: 10%;
				}
				50% {
					height: 100%;
					margin-top: 0%;
				}

				100% {
					height: 10%;
					margin-top: 25%;
				}
			}

			@keyframes bar2 {
				0% {
					margin-top: 25%;
					height: 10%;
				}
				50% {
					height: 100%;
					margin-top: 0%;
				}
				100% {
					height: 10%;
					margin-top: 25%;
				}
			}

			@keyframes bar3 {
				0% {
					margin-top: 25%;
					height: 10%;
				}

				50% {
					height: 100%;
					margin-top: 0%;
				}

				100% {
					height: 10%;
					margin-top: 25%;
				}
			}

			@keyframes bar4 {
				0% {
					margin-top: 25%;
					height: 10%;
				}

				50% {
					height: 100%;
					margin-top: 0%;
				}

				100% {
					height: 10%;
					margin-top: 25%;
				}
			}

			@keyframes bar5 {
				0% {
					margin-top: 25%;
					height: 10%;
				}

				50% {
					height: 100%;
					margin-top: 0%;
				}

				100% {
					height: 10%;
					margin-top: 25%;
				}
			}

			@keyframes bar6 {
				0% {
					margin-top: 25%;
					height: 10%;
				}

				50% {
					height: 100%;
					margin-top: 0%;
				}

				100% {
					height: 10%;
					margin-top: 25%;
				}
			}

			@keyframes bar7 {
				0% {
					margin-top: 25%;
					height: 10%;
				}

				50% {
					height: 100%;
					margin-top: 0%;
				}

				100% {
					height: 10%;
					margin-top: 25%;
				}
			}

			@keyframes bar8 {
				0% {
					margin-top: 25%;
					height: 10%;
				}

				50% {
					height: 100%;
					margin-top: 0%;
				}

				100% {
					height: 10%;
					margin-top: 25%;
				}
			}

			@keyframes bar9 {
				0% {
					margin-top: 25%;
					height: 10%;
				}

				50% {
					height: 100%;
					margin-top: 0%;
				}

				100% {
					height: 10%;
					margin-top: 25%;
				}
			}
		}
	}
}
</style>
