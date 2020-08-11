<script context="module">
	export async function preload({ params, query }) {
		// the `slug` parameter is available because
		// this file is called [slug].svelte
		const res = await this.fetch(`${params.slug}.json`);
		const data = await res.json();

		if (res.status === 200) {
			return { post: data };
		} else {
			this.error(res.status, data.message);
		}
	}
</script>

<script>

	export let post;

	let index = new Array(post.images);

</script>

<style>

	section :global(img) {
			box-shadow: 0 0 3rem 0 rgba(0, 0, 0, 0.2);
			margin-bottom: 4rem;
			max-height: 95vh;
			max-width: 64%;
			align-self: center;
	}

	aside {
	  height: max-content;
	  position: sticky;
	  align-items: center;
		bottom: 2rem;
		flex-direction: column;
		align-self: flex-end
	}
	aside :global(img) {
	  max-width: var(--heightMenu)
	}

</style>

<svelte:head>
	<title>{post.title}</title>
</svelte:head>

<section>

{#each index as id, i}

<img id="{i+1}"
alt='{post.title}_{i+1}'
src='{post.title}/{post.title}_{i+1}_l.jpg'
srcset="{post.title}_{i+1}_s.jpg 350w,
{post.title}_{i+1}_m.jpg 700w,
{post.title}_{i+1}_l.jpg 1400w"
sizes="(max-width: 400px) 350px, (max-width: 1200px) 700px, 1400px">

{/each}

</section>

<aside>
{#each index as id, i}

<a href="{post.title}/#{i+1}">
	<img alt='{post.title}_{i+1}' src='{post.title}/{post.title}_{i+1}_s.jpg'>
</a>

{/each}
</aside>
