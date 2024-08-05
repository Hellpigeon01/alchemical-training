<script>
    export let data; // This is now available because it's passed as a prop from the load function
</script>

<div class="all-categories">
    <section id="title" class="page-header">
        <div class="oversection">
            <div class="inner">
                <h1>SceneGrinder Posts & Articles Categories</h1>
                <div class="feature-text-block">
                    <p>
                        Welcome to the SceneGrinder Posts & Articles Categories page. Here you will find a list of all the categories of posts and articles available on the SceneGrinder website. Click on any category to view the posts and articles in that category.
                    </p>
                </div>
            </div>
        </div>
    </section>

    <hr />

    {#each data.categories as category, index}
        <a href={`/posts/${category.slug}/`} class="category-{index % 2 === 0 ? 'even' : 'odd'}">
            <div class="oversection">
                <div class="inner">
                    <h2>
                        {category.frontmatter.title}
                    </h2>
                    <div class="feature-text-block">
                        {@html category.frontmatter.summary}
                    </div>
                </div>
            </div>
        </a>
    {/each}
</div>

<style lang="styl" src="./page.styl"></style>
