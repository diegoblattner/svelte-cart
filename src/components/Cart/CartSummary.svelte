<script lang="ts">
  import { slide } from "svelte/transition";
  import { cartItems } from "../../stores/cart";

  const slideParams: Parameters<typeof slide>[1] = {
    delay: 0,
    duration: 200,
    easing: undefined,
  };
</script>

<style>
  ul {
    line-height: 1em;
  }

  li {
    display: flex;
  }

  li:last-child {
    margin-bottom: 1.4em;
  }

  li {
    margin: 1.4em 1em;
  }

  .desc {
    flex-grow: 1;
  }

  .price {
    flex-grow: 0;
  }

  .empty {
    text-align: center;
    font-style: italic;
  }
</style>

<ul>
  {#each $cartItems as item (item.item.id)}
    <li transition:slide={slideParams}>
      <span class="desc">{item.qty}x {item.item.name}</span>
      <span class="price">${item.total}</span>
    </li>
  {/each}
  {#if !$cartItems.length}
    <li class="empty" transition:slide={slideParams}>
      <span>Your cart is empty =(</span>
    </li>
  {/if}
</ul>
