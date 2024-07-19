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
	<section class="quote">
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

	<section class="quote">
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

	<section id="partners">
		<Partners />
	</section>
</main>

<style>
	.quote {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		background-color: #808080;
		font-size: 1.5em;
		font-style: italic;
		text-align: center;
		color: #fff;
		padding: 60px;
		margin: 20px auto;
		width: 90%;
		border-radius: 15px;
	}
	.quote div {
		flex: 1;
	}

	.quote p {
		margin: 0;
	}

	strong {
		color: #e26600;
	}

	@media (max-width: 768px) {
		.quote {
			width: 95%;
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
