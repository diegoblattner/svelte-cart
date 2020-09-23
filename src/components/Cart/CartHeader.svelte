<script lang="ts">
  import { slide } from "svelte/transition";
  import CartTotal from "./CartTotal.svelte";
  import CartSummary from "./CartSummary.svelte";

  let showSummary = false;
  type Themes = "light" | "dark";
  let theme: Themes = "light";

  const toogleTheme = () => {
    theme = theme === "light" ? "dark" : "light";
    document.querySelector("html").setAttribute("data-theme", theme);
  };
</script>

<style>
  header {
    position: sticky;
    display: flex;
    top: 0;
    left: 0;
    right: 0;
    height: 50px;
    line-height: 50px;
    background-color: var(--bg-color-header);
    z-index: 10;
    box-shadow: 0px 2px 3px var(--border-color-header);
  }

  .children {
    flex-grow: 1;
  }

  .cartBtn {
    cursor: pointer;
    padding: 5px 0.8em;
    border-radius: 0px;
    float: right;
    line-height: 1.5rem;
    height: 51px;
    border: 0;
    border-left: 1px solid var(--border-color-header);
    background: 0;
    margin: 0;
    transition: color 0.1s, background-color 0.1s;
    flex-grow: 0;
    color: var(--font-color-main);
    font-size: 1.1rem;
  }

  .cartBtn.showSummary {
    color: #ffffffe6;
    background-color: #333333e6;
  }

  .summary {
    color: #ffffffe6;
    background-color: #333333e6;
    position: absolute;
    top: 50px;
    right: 0;
    width: 100%;
    max-width: 600px;
    z-index: 11;
    box-shadow: 0px 2px 2px var(--border-color-header);
  }

  .theme {
    border: 0;
    margin: 0;
    padding: 0.5em 1.5em;
    background-color: transparent;
  }
</style>

<header>
  <div class="children">
    <slot />
  </div>
  <button class="theme" on:click={toogleTheme}>{theme === 'light' ? '🌘' : '🌞'}
  </button>
  <button
    class="cartBtn"
    class:showSummary
    on:click={() => (showSummary = !showSummary)}>
    <CartTotal />
  </button>
  <div class="summary">
    {#if showSummary}
      <CartSummary />
    {/if}
  </div>
</header>
