<script>

let segment;

</script>

<style>

	ul {
		display: flex;
	  justify-content: space-evenly;
		align-items: center;
		width: 100%;
		font-weight: 400
	}

	li {
	  padding: 0;
	  font-size: 120%
	}

.selected{
	color:var(--blackHover);
}

@media (min-width:992px) {

	ul{
		flex-direction: column;
		align-items: flex-start
	}

	li {
			line-height: 2;
			margin-top: .5rem;
			font-size: 100%;
	}
}

@media (min-width:1200px) {

}

</style>

<ul>
	<li><a class='{segment === "work" ? "selected" : ""}' href='.'>work</a></li>
	<li><a class='{segment === "about" ? "selected" : ""}' href='about'>about</a></li>
	<li><a target="_blank" href="https://www.instagram.com/luisgouden">instagram</a></li>
	
</ul>
