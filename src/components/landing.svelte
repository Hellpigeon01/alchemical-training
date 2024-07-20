<script>
	import { onMount } from 'svelte';

	let currentImageIndex = 0;
	const images = [
		'../images/form-slider.jpg',
		'../images/medal-slider.jpg',
		'../images/run-slider.jpg'
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
			<div>
				<img src="../src/images/AT-Logo.svg" class="logo" alt="Alchemical Training Logo" />
			</div>
			<div><h1>ALCHEMICAL</h1></div>
			<div><h2>TRAINING</h2></div>
			<div><h3>We've Got Your Formula</h3></div>
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
		</div>
		<div class="slider box-fifty">
			{#each images as image, index}
				<img
					src={image}
					alt="Slide Show of Atheletes"
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
		font-size: 4rem;
		font-weight: 800;
		background: linear-gradient(120deg, #ffffff, #3d3d3d, #f0f0f0);
		background-size: 200% auto;
		color: #000;
		background-clip: text;
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		animation: shine 10s linear infinite;
		margin-top: 0px;
		margin-bottom: 0px;
	}

	p {
		text-align: center;
		width: 90%;
		margin: 0;
		padding: 20px;
	}
	.logo {
		width: 300px;
		height: auto;
	}

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
		text-align: center;
	}

	.slider {
		position: relative;
		width: 100%;
		height: 775px; /* Adjust height as needed */
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
		transform: translateX(100%) rotateY(45deg); /* Start from right off-screen */
		backface-visibility: hidden;
	}

	.slider img.active {
		opacity: 1;
		transform: translateX(0) rotateY(0deg); /* Move to center */
	}

	.slider img.previous {
		opacity: 0;
		transform: translateX(-100%) rotateY(-45deg); /* Move to left off-screen */
	}

	@media (max-width: 800px) {
		.box-fifty {
			width: 100%;
		}
		.slider {
			height: 500px; /* Adjust height for smaller screens */
		}
	}
</style>
