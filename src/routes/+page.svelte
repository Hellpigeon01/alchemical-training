<script>
	import Navigation from '../components/navigation.svelte';
	import Landing from '../components/landing.svelte';
	import SlidingBanner from '../components/slidingbanner.svelte';
	import About from '../components/about.svelte';
	import Partners from '../components/partners.svelte';
</script>

<nav>
	<Navigation />
</nav>
<header id="home">
	<Landing />
</header>

<main>
	<section><SlidingBanner /></section>
	<section class="quote margin">
		<div>
			<p>
				“And, when you want something, all the universe conspires<br /> in helping you to achieve
				it.”<br />
				― Paulo Coelho, The Alchemist
			</p>
		</div>
		<div>
			<strong>Call To Action Button</strong>
		</div>
	</section>

	<section id="about">
		<About />
	</section>

	<section id="services" class="margin">
		<h2>Our Services</h2>
	</section>

	<section class="quote margin">
		<div>
			<p>
				“When we strive to become better than we are,<br /> everything around us becomes better,
				too.”<br />
				― Paulo Coelho, The Alchemist
			</p>
		</div>
		<div>
			<p>Testimonial</p>
			<div><strong>Call to Action Button</strong></div>
		</div>
	</section>

	<section id="partners" class="margin">
		<Partners />
	</section>
</main>

<style>
	.quote {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		font-size: 1.5em;
		font-style: italic;
		text-align: center;
		color: #fff;
		padding: 60px;
		margin: 20px auto;
		width: 100%;
		box-sizing: border-box; /* Include padding in the width calculation */
		background-image: url('images/weights_bw.jpg');
		background-size: cover;
		background-position: center;
		background-repeat: no-repeat;
		overflow: hidden; /* Prevent overflow causing scrollbars */
	}

	.quote div {
		flex: 1;
	}

	.quote p {
		margin: 0;
		text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5); /* Add drop shadow */
	}

	.margin {
		margin-top: 60px;
		margin-bottom: 60px;
	}

	@media (max-width: 768px) {
		.quote {
			width: 100%;
			padding: 20px 0;
			flex-direction: column;
			align-items: center;
			text-align: center; /* Center align text */
		}

		.quote div {
			width: 100%;
			margin-bottom: 10px;
		}
	}
</style>
