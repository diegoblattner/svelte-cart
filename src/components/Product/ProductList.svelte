<script lang="ts">
  import { onMount } from "svelte";
  // import ProductCard from "../ProductCard/ProductCard.svelte";
  import ProductCard from "../ProductCard/ProductCard.vanilla.svelte";
  import { mockProducts } from "../../data/products";
  import { products, loadProducts } from "../../stores/products";
  import { cart, addToCart } from "../../stores/cart";

  onMount(() => {
    if (!$products || !$products.length) {
      loadProducts(mockProducts);
    }
  });
</script>

<style>
  div {
    flex-direction: row;
    flex-wrap: wrap;
    max-width: 1024px;
    margin: 0 auto;
    padding: 1.5em 1em;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    grid-gap: 2em 1.5em;
  }
</style>

<div>
  {#each $products as product, index (product.id)}
    <ProductCard
      {product}
      {addToCart}
      qtyInCart={($cart[product.id] && $cart[product.id].qty) || 0}
      {index} />
  {/each}
</div>
