<script lang="ts">
  import { navigation } from "./stores/navigation";
  import { Routes } from "./routes";
  import Home from "./pages/Home.svelte";
  import About from "./pages/About.svelte";

  let CurrentPage;

  $: CurrentPage = $navigation === Routes.About ? About : Home;
</script>

<style>
  :global(*) {
    box-sizing: border-box;
  }

  :global(html),
  :global(body) {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  :global(ul) {
    margin: 0;
    padding: 0;
    list-style: none;
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
