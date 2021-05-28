<script>
  import Brand from "../components/Brand.svelte";
  import Menu from "../components/Menu.svelte";

  let segment;
</script>

<style>
  aside {
    height: max-content;
    position: sticky;
    display: flex;
    justify-content: center;
    flex-direction: column;
    order: 0;
    top: 0;
    width: 100%;
    align-items: center;
  }

  nav {
    display: none;
    font-weight: 400;
    width: 100%;
    padding-left: 4px;
  }

  @media (min-width: 992px) {
    aside {
      width: 25%;
    }

    nav {
      display: flex;
      align-items: center;
      width: min-content;
      flex-direction: column;
    }
  }

  @media (min-width: 1200px) {
    aside {
      top: 2rem;
      width: 50%;
    }

    nav {
      width: 200px;
      padding-left: 4px;
    }
  }
</style>

<aside>
  <Brand />
  <nav>
    <Menu {segment} />
  </nav>
</aside>
