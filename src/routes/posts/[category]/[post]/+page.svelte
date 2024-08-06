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

			<h1>{frontmatter.title}</h1>
			<div>
				<img src="{frontmatter.header_image}" alt="{frontmatter.title}" />
			</div>
			<div>
				{@html frontmatter.summary}
				<div>
					<span>{localDate}</span><br />
					<span><a href={`/posts/${data.category.slug}/`}>{data.category.title}</a></span>
				</div>
			</div>

		</div>
	</section>

	<article style={'background-image: url(' + frontmatter.body_image + ')'}>
		<div class="oversection">
			<div>
				<div data-sveltekit-reload class="content">
					{@html htmlContent}
				</div>
			</div>
			<div>
				<a href={`/posts/${data.category.slug}`}>Back To {data.category.title}</a>
			</div>
		</div>
	</article>
</div>

<style>
	.title {
		text-align: center;
	}

	.oversection {
		background-color: rgba(0, 0, 0, 0.5);
		border: 3px solid #747474;
		border-radius: 15px;
		margin-bottom: 20px;
		padding: 20px;
	}

	.post {
		max-width: 800px;
		margin: 0 auto;
		font-size: 1.5rem;
		padding: 20px;
	}
</style>
