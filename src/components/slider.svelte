<script lang="js">
	import { register } from 'swiper/element/bundle';

	register();

	const spaceBetween = 10;
	const onProgress = (e) => {
		const [swiper, progress] = e.detail;
		console.log(progress);
	};
	const onSlideChange = (e) => {
		console.log('slide changed');
	};

	const breakpoints = {
		768: {
			slidesPerView: 3,
			spaceBetween: 10
		}
	};
</script>

<swiper-container
	slides-per-view={3}
	space-between={spaceBetween}
	centered-slides={true}
	pagination={{ hideOnClick: false }}
	breakpoints={JSON.stringify(breakpoints)}
	on:swiperprogress={onProgress}
	on:swiperslidechange={onSlideChange}
>
	<swiper-slide>Slide 1</swiper-slide>
	<swiper-slide>Slide 2</swiper-slide>
	<swiper-slide>Slide 3</swiper-slide>
</swiper-container>
