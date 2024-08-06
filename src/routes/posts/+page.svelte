<script>
	export let data; // This is now available because it's passed as a prop from the load function
</script>

<div class="all-categories">
	<section id="title">
		<div class="oversection">
			<div class="inner">
				<div><img src="/images/AT-Logo-color.webp" alt="Alchemical Training Logo" /></div>

				<div>
					<h1>Alchemical Training Blog</h1>
					<div class="feature-text-block">
						<p>Welcome to the Alchemical Training Blog. Please select a category</p>
					</div>
				</div>
			</div>
		</div>
	</section>

	<hr />

	{#each data.categories as category, index}
		<a href={`/posts/${category.slug}/`} class="category-link">
			<div class="oversection {index % 2 === 0 ? 'even-background' : 'odd-background'}">
				<div class="category-inner">
					<h2>
						{category.frontmatter.title}
					</h2>
					<div>
						{@html category.frontmatter.summary}
					</div>
					<div>
						<img src="{category.frontmatter.category_image}" alt="{category.frontmatter.title}" />
					</div>
				</div>
			</div>
		</a>
	{/each}
</div>

<style>
	hr {
		width: 1200px;
		max-width: 100%;
		margin: 10px auto;
		border: none;
		border-top: 5px solid #00356e;
	}

	.all-categories {
		display: flex;
		flex-direction: column;
	}

	.oversection {
		max-width: 1200px;
		border: 5px solid #747474;
		border-radius: 15px;
		margin: 0 auto;
		font-size: 1.5rem;
	}

	.inner {
		display: flex;
		flex-direction: row;
		align-items: center;
		text-align: center;
		gap: 20px;
	}

	.category-inner {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		padding: 20px;
		gap: 20px;
	}

	.feature-text-block {
		margin-top: 20px;
	}

	.even-background {
		background-color: rgba(100, 100, 100, 0.1);
	}

	.odd-background {
		background-color: rgba(0, 0, 0, 0.5);
	}

	.category-link {
		margin-bottom: 20px;
	}

	a.category-0 {
		margin-top: 20px;
	}
</style>
