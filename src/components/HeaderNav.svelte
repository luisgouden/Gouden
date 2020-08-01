<script>
	import Brand from '../components/Brand.svelte';
	import Menu from '../components/Menu.svelte';

let segment;

</script>

<style>

nav{
  display: none;
	font-weight: 400;
	width:100%;
}

@media (min-width:992px) {

  aside{
    width: 25%
  }

	nav {
	  display: flex;
		flex-direction: row;
	}

}

@media (min-width:1200px) {

	nav{
		padding-left: 4px;
	}

}

</style>

<aside>
	<Brand/>
	<nav>
		<Menu {segment} />
	</nav>
</aside>
