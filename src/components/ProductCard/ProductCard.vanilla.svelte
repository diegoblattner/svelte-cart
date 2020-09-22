<script lang="ts">
  import type { Product } from "../../models/product";

  import { fly } from "svelte/transition";
  import { moneyFormat } from "../../stores/currency";
  import AddShoppingCart from "../../ui/Icons/AddShoppingCart.svelte";

  export let product: Product;
  export let addToCart: (id: string, product: Product, qty: number) => void;
  export let qtyInCart: number = 0;
  export let index: number = 0;

  const addOne = () => addToCart(product.id, product, 1);
  const duration = 200;
  const delay = duration;
  const y = 10;
</script>

<style>
  .card {
    font-size: 1em;
    flex-grow: 1;
  }
  @media (min-width: 640px) {
  }

  @media (min-width: 640px) {
    .card {
      width: 200px;
      max-width: 232px;
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
    color: #666666;
  }
  .price {
    grid-area: price;
    font-size: 1.1em;
    font-weight: 500;
  }

  .cart {
    height: 38px;
    max-height: 38px;
    overflow: hidden;
    border-top: 1px solid #000;
    padding-top: 0.5em;
  }

  button {
    cursor: pointer;
  }

  .addToCart {
    border: 0;
    background: 0;
    line-height: 1.2em;
    margin: 0.2em auto;
    padding: 0;
    text-decoration: underline;
  }

  .qtyBtn {
    margin: 0;
    padding: 0.25em 0.5em;
    border: 1px solid #c9c9c9;
    border-radius: 2px;
    background: #f4f4f4;
  }

  .qty {
    display: inline-block;
    min-width: 20px;
    text-align: center;
  }

  .total {
    float: right;
    font-weight: 500;
    font-size: 1.2em;
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
      <div in:fly={{ y: -y, delay, duration }} out:fly={{ y: -y, duration }}>
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
        in:fly={{ y, delay, duration }}
        out:fly={{ y, duration }}
        class="addToCart"
        on:click={addOne}>
        Add to cart
        <AddShoppingCart />
      </button>
    {/if}
  </div>
</div>
