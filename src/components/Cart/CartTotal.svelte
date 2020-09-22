<script lang="ts">
  import ShoppingCart from "../../ui/Icons/ShoppingCart.svelte";
  import { cartTotal } from "../../stores/cart";
  import { moneyFormat } from "../../stores/currency";
</script>

<span>
  <ShoppingCart />
  {$moneyFormat($cartTotal)}
</span>
