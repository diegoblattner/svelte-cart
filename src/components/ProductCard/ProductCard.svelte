<script lang="ts">
  import type { Product } from "../../models/product";
  import AddShoppingCart from "../../ui/Icons/AddShoppingCart.svelte";
  import Clear from "../../ui/Icons/Clear.svelte";
  import Done from "../../ui/Icons/Done.svelte";
  import Info from "../../ui/Icons/Info.svelte";

  export let product: Product;
  export let addToCart: (id: string, product: Product, qty: number) => void;
  export let qtyInCart: number = 0;
</script>

<style>
  .wrapper {
    width: 300px;
    height: 500px;
    background: white;
    margin: auto;
    position: relative;
    overflow: hidden;
    border-radius: 10px 10px 10px 10px;
    box-shadow: 0;
    transition: box-shadow 0.5s, transform 0.5s;
  }

  .container {
    width: 100%;
    height: 100%;
  }
  .top {
    height: 80%;
    width: 100%;
    -webkit-background-size: 100%;
    -moz-background-size: 100%;
    -o-background-size: 100%;
    background-size: 100%;
  }
  img {
    height: 100%;
    width: 100%;
  }
  .bottom {
    width: 200%;
    height: 20%;
    transition: transform 0.5s;
  }
  .bottom.inCart {
    transform: translateX(-50%);
  }
  .buy {
    display: block;
    border: 0;
    padding: 0;
    margin: 0;
    float: right;
    width: calc(30% - 2px);
    height: 100%;
    background: #f1f1f1;
    transition: background 0.5s;
    border-left: solid thin rgba(0, 0, 0, 0.1);
  }
  .buy :global(.icon) {
    font-size: 30px;
    padding: 30px;
    color: #254053;
    transition: transform 0.5s;
  }
  .buy:hover {
    background: #a6cdde;
  }
  .buy:hover :global(.icon) {
    transform: translateY(5px);
    color: #00394b;
  }
  h1 {
    margin: 0;
    padding: 0;
  }
  p {
    margin: 0;
    padding: 0;
  }
  .left {
    height: 100%;
    width: 50%;
    background-color: var(--grey4);
    position: relative;
    float: left;
  }
  .left .details {
    float: left;
    padding: 20px;
    width: calc(70% - 40px);
  }
  .right {
    width: 50%;
    background: #a6cdde;
    color: white;
    float: right;
    height: 200%;
    overflow: hidden;
  }
  .right .details {
    padding: 20px;
    float: right;
    width: calc(70% - 40px);
  }
  .details {
    padding: 20px;
    width: calc(70% - 40px);
  }
  .done {
    width: calc(30% - 2px);
    float: left;
    transition: transform 0.5s;
    border-right: solid thin rgba(255, 255, 255, 0.3);
    height: 50%;
  }
  .done :global(.icon) {
    font-size: 30px;
    padding: 30px;
    color: white;
  }
  .remove {
    display: block;
    border: 0;
    padding: 0;
    margin: 0;
    width: calc(30% - 1px);
    clear: both;
    border-right: solid thin rgba(255, 255, 255, 0.3);
    height: 50%;
    background: #bc3b59;
    transition: transform 0.5s, background 0.5s;
  }
  .remove :global(.icon) {
    transition: transform 0.5s;
    font-size: 30px;
    padding: 30px;
    color: white;
  }
  .remove:hover {
    background: #9b2847;
  }
  .remove:hover :global(.icon) {
    transform: translateY(5px);
  }

  .right:hover .remove,
  .right:hover .done {
    transform: translateY(-100%);
  }
  .inside {
    z-index: 9;
    background: #92879b6b;
    color: white;
    width: 140px;
    height: 140px;
    position: absolute;
    top: -80px;
    right: -80px;
    border-radius: 0px 0px 200px 200px;
    transition: all 0.35s, top 0s;
    overflow: hidden;
  }
  .info {
    position: absolute;
    right: 90px;
    top: 90px;
    opacity: 1;
  }
  .inside:hover {
    background: #000000ab;
    width: 100%;
    right: 0;
    top: 0;
    border-radius: 0;
    height: 80%;
  }
  .inside:hover .info {
    opacity: 0;
    right: 15px;
    top: 15px;
  }
  .contents {
    padding: 5% 5% 0 8%;
    opacity: 0;
    /* transform: scale(0.5); */
    transform: translate(100%, -100%, 0);
    transition: opacity 0.2s, transform 0.2s;
  }
  .inside:hover .contents {
    opacity: 1;
    transform: translate(0, 0, 0);
    transition: opacity 0.6s, transform 0.6s;
  }
</style>

<div class="wrapper">
  <div class="container">
    <div class="top"><img src={product.image} alt={product.name} /></div>
    <div class={`bottom ${qtyInCart > 0 ? 'inCart' : ''}`}>
      <div class="left">
        <div class="details">
          <h1>{product.name}</h1>
          <p>{product.price}</p>
        </div>
        <button on:click={() => addToCart(product.id, product, 1)} class="buy">
          <AddShoppingCart />
        </button>
      </div>
      <div class="right">
        <div class="done">
          <Done />
        </div>
        <div class="details">
          <h1>{product.name}</h1>
          <p>Added to your cart</p>
        </div>
        <button
          on:click={() => addToCart(product.id, product, -1)}
          class="remove">
          <Clear />
        </button>
      </div>
    </div>
  </div>
  <div class="inside">
    <div class="info">
      <Info />
    </div>
    <div class="contents">
      <div>{product.description}</div>
      {#each product.attributes as attr}
        <div>{attr.name}: {attr.value}</div>
      {/each}
      <div>{product.description}</div>
      {#each product.attributes as attr}
        <div>{attr.name}: {attr.value}</div>
      {/each}
    </div>
  </div>
</div>
