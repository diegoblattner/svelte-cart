<script lang="ts">
  import Link from "../ui/Link/Link.svelte";
  import CartHeader from "../components/Cart/CartHeader.svelte";
  import { Routes } from "../routes";
  import ProductList from "../components/Product/ProductList.svelte";
</script>

<style>
  nav {
    padding: 0 1em;
  }
</style>

<CartHeader>
  <nav>
    <Link href={Routes.About}>About</Link>
  </nav>
</CartHeader>

<ProductList />
