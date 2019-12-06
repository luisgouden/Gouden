<script>
	import Nav from '../components/Nav.svelte';
	import Footer from '../components/Footer.svelte';

	export let segment;

</script>

<style>

</style>
<Nav {segment}/>

<slot />

{#if segment === undefined || segment === "about"}
<aside />
{/if}

<Footer {segment}/>
