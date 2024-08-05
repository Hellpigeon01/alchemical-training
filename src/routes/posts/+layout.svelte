<script>
	import { page } from '$app/stores';

	const countSlashes = (url) => url.split('/').length - 1;

	export let data; // This is now available because it's passed as a prop from the load function
</script>

<div class="posts">
	<slot />

	{#if $page.url.pathname !== '/posts' && countSlashes($page.url.pathname) !== 2}
		<ul class="cat-list">
			{#if !data}
				<li>No Content Data Found</li>
			{:else if data.categories}
				<!-- <h3>The Fucking Categories</h3> -->
				{#each data.categories as category}
					<li>
						<a href={`/posts/${category.slug}`}>{category.frontmatter.title}</a>
					</li>
				{/each}
			{:else}
				<li>No Categories Found</li>
			{/if}
		</ul>
		<br />
	{/if}
</div>

<style></style>
