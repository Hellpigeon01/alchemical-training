<script>
	import Navigation from '../components/navigation.svelte';
	import Landing from '../components/landing.svelte';
	import SlidingBanner from '../components/slidingbanner.svelte';
	import About from '../components/about.svelte';
	import Partners from '../components/partners.svelte';
	import Signup from '../components/signupbutton.svelte';
	import Divider from '../components/divider.svelte';
	import Questions from '../components/questions.svelte';
	import Modal from '../components/modal.svelte';
	import Footer from '../components/footer.svelte';
	import Contact from '../components/contact.svelte';
</script>

<nav>
	<Navigation />
</nav>
<header id="home">
	<Landing />
</header>

<main>
	<SlidingBanner />

	<!-- Banner Quote 1 with Call To Action -->
	<section class="quote margin">
		<div>
			<p>
				“And, when you want something, all the universe conspires<br /> in helping you to achieve
				it.”<br />
				― Paulo Coelho, The Alchemist
			</p>
		</div>
		<div>
			<p class="testimonial">
				"Training with Abigail Crowe is one of the best investments I have ever made. Abigail is
				professional, personable and highly innovative. She created personalized plans to help me
				reach my fitness goals and has given me the courage to challenge myself in new and exciting
				ways. At 42, I can honestly say that I am in the best shape of my life. I am one very
				grateful client, but I also consider her a friend."<br />
				―Andrea Stephens
			</p>
			<Signup />
		</div>
	</section>

	<section id="about">
		<Divider />
		<About />
		<Questions />
		<div class="center"><Modal /></div>
		<Divider />
	</section>

	<section class="quote2 margin">
		<div>
			<p>
				“When we strive to become better than we are,<br /> everything around us becomes better,
				too.”<br />
				― Paulo Coelho, The Alchemist
			</p>
		</div>
		<div>
			<p class="testimonial">
				"My daughter Sky has been training with Abigail now for almost 2 years. Under her training,
				she has gotten stronger, faster, and more flexible. This makes a big difference in high
				levels of athletic performance. I would highly recommend Abigail to any athlete!!!"<br />
				―Phil Young - Father of Skylar Young
			</p>

			<Signup />
		</div>
	</section>

	<section id="partners" class="margin">
		<Divider />
		<Partners />
	</section>
	<section id="contact">
		<Divider />
		<h2>Contact Us</h2>
		<Contact />
	</section>
	<Footer />
</main>

<style>
	.quote {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		font-size: 1.5em;
		font-style: italic;
		text-align: center;
		align-items: center;
		color: #fff;
		padding: 40px;
		width: 100%;
		box-sizing: border-box;
		background-image: url('/images/weights_bw.jpg');
		background-size: cover;
		background-position: center;
		background-repeat: no-repeat;
		overflow: hidden;
	}

	.quote div {
		flex: 1;
		min-width: 300px; /* Ensure divs do not get too narrow */
		margin: 10px;
	}

	.quote p {
		margin: 0;
		text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
	}

	.quote2 {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		font-size: 1.5em;
		font-style: italic;
		text-align: center;
		align-items: center;
		color: #fff;
		padding: 40px;
		width: 100%;
		box-sizing: border-box;
		background-image: url('/images/quote2.webp');
		background-size: cover;
		background-position: center;
		background-repeat: no-repeat;
		overflow: hidden;
	}
	.quote2 div {
		flex: 1;
		min-width: 300px; /* Ensure divs do not get too narrow */
		margin: 10px;
	}

	.quote2 p {
		margin: 0;
		text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
	}

	.margin {
		margin-top: 30px;
		margin-bottom: 60px;
	}

	.testimonial {
		display: flex;
		flex-direction: row;
		line-height: 1.25;
		flex-wrap: wrap;
		font-size: 1rem;
		font-style: italic;
		text-align: center;
		color: #fff;
		padding: 40px;
		width: 100%;
		box-sizing: border-box;
	}

	/* Responsive Styles */
	@media (max-width: 768px) {
		.quote {
			flex-direction: column;
			padding: 20px;
		}

		.quote div {
			margin: 10px 0;
		}

		.quote p {
			font-size: 0.7em;
		}
	}

	@media (max-width: 480px) {
		.quote p {
			font-size: 0.7em;
		}
	}
</style>
