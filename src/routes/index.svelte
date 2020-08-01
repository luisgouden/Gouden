<script>
	import Project from '../components/Project.svelte';
	import posts from './_posts.js';

	let list = posts;

</script>

<style>
</style>

<svelte:head>
	<title>Luis Gouden</title>
</svelte:head>

<section>

{#each list as project, i}

<Project nameProject= {project.title} index= {i}/>

{/each}

</section>
