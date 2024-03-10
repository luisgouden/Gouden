  article {
    max-width: 1000px;
    height: max-content;
    line-height: 2;
    font-size: 80%;
    font-weight: 300;
  }
  img {
    max-height: 400px;
    max-width: 100%;
  }

  .two {
    padding: 0 1rem;
  }

  .social {
    margin-top: 1.5rem;
  }

  @media (min-width: 992px) {
  }
  @media (min-width: 1200px) {
    .two {
      padding: 0;
    }
  }

<svelte:head>
  <title>About</title>
</svelte:head>

<section>
  <article>
    <img src="about.png" alt="" />
  </article>
</section>
