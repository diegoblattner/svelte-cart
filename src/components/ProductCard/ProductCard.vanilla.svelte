<script lang="ts">
  import type { Product } from "../../models/product";

  import { fly } from "svelte/transition";
  import { moneyFormat } from "../../stores/currency";
  import AddShoppingCart from "../../ui/Icons/AddShoppingCart.svelte";
  import { onMount } from "svelte";

  export let product: Product;
  export let addToCart: (id: string, product: Product, qty: number) => void;
  export let qtyInCart: number = 0;
  export let index: number = 0;

  const addOne = () => addToCart(product.id, product, 1);
  const duration = 200;
  const delay = duration;
  const y = 10;

  // animation logic
  let isMounted = false;
  onMount(() => (isMounted = true));
  // const doFly = (...args: Parameters<typeof fly>) => isMounted && fly(...args);
  type NodeType = Parameters<typeof fly>[0];
  type FlyParams = Partial<Parameters<typeof fly>[1]>; // fixes broken types
  const doFly = (node: NodeType, params: FlyParams) =>
    isMounted && fly(node, params as Parameters<typeof fly>[1]);
</script>

<style>
  .card {
    min-width: 200px;
    font-size: 1em;
  }

  @media (max-width: 500px) {
    .card {
      width: 100%;
    }
  }

  figure {
    margin: 0;
  }
  img {
    width: 100%;
    height: 200px;
    object-fit: cover;
    display: block;
  }

  figcaption {
    display: grid;
    grid-gap: 0.25em;
    grid-template-columns: 1fr auto;
    grid-template-areas:
      "name price"
      "brand price";
    margin: 0.5em 0;
  }

  h3 {
    grid-area: name;
    font-size: 1.2em;
    margin: 0;
    padding: 0;
    font-weight: 500;
  }
  .brand {
    grid-area: brand;
    color: var(--font-color-details);
  }
  .price {
    grid-area: price;
    font-size: 1.1em;
    font-weight: 500;
  }

  .cart {
    --btn-size: 27px;
    height: 38px;
    max-height: 38px;
    overflow: hidden;
    border-top: 1px solid var(--font-color-main);
    padding-top: 0.5em;
  }

  button {
    cursor: pointer;
  }

  .addToCart {
    border: 0;
    background: 0;
    margin: 0;
    padding: 0;
    text-decoration: underline;
    color: var(--font-color-main);
    font-size: 1.2em;
  }

  .qtyBtn {
    display: inline-block;
    width: var(--btn-size);
    height: var(--btn-size);
    margin: 0;
    padding: 0.25em 0.5em;
    border: 1px solid var(--grey3);
    border-radius: 2px;
    background-color: var(--grey4);
    color: var(--font-color-main);
  }

  .qty {
    display: inline-block;
    min-width: var(--btn-size);
    text-align: center;
    vertical-align: middle;
  }

  .total {
    float: right;
    font-weight: 500;
    font-size: 1.2em;
    line-height: var(--btn-size);
  }
</style>

<div class="card">
  <div class="image">
    <figure>
      <img
        src={product.image}
        alt={product.name}
        loading={index > 6 ? 'lazy' : 'eager'} />
      <figcaption>
        <h3>{product.name}</h3>
        <span class="brand">{product.brand}</span>
        <span class="price">{product.priceFormatted}</span>
      </figcaption>
    </figure>
  </div>
  <div class="cart">
    {#if qtyInCart > 0}
      <div
        in:doFly={{ y: -y, delay, duration }}
        out:doFly={{ y: -y, duration }}>
        <button
          class="qtyBtn"
          on:click={() => addToCart(product.id, product, -1)}>
          -
        </button>
        <span class="qty">{qtyInCart}</span>
        <button class="qtyBtn" on:click={addOne}>+</button>
        <span class="total">{$moneyFormat(product.price * qtyInCart)}</span>
      </div>
    {:else}
      <button
        in:doFly={{ y, delay, duration }}
        out:doFly={{ y, duration }}
        class="addToCart"
        on:click={addOne}>
        Add to cart
        <AddShoppingCart />
      </button>
    {/if}
  </div>
</div>
