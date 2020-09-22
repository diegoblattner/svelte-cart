<script lang="ts">
  import { slide } from "svelte/transition";
  import CartTotal from "./CartTotal.svelte";
  import CartSummary from "./CartSummary.svelte";

  let showSummary = false;
</script>

<style>
  header {
    position: sticky;
    display: flex;
    top: 0;
    left: 0;
    right: 0;
    height: 40px;
    line-height: 40px;
    background-color: #f4f4f4;
    z-index: 10;
    box-shadow: 0px 2px 3px #999;
  }

  .children {
    flex-grow: 1;
  }

  button {
    cursor: pointer;
    padding: 5px 10px;
    border-radius: 0px;
    float: right;
    line-height: 24px;
    height: 41px;
    border: 0;
    border-left: 1px solid #999;
    background: 0;
    margin: 0;
    transition: color 0.1s, background-color 0.1s;
    flex-grow: 0;
  }

  button.showSummary {
    color: #ffffffe6;
    background-color: #333333e6;
  }

  .summary {
    color: #ffffffe6;
    background-color: #333333e6;
    position: absolute;
    top: 41px;
    width: 100%;
    z-index: 11;
    box-shadow: 0px 2px 2px #999;
  }
</style>

<header>
  <div class="children">
    <slot />
  </div>
  <button class:showSummary on:click={() => (showSummary = !showSummary)}>
    <CartTotal />
  </button>
  <div class="summary">
    {#if showSummary}
      <CartSummary />
    {/if}
  </div>
</header>
