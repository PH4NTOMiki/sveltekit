<script>
	import 'bootstrap/dist/css/bootstrap.min.css';
	import Nav from '$lib/../components/Nav.svelte';
</script>
<!--<nav>
	<a sveltekit:prefetch href="/">Home</a>
	<a sveltekit:prefetch href="/blog">Blog</a>
</nav>-->
<Nav home={true} links={{'/blog':'Blog'}} />

<slot></slot>