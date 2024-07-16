<script>
	import { onMount } from 'svelte';

	let currentImageIndex = 0;
	const images = [
		'src/routes/images/form-slider.jpg',
		'src/routes/images/medal-slider.jpg',
		'src/routes/images/run-slider.jpg'
	];

	let interval;

	onMount(() => {
		interval = setInterval(() => {
			currentImageIndex = (currentImageIndex + 1) % images.length;
		}, 5000); // Change image every 5 seconds

		return () => {
			clearInterval(interval);
		};
	});
</script>

<section>
	<div class="landing-container">
		<div class="box-fifty">
			<h1>Alchemical Training</h1>
		</div>
		<div class="slider box-fifty">
			{#each images as image, index}
				<img
					src={image}
					alt="Slideshow Image"
					class="{index === currentImageIndex ? 'active' : ''} {index ===
					(currentImageIndex - 1 + images.length) % images.length
						? 'previous'
						: ''}"
				/>
			{/each}
		</div>
	</div>
</section>

<style>
	.landing-container {
		width: 100%;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
		margin: 0 auto;
		flex-wrap: wrap;
	}

	.box-fifty {
		flex: 1;
		width: 100%;
		padding: 20px;
		box-sizing: border-box;
	}

	.slider {
		position: relative;
		width: 100%;
		height: 600px; /* Adjust height as needed */
		overflow: hidden;
		perspective: 1000px; /* Add perspective */
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.slider img {
		position: absolute;
		width: 100%;
		height: 100%;
		object-fit: cover;
		transition:
			opacity 1s ease-in-out,
			transform 1s ease-in-out;
		opacity: 0;
		transform: translateX(100%) rotateY(90deg); /* Start from right off-screen */
		backface-visibility: hidden;
	}

	.slider img.active {
		opacity: 1;
		transform: translateX(0) rotateY(0deg); /* Move to center */
	}

	.slider img.previous {
		opacity: 0;
		transform: translateX(-100%) rotateY(-90deg); /* Move to left off-screen */
	}

	@media (max-width: 768px) {
		.box-fifty {
			width: 100%;
		}
		.slider {
			height: 300px; /* Adjust height for smaller screens */
		}
	}
</style>
