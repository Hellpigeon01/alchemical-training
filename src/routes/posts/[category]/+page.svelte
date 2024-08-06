<script>
	// This script tag is the instance script, where you define your component's local state.
	export let data; // This is now available because it's passed as a prop from the load function
</script>

<div class="category">
	<section id="title" class="category-header">
		<div class="oversection">
			<div class="header-inner">
				<img
					src="/images/AT-Logo-color.webp"
					style="max-width: 200px; height: auto;"
					alt="Alchemical Training Logo"
				/>
				<h1>{data.category.title}</h1>
			</div>
			<div class="feature-text-block">
				{@html data.category.summary}
				<div class="date">
					<span>POSTS: {data.posts.length}</span>
				</div>
			</div>
		</div>
	</section>

	<hr />
	<div class="posts-section">
		{#if data.toc}
			<div class="toc">
				<h2>Table of Contents</h2>
				<div>
					{@html data.toc.htmlContent}
				</div>
			</div>
		{/if}
		<div class="posts">
			{#each data.posts as post, index}
				<a
					href={`/posts/${data.category.slug}/${post.slug}`}
					class="post-{index % 2 === 0 ? 'even' : 'odd'}"
					style={`background-image: url(${post.frontmatter.primary_image}); background-position-y: ${typeof post.frontmatter.banner_y !== 'undefined' ? post.frontmatter.banner_y : 'left'};`}
				>
					<div class="oversection">
						<div class="inner">
							<h2>
								{post.frontmatter.title}
							</h2>
							<div class="date">
								<span>{post.frontmatter.date}</span>
							</div>
							<div class="feature-text-block">
								{@html post.frontmatter.summary}
							</div>
						</div>
					</div>
				</a>
			{/each}
		</div>
	</div>
</div>

<style>
	hr {
		width: 1200px;
		max-width: 100%;
		margin: 20px auto;
		border: none;
		border-top: 5px solid #00356e;
	}

	.oversection {
		max-width: 1200px;
		display: flex;
		flex-direction: column;
		flex-wrap: wrap;
		border-radius: 15px;
		background-color: rgba(0, 0, 0, 0.2);
		margin: 0 auto;
	}

	.header-inner {
		display: flex;
		flex-direction: row; /* Arrange items horizontally */
		align-items: center; /* Center items vertically */
		width: 100%; /* Ensure it takes full width of oversection */
		padding: 20px;
		gap: 20px; /* Add space between the image and the heading */
	}

	h1 {
		margin: 0; /* Remove default margin for alignment */
	}

	.feature-text-block {
		width: 100%;
		background-color: rgba(0, 0, 100, 0.7);
		font-size: 1.5rem;
		margin-top: 10px;
	}

	.inner {
		display: flex;
		flex-direction: column;
		padding: 20px;
		border: 5px solid #747474;
		border-radius: 15px;
	}

	.posts-section {
		max-width: 1200px;
		display: flex;
		margin: 0 auto;
	}

	.posts {
		width: 100%;
		display: flex;
		flex-direction: column;
		margin: 0 auto;
		font-size: 1.5rem;
		gap: 20px;
	}
</style>
