<script>
	// This script tag is the instance script, where you define your component's local state.
	export let data; // This is now available because it's passed as a prop from the load function
	const { htmlContent, frontmatter } = data;

	function convertUTCDateToLocalDate(date) {
		return date.toISOString().split('T')[0];
	}
	const localDate = convertUTCDateToLocalDate(new Date(frontmatter.date));

	const goBack = () => {
		window.history.back();
	};
</script>

<div class="post">
	<section
		id="title"
		class="title"
		style={`background-image: url(${frontmatter.primary_image}); background-position-y: ${typeof frontmatter.banner_y !== 'undefined' ? frontmatter.banner_y : 'left'};`}
	>
		<div class="oversection">
			<div class="inner">
				<h1>{frontmatter.title}</h1>
				<div class="feature-text-block">
					{@html frontmatter.summary}
					<div class="date">
						<span>{localDate}</span><br />
						<span
							><a class="cat" href={`/posts/${data.category.slug}/`}>{data.category.title}</a></span
						>
					</div>
				</div>
			</div>
		</div>
	</section>

	{#if frontmatter.video}
		<div class="video">
			<iframe
				class="video-frame"
				src="https://www.youtube.com/embed/{frontmatter.video}"
				title="YouTube video player"
				frameborder="0"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
				allowfullscreen
			></iframe>
		</div>
	{/if}

	<article class="post-body" style={'background-image: url(' + frontmatter.body_image + ')'}>
		<div class="oversection">
			<div class="inner">
				<div data-sveltekit-reload class="feature-text-block">
					{@html htmlContent}
				</div>
			</div>
			<div class="back">
				<a href={`/posts/${data.category.slug}`}>Back To {data.category.title}</a>
				<span on:click={goBack} on:keypress={goBack} role="button" tabindex="-1"
					>Back To Whatever You Were Reading Before</span
				>
			</div>
		</div>
	</article>
</div>

<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link
	href="https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400..700;1,400..700&display=swap"
	rel="stylesheet"
/>

<style>
</style>
