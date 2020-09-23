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
  li {
    padding: 5px 10px;
  }

  .desc {
    float: left;
  }

  .price {
    float: right;
  }

  .empty {
    text-align: center;
    font-style: italic;
  }
</style>

<ul>
  {#each $cartItems as item (item.item.id)}
    <li class="clearfix" transition:slide={slideParams}>
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
