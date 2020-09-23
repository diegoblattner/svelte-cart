<script>
  import { Routes } from "../routes";

  import Link from "../ui/Link/Link.svelte";
</script>

<style>
  main {
    width: 100vw;
    height: 100vh;
    /* background: rgb(224 239 241); */
    background-color: var(--grey4);
    padding: 5em 0 0;
    line-height: 1.6em;
  }
  div {
    max-width: 400px;
    margin: 0 auto;
    padding: 1em 1.25em;
    border-radius: 10px;
    box-shadow: 0 2px 5px 0px rgb(71, 91, 129);
    background: var(--bg-color-main);
  }

  .info {
    background: var(--grey2);
    color: var(--white);
    width: calc(100% + 2.5em);
    margin: 0 -1.25em 0.5em;
    padding: 1em 1.25em;
  }

  p:last-child {
    margin: 3em 0 2em;
    text-align: center;
    font-size: 1.5em;
  }

  a {
    color: var(--primary-color);
  }
</style>

<main>
  <div>
    <h1>Hello!</h1>
    <p class="info">
      This is a demo site, it has no purpose other than educational.
    </p>
    <p>
      Made with <a href="https://svelte.dev" target="_blank">svelte</a> + typescript
    </p>
    <p>
      Images from <a href="https://loremflickr.com/" target="_blank">loremflickr</a>
    </p>
    <p>
      Icons from <a href="https://material.io/resources/icons/" target="_blank">marerial
        design</a>
    </p>
    <p>
      See the source code on <a href="https://github.com/diegoblattner/svelte-cart" target="_blank">github</a>
    </p>
    <p>This site doesn't track you =)</p>

    <p>
      <Link href={Routes.Home}>Back to home</Link>
    </p>
  </div>
</main>
