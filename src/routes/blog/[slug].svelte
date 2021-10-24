<script context="module">
	/**
	 * @type {import('@sveltejs/kit').Load}
	 */
	export async function load({ page, fetch, session, stuff }) {
		const url = `/blog/${page.params.slug}.json`;
		const res = await fetch(url);
		let article;

		if (res.ok) {
			article = await res.json();
		}

		if(article){
			return {
				props: {
					article
				}
			};
		} else {
			return {
				status: res.status,
				error: new Error(`Could not load ${url}`)
			};
		}
	}
</script>
<script>
    export let article;
    let { title, txt } = article;
</script>
<svelte:head><title>{title || `No article`}</title></svelte:head>
{#if !article.error}
	<h2>{title}</h2>
	{txt}
{:else}
	<h2>No article</h2>
{/if}