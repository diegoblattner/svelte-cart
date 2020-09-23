<script lang="ts">
  import ShoppingCart from "../../ui/Icons/ShoppingCart.svelte";
  import { cartTotal } from "../../stores/cart";
  import { moneyFormat } from "../../stores/currency";
</script>

<ShoppingCart />
{$moneyFormat($cartTotal)}
