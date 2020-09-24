<script lang="ts">
  import type { Routes } from "../../routes";
  import { navigate } from "../../stores/navigation";

  export let href: Routes;
  export let className: string;

  const onClick = (e: Event) => {
    e.stopPropagation();
    e.preventDefault();

    navigate(href);
  };
</script>

<style>
  a {
    color: var(--primary-color);
    padding: 0.8em 0.5em;
  }
</style>

<a {href} class={className} on:click={onClick}><slot /></a>
