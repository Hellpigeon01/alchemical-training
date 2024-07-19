<script>
	import Landing from '../components/landing.svelte';
	import SlidingBanner from '../components/slidingbanner.svelte';
</script>

<nav></nav>
<header><Landing /></header>
<SlidingBanner />
<main>
	<section></section>
	<section class="quote">
		“And, when you want something, all the universe conspires in helping you to achieve it.” ― Paulo
		Coelho, The Alchemist
	</section>
	<section></section>
</main>

<style>
	.quote {
		background-color: #aaaaaa;
		height: 100px;
		font-size: 1.5em;
		font-style: italic;
		text-align: center;
		color: black;
		padding: 60px;
		margin: 0 auto;
	}
</style>
