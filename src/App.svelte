<script lang="ts">
  import { navigation } from "./stores/navigation";
  import { Routes } from "./routes";
  import Home from "./pages/Home.svelte";
  import About from "./pages/About.svelte";

  let CurrentPage: typeof Home;
  $: CurrentPage = $navigation === Routes.About ? About : Home;
</script>

<style>
  :global(:root) {
    --font-color-main: #333;
    --font-color-details: #666;
    --bg-color-main: #fff;
    --grey1: #666;
    --grey2: #999;
    --grey3: #c9c9c9;
    --grey4: #f4f4f4;
    --white: #fff;

    --bg-color-header: var(--grey4);
    --border-color-header: var(--grey2);

    --primary-color: #8e5c01;
    --primary-font-color: #fff;
  }
  :global(:root[data-theme="dark"]) {
    --font-color-main: #fff;
    --font-color-details: #ccc;
    --bg-color-main: #333;
    --grey1: #f4f4f4;
    --grey2: #c9c9c9;
    --grey3: #999;
    --grey4: #666;
    --white: #333;

    --bg-color-header: var(--bg-color-main);
    --border-color-header: var(--grey4);

    --primary-color: #f5ce87;
    --primary-font-color: #fff;
  }

  :global(*) {
    box-sizing: border-box;
  }

  :global(html),
  :global(body) {
    margin: 0;
    padding: 0;
    font-size: 16px;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    color: var(--font-color-main);
    background-color: var(--bg-color-main);
  }
  :global(ul) {
    margin: 0;
    padding: 0;
    list-style: none;
  }
  :global(button) {
    outline: 0;
    cursor: pointer;
  }
  :global(button:disabled) {
    cursor: none;
  }
  :global(.clearfix::after) {
    display: table;
    content: "";
    clear: both;
  }
  :global(.icon) {
    fill: currentColor;
    width: 1em;
    height: 1em;
    font-size: 1.4em;
    vertical-align: bottom;
    display: inline-block;
    flex-shrink: 0;
    user-select: none;
    transition: fill 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    outline: 0;
  }
</style>

<svelte:component this={CurrentPage} />
