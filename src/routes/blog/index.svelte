<script context="module">
	/**
	 * @type {import('@sveltejs/kit').Load}
	 */
	export async function load({ page, fetch, session, stuff }) {
		const url = `/blog/all.json`;
		const res = await fetch(url);

		if (res.ok) {
			return {
				props: {
					articles: await res.json()
				}
			};
		}

		return {
			status: res.status,
			error: new Error(`Could not load ${url}`)
		};
	}
</script>
<script>
    export let articles;
    //let { title, txt } = article;
</script>
{#each articles as {title, slug}}
    <a sveltekit:prefetch href={`/blog/${slug}`}>{title}</a>
{/each}