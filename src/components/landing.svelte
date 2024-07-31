<script>
	import Modal from '../components/modal.svelte';
	import { onMount } from 'svelte';

	let currentImageIndex = 0;
	const images = ['/images/form-slider.jpg', '/images/medal-slider.jpg', '/images/run-slider.jpg'];

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
			<div>
				<img src="/images/AT-Logo-color.webp" class="logo" alt="Alchemical Training Logo" />
			</div>
			<div><h1>ALCHEMICAL</h1></div>
			<div><h2 class="h2-1">TRAINING</h2></div>
			<div>
				<h3>Create the Formula for Success<br />Redefining Transformation At Any Age...</h3>
			</div>
			<div>
				<p>
					<i>al·chem·i·cal</i> (adj) involving a seemingly magical process <br />of transformation,
					creation, or combination.
				</p>
			</div>
			<div>
				<p>
					Alchemical Training is dedicated to providing professional coaching services to clients
					worldwide. Our mission is to foster a strong community of clients and trainers, regardless
					of geographic boundaries. At Alchemical Training, we believe that with commitment and
					discipline, anyone can transform their life and achieve their fullest potential.
				</p>
			</div>
			<Modal />
		</div>
		<div class="slider">
			{#each images as image, index}
				<img
					src={image}
					alt="Slide Show of Athletes"
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
	@keyframes shine {
		0% {
			background-position: -200%;
		}
		100% {
			background-position: 200%;
		}
	}

	h1 {
		font-size: 3rem;
		font-weight: 800;
		background: linear-gradient(30deg, #ffffff, #606060, #ffffff);
		color: #000;
		-webkit-background-clip: text;
		background-clip: text;
		-webkit-text-fill-color: transparent;
		animation: shine 10s linear infinite;
		margin-top: 0;
		margin-bottom: 0;
	}

	p {
		text-align: center;
		width: 90%;
		margin: 0;
		padding: 20px;
	}

	.logo {
		width: 250px;
		height: auto;
	}

	.landing-container {
		width: 100%;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
		margin: 0 auto;
	}

	.box-fifty {
		width: 100%;
		padding: 20px;
		box-sizing: border-box;
		text-align: center;
	}

	.slider {
		position: relative;
		width: 100%;
		height: 775px;
		overflow: hidden;
		perspective: 1000px;
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
		transform: translateX(100%) rotateY(45deg);
		backface-visibility: hidden;
	}

	.slider img.active {
		opacity: 1;
		transform: translateX(0) rotateY(0deg);
	}

	.slider img.previous {
		opacity: 0;
		transform: translateX(-100%) rotateY(-45deg);
	}

	@media (max-width: 800px) {
		.landing-container {
			flex-direction: row;
			flex-wrap: wrap;
		}
		.slider img {
			max-height: 400px;
			border-radius: 20px;
		}
		.slider {
			height: 400px;
			margin: 10px;
		}
	}
</style>
