<script>
	// This script tag is the instance script, where you define your component's local state.
	export let data; // This is now available because it's passed as a prop from the load function
</script>

<div class="category">
	<section id="title" class="category-header">
		<div class="oversection">
			<div class="inner">
				<h1>{data.category.title}</h1>
				<div class="feature-text-block">
					{@html data.category.summary}
					<div class="date">
						<span>POSTS: {data.posts.length}</span>
					</div>
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

<style></style>
