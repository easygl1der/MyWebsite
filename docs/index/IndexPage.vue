<template>
	<div class="section-container">
		<section id="first-section">

			<div id="bg" :style="{ backgroundImage: `url(${randomImage})` }">

			</div>

			<div id="big-bg" :style="{ backgroundImage: `url(${randomImage})` }">
				<div>
					<img id="index-logo" src="/gif/ikun.gif">
				</div>
				<div id="box-cursor">
					<span id="box"></span>

				</div>

			</div>
		</section>
		<section>
		</section>

	</div>

</template>

<script setup>
import { onMounted, ref, onBeforeUnmount } from 'vue';
import Typed from 'typed.js';
// 响应式数据
const randomImage = ref('');
const changeBgHeight = () => {
	const header = document.querySelector('header');
	const bg = document.querySelector('#big-bg');
	console.log(header.clientHeight)

	const headerHeight = header.clientHeight;
	console.log(headerHeight)
	const bg1 = document.querySelector('#bg');
	// bg.style.height = `calc(100vh)`;
	// bg1.style.height = `calc(100vh)`;
	bg.style.height = `calc(100vh - ${headerHeight}px)`;
	bg1.style.height = `calc(100vh - ${headerHeight}px)`;


	console.log('背景图片高度', bg.clientHeight)
}
// 图片列表
const images = [
	'imgs/bg/small_1.jpg',
	'imgs/bg/small_4.jpg',
	'imgs/bg/small_5.jpg',
	'imgs/bg/small_6.jpg',
	'imgs/bg/small_7.jpg',
	'imgs/bg/small_8.jpg',
	'imgs/bg/small_9.jpg',
	'imgs/bg/small_10.jpg',
	'imgs/bg/small_11.jpg',
	'imgs/bg/small_12.jpg',
	'imgs/bg/small_13.jpg',
	'imgs/bg/small_14.jpg',
	'imgs/bg/small_15.jpg',
	'imgs/bg/small_16.jpg',
	'imgs/bg/small_17.jpg',
	// 'imgs/bg/small_18.jpg',

	'imgs/bg/small_1.png',
	'imgs/bg/small_2.png',
	'imgs/bg/small_3.png',
	// 'imgs/bg/small_4.png',
	'imgs/bg/small_5.png',

];

// 获取随机图片
const getRandomImage = () => {
	const randomIndex = Math.floor(Math.random() * images.length);
	return images[randomIndex];
}

// 设置随机背景图片
const setRandomBackgroundImage = () => {
	const a = getRandomImage();
	randomImage.value = a;
	console.log('改变了背景，', randomImage.value)
}
onMounted(
	() => {
		const options = {
			strings: [
				"要一个  有你的黄昏^1000",
				"我记得她很容易哭鼻子\n 记得她喜欢聊以前的事\n 记得她在信纸上为我写的每个字\n 却再也没有见过她一次^1000",
				"我以为\n这世间千山万水\n 都应当一一错过\n 谁曾想会在一个黄昏\n 遇到你的眼睛^1000",
				"满眼都是你，亿万星辰犹不及^1000",
				"我们啊，早已过了耳听爱情的年纪了^1000",
				"我慢慢明白了为什么我不快乐，因为我总是期待一个结果^1000",
				"有人对你好是因为你很好你值得，不是因为要你还^1000",
				"没有一样情分能还清，人们彼此相爱就注定彼此相欠^1000",
				"在那个人离开的雾霭里，青春再也没有张扬的笑，再也没有肆意的痛了^1000",
				"人与人之间都有一座桥，那座桥是用眼泪做成的^1000",
				"我想和你虚度时光^1000",
				"我的青春太安静，所以想看看别人的青春中明目张胆的偏爱^1000",
				"这个世纪疯狂，没人性，腐败。您却一直清醒，温柔，一尘不染^1000",
				
				// "三年小成，五年中成，十年有成！^1000",
				// "Don't spend too much time on this question.^1000",
				// "你们都比我聰明，只是妄自菲薄而已。^1000",
			],
			typeSpeed: 75,
			showCursor: true,
			cursorChar: '_🌟',
			loop: true,
			loopCount: 200
		};
		new Typed('#box', options);

		setRandomBackgroundImage()
		changeBgHeight()
		// 监听窗口大小变化事件
		window.addEventListener('resize', changeBgHeight);
	});
onBeforeUnmount(() => {
	window.removeEventListener('resize', changeBgHeight);
});
</script>

<style>
/* div {
	padding-top: 0 !important;

}

header {
	position: fixed !important;
	opacity: 0.1;
	z-index: 5;
}

header:hover {
	top: 0;
} */

/* .vp-doc{
	width:100% !important;
} */
/* .section-container{
	width: 100vw;
	background-color: antiquewhite;
	scroll-snap-type:y mandatory;
} */

.container {
	padding: 0 !important;
	/* max-width:3000 !important; */
	margin: 0 !important;
}

body::-webkit-scrollbar {
	display: none;
	/* Safari 和 Chrome */
}

* {
	margin: 0;
	padding: 0;
}

#bg {
	height: 100vh;
	width: 100vw;
	position: absolute;
	justify-content: center;
	align-items: center;
	/* background-image: url('imgs/bg/small_1.jpg'); */
	/* background-image: url('imgs/bg/small_1.jpg'); */
	/* background-image: url('imgs/bg/1.jpg'); */
	/* background-size: cover; */
	background-size: 100 auto;
	/* background-size: cover; */
	background-position: center;
	background-repeat: no-repeat;

	color: white;
	filter: blur(5px);
	font-size: 36px;
	z-index: 1;
}

#big-bg {
	border-radius: 50px;
	height: 100vh;
	width: 100vw;
	display: flex;
	flex-direction: column;
	position: relative;
	justify-content: center;
	align-items: center;
	/* background-image: url('imgs/bg/small_2.png'); */
	/* background-image: url('imgs/bg/small_1.jpg'); */
	/* background-image: url('imgs/bg/1.jpg'); */
	background-size: contain;
	/* background-size: 100% auto; */
	/* background-size: cover; */
	background-position: center;
	color: white;
	font-size: 36px;
	z-index: 2;
	background-repeat: no-repeat;
}


#box {
	position: relative;
	width: auto;
	height: auto;
	border-radius: 20px;
	background: linear-gradient(to right bottom, rgba(162, 158, 158, 0.6), rgba(236, 228, 228, 0.1));
	backdrop-filter: blur(2px);
	box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.2);
	border-top: 1px solid rgba(255, 255, 255, 0.8);
	border-left: 1px solid rgba(255, 255, 255, 0.8);

	height: auto;
	min-height: 55px;
	transition: height 0.3s ease;
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 6px 10px;
	white-space: pre-wrap;
	line-height: 1.5;
}

/* 定义闪烁和缩放动画 */
@keyframes blinkScale {

	0%,
	100% {
		opacity: 1;
		transform: scale(1);
		filter: drop-shadow(0 0 20px rgba(255, 255, 255, 1));

	}

	50% {
		opacity: 0.5;
		transform: scale(1.1);
		filter: drop-shadow(0 0 5px rgba(255, 255, 255, 0.5));
	}
}

#index-logo {
	width: 100px;
	margin-top: -100px;
	margin-bottom: 20px;
	transition: all ease 0.5s;
	animation: blinkScale 3s infinite;

}

#index-logo:hover {
	animation: blinkScale 1.5s infinite;
}

#box-cursor {
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
}
</style>