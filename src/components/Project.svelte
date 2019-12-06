<script>
export let nameProject;

</script>

<style>

a, article {
  display: flex;
  align-items: center;
  flex-direction: row-reverse
}

article {
  justify-content: center
}

a {
  justify-content: flex-start;
  background-repeat: no-repeat;
  background-size: 100%;
  background-position: 0;
  padding: 5rem 1.5rem;
  width: 100%;
  height: 25vh
}

a:first-of-type {
  margin-top: 0
}

a:nth-child(2n), a:nth-child(2n) article {
  flex-direction: row-reverse
}


a:focus, a:hover {
  justify-content: center
}

a:focus h3, a:hover h3 {
  display: block;
  color: #000
}

h3 {
  display: none;
  text-align: right;
  font-weight: 300
}

@media (min-width:992px) {

	article {
    justify-content: flex-start
  }

  a {
    background-size: 75%;
    transition: background-size .5s ease
  }

  a:focus, a:hover {
    justify-content: flex-start;
  }

  a:active, a:hover {
    background-size: 100%
  }

  h3 {
    display: block
  }

}

@media (min-width:1200px) {

	a {
		height: 20vh;
		margin-top: -2rem;
		background-size: 64%;
		background-position: 0;
		border-left: none;
		transition: background-size .5s ease
	}

	a:nth-child(2n) {
		flex-direction: row;
		background-position: 100%
	}

	a:nth-child(2n) article {
		flex-direction: row
	}

  a:last-of-type {
      margin-bottom: var(--heightMenu);
  }

	a:hover h3 {
    color: #1a1a1a
  }

  a:active, a:hover {
    background-size: 65%
  }

  hr {
    display: block;
    border: .5px solid var(--black);
    width: 50%;
    margin: .5rem;
    transition: width 1s ease
  }

  a:active hr, a:hover hr {
    width: 100%
  }

}

</style>
<a href="{nameProject}" style="background-image: url({nameProject}.png);" >
<article>
	<h3>{nameProject}</h3>
	<hr class="desktop">
</article>
</a>
