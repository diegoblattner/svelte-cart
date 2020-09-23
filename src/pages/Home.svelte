<script lang="ts">
  import { onMount } from "svelte";
  import Link from "../ui/Link/Link.svelte";
  import CartHeader from "../components/Cart/CartHeader.svelte";
  // import ProductCard from "../components/ProductCard/ProductCard.svelte";
  import ProductCard from "../components/ProductCard/ProductCard.vanilla.svelte";
  import { mockProducts } from "../data/products";
  import { products, loadProducts } from "../stores/products";
  import { cart, addToCart } from "../stores/cart";
  import { Routes } from "../routes";

  onMount(() => {
    if (!$products || !$products.length) {
      loadProducts(mockProducts);
    }
  });
</script>

<style>
  div {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    max-width: 1024px;
    margin: 0 auto;
    padding: 1.5em 1em;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 3em 1.5em;
  }

  nav {
    padding: 0 1em;
  }
</style>

<CartHeader>
  <nav>
    <Link href={Routes.About}>About</Link>
  </nav>
</CartHeader>

<div class="clearfix">
  {#each $products as product, index (product.id)}
    <ProductCard
      {product}
      {addToCart}
      qtyInCart={($cart[product.id] && $cart[product.id].qty) || 0}
      {index} />
  {/each}
</div>
